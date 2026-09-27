import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import MagneticButton from './MagneticButton';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-[60px] lg:py-[100px] bg-[#132E24] relative overflow-hidden border-t border-sand-subtle/30">
      {/* Animated Ambient Background Visuals */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none animate-float-orb"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/15 rounded-full blur-[170px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mx-auto max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-dark border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-3">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cream tracking-tight">
            Let's work <span className="gold-gradient-text">together.</span>
          </h2>
          <p className="text-sand/85 text-base max-w-xl mt-3 text-center">
            Available for custom Shopify theme builds, 2.0 migrations, private apps, API integrations, and international client opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <a
              href={`mailto:${siteData.email}`}
              className="p-6 rounded-2xl bg-[#0B1D17]/80 border border-sand-subtle/30 hover:border-gold/50 transition-all duration-300 flex items-center gap-4 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-dark transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-sand/70 uppercase tracking-wider">Email Direct</div>
                <div className="text-base font-bold text-cream group-hover:text-gold transition-colors">
                  {siteData.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:+91${siteData.phone}`}
              className="p-6 rounded-2xl bg-[#0B1D17]/80 border border-sand-subtle/30 hover:border-gold/50 transition-all duration-300 flex items-center gap-4 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-dark transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-sand/70 uppercase tracking-wider">Phone / WhatsApp</div>
                <div className="text-base font-bold text-cream group-hover:text-gold transition-colors">
                  {siteData.phoneFormatted}
                </div>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-[#0B1D17]/80 border border-sand-subtle/30 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-sand/70 uppercase tracking-wider">Location</div>
                <div className="text-base font-bold text-cream">
                  {siteData.location}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1D17]/80 border border-sand-subtle/30 flex flex-col gap-4 shadow-xl">
              <div className="text-xs font-mono text-gold uppercase tracking-wider">Professional Profiles:</div>
              <div className="flex flex-wrap items-center gap-3">
                
                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-forest-card border border-sand-subtle/20 hover:border-gold/50 text-cream hover:text-gold text-xs font-semibold flex items-center gap-2 transition-all"
                  aria-label="Yagnik Bavaliya LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-gold" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-forest-card border border-sand-subtle/20 hover:border-gold/50 text-cream hover:text-gold text-xs font-semibold flex items-center gap-2 transition-all"
                  aria-label="Yagnik Bavaliya GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-gold" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={siteData.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-forest-card border border-sand-subtle/20 hover:border-gold/50 text-cream hover:text-gold text-xs font-semibold flex items-center gap-2 transition-all"
                  aria-label="Yagnik Bavaliya Freelancer Profile"
                >
                  <MessageSquare className="w-4 h-4 text-gold" />
                  <span>Freelancer</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

              </div>
            </div>

          </div>

          <div className="lg:col-span-7 bg-[#0B1D17] p-8 sm:p-10 rounded-2xl border border-sand-subtle/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-cream mb-6 flex items-center gap-2">
              <span>Send a Direct Message</span>
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-emerald-200 flex flex-col items-center text-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-gold" />
                <h4 className="text-lg font-bold text-cream">Opening Email Client...</h4>
                <p className="text-xs text-sand/90">
                  Thank you! Your email client has been launched with your message pre-filled to <strong className="text-gold">{siteData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs mt-2 px-4 py-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-sand/80 uppercase mb-2">
                      Your Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-forest-card border border-sand-subtle/30 rounded-xl px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-sand/80 uppercase mb-2">
                      Your Email <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-forest-card border border-sand-subtle/30 rounded-xl px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-sand/80 uppercase mb-2">
                    Project Details & Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Tell me about your Shopify store requirements, timeline, or scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-forest-card border border-sand-subtle/30 rounded-xl px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <MagneticButton className="self-start mt-2">
                  <button type="submit" className="btn-primary text-sm px-8 py-3.5">
                    <span>Let's Talk</span>
                    <Send className="w-4 h-4" />
                  </button>
                </MagneticButton>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
