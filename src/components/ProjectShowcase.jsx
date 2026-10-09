import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import Carousel from './Carousel';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import { useMediaQuery, usePrefersReducedMotion } from '../hooks/useMotion';
import { useSmoothScroll } from '../utils/smoothScrollContext';

// The scroll-linked stage needs room; phones, short screens and reduced-motion users get the swipe carousel.
const STAGE_QUERY = '(min-width: 768px) and (min-height: 620px)';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const smoothstep = (t) => t * t * (3 - 2 * t);
const pad = (n) => String(n).padStart(2, '0');
const domainOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

function ShowcaseHeader({ totalCount, onHint, showHint }) {
  return (
    <div className="showcase-header">
      <div>
        <ScrollReveal as="p" direction="fade" className="showcase-eyebrow">
          <span className="showcase-eyebrow-dot" aria-hidden="true"></span>
          Selected Work <span aria-hidden="true">•</span> Featured Case Studies
        </ScrollReveal>
        <ScrollReveal as="h2" direction="up" delay={80} className="showcase-title">
          Work that speaks <em>for itself.</em>
        </ScrollReveal>
      </div>
      <ScrollReveal direction="up" delay={160} className="showcase-header-actions">
        {showHint && (
          <button type="button" className="showcase-hint" onClick={onHint}>
            <span>Scroll down to slide</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
        <Link to="/projects" className="tactile-btn tactile-btn-dark btn-arrow-diagonal px-5 py-3 text-xs font-semibold">
          <span>All {totalCount} Works</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </div>
  );
}

function ShowcaseCard({ project, index, total, eager }) {
  const highlight = project.keyFunctionality?.[0];
  return (
    <>
      {/* Browser chrome */}
      <div className="showcase-chrome">
        <span className="showcase-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span className="showcase-url">
          <span className="showcase-url-dot" aria-hidden="true"></span>
          {domainOf(project.url)}
        </span>
        <span className="showcase-meta">
          <span className="showcase-count">{pad(index + 1)} / {pad(total)}</span>
          <span className="showcase-category">{project.category}</span>
        </span>
      </div>

      {/* Screenshot */}
      <div className="showcase-media">
        <img
          src={project.image}
          alt={`${project.title} website`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width="1600"
          height="1000"
        />
        {highlight && (
          <span className="showcase-badge">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            {highlight}
          </span>
        )}
      </div>

      {/* Title & actions */}
      <div className="showcase-footer">
        <div className="min-w-0">
          {project.industry && <p className="showcase-industry">{project.industry}</p>}
          <h3 className="showcase-name">{project.title}</h3>
        </div>
        <div className="showcase-actions">
          <Link to={`/projects/${project.slug}`} className="showcase-btn showcase-btn-ghost">
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="showcase-btn showcase-btn-solid">
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

/** Sticky, scroll-linked horizontal stage (tablet & desktop). */
function ShowcaseStage({ projects, totalCount, filterLinks }) {
  const n = projects.length;
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const slotRefs = useRef([]);
  const fillRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollTo } = useSmoothScroll();

  // Scroll position → fractional slide position → per-card 3D transforms (written directly to the DOM)
  useEffect(() => {
    let frame = 0;
    let step = 800;
    let shift = 0;

    const measure = () => {
      const card = slotRefs.current[0];
      const stageWidth = stageRef.current?.offsetWidth || window.innerWidth;
      step = (card?.offsetWidth || 760) + Math.max(48, stageWidth * 0.035);
      shift = stageWidth * 0.06; // keeps the active card left of center so the next one peeks in
    };

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const span = section.offsetHeight - window.innerHeight;
      const progress = span > 0 ? clamp(-section.getBoundingClientRect().top / span, 0, 1) : 0;
      const raw = progress * (n - 1);
      const base = Math.floor(raw);
      // Ease each step so a card settles (and briefly holds) in the active spot
      const pos = Math.min(n - 1, base + smoothstep(clamp((raw - base - 0.12) / 0.76, 0, 1)));

      slotRefs.current.forEach((slot, i) => {
        if (!slot) return;
        const d = i - pos;
        const ad = Math.abs(d);
        const x = d * step - shift;
        const z = -Math.min(ad, 2) * 140;
        const rotY = clamp(-d * 18, -34, 34);
        const rotZ = clamp(d * 2.4, -4, 4);
        const scale = 1 - Math.min(ad, 2) * 0.05;
        const opacity = d < 0 ? clamp(1 + d * 1.15, 0, 1) : clamp(2.6 - d, 0, 1);
        slot.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), -50%, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        slot.style.opacity = opacity.toFixed(3);
        slot.style.zIndex = String(100 - Math.round(ad * 10));
        slot.style.visibility = opacity <= 0.01 ? 'hidden' : 'visible';
      });

      if (fillRef.current) fillRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
      const index = Math.round(pos);
      setActive((prev) => (prev === index ? prev : index));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize);
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
    ro?.observe(stageRef.current);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      ro?.disconnect();
    };
  }, [n]);

  // Jump to a slide by scrolling the page to the matching point of the section
  const goTo = useCallback(
    (index) => {
      const section = sectionRef.current;
      if (!section) return;
      const target = clamp(index, 0, n - 1);
      const span = section.offsetHeight - window.innerHeight;
      const top = section.getBoundingClientRect().top + window.scrollY;
      scrollTo(Math.round(top + (span * target) / (n - 1)));
    },
    [n, scrollTo]
  );

  // Gentle pointer tilt on the active card
  const onPointerMove = (e) => {
    const card = slotRefs.current[active]?.firstElementChild;
    if (!card || e.pointerType !== 'mouse') return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (Math.abs(px) > 0.6 || Math.abs(py) > 0.6) return;
    card.style.setProperty('--tilt-x', `${(-py * 5).toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${(px * 6).toFixed(2)}deg`);
  };
  const resetTilt = () => {
    slotRefs.current.forEach((slot) => {
      slot?.firstElementChild?.style.setProperty('--tilt-x', '0deg');
      slot?.firstElementChild?.style.setProperty('--tilt-y', '0deg');
    });
  };

  const current = projects[active];

  return (
    <div ref={sectionRef} className="showcase" style={{ '--slides': n }}>
      <div className="showcase-sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ShowcaseHeader totalCount={totalCount} showHint={active === 0} onHint={() => goTo(1)} />
        </div>

        <div
          ref={stageRef}
          className="showcase-stage"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured case studies"
          onPointerMove={onPointerMove}
          onPointerLeave={resetTilt}
        >
          {projects.map((project, i) => (
            <div
              key={project.slug}
              ref={(el) => { slotRefs.current[i] = el; }}
              className={`showcase-slot ${i === active ? 'is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${project.title}`}
              onClick={i === active ? undefined : () => goTo(i)}
            >
              <article className="showcase-card" inert={i !== active}>
                {/* Preload the cards about to slide in so their screenshots are ready */}
                <ShowcaseCard project={project} index={i} total={n} eager={Math.abs(i - active) <= 2} />
              </article>
            </div>
          ))}

          <button
            type="button"
            className="showcase-arrow showcase-arrow-prev"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous project"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="showcase-arrow showcase-arrow-next"
            onClick={() => goTo(active + 1)}
            disabled={active === n - 1}
            aria-label="Next project"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress, current project and category shortcuts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="showcase-bar">
            <div className="showcase-progress">
              <span className="showcase-progress-num">{pad(active + 1)}</span>
              <span className="showcase-progress-track" aria-hidden="true">
                <span ref={fillRef} className="showcase-progress-fill"></span>
              </span>
              <span className="showcase-progress-num">{pad(n)}</span>
              <span className="showcase-progress-dots">
                {projects.map((p, i) => (
                  <button
                    key={p.slug}
                    type="button"
                    className={`showcase-dot ${i === active ? 'is-active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to ${p.title}`}
                    aria-current={i === active ? 'true' : undefined}
                  />
                ))}
              </span>
            </div>

            <p className="showcase-current" aria-live="polite">
              <span className="showcase-current-dot" aria-hidden="true"></span>
              <span key={current.slug} className="showcase-current-name">{current.title}</span>
            </p>

            <div className="showcase-filters">
              {filterLinks.map((f) => (
                <Link key={f.value} to={`/projects?filter=${encodeURIComponent(f.value)}`} className="showcase-filter">
                  {f.label} ({f.count})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Featured projects showcase. Uses the scroll-linked 3D stage on larger screens and falls back to
 * the swipeable carousel on phones, short viewports and for reduced-motion users.
 */
export default function ProjectShowcase({ projects, totalCount, filterLinks = [] }) {
  const largeScreen = useMediaQuery(STAGE_QUERY);
  const reducedMotion = usePrefersReducedMotion();

  if (largeScreen && !reducedMotion) {
    return <ShowcaseStage projects={projects} totalCount={totalCount} filterLinks={filterLinks} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ShowcaseHeader totalCount={totalCount} showHint={false} />
      <ScrollReveal direction="up" className="mt-10">
        <Carousel ariaLabel="Featured case studies" perView={{ base: 1.08, sm: 2, lg: 3 }}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Carousel>
      </ScrollReveal>
    </div>
  );
}
