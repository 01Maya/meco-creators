'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
}
