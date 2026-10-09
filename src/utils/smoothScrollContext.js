import { createContext, useContext } from 'react';

// Matches the html `scroll-padding-top` used to keep anchors clear of the fixed header.
function headerOffset() {
  const value = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
  return Number.isNaN(value) ? 96 : value;
}

function nativeScrollTo(target, { offset, immediate = false } = {}) {
  const behavior = immediate ? 'auto' : 'smooth';
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY + (offset ?? -headerOffset());
  window.scrollTo({ top, behavior });
}

export const SmoothScrollContext = createContext({
  scrollTo: nativeScrollTo,
  stop: () => {},
  start: () => {},
});

export { nativeScrollTo };

/**
 * Access the app-wide scroll controller (Lenis when active, native scrolling otherwise).
 */
export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
