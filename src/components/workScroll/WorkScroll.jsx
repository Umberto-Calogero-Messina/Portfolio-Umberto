import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
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
  Cover
} from './WorkScroll.styles';

const data = [
  {
    title: 'SAINT ANTONIEN',
    description:
      "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
    image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg',
    link: '/destinations/saint-antoniens'
  },
  {
    title: 'NANGANO PREFECTURE',
    description:
      "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
    image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg',
    link: '/destinations/nagano'
  },
  {
    title: 'MARRAKECH MEROUGA',
    description:
      'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
    image: 'https://assets.codepen.io/3685267/timed-cards-3.jpg',
    link: '/destinations/marrakech'
  },
  {
    title: 'YOSEMITE NATIONAL PARK',
    description:
      'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
    image: 'https://assets.codepen.io/3685267/timed-cards-4.jpg',
    link: '/destinations/yosemite'
  },
  {
    title: 'LOS LANCES BEACH',
    description:
      "Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach's long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.",
    image: 'https://assets.codepen.io/3685267/timed-cards-5.jpg',
    link: '/destinations/los-lances'
  },
  {
    title: 'GÖREME VALLEY',
    description:
      'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
    image: 'https://assets.codepen.io/3685267/timed-cards-6.jpg',
    link: '/destinations/goreme'
  }
];

const AUTO_SCROLL_INTERVAL = 4000;

const WorkScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

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
    order: [0, 1, 2, 3, 4, 5],
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
  const updateDetailsContent = useCallback((detailsElement, dataIndex) => {
    const item = data[dataIndex];
    if (detailsElement) {
      const titleEl = detailsElement.querySelector('.title');
      const descEl = detailsElement.querySelector('.desc');

      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.description;
    }
  }, []);

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
    const { innerHeight: height, innerWidth: width } = window;

    // Determina se siamo su mobile/tablet o laptop
    const isMobileOrTablet = width < 1024;
    const isLaptop = width >= 1024 && width <= 1440;

    // Calcola offsetTop in base al dispositivo
    const newOffsetTop = isMobileOrTablet ? height - -30 : height - 150;
    const newOffsetLeft = isLaptop ? width - 450 : width - 830;

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

      const [active, next, ...rest] = newOrder;
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

  const handleDiscoverClick = useCallback(link => {
    // Naviga alla pagina specificata
    window.location.href = link;
    // Oppure, se stai usando React Router:
    // navigate(link);
  }, []);

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
          backgroundImage: `url(${item.image})`,
          position: 'absolute',
          left: 0,
          top: 0
        }}
      />
    ));
  };

  const progressWidth = progressBarWidth * ((currentIndex + 1) / data.length);

  return (
    <MainContainer ref={mainContainerRef}>
      {renderCards()}

      <Details ref={detailsEvenRef} style={{ opacity: 0 }}>
        <TitleBox className='title-box'>
          <div className='title'>{data[stateRef.current.order[0]]?.title}</div>
        </TitleBox>

        <Desc className='desc'>{data[stateRef.current.order[0]]?.description}</Desc>

        <Cta className='cta'>
          <DiscoverButton
            className='discover'
            onClick={() => handleDiscoverClick(data[stateRef.current.order[0]]?.link)}
          >
            Discover
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
            Discover
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
  );
};

export default WorkScroll;
