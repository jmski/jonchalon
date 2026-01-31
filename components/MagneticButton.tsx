'use client';
import { useRef, useEffect, useState } from 'react';
import { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  magneticRange?: number;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  magneticRange = 40,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
      );

      if (distance < magneticRange) {
        const angle = Math.atan2(e.clientY - buttonCenterY, e.clientX - buttonCenterX);
        const force = (magneticRange - distance) / magneticRange;

        setPosition({
          x: Math.cos(angle) * force * 20,
          y: Math.sin(angle) * force * 20,
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [magneticRange]);

  const baseStyles = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  };

  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        style={baseStyles}
        className={`inline-block ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      onClick={onClick}
      style={baseStyles}
      className={`${className}`}
    >
      {children}
    </button>
  );
}
