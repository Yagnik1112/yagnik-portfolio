import { useEffect, useState } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Tracks the user's reduced-motion preference and updates if it changes.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mql = window.matchMedia(REDUCED_MOTION_QUERY);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/**
 * Tracks whether a CSS media query currently matches.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia?.(query).matches);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/**
 * Reports whether `ref` has entered the viewport.
 * When IntersectionObserver is unavailable or reduced motion is requested,
 * the element is treated as visible immediately so content is never stuck hidden.
 */
export function useInView(ref, { once = true, threshold = 0, rootMargin = '0px 0px -10% 0px' } = {}) {
  const [inView, setInView] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window) || prefersReducedMotion()
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;
    if (once && inView) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, once, threshold, rootMargin, inView]);

  return inView;
}
