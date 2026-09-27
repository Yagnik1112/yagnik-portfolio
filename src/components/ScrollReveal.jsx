import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up", // up, down, left, right, scale
  threshold = 0.01
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if reduced motion is preferred
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold, rootMargin: '50px 0px 50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Safety fallback: if not triggered within 1 second (e.g. mobile viewport calculation issue), force visible
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getDirectionStyle = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100';

    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-12';
      case 'down':
        return 'opacity-0 -translate-y-12';
      case 'left':
        return 'opacity-0 translate-x-12';
      case 'right':
        return 'opacity-0 -translate-x-12';
      case 'scale':
        return 'opacity-0 scale-95 translate-y-6';
      default:
        return 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: '800ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className={`transition-all ${getDirectionStyle()} ${className}`}
    >
      {children}
    </div>
  );
}
