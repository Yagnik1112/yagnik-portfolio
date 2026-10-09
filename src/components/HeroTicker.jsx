const items = [
  'Custom Shopify Storefronts',
  'Liquid Theme Engineering',
  'Custom Python Inventory Apps',
  'High-Converting Commerce UX',
  'Shopify OS 2.0 Migrations',
  'Speed & Core Web Vitals Optimization',
  'Shopify Markets & Localization',
  'Private API Integrations'
];

// One group is wide enough to fill large screens; two identical groups make the -50% loop seamless.
const group = [...items, ...items];

export default function HeroTicker() {
  return (
    <div className="ticker w-full bg-[#f6f5f0] border-t border-black/10 py-6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#0F5B4C] font-extrabold inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0F5B4C]"></span>
          <span>WHAT I BUILD FOR GROWING TEAMS</span>
        </span>
      </div>

      {/* Screen readers get a plain list once; the animated copies are decorative */}
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="ticker-viewport relative w-full overflow-hidden" aria-hidden="true">
        <div className="ticker-track animate-marquee whitespace-nowrap py-1">
          {[0, 1].map((copy) => (
            <div key={copy} className="ticker-group">
              {group.map((item, index) => (
                <div key={`${copy}-${index}`} className="ticker-item">
                  <span className="ticker-text">{item}</span>
                  <span className="ticker-dot"></span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
