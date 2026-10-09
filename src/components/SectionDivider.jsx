import { useRef } from 'react';
import { useInView } from '../hooks/useMotion';

export default function SectionDivider({ className = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <div ref={ref} className={`section-divider ${visible ? 'is-visible' : ''} ${className}`} aria-hidden="true">
      <div className="section-divider-inner">
        <div className="section-divider-line"></div>
        <div className="section-divider-node">
          <span></span>
        </div>
      </div>
    </div>
  );
}
