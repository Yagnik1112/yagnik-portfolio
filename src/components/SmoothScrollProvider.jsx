import { useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { SmoothScrollContext, nativeScrollTo } from '../utils/smoothScrollContext';
import { prefersReducedMotion } from '../hooks/useMotion';

export default function SmoothScrollProvider({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Respect reduced-motion users: keep native scrolling without inertia.
    if (prefersReducedMotion()) return undefined;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85, // Smooth, elegant, unhurried scroll pace
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId = 0;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const controller = useMemo(
    () => ({
      scrollTo(target, { offset, immediate = false } = {}) {
        const lenis = lenisRef.current;
        if (lenis) {
          // Lenis already applies the html `scroll-padding-top` (fixed header clearance) to element targets
          lenis.scrollTo(target, { immediate });
        } else {
          nativeScrollTo(target, { offset, immediate });
        }
      },
      stop() {
        lenisRef.current?.stop();
      },
      start() {
        lenisRef.current?.start();
      },
    }),
    []
  );

  // Reset scroll on route change, or jump to the in-page anchor when the URL has a hash.
  useEffect(() => {
    if (location.hash) {
      // Effects run after the new page has committed, so the anchor target is already in the DOM.
      const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      controller.scrollTo(el || 0, { immediate: true });
      return undefined;
    }
    controller.scrollTo(0, { immediate: true });
    return undefined;
  }, [location.pathname, location.hash, controller]);

  return <SmoothScrollContext.Provider value={controller}>{children}</SmoothScrollContext.Provider>;
}
