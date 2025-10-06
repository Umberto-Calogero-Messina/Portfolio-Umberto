import { useEffect, useState, useRef, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';
import { useLanguage } from '../../contexts/LanguageContext';
import useInViewport from '../../hooks/useInViewport';
import {
  Container,
  Heading,
  RevealWrap,
  EllipseContainer,
  CardLink,
  Card as CardBase,
  ImageWrapper,
  Content,
  Title,
  Description,
  GridWrapper,
  GridCard,
  GridImageWrapper
} from './Parallax.styles';

const staticWorksData = [
  {
    id: 1,
    color: 'var(--color-primary)',
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/1'
  },
  {
    id: 2,
    color: 'var(--color-accent)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/2'
  },
  {
    id: 3,
    color: 'var(--color-secondary)',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/3'
  },
  {
    id: 4,
    color: 'var(--color-primary)',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/4'
  },
  {
    id: 5,
    color: 'var(--color-accent)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/5'
  },
  {
    id: 6,
    color: 'var(--color-accent)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/5'
  }
];

// moved styles to Parallax.styles.js

const ParallaxEllipseCards = () => {
  const { t } = useLanguage();
  // UI state
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredId, setHoveredId] = useState(null);
  const [manualRotation, setManualRotation] = useState(0); // rotation added by dragging
  const [dragging, setDragging] = useState(false);

  // responsive: enable parallax only on laptop/desktop by width
  const isDesktop = windowWidth >= 1024;

  // reveal state (one-time reveal for title)
  const reveal = useRevealOnScroll({ threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

  // continuous visibility state for parallax animation
  const viewport = useInViewport({ threshold: 0, rootMargin: '0px' });

  // refs for drag
  const ticking = useRef(false);
  const dragStartXRef = useRef(0);
  const startManualRotationRef = useRef(0);
  const hasDraggedRef = useRef(false);
  // viewport scroll baseline refs
  const viewportEnterScrollYRef = useRef(0);
  const wasInViewRef = useRef(false);

  // geometry - adapt ellipse to viewport (90% height) and keep cards within bounds
  const CARD_W = 300;
  const H_PADDING = 100; // safe total horizontal margin (left + right)

  const centerX = windowWidth / 2;
  const centerY = 400;
  // keep within viewport horizontally and cap like before for nicer shape
  const radiusX = Math.min(500, Math.max(0, (windowWidth - H_PADDING - CARD_W) / 2));
  // keep within ellipse container vertically and slightly flatten for aesthetics
  const radiusY = 100;

  const works = useMemo(() => {
    const translatedWorks = t('portfolio.items', { returnObjects: true }) || [];
    return staticWorksData.map((work, index) => ({
      ...work,
      ...(translatedWorks[index] || { title: `Progetto ${index + 1}`, description: 'Caricamento...' })
    }));
  }, [t]);
  const baseAngle = (2 * Math.PI) / works.length;

  // tuning
  const SCROLL_SPEED = 0.007; // slower rotation on scroll (was ~0.01)
  const DRAG_SENSITIVITY = 0.004; // px to angle multiplier for dragging

  // Keep windowWidth in sync (so isDesktop updates on orientation/resize)
  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // no parallax listeners on mobile/tablet

    const onScroll = () => {
      if (!viewport.inView) return; // only update when section is in viewport
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.pageYOffset);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [viewport.inView, isDesktop]);

  // Reset scroll baseline when entering viewport; commit accumulated rotation on exit
  useEffect(() => {
    if (!isDesktop) return; // no baseline handling on mobile/tablet

    if (viewport.inView) {
      const y = window.pageYOffset;
      viewportEnterScrollYRef.current = y; // set baseline on enter
      setScrollY(y); // align state so initial delta = 0
      wasInViewRef.current = true;
    } else {
      if (wasInViewRef.current) {
        // commit delta (while visible) into manual rotation to avoid jump on exit
        setManualRotation(prev => prev + (scrollY - viewportEnterScrollYRef.current) * SCROLL_SPEED);
        wasInViewRef.current = false;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport.inView, isDesktop]);

  // Compute target rotation combining scroll delta while in view + manual drag
  const targetRotation = useMemo(
    () =>
      viewport.inView ? (scrollY - viewportEnterScrollYRef.current) * SCROLL_SPEED + manualRotation : manualRotation,
    [scrollY, manualRotation, viewport.inView]
  );

  // Smooth spring to make the motion clearer and less abrupt
  const { rotation } = useSpring({
    to: { rotation: targetRotation },
    config: { tension: 90, friction: 35, mass: 3 }
  });

  // Drag handlers
  const startDrag = clientX => {
    setDragging(true);
    dragStartXRef.current = clientX;
    startManualRotationRef.current = manualRotation;
    hasDraggedRef.current = false;
  };

  const onMouseDown = e => {
    if (e.button !== 0) return; // left click only
    e.preventDefault();
    startDrag(e.clientX);
  };

  const onTouchStart = e => {
    if (e.touches && e.touches.length > 0) {
      startDrag(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (!dragging || !isDesktop) return;

    const handleMove = e => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - dragStartXRef.current;
      if (Math.abs(deltaX) > 3) hasDraggedRef.current = true;
      setManualRotation(startManualRotationRef.current + deltaX * DRAG_SENSITIVITY);
    };

    const handleUp = () => {
      setDragging(false);
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 0);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [dragging, DRAG_SENSITIVITY, isDesktop]);

  const preventNavigationIfDragging = e => {
    if (dragging || hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const Card = animated(CardBase);

  return (
    <Container
      id='portfolio'
      ref={node => {
        reveal.ref.current = node;
        viewport.ref.current = node;
      }}
    >
      <RevealWrap $revealed={reveal.isVisible}>
        <Heading>{t('portfolio.title')}</Heading>
      </RevealWrap>

      {reveal.isVisible &&
        (isDesktop ? (
          <RevealWrap $revealed={reveal.isVisible}>
            <EllipseContainer onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
              {works.map((work, i) => (
                <CardLink
                  key={work.id}
                  href={work.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Vai al progetto ${work.title}`}
                  onClick={preventNavigationIfDragging}
                >
                  <Card
                    $zIndex={hoveredId === work.id ? 10000 : undefined}
                    onMouseEnter={e => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                      setHoveredId(work.id);
                    }}
                    onMouseMove={e => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                    }}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      transform: rotation.to(angle => {
                        const cardAngle = baseAngle * i + angle;
                        const x = centerX + radiusX * Math.cos(cardAngle) - 300 / 2; // card width = 300px
                        const y = centerY + radiusY * Math.sin(cardAngle) - 420 / 2; // card height = 420px
                        const scale = hoveredId === work.id ? 1.05 : 1.0; // constant scale: no approach on scroll
                        return `translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
                      }),
                      opacity: rotation.to(angle => {
                        const cardAngle = baseAngle * i + angle;
                        return 0.2 + 1 * ((Math.sin(cardAngle) + 1) / 2);
                      }),
                      zIndex: rotation.to(angle => {
                        const cardAngle = baseAngle * i + angle;
                        const depth = (Math.sin(cardAngle) + 1) / 2; // 0..1 used only for stacking order
                        return hoveredId === work.id ? 10000 : Math.round(50 + depth * 50);
                      })
                    }}
                  >
                    <ImageWrapper>
                      <img src={work.image} alt={work.title} loading='lazy' />
                    </ImageWrapper>
                    <Content>
                      <Title>{work.title}</Title>
                      <Description>{work.description}</Description>
                    </Content>
                  </Card>
                </CardLink>
              ))}
            </EllipseContainer>
          </RevealWrap>
        ) : (
          <GridWrapper>
            {works.map(work => (
              <a
                key={work.id}
                href={work.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Vai al progetto ${work.title}`}
              >
                <GridCard
                  onMouseEnter={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                  }}
                  onMouseMove={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
                  }}
                >
                  <GridImageWrapper>
                    <img src={work.image} alt={work.title} loading='lazy' />
                  </GridImageWrapper>
                  <Content>
                    <Title>{work.title}</Title>
                    <Description>{work.description}</Description>
                  </Content>
                </GridCard>
              </a>
            ))}
          </GridWrapper>
        ))}
    </Container>
  );
};

export default ParallaxEllipseCards;
