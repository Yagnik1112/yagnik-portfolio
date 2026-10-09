import { useRef } from 'react';
import { useInView } from '../hooks/useMotion';

/**
 * Viewport-triggered entrance animation.
 *
 * direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'image'
 * stagger:   animate direct children one after another instead of the wrapper itself
 *
 * Content is only hidden while JavaScript can observe it; with reduced motion
 * or without IntersectionObserver it renders visible immediately.
 */
export default function ScrollReveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  direction = 'up',
  stagger = false,
  threshold = 0,
  rootMargin,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold, rootMargin });

  const classes = [
    'reveal',
    stagger ? 'reveal-stagger' : `reveal-${direction}`,
    stagger ? `reveal-stagger-${direction}` : '',
    isVisible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} style={{ '--reveal-delay': `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
