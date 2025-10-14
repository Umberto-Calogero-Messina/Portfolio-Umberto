import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  MainContainer,
  Card,
  Details,
  TitleBox,
  Desc,
  Cta,
  DiscoverButton,
  Pagination,
  Arrow,
  ProgressContainer,
  ProgressBackground,
  ProgressForeground,
  Cover,
  SectionScroll
} from './WorkScroll.styles';

// Static data (non-translatable)
const staticData = [
  {
    image: 'https://i.ibb.co/d4NGdKYn/front-wallpaper.jpg',
    link: '/frontpage'
  },
  {
    image: 'https://i.ibb.co/tp3rtFhm/to-do-list.png',
    link: '/frontpage'
  },
  {
    image: 'https://i.ibb.co/6cSfCN36/cpp-wallpaper.png',
    link: '/metin2'
  },
  {
    image: 'https://i.ibb.co/QByxJrJ/python-wallpaper.png',
    link: '/metin2'
  },
  {
    image: 'https://i.ibb.co/whWcQ8zJ/navicat-wallpaper.png',
    link: '/metin2'
  }
];

const AUTO_SCROLL_INTERVAL = 4000;

const WorkScroll = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  // Get translated portfolio items
  const translatedItems = t('portfolio.items', { returnObjects: true }) || [];

  // Merge translated data with static data
  const data = translatedItems.map((item, index) => ({
    ...item,
    ...staticData[index]
  }));

  const autoScrollTimerRef = useRef(null);
  const mainContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const detailsEvenRef = useRef(null);
  const detailsOddRef = useRef(null);
  const paginationRef = useRef(null);
  const progressForegroundRef = useRef(null);
  const progressBackgroundRef = useRef(null);
  const coverRef = useRef(null);

  const stateRef = useRef({
    order: Array.from({ length: data.length }, (_, i) => i),
    detailsEven: true,
    offsetTop: 200,
    offsetLeft: 700,
    cardWidth: 200,
    cardHeight: 300,
    gap: 20,
    ease: 'power2.inOut'
  });

  // Utility functions
  const getCard = useCallback(index => cardsRef.current[index], []);

  // Auto-scroll management
  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    autoScrollTimerRef.current = setTimeout(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, AUTO_SCROLL_INTERVAL);
  }, [isAnimating]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);

  const resetAutoScroll = useCallback(() => {
    startAutoScroll();
  }, [startAutoScroll]);

  // Animation helpers
  const updateDetailsContent = useCallback(
    (detailsElement, dataIndex) => {
      const item = data[dataIndex];
      if (detailsElement) {
        const titleEl = detailsElement.querySelector('.title');
        const descEl = detailsElement.querySelector('.desc');

        if (titleEl) titleEl.textContent = item.title;
        if (descEl) descEl.textContent = item.description;
      }
    },
    [data]
  );

  const animateDetailsTransition = useCallback(detailsElement => {
    return new Promise(resolve => {
      if (!detailsElement) {
        resolve();
        return;
      }

      const tl = gsap.timeline();
      tl.to(detailsElement, { opacity: 1, x: 0, duration: 0.8, ease: stateRef.current.ease })
        .to(detailsElement.querySelector('.title'), { y: 0, duration: 0.7, ease: stateRef.current.ease }, 0.1)
        .to(detailsElement.querySelector('.desc'), { y: 0, duration: 0.5, ease: stateRef.current.ease }, 0.3)
        .to(
          detailsElement.querySelector('.cta'),
          { y: 0, duration: 0.5, onComplete: resolve, ease: stateRef.current.ease },
          0.35
        );
    });
  }, []);

  const resetDetails = useCallback(detailsElement => {
    if (detailsElement) {
      gsap.set(detailsElement, { opacity: 0, x: -200 });
      gsap.set(detailsElement.querySelector('.title'), { y: 100 });
      gsap.set(detailsElement.querySelector('.desc'), { y: 50 });
      gsap.set(detailsElement.querySelector('.cta'), { y: 60 });
    }
  }, []);

  const setupCardGrid = useCallback(() => {
    const state = stateRef.current;
    const [active, ...rest] = state.order;

    // Setup active card (full screen)
    const activeCard = getCard(active);
    if (activeCard) {
      gsap.set(activeCard, {
        x: 0,
        y: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        borderRadius: 0
      });
    }

    // Setup other cards in grid
    rest.forEach((cardIndex, index) => {
      const xPosition = state.offsetLeft + index * (state.cardWidth + state.gap);
      const cardElement = getCard(cardIndex);

      if (cardElement) {
        gsap.set(cardElement, {
          x: xPosition,
          y: state.offsetTop,
          width: state.cardWidth,
          height: state.cardHeight,
          zIndex: 3,
          borderRadius: 10
        });
      }
    });
  }, [getCard]);

  // Core animations
  const initializeUI = useCallback(() => {
    const container = mainContainerRef.current;
    const height = container ? container.offsetHeight : window.innerHeight;
    const screenWidth = window.innerWidth;
    const containerWidth = container ? container.offsetWidth : screenWidth;

    // Determina se siamo su mobile/tablet o laptop
    const isMobileOrTablet = screenWidth < 1024;
    const isLaptop = screenWidth >= 1024 && screenWidth <= 1440;

    // Calcola offsetTop in base al dispositivo
    const newOffsetTop = isMobileOrTablet ? height - -80 : height - 430;
    const newOffsetLeft = isLaptop ? containerWidth - 450 : containerWidth - 830;

    stateRef.current.offsetTop = newOffsetTop;
    stateRef.current.offsetLeft = newOffsetLeft;

    setupCardGrid();
  }, [setupCardGrid]);

  const startInitialAnimations = useCallback(() => {
    const state = stateRef.current;
    const startDelay = 0.6;
    const [active, ...rest] = state.order;
    const detailsActive = state.detailsEven ? detailsEvenRef.current : detailsOddRef.current;

    // Initial cover animation
    if (coverRef.current) {
      gsap.to(coverRef.current, {
        x: '100%',
        delay: 0.5,
        duration: 1,
        ease: state.ease,
        onComplete: () => {
          startAutoScroll();
        }
      });
    }

    // Animate cards into grid
    rest.forEach((cardIndex, index) => {
      const xPosition = state.offsetLeft + index * (state.cardWidth + state.gap);
      const cardElement = getCard(cardIndex);

      if (cardElement) {
        gsap.to(cardElement, {
          x: xPosition,
          zIndex: 3,
          delay: 0.05 * index + startDelay,
          duration: 0.8,
          ease: state.ease
        });
      }
    });

    // Animate UI elements
    if (paginationRef.current) {
      gsap.to(paginationRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: state.ease,
        delay: startDelay
      });
    }

    if (detailsActive) {
      animateDetailsTransition(detailsActive);
    }

    // Update progress bar
    if (progressForegroundRef.current) {
      gsap.to(progressForegroundRef.current, {
        width: `${progressBarWidth * ((active + 1) / data.length)}px`,
        duration: 0.8,
        ease: state.ease,
        delay: startDelay
      });
    }
  }, [getCard, animateDetailsTransition, startAutoScroll, progressBarWidth]);

  // Navigation functions
  const stepForward = useCallback(() => {
    return new Promise(resolve => {
      const state = stateRef.current;
      const newOrder = [...state.order];
      newOrder.push(newOrder.shift());
      const newDetailsEven = !state.detailsEven;

      const [active, ...rest] = newOrder;
      const previous = rest[rest.length - 1];
      const detailsActive = newDetailsEven ? detailsEvenRef.current : detailsOddRef.current;
      const detailsInactive = newDetailsEven ? detailsOddRef.current : detailsEvenRef.current;

      // Update content
      updateDetailsContent(detailsActive, active);

      // Setup animation layers
      if (detailsActive) gsap.set(detailsActive, { zIndex: 6 });
      if (detailsInactive) gsap.set(detailsInactive, { zIndex: 2 });

      const previousCard = getCard(previous);
      const activeCard = getCard(active);

      if (previousCard) gsap.set(previousCard, { zIndex: 4 });
      if (activeCard) gsap.set(activeCard, { zIndex: 5 });

      // Update progress bar
      if (progressForegroundRef.current) {
        gsap.to(progressForegroundRef.current, {
          width: `${progressBarWidth * ((active + 1) / data.length)}px`,
          duration: 0.8,
          ease: state.ease
        });
      }

      // Animate active card to full screen
      if (activeCard) {
        gsap.to(activeCard, {
          x: 0,
          y: 0,
          width: '100%',
          height: '100%',
          borderRadius: 0,
          duration: 0.8,
          ease: state.ease,
          onComplete: () => {
            // Finalize step
            const xNew = state.offsetLeft + (rest.length - 1) * (state.cardWidth + state.gap);

            if (previousCard) {
              gsap.set(previousCard, {
                x: xNew,
                y: state.offsetTop,
                width: state.cardWidth,
                height: state.cardHeight,
                zIndex: 30,
                borderRadius: 10,
                scale: 1
              });
            }

            // Animate other cards
            rest.forEach((cardIndex, index) => {
              if (cardIndex !== previous) {
                const xNewPos = state.offsetLeft + index * (state.cardWidth + state.gap);
                const cardElement = getCard(cardIndex);

                if (cardElement) {
                  gsap.set(cardElement, { zIndex: 30 });
                  gsap.to(cardElement, {
                    x: xNewPos,
                    y: state.offsetTop,
                    width: state.cardWidth,
                    height: state.cardHeight,
                    scale: 1,
                    duration: 0.6,
                    ease: state.ease,
                    delay: 0.1 * (index + 1)
                  });
                }
              }
            });

            resetDetails(detailsInactive);

            stateRef.current.order = newOrder;
            stateRef.current.detailsEven = newDetailsEven;
            setCurrentIndex(active);

            if (detailsActive) {
              animateDetailsTransition(detailsActive).then(resolve);
            } else {
              resolve();
            }
          }
        });
      }
    });
  }, [getCard, updateDetailsContent, resetDetails, animateDetailsTransition, progressBarWidth]);

  const stepBackward = useCallback(() => {
    return new Promise(resolve => {
      const state = stateRef.current;
      const newOrder = [...state.order];
      const lastCard = newOrder.pop();
      newOrder.unshift(lastCard);
      const newDetailsEven = !state.detailsEven;

      const [active, , ...rest] = newOrder;
      const previousActive = newOrder[1];
      const detailsActive = newDetailsEven ? detailsEvenRef.current : detailsOddRef.current;
      const detailsInactive = newDetailsEven ? detailsOddRef.current : detailsEvenRef.current;

      // Update content
      updateDetailsContent(detailsActive, active);

      // Setup animation layers
      if (detailsActive) gsap.set(detailsActive, { zIndex: 6 });
      if (detailsInactive) gsap.set(detailsInactive, { zIndex: 2 });

      // Animate previous active card to grid
      const previousActiveCard = getCard(previousActive);
      if (previousActiveCard) {
        gsap.set(previousActiveCard, { zIndex: 3 });
        gsap.to(previousActiveCard, {
          x: state.offsetLeft,
          y: state.offsetTop,
          width: state.cardWidth,
          height: state.cardHeight,
          borderRadius: 10,
          scale: 1,
          duration: 0.8,
          ease: state.ease,
          delay: 0.3
        });
      }

      // Setup new active card
      const activeCard = getCard(active);
      if (activeCard) {
        gsap.set(activeCard, {
          zIndex: 5,
          x: 0,
          y: 0,
          width: '100%',
          height: '100%',
          borderRadius: 0
        });
      }

      // Animate other cards
      rest.forEach((cardIndex, index) => {
        if (cardIndex !== previousActive) {
          const xNew = state.offsetLeft + (index + 1) * (state.cardWidth + state.gap);
          const cardElement = getCard(cardIndex);

          if (cardElement) {
            gsap.to(cardElement, {
              x: xNew,
              y: state.offsetTop,
              width: state.cardWidth,
              height: state.cardHeight,
              scale: 1,
              duration: 0.6,
              ease: state.ease,
              delay: 0.1 * (index + 1)
            });
          }
        }
      });

      // Update progress bar
      if (progressForegroundRef.current) {
        gsap.to(progressForegroundRef.current, {
          width: `${progressBarWidth * ((active + 1) / data.length)}px`,
          duration: 0.8,
          ease: state.ease
        });
      }

      resetDetails(detailsInactive);

      stateRef.current.order = newOrder;
      stateRef.current.detailsEven = newDetailsEven;
      setCurrentIndex(active);

      if (detailsActive) {
        animateDetailsTransition(detailsActive).then(() => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  }, [getCard, updateDetailsContent, resetDetails, animateDetailsTransition, progressBarWidth]);

  // Event handlers
  const handleNext = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    stopAutoScroll();
    await stepForward();
    setIsAnimating(false);
    resetAutoScroll();
  }, [isAnimating, stopAutoScroll, stepForward, resetAutoScroll]);

  const handlePrev = useCallback(async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    stopAutoScroll();
    await stepBackward();
    setIsAnimating(false);
    resetAutoScroll();
  }, [isAnimating, stopAutoScroll, stepBackward, resetAutoScroll]);

  const handleDiscoverClick = useCallback(
    link => {
      if (link) {
        if (link.startsWith('/') || link.startsWith('#')) {
          navigate(link);
          // Scroll to top after navigation
          setTimeout(() => window.scrollTo(0, 0), 0);
        } else {
          window.open(link, '_blank', 'noopener,noreferrer');
        }
      }
    },
    [navigate]
  );

  // Image loading
  const loadImage = src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const loadAllImages = async () => {
    const promises = data.map(item => loadImage(item.image));
    return Promise.all(promises);
  };

  // Update progress bar width
  const updateProgressBarWidth = useCallback(() => {
    if (progressBackgroundRef.current) {
      const width = progressBackgroundRef.current.offsetWidth;
      setProgressBarWidth(width);
    }
  }, []);

  // Initialization
  const init = async () => {
    try {
      await loadAllImages();
      // Use setTimeout to ensure refs are available
      setTimeout(() => {
        initializeUI();
        startInitialAnimations();
      }, 100);
    } catch (error) {
      console.error('One or more images failed to load', error);
    }
  };

  // Effects
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, data.length);
  }, []);

  useEffect(() => {
    init();

    return () => {
      stopAutoScroll();
    };
  }, []);

  useEffect(() => {
    updateProgressBarWidth();
    window.addEventListener('resize', updateProgressBarWidth);

    return () => {
      window.removeEventListener('resize', updateProgressBarWidth);
    };
  }, [updateProgressBarWidth]);

  // Render methods
  const renderCards = () => {
    return data.map((item, index) => (
      <Card
        key={index}
        ref={el => (cardsRef.current[index] = el)}
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url(${item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          left: 0,
          top: 0
        }}
      />
    ));
  };

  const progressWidth = progressBarWidth * ((currentIndex + 1) / data.length);

  return (
    <SectionScroll id='project'>
      <MainContainer ref={mainContainerRef}>
        {renderCards()}

        <Details ref={detailsEvenRef} style={{ opacity: 0 }}>
          <TitleBox className='title-box'>
            <div className='title'>{data[stateRef.current.order[0]]?.title}</div>
          </TitleBox>

          <Desc className='desc'>{data[stateRef.current.order[0]]?.description}</Desc>

          <Cta className='cta'>
            <DiscoverButton className='discover' onClick={() => handleDiscoverClick(data[currentIndex]?.link)}>
              {t('portfolio.discover')}
            </DiscoverButton>
          </Cta>
        </Details>

        <Details ref={detailsOddRef}>
          <TitleBox className='title-box'>
            <div className='title'>{data[stateRef.current.order[0]]?.title}</div>
          </TitleBox>

          <Desc className='desc'>{data[stateRef.current.order[0]]?.description}</Desc>

          <Cta className='cta'>
            <DiscoverButton
              className='discover'
              onClick={() => handleDiscoverClick(data[stateRef.current.order[0]]?.link)}
            >
              {t('portfolio.discover')}
            </DiscoverButton>
          </Cta>
        </Details>

        <Pagination ref={paginationRef}>
          <Arrow onClick={handlePrev} className='arrow-left'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
            </svg>
          </Arrow>
          <Arrow onClick={handleNext} className='arrow-right'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </Arrow>
          <ProgressContainer>
            <ProgressBackground ref={progressBackgroundRef}>
              <ProgressForeground ref={progressForegroundRef} style={{ width: `${progressWidth}px` }} />
            </ProgressBackground>
          </ProgressContainer>
        </Pagination>

        <Cover ref={coverRef} />
      </MainContainer>
    </SectionScroll>
  );
};

export default WorkScroll;
