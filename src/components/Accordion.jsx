import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import Collapsible from './Collapsible';

/**
 * Accessible accordion (FAQ style). Each item: { question, answer }.
 * Answers stay in the DOM so they remain indexable.
 */
export default function Accordion({ items, defaultOpen = 0, className = '' }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, idx) => {
        const open = openIndex === idx;
        const buttonId = `${baseId}-q-${idx}`;
        const panelId = `${baseId}-a-${idx}`;
        return (
          <div key={item.question} className={`accordion-item ${open ? 'is-open' : ''}`}>
            <h3 className="accordion-heading">
              <button
                id={buttonId}
                type="button"
                className="accordion-trigger"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : idx)}
              >
                <span>{item.question}</span>
                <span className="accordion-icon" aria-hidden="true">
                  <Plus className="w-4 h-4" />
                </span>
              </button>
            </h3>
            <Collapsible open={open} id={panelId}>
              <div role="region" aria-labelledby={buttonId} className="accordion-panel">
                {item.answer}
              </div>
            </Collapsible>
          </div>
        );
      })}
    </div>
  );
}
