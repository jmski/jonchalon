'use client';
import { useEffect, useRef, useState } from 'react';

interface ObservableProps {
  children: React.ReactNode;
  className?: string;
  onVisible?: () => void;
  animation?: 'blurSlideUp' | 'blurIn' | 'fadeIn' | 'rotateIn' | 'waveReveal';
  threshold?: number;
  delay?: number;
}

export default function Observable({
  children,
  className = '',
  onVisible,
  animation = 'blurSlideUp',
  threshold = 0.1,
  delay = 0,
}: ObservableProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            onVisible?.();
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, delay, onVisible]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
