'use client';
import { useEffect, useRef, useState } from 'react';

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedHeadline({
  text,
  className = '',
  delay = 0,
  duration = 0.05,
}: AnimatedHeadlineProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || displayedChars >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayedChars((prev) => prev + 1);
    }, delay + displayedChars * duration * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, displayedChars, text.length, delay, duration]);

  const displayedText = text.substring(0, displayedChars);
  const remainingText = text.substring(displayedChars);

  return (
    <h1 ref={ref} className={className}>
      <span style={{ opacity: 1, transition: 'opacity 0.1s' }}>
        {displayedText}
      </span>
      <span
        style={{
          opacity: 0.3,
          color: 'var(--text-secondary)',
          animation: displayedChars < text.length ? 'pulse 1.5s infinite' : 'none',
        }}
      >
        {remainingText}
      </span>
    </h1>
  );
}
