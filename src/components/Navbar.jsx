import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { siteData } from '../data/siteData';
import { WhatsappIcon } from './Icons';
import { smoothScrollToId } from '../utils/smoothScroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 py-[20px] transition-all duration-300 ${isScrolled
        ? 'bg-[#0B1D17]/95 backdrop-blur-xl border-b border-sand-subtle shadow-2xl'
        : 'bg-[#0B1D17]/90 backdrop-blur-md border-b border-sand-subtle/30'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Brand Logo - Generous top/bottom clearance so text is NEVER cut off */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus:outline-none py-1 my-auto shrink-0"
          aria-label="Yagnik Bavaliya Home"
        >
          <div className="w-10 h-10 rounded-xl bg-forest-card border border-gold/40 flex items-center justify-center text-gold group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] transition-all duration-300 shadow-md shrink-0">
            <span className="font-extrabold text-lg tracking-wider leading-none">Y</span>
          </div>
          <div className="flex flex-col justify-center my-auto">
            <span className="font-extrabold text-cream tracking-wide group-hover:text-gold transition-colors duration-300 text-base sm:text-lg leading-tight">
              YAGNIK
            </span>
            <span className="text-[10px] tracking-widest text-gold font-mono uppercase leading-tight font-bold">
              Shopify Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation ONLY (Shown on lg:flex 1024px and up) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#132E24]/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-sand-subtle/40 shadow-md">
          {navLinks.map((link) => {
            const isPageActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${isPageActive
                  ? 'text-forest-dark bg-gold shadow-sm font-bold'
                  : 'text-cream hover:text-gold hover:bg-[#0B1D17]'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Group (Shown on lg:flex 1024px and up) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs px-4 py-2 flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <WhatsappIcon className="w-3.5 h-3.5 text-white" />
            <span>WhatsApp</span>
          </a>

          <a
            href={siteData.resumeUrl}
            download="yagnik-bavaliya-resume.pdf"
            className="btn-secondary text-xs px-4 py-2 border-gold/40 hover:border-gold group"
            aria-label="Download Resume"
          >
            <Download className="w-3.5 h-3.5 text-gold group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Tablet & Mobile Hamburger Button (Shown on ALL screens under 1024px lg:hidden) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-forest-card border border-sand-subtle text-cream hover:text-gold focus:outline-none shadow-md"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6 text-cream" />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer Navigation (Under 1024px lg:hidden) - 100% Opaque Solid Dark Background */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0B1D17] border-b border-gold/40 p-6 shadow-2xl z-50 transition-all animate-in fade-in duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${location.pathname === link.path
                  ? 'bg-gold text-[#0B1D17] font-bold shadow-md'
                  : 'text-cream hover:bg-gold hover:text-[#0B1D17] hover:font-bold hover:shadow-md'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-sand-subtle mt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs py-3 w-full justify-center"
              >
                <WhatsappIcon className="w-4 h-4" />
                <span>WhatsApp (+91 97128 47247)</span>
              </a>

              <a
                href={siteData.resumeUrl}
                download="yagnik-bavaliya-resume.pdf"
                className="btn-primary text-xs py-3 w-full justify-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

