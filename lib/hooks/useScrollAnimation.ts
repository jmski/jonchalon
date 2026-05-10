/**
 * useScrollAnimation Hook
 * 
 * Detects when element enters viewport and triggers animation
 * Supports multiple animation types, custom timing, and repeat behavior
 * 
 * @example
 * const { ref, isVisible, isAnimating } = useScrollAnimation({
 *   variant: 'slideInUp',
 *   delay: 100,
 *   threshold: 0.2,
 * });
 * 
 * <div ref={ref} className={isAnimating ? 'animate-slideInUp' : ''}>
 *   Content appears when scrolled into view
 * </div>
 */

import { useEffect, useRef, useState, useCallback } from 'react';

export type AnimationVariant = 
  | 'fadeIn'
  | 'slideInUp'
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'scaleUp'
  | 'rotateIn'
  | 'zoomIn'
  | 'blurIn';

interface UseScrollAnimationOptions {
  variant?: AnimationVariant;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  repeat?: boolean; // Re-trigger animation on scroll in/out
  duration?: number; // Animation duration in ms (uses token if not provided)
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
  triggerOnce?: boolean; // Only trigger once (default: true)
}

interface ScrollAnimationState {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
  isAnimating: boolean;
  trigger: () => void; // Manual trigger if needed
  reset: () => void; // Manual reset
}

/**
 * useScrollAnimation Hook
 * Manages scroll-triggered animations with IntersectionObserver
 */
export function useScrollAnimation({
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
  repeat = false,
  triggerOnce = true,
}: UseScrollAnimationOptions = {}): ScrollAnimationState {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);
  const isAnimatingRef = useRef(false);

  const trigger = useCallback(() => {
    setIsVisible(true);
    timeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = true;
      setIsAnimating(true);
    }, delay);
  }, [delay]);

  const reset = useCallback(() => {
    isAnimatingRef.current = false;
    setIsAnimating(false);
    setIsVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element entered viewport
          if (!triggerOnce || !isAnimatingRef.current) {
            trigger();
          }
        } else if (!triggerOnce && repeat) {
          // Element left viewport and repeat is enabled
          reset();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [threshold, rootMargin, repeat, triggerOnce, trigger, reset]);

  return {
    ref: ref as React.RefObject<HTMLElement>,
    isVisible,
    isAnimating,
    trigger,
    reset,
  };
}

/**
 * Get Tailwind animation class for variant
 */
export function getAnimationClass(
  variant: AnimationVariant,
  isAnimating: boolean
): string {
  if (!isAnimating) return 'opacity-0';

  const classMap: Record<AnimationVariant, string> = {
    fadeIn: 'animate-fadeIn',
    slideInUp: 'animate-slideInUp',
    slideInDown: 'animate-slideInDown',
    slideInLeft: 'animate-slideInLeft',
    slideInRight: 'animate-slideInRight',
    scaleUp: 'animate-scaleUp',
    rotateIn: 'animate-rotateIn',
    zoomIn: 'animate-zoomIn',
    blurIn: 'animate-blurIn',
  };

  return classMap[variant] || classMap.fadeIn;
}

/**
 * Get animation CSS for custom animations
 */
export function getAnimationStyle(
  isAnimating: boolean,
  duration: number,
  easing: string
) {
  return {
    animation: isAnimating ? 'none' : 'none', // Will be applied via class
    transition: isAnimating ? `all ${duration}ms ${easing}` : 'none',
  };
}
