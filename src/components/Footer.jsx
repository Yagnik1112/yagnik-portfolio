import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Mail, ExternalLink, ArrowUp, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/919712847247?text=${encodeURIComponent("Hi Yagnik, I saw your portfolio and would like to connect.")}`;

  return (
    <footer className="bg-[#0B1D17] border-t border-sand-subtle/30 pt-16 pb-12 text-sand/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-sand-subtle/20 items-start">

          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-3">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-forest-card border border-gold/40 flex items-center justify-center text-gold font-extrabold text-lg shadow-md">
                Y
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-cream text-xl tracking-wide">
                  YAGNIK BAVALIYA
                </span>
                <span className="text-xs text-gold font-mono uppercase tracking-wider">
                  Shopify Developer & eCommerce Developer
                </span>
              </div>
            </Link>

            <p className="text-xs text-sand/70 max-w-sm mt-2 leading-relaxed">
              Specialized Shopify 2.0 theme development, custom Liquid solutions, third-party app integrations, and technical eCommerce optimization for global brands.
            </p>

            <div className="text-xs font-mono text-sand/60 mt-1">
              Surat, Gujarat, India
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono text-gold uppercase tracking-wider font-bold">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <Link to="/about" className="hover:text-gold transition-colors">About</Link>
              <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              <Link to="/skills" className="hover:text-gold transition-colors">Skills</Link>
              <Link to="/projects" className="hover:text-gold transition-colors">Projects</Link>
              <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Connect Profiles */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono text-gold uppercase tracking-wider font-bold">
              Connect & Hire
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp (+91 97128 47247)</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>

              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-gold" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>

              <a
                href={siteData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4 text-gold" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>

              <a
                href={siteData.freelancer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
                aria-label="Freelancer"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>Freelancer Profile</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>

              <a
                href={`mailto:${siteData.email}`}
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gold" />
                <span>yagnikbavaliya@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-sand/70">
            © 2026 Yagnik Bavaliya. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-[#132E24] border border-gold/40 text-gold hover:bg-gold hover:text-[#0B1D17] transition-all duration-300 shadow-md font-mono text-xs font-bold flex items-center gap-1.5 focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
