'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface KineticMomentProps {
  children: ReactNode;
  className?: string;
}

export function KineticMoment({ children, className }: KineticMomentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -30% 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const classes = [
    'kinetic-moment',
    isVisible ? 'kinetic-moment--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}

export default KineticMoment;