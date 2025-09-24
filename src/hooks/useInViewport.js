import { useEffect, useRef, useState } from 'react';

// Tracks continuous viewport visibility (true while intersecting, false when not)
export default function useInViewport(options = { threshold: 0, rootMargin: '0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
