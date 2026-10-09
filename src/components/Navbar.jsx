import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';
import { WhatsappIcon } from './Icons';
import { useSmoothScroll } from '../utils/smoothScrollContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const whatsappUrl = `https://wa.me/919712847247?text=${encodeURIComponent("Hi Yagnik, I am interested in your Shopify development services.")}`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState(null);
  const location = useLocation();
  const { scrollTo, stop, start } = useSmoothScroll();
  const progressRef = useRef(null);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scrolled state + reading progress bar (progress written directly to the DOM to avoid re-renders)
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Close the mobile menu whenever the route changes
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMobileMenuOpen(false);
  }

  // Lock page scroll while the mobile menu is open; close it on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    stop();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      start();
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen, stop, start]);

  const isLinkActive = useCallback(
    (path) => (path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)),
    [location.pathname]
  );

  // Sliding active-link indicator for the desktop nav
  const measureIndicator = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const active = nav.querySelector('[data-active="true"]');
    if (!active || active.offsetWidth === 0) {
      setIndicator(null);
      return;
    }
    setIndicator({ x: active.offsetLeft, w: active.offsetWidth });
  }, []);

  useLayoutEffect(() => {
    measureIndicator();
  }, [location.pathname, measureIndicator]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measureIndicator);
    ro.observe(nav);
    document.fonts?.ready.then(measureIndicator);
    return () => ro.disconnect();
  }, [measureIndicator]);

  const handleLinkClick = (path) => {
    setMobileMenuOpen(false);
    if (location.pathname === path) {
      scrollTo(0);
    }
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} className="scroll-progress-bar" />
      </div>

      <div
        className={`mobile-menu-backdrop lg:hidden ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <header id="site-header" className="site-header fixed top-3 sm:top-4 left-0 right-0 w-full z-50 px-3 sm:px-6">
        {/* Floating Header Glass Shell Pill */}
        <div className={`site-header-pill site-header-enter ${isScrolled ? 'is-scrolled' : ''}`}>

          {/* Brand Logo - Left Side */}
          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className="brand-logo-link group"
            aria-label="Yagnik Bavaliya Home"
          >
            {/* Handwritten Signature with Dynamic Brush Underline */}
            <div className="brand-signature-wrap">
              <span className="brand-signature">
                Yagnik
              </span>
              <svg
                className="brand-underline"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 8.5C24 4.5 62 2 97 7.5"
                  stroke="#e10600"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Vertical Divider */}
            <div className="brand-divider"></div>

            {/* Typography Lockup */}
            <div className="brand-text-block">
              <div className="brand-name-row">
                <span className="brand-surname">BAVALIYA</span>
                <span className="brand-dot"></span>
              </div>
              <span className="brand-sub">
                WEB &amp; SHOPIFY DEV
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Centered Pill) */}
          <nav ref={navRef} aria-label="Primary navigation" className="site-nav hidden lg:flex items-center">
            {indicator && (
              <span
                className="site-nav-indicator"
                aria-hidden="true"
                style={{ width: indicator.w, transform: `translateX(${indicator.x}px)` }}
              />
            )}
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  data-active={active}
                  aria-current={active ? 'page' : undefined}
                  className={`site-nav-link ${active ? 'is-active' : ''}`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Group - Right Side */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn tactile-btn-whatsapp flex h-9 items-center gap-1.5 px-3.5 text-xs font-semibold"
              aria-label="Chat on WhatsApp"
            >
              <WhatsappIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={siteData.resumeUrl}
              download="yagnik-bavaliya-resume.pdf"
              className="tactile-btn tactile-btn-white btn-icon-bob flex h-9 items-center gap-1.5 px-3.5 text-xs font-semibold"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5 text-[#0F5B4C]" />
              <span>Resume</span>
            </a>

            <Link
              to="/contact"
              onClick={() => handleLinkClick('/contact')}
              className="tactile-btn tactile-btn-dark btn-arrow-diagonal group flex h-9 sm:h-10 items-center gap-1.5 px-4 text-[13px] font-semibold text-white"
            >
              <span className="text-white">Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Mobile Hamburger Button (morphs into a close icon) */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`tactile-btn tactile-icon-btn hamburger lg:hidden flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center ${mobileMenuOpen ? 'is-open' : ''}`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="hamburger-lines" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Mobile Floating Drawer Menu */}
          <div
            id="mobile-menu"
            className={`mobile-menu lg:hidden ${mobileMenuOpen ? 'is-open' : ''}`}
            inert={!mobileMenuOpen}
            data-lenis-prevent
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1.5">
              {navLinks.map((link, idx) => {
                const active = isLinkActive(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    aria-current={active ? 'page' : undefined}
                    style={{ '--i': idx }}
                    className={`mobile-menu-link ${active ? 'is-active' : ''}`}
                  >
                    <span>{link.name}</span>
                    {active ? <span className="mobile-menu-dot"></span> : <ArrowUpRight className="mobile-menu-arrow" aria-hidden="true" />}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions Drawer Footer */}
            <div className="mobile-menu-actions" style={{ '--i': navLinks.length }}>
              <Link
                to="/contact"
                onClick={() => handleLinkClick('/contact')}
                className="tactile-btn tactile-btn-dark w-full py-3 px-4 text-xs flex items-center justify-center gap-2"
              >
                <span className="text-white">Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-btn tactile-btn-whatsapp w-full py-3 px-4 text-xs flex items-center justify-center gap-2"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={siteData.resumeUrl}
                download="yagnik-bavaliya-resume.pdf"
                className="tactile-btn tactile-btn-white w-full py-3 px-4 text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0F5B4C]" />
                <span>Resume</span>
              </a>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
