import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { Mail, ExternalLink, ArrowUp, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import ScrollReveal from './ScrollReveal';
import { useSmoothScroll } from '../utils/smoothScrollContext';

export default function Footer() {
  const { scrollTo } = useSmoothScroll();
  const scrollToTop = () => scrollTo(0);

  const whatsappUrl = `https://wa.me/919712847247?text=${encodeURIComponent("Hi Yagnik, I saw your portfolio and would like to connect.")}`;

  return (
    <footer className="footer-root">

      {/* Full-width Responsive Background Images covering entire footer */}
      <img
        src="/images/profile/footer_desktop.png"
        alt=""
        className="footer-bg-desktop"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <img
        src="/images/profile/footer_mobile.png"
        alt=""
        className="footer-bg-mobile"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      {/* Atmospheric dark gradient overlay */}
      <div className="footer-ambient-overlay" aria-hidden="true"></div>

      {/* ─── CTA BANNER ─── */}
      <div className="footer-cta-banner">
        <ScrollReveal stagger direction="up" className="footer-cta-content">
          <div className="footer-cta-badge">
            <span className="footer-cta-badge-dot"></span>
            <span>Let's work together</span>
          </div>
          <h2 className="footer-cta-heading">
            Let's build your<br />next big idea.
          </h2>
          <p className="footer-cta-sub">
            From Shopify storefronts to custom Python apps — I craft digital experiences that convert and scale.
          </p>
          <Link to="/contact" className="footer-glass-btn btn-arrow">
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </ScrollReveal>
      </div>

      {/* ─── FLOATING FROSTED GLASS FOOTER PANEL ─── */}
      <div className="footer-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="footer-glass-panel">

            <div className="footer-body-grid">

              {/* Brand Info with Stylized Signature */}
              <div className="footer-brand">
                <Link to="/" className="brand-logo-link group" aria-label="Yagnik Bavaliya Home">
                  <div className="brand-signature-wrap">
                    <span className="brand-signature brand-signature-white">
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

                  <div className="brand-divider brand-divider-white"></div>

                  <div className="brand-text-block">
                    <div className="brand-name-row">
                      <span className="brand-surname brand-surname-white">BAVALIYA</span>
                      <span className="brand-dot"></span>
                    </div>
                    <span className="brand-sub brand-sub-white">
                      WEB &amp; SHOPIFY DEV
                    </span>
                  </div>
                </Link>

                <p className="footer-brand-bio">
                  Specialized Shopify 2.0 theme development, custom Liquid solutions, third-party app integrations, and technical eCommerce optimization for global brands.
                </p>

                <div className="footer-brand-location">
                  📍 Surat, Gujarat, India
                </div>
              </div>

              {/* Navigation Links */}
              <div className="footer-col">
                <h4 className="footer-col-heading">Navigation</h4>
                <nav aria-label="Footer navigation" className="footer-col-links footer-col-links-grid">
                  <Link to="/about" className="footer-link">About</Link>
                  <Link to="/services" className="footer-link">Services</Link>
                  <Link to="/skills" className="footer-link">Skills</Link>
                  <Link to="/projects" className="footer-link">Projects</Link>
                  <Link to="/blog" className="footer-link">Blog</Link>
                  <Link to="/contact" className="footer-link">Contact</Link>
                </nav>
              </div>

              {/* Connect & Hire */}
              <div className="footer-col">
                <h4 className="footer-col-heading">Connect &amp; Hire</h4>
                <div className="footer-col-links">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link footer-link-icon"
                    aria-label="WhatsApp"
                  >
                    <WhatsappIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3 opacity-40 shrink-0" />
                  </a>

                  <a
                    href={siteData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link footer-link-icon"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2] shrink-0" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-40 shrink-0" />
                  </a>

                  <a
                    href={siteData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link footer-link-icon"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4 text-white/80 shrink-0" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-40 shrink-0" />
                  </a>

                  <a
                    href={siteData.freelancer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link footer-link-icon"
                    aria-label="Freelancer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#00b5fd] shrink-0" />
                    <span>Freelancer Profile</span>
                    <ExternalLink className="w-3 h-3 opacity-40 shrink-0" />
                  </a>

                  <a
                    href={`mailto:${siteData.email}`}
                    className="footer-link footer-link-icon"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{siteData.email}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
              <div className="footer-copyright">
                © {new Date().getFullYear()} Yagnik Bavaliya. All rights reserved.
              </div>

              <button
                onClick={scrollToTop}
                className="footer-back-top"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>

          </ScrollReveal>
        </div>
      </div>

    </footer>
  );
}
