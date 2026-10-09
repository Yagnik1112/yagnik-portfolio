import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/useMotion';

/**
 * Lightweight, dependency-free slider built on native CSS scroll-snap.
 * - Touch/trackpad swipe comes for free from native horizontal scrolling
 * - Prev/next buttons, pagination dots (or a progress bar for long lists) and a slide counter
 * - Arrow-key support when the track is focused
 * - Optional autoplay that pauses on hover, focus, touch, when off-screen, and for reduced motion
 *
 * perView: slides visible at { base, sm (≥640px), lg (≥1024px) }
 */
export default function Carousel({
  children,
  ariaLabel,
  perView = { base: 1.08, sm: 2, lg: 3 },
  autoplay = false,
  interval = 5500,
  className = '',
  slideClassName = '',
}) {
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const slides = Children.toArray(children);
  const total = slides.length;

  const [state, setState] = useState({ index: 0, pages: total, atStart: true, atEnd: total <= 1 });
  const reducedMotion = usePrefersReducedMotion();
  const [playing, setPlaying] = useState(autoplay);
  const [paused, setPaused] = useState(false);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!first) return 1;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.getBoundingClientRect().width + gap;
  }, []);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep();
    const maxScroll = track.scrollWidth - track.clientWidth;
    const visible = Math.max(1, Math.round((track.clientWidth + 1) / step));
    const pages = Math.max(1, total - visible + 1);
    const atEnd = track.scrollLeft >= maxScroll - 2;
    const index = atEnd ? pages - 1 : Math.min(pages - 1, Math.round(track.scrollLeft / step));
    const next = { index, pages, atStart: track.scrollLeft <= 2, atEnd };
    setState((prev) =>
      prev.index === next.index && prev.pages === next.pages && prev.atStart === next.atStart && prev.atEnd === next.atEnd
        ? prev
        : next
    );
  }, [getStep, total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onScroll) : null;
    ro?.observe(track);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('scroll', onScroll);
      ro?.disconnect();
    };
  }, [sync]);

  const goTo = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollTo({ left: index * getStep(), behavior: reducedMotion ? 'auto' : 'smooth' });
    },
    [getStep, reducedMotion]
  );

  const prev = () => goTo(Math.max(0, state.index - 1));
  const next = useCallback(() => {
    goTo(state.atEnd ? 0 : state.index + 1);
  }, [goTo, state.atEnd, state.index]);

  // Pause autoplay while the carousel is off-screen or the tab is hidden.
  const [onScreen, setOnScreen] = useState(false);
  useEffect(() => {
    if (!autoplay || !rootRef.current || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.35 });
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, [autoplay]);

  useEffect(() => {
    if (!autoplay || !playing || paused || !onScreen || reducedMotion) return undefined;
    const id = setInterval(() => {
      if (!document.hidden) next();
    }, interval);
    return () => clearInterval(id);
  }, [autoplay, playing, paused, onScreen, reducedMotion, interval, next]);

  const onKeyDown = (e) => {
    if (e.target !== trackRef.current) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(Math.min(state.pages - 1, state.index + 1));
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  const useDots = state.pages > 1 && state.pages <= 9;
  const progress = state.pages > 1 ? (state.index + 1) / state.pages : 1;
  const showAutoplayToggle = autoplay && !reducedMotion;
  const pauseHandlers = autoplay
    ? {
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
        onFocus: () => setPaused(true),
        onBlur: (e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
        },
        onTouchStart: () => setPaused(true),
      }
    : {};

  return (
    <div
      ref={rootRef}
      className={`carousel ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      style={{ '--per-view': perView.base, '--per-view-sm': perView.sm ?? perView.base, '--per-view-lg': perView.lg ?? perView.sm ?? perView.base }}
      {...pauseHandlers}
    >
      <div
        ref={trackRef}
        className="carousel-track"
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`${ariaLabel} – use arrow keys to scroll`}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.key ?? i}
            className={`carousel-slide ${slideClassName}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {state.pages > 1 && (
        <div className="carousel-controls">
          <div className="carousel-pagination">
            {useDots ? (
              <div className="carousel-dots">
                {Array.from({ length: state.pages }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`carousel-dot ${i === state.index ? 'is-active' : ''}`}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === state.index ? 'true' : undefined}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            ) : (
              <div className="carousel-progress" aria-hidden="true">
                <span style={{ transform: `scaleX(${progress})` }} />
              </div>
            )}
            <span className="carousel-counter" aria-live="polite">
              {String(state.index + 1).padStart(2, '0')}
              <span className="carousel-counter-sep">/</span>
              {String(state.pages).padStart(2, '0')}
            </span>
          </div>

          <div className="carousel-buttons">
            {showAutoplayToggle && (
              <button
                type="button"
                className="carousel-btn carousel-btn-ghost"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause automatic sliding' : 'Start automatic sliding'}
              >
                {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            )}
            <button type="button" className="carousel-btn" onClick={prev} disabled={state.atStart} aria-label="Previous slide">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="carousel-btn"
              onClick={() => goTo(Math.min(state.pages - 1, state.index + 1))}
              disabled={state.atEnd}
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
