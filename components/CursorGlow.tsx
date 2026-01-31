'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 10,
        opacity: 0.7,
      }}
    />
  );
}
