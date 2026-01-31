'use client';
import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2, 
  label, 
  suffix = '', 
  prefix = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smoother animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + (to - from) * easeOut);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text-accent-bright)' }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </p>
    </div>
  );
}
