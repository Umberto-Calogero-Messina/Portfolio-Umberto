import { useState, useEffect } from 'react';
import { ArrowButton, ArrowIcon } from './ScrollDownArrow.styles';

const ScrollDownArrow = ({ isLoading = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Show arrow only if preloader is gone AND user is at the top
      setIsVisible(!isLoading && scrollTop < 50);
    };

    // Set initial visibility based on loading state
    setIsVisible(!isLoading && window.scrollY < 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about'); // Education section has id="about"
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <ArrowButton onClick={scrollToNextSection} $isVisible={isVisible}>
      <ArrowIcon>↓</ArrowIcon>
    </ArrowButton>
  );
};

export default ScrollDownArrow;
