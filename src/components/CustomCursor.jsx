import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks/useMotion';

const INTERACTIVE = 'a, button, [role="tab"], input, textarea, label, .interactive-card';

/**
 * Cursor follower for fine-pointer devices.
 * Position updates are written straight to the DOM inside requestAnimationFrame,
 * so moving the mouse never re-renders React.
 */
export default function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !prefersReducedMotion()
  );
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const target = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let frame = 0;
    let visible = false;

    const render = () => {
      ringPos.x += (target.x - ringPos.x) * 0.2;
      ringPos.y += (target.y - ringPos.y) * 0.2;
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      if (Math.abs(target.x - ringPos.x) > 0.1 || Math.abs(target.y - ringPos.y) > 0.1) {
        frame = requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        ringPos.x = target.x;
        ringPos.y = target.y;
        dot.classList.add('is-visible');
        ring.classList.add('is-visible');
      }
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onOver = (e) => {
      const hovering = Boolean(e.target.closest?.(INTERACTIVE));
      dot.classList.toggle('is-hover', hovering);
      ring.classList.toggle('is-hover', hovering);
    };

    const onLeave = () => {
      visible = false;
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
