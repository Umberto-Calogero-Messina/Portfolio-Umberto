import { useState, useEffect } from 'react';
import { ScrollButton, ProgressCircle, ArrowIcon } from './ScrollToTopButton.styles';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollButton onClick={scrollToTop} $isVisible={isVisible} aria-label='Torna su'>
      <ProgressCircle viewBox='0 0 50 50'>
        <circle cx='25' cy='25' r={radius} strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} />
      </ProgressCircle>

      <ArrowIcon>↑</ArrowIcon>
    </ScrollButton>
  );
};

export default ScrollToTopButton;
