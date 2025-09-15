import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled, { createGlobalStyle } from 'styled-components';

const works = [
  {
    id: 1,
    title: 'Progetto 1',
    description: 'Descrizione progetto 1',
    color: 'var(--color-primary)',
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/1'
  },
  {
    id: 2,
    title: 'Progetto 2',
    description: 'Descrizione progetto 2',
    color: 'var(--color-accent)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/2'
  },
  {
    id: 3,
    title: 'Progetto 3',
    description: 'Descrizione progetto 3',
    color: 'var(--color-secondary)',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/3'
  },
  {
    id: 4,
    title: 'Progetto 4',
    description: 'Descrizione progetto 4',
    color: 'var(--color-primary)',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/4'
  },
  {
    id: 5,
    title: 'Progetto 5',
    description: 'Descrizione progetto 5',
    color: 'var(--color-accent)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/5'
  },
  {
    id: 6,
    title: 'Progetto 5',
    description: 'Descrizione progetto 5',
    color: 'var(--color-accent)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
    url: 'https://unsplash.com/photos/5'
  }
];

// Styled components
const Container = styled.section`
  min-height: 90vh;
  padding: 80px 20px;
  position: relative;
  background-color: var(--color-bg);
  color: var(--color-text);
  overflow-x: hidden;
  background-color: black;
  padding-bottom:300px;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 60px;
  user-select: none;
`;

const EllipseContainer = styled.div`
  position: relative;
  width: 100px;
  height: 600px;
  perspective: 1200px;
  overflow: visible;
`;

const CardLink = styled.a`
  color: inherit;
`;

const Card = styled(animated.div)`
  position: absolute;
  width: 280px;
  height: 380px;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
  color: #fff;
  display: flex;
  flex-direction: column;
  background-color: var(--color-accent);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  z-index: ${props => props.zIndex};

  &:hover {
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);
  }
`;

const ImageWrapper = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  cursor: ${props => (props.dragging ? 'grabbing' : 'grab')};
  user-select: ${props => (props.dragging ? 'none' : 'auto')};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 16px 20px;
  background: rgba(0,0,0,0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Description = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 0.95rem;
  line-height: 1.3;
`;

const ParallaxEllipseCards = () => {
  // UI state
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredId, setHoveredId] = useState(null);
  const [manualRotation, setManualRotation] = useState(0); // rotation added by dragging
  const [dragging, setDragging] = useState(false);

  // refs for drag
  const ticking = useRef(false);
  const dragStartXRef = useRef(0);
  const startManualRotationRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // geometry
  const centerX = windowWidth / 2;
  const centerY = 400;
  const radiusX = Math.min(700, windowWidth / 2);
  const radiusY = 230; // ellisse leggermente piatta
  const baseAngle = (2 * Math.PI) / works.length;

  // tuning
  const SCROLL_SPEED = 0.007; // slower rotation on scroll (was ~0.01)
  const DRAG_SENSITIVITY = 0.004; // px to angle multiplier for dragging

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.pageYOffset);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    const onResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Compute target rotation combining scroll + manual drag contribution
  const targetRotation = useMemo(() => scrollY * SCROLL_SPEED + manualRotation, [scrollY, manualRotation]);

  // Smooth spring to make the motion clearer and less abrupt
  const { rotation } = useSpring({
    to: { rotation: targetRotation },
    config: { tension: 90, friction: 24, mass: 1.1 }
  });

  // Drag handlers
  const startDrag = clientX => {
    setDragging(true);
    dragStartXRef.current = clientX;
    startManualRotationRef.current = manualRotation;
    hasDraggedRef.current = false;
  };

  const onMouseDown = e => {
    // left click only
    if (e.button !== 0) return;
    e.preventDefault();
    startDrag(e.clientX);
  };

  const onTouchStart = e => {
    if (e.touches && e.touches.length > 0) {
      startDrag(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMove = e => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - dragStartXRef.current;
      if (Math.abs(deltaX) > 3) hasDraggedRef.current = true;
      setManualRotation(startManualRotationRef.current + deltaX * DRAG_SENSITIVITY);
    };

    const handleUp = () => {
      setDragging(false);
      // Small timeout to avoid triggering click right after drag end
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
  }, [dragging, DRAG_SENSITIVITY]);

  const preventNavigationIfDragging = e => {
    if (dragging || hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <>
      <Container dragging={dragging}>
        <Heading>I miei lavori</Heading>
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
                zIndex={hoveredId === work.id ? 10000 : undefined}
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform: rotation.to(angle => {
                    const cardAngle = baseAngle * i + angle;
                    const x = centerX + radiusX * Math.cos(cardAngle) - 400 / 2;
                    const y = centerY + radiusY * Math.sin(cardAngle) - 380 / 2;
                    const z = Math.sin(cardAngle); // profondità 3D
                    const baseScale = 0.7 + 0.5 * ((Math.sin(cardAngle) + 1) / 2);
                    const scale = hoveredId === work.id ? baseScale * 1.15 : baseScale;
                    return `translate3d(${x}px, ${y}px, ${z}px) scale(${scale.toFixed(2)})`;
                  }),
                  opacity: rotation.to(angle => {
                    const cardAngle = baseAngle * i + angle;
                    return 0.2 + 1 * ((Math.sin(cardAngle) + 1) / 2);
                  }),
                  zIndex: rotation.to(angle => {
                    const cardAngle = baseAngle * i + angle;
                    const baseScale = 0.6 + 0.4 * ((Math.sin(cardAngle) + 1) / 2);
                    return hoveredId === work.id ? 10000 : Math.round(baseScale * 100);
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
      </Container>
    </>
  );
};

export default ParallaxEllipseCards;
