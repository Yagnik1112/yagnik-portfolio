import { ChevronDown } from 'lucide-react';

/**
 * Smoothly expands/collapses its content using a grid-row transition (no height measuring).
 * Collapsed content stays in the DOM for SEO but is made inert so it can't be focused.
 */
export default function Collapsible({ open, id, children, className = '' }) {
  return (
    <div id={id} className={`collapsible ${open ? 'is-open' : ''} ${className}`} inert={!open}>
      <div className="collapsible-inner">{children}</div>
    </div>
  );
}

/**
 * Accessible "Show more / Show less" toggle paired with a <Collapsible>.
 */
export function ExpandToggle({ open, onToggle, controls, moreLabel, lessLabel = 'Show less', className = '', variant = 'default' }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      className={`expand-toggle expand-toggle-${variant} ${open ? 'is-open' : ''} ${className}`}
    >
      <span>{open ? lessLabel : moreLabel}</span>
      <ChevronDown className="expand-toggle-icon" aria-hidden="true" />
    </button>
  );
}
