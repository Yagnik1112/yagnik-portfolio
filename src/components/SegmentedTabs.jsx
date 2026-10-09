import { useCallback, useLayoutEffect, useRef, useState } from 'react';

/**
 * Pill tab bar with a sliding active indicator.
 *
 * mode="tabs"   → ARIA tablist (arrow-key navigation, aria-selected, aria-controls)
 * mode="filter" → toggle-button group for filtering lists (aria-pressed)
 *
 * items: array of strings or { value, label, count }
 */
export default function SegmentedTabs({
  items,
  value,
  onChange,
  ariaLabel,
  idPrefix = 'tabs',
  mode = 'tabs',
  className = '',
}) {
  const listRef = useRef(null);
  const [indicator, setIndicator] = useState(null);
  const options = items.map((item) => (typeof item === 'string' ? { value: item, label: item } : item));
  const activeIndex = Math.max(0, options.findIndex((o) => o.value === value));

  const measure = useCallback(() => {
    const list = listRef.current;
    const btn = list?.querySelectorAll('[data-seg-item]')[activeIndex];
    if (!btn) return;
    setIndicator({ x: btn.offsetLeft, y: btn.offsetTop, w: btn.offsetWidth, h: btn.offsetHeight });

    // Keep the active pill visible when the bar scrolls horizontally (mobile).
    if (list.scrollWidth > list.clientWidth) {
      const target = btn.offsetLeft - (list.clientWidth - btn.offsetWidth) / 2;
      list.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    }
  }, [activeIndex]);

  useLayoutEffect(() => {
    measure();
    const list = listRef.current;
    if (!list || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => measure());
    ro.observe(list);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  const focusAndSelect = (index) => {
    const next = (index + options.length) % options.length;
    onChange(options[next].value);
    listRef.current?.querySelectorAll('[data-seg-item]')[next]?.focus();
  };

  const onKeyDown = (e) => {
    if (mode !== 'tabs') return;
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (e.key in keys) {
      e.preventDefault();
      focusAndSelect(activeIndex + keys[e.key]);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusAndSelect(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusAndSelect(options.length - 1);
    }
  };

  const isTabs = mode === 'tabs';

  return (
    <div
      ref={listRef}
      role={isTabs ? 'tablist' : 'group'}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      className={`seg-tabs ${className}`}
    >
      {indicator && (
        <span
          className="seg-tabs-indicator"
          aria-hidden="true"
          style={{
            width: indicator.w,
            height: indicator.h,
            transform: `translate(${indicator.x}px, ${indicator.y}px)`,
          }}
        />
      )}
      {options.map((opt, idx) => {
        const active = idx === activeIndex;
        return (
          <button
            key={opt.value}
            type="button"
            data-seg-item
            onClick={() => onChange(opt.value)}
            className={`seg-tab ${active ? 'is-active' : ''}`}
            {...(isTabs
              ? {
                  role: 'tab',
                  id: `${idPrefix}-tab-${idx}`,
                  'aria-selected': active,
                  'aria-controls': `${idPrefix}-panel`,
                  tabIndex: active ? 0 : -1,
                }
              : { 'aria-pressed': active })}
          >
            <span>{opt.label}</span>
            {typeof opt.count === 'number' && <span className="seg-tab-count">{opt.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
