'use client';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className = '',
}: PageTransitionProps) {
  return (
    <div
      className={`animate-fadeIn ${className}`}
      style={{
        animation: 'fadeIn 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
}
