import { useEffect, useRef, useState } from 'react';

// Hook: returns { ref, isVisible } using IntersectionObserver
export default function useRevealOnScroll(options = { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        obs.disconnect(); // reveal once
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, isVisible };
}
