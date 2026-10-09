import { useRef } from 'react';
import { useInView } from '../hooks/useMotion';

/**
 * Shared section heading: eyebrow badge, masked heading reveal, optional intro text and action.
 * align: 'split' (heading left, action right), 'left' or 'center'
 */
export default function SectionHeader({ eyebrow, title, subtitle, action, align = 'split', as: Heading = 'h2', className = '' }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div ref={ref} className={`section-header section-header-${align} ${visible ? 'is-visible' : ''} ${className}`}>
      <div className="section-header-text">
        {eyebrow && (
          <span className="section-eyebrow">
            <span className="section-eyebrow-dot" aria-hidden="true"></span>
            <span>{eyebrow}</span>
          </span>
        )}
        <Heading className="section-title">
          <span className="section-title-mask">
            <span className="section-title-inner">{title}</span>
          </span>
        </Heading>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {action && <div className="section-header-action">{action}</div>}
    </div>
  );
}
