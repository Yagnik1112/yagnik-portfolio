import React, { useState } from 'react';
import SEO from '../components/SEO';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/Icons';
import MagneticButton from '../components/MagneticButton';

export default function ContactPage() {
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

  const whatsappUrl = `https://wa.me/919712847247?text=${encodeURIComponent("Hi Yagnik, I am interested in your Shopify development services.")}`;

  return (
    <>
      <SEO
        title="Contact Yagnik Bavaliya | Shopify Developer"
        description="Get in touch with Yagnik Bavaliya, Senior Shopify Developer in Surat, India. Available for custom themes, 2.0 migrations, Python apps, and freelance projects."
        canonical="https://yagnik-portfolio.vercel.app/contact"
      />

      <div className="py-[60px] lg:py-[100px] bg-[#0B1D17] min-h-screen relative overflow-hidden">
        {/* Animated Ambient Background Visuals */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[170px] pointer-events-none animate-float-orb"></div>
        <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-gold/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4">
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream tracking-tight mb-4">
              Let's Work <span className="gold-gradient-text">Together</span>
            </h1>
            <p className="text-sand/85 text-base sm:text-lg leading-relaxed">
              Available for custom Shopify store builds, 2.0 migrations, private app development, API integrations, and international contract opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-forest-card border border-sand-subtle/30 hover:border-gold/50 transition-all duration-300 flex items-center gap-4 group shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-forest-dark transition-all">
                  <WhatsappIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gold uppercase tracking-wider">WhatsApp Direct</div>
                  <div className="text-base font-bold text-cream group-hover:text-gold transition-colors">
                    +91 97128 47247
                  </div>
                </div>
              </a>

              {/* Direct Email Card */}
              <a
                href={`mailto:${siteData.email}`}
                className="p-6 rounded-2xl bg-forest-card border border-sand-subtle/30 hover:border-gold/50 transition-all duration-300 flex items-center gap-4 group shadow-xl"
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

              {/* Direct Phone Card */}
              <a
                href={`tel:+91${siteData.phone}`}
                className="p-6 rounded-2xl bg-forest-card border border-sand-subtle/30 hover:border-gold/50 transition-all duration-300 flex items-center gap-4 group shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest-dark transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-sand/70 uppercase tracking-wider">Phone / Call</div>
                  <div className="text-base font-bold text-cream group-hover:text-gold transition-colors">
                    {siteData.phoneFormatted}
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-forest-card border border-sand-subtle/30 flex items-center gap-4 shadow-xl">
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

              {/* Social Profiles */}
              <div className="p-6 rounded-2xl bg-forest-card border border-sand-subtle/30 flex flex-col gap-4 shadow-xl">
                <div className="text-xs font-mono text-gold uppercase tracking-wider font-bold">Online Profiles:</div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={siteData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#0B1D17] border border-sand-subtle/20 hover:border-gold/50 text-cream hover:text-gold text-xs font-semibold flex items-center gap-2 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-gold" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={siteData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#0B1D17] border border-sand-subtle/20 hover:border-gold/50 text-cream hover:text-gold text-xs font-semibold flex items-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-gold" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={siteData.freelancer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#0B1D17] border border-sand-subtle/20 hover:border-gold/50 text-cream hover:text-gold text-xs font-semibold flex items-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-gold" />
                    <span>Freelancer</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-forest-card p-8 sm:p-10 rounded-2xl border border-sand-subtle/30 shadow-2xl">
              <h2 className="text-2xl font-bold text-cream mb-6">Send a Direct Message</h2>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-emerald-200 flex flex-col items-center text-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-gold" />
                  <h3 className="text-lg font-bold text-cream">Opening Email Client...</h3>
                  <p className="text-xs text-sand/90">
                    Thank you! Your email client has been launched with your message pre-filled to <strong className="text-gold">{siteData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-sand/80 uppercase mb-2">
                        Your Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0B1D17] border border-sand-subtle/30 rounded-xl px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-sand/80 uppercase mb-2">
                        Your Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0B1D17] border border-sand-subtle/30 rounded-xl px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-sand/80 uppercase mb-2">
                      Project Details & Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows="6"
                      required
                      placeholder="Tell me about your Shopify store requirements, timeline, or scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0B1D17] border border-sand-subtle/30 rounded-xl px-4 py-3 text-sm text-cream focus:border-gold focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <MagneticButton className="self-start mt-2">
                    <button type="submit" className="btn-primary">
                      <span>Let's Talk</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>

          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl">
            <h2 className="text-2xl font-bold text-cream mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#0B1D17] border border-sand-subtle/20">
                <h3 className="text-base font-bold text-gold mb-2">What is your project turnaround time?</h3>
                <p className="text-xs text-sand/80 leading-relaxed">
                  For custom Shopify 2.0 section development, standard turnaround is 2-4 business days. Full custom theme builds typically take 2-4 weeks depending on scope.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0B1D17] border border-sand-subtle/20">
                <h3 className="text-base font-bold text-gold mb-2">Do you build custom Shopify Apps?</h3>
                <p className="text-xs text-sand/80 leading-relaxed">
                  Yes, I write private custom Python and Node.js applications connecting external warehouse hardware, REST/GraphQL APIs, and custom inventory databases to Shopify stores.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0B1D17] border border-sand-subtle/20">
                <h3 className="text-base font-bold text-gold mb-2">Are you available for contract or full-time roles?</h3>
                <p className="text-xs text-sand/80 leading-relaxed">
                  Yes! I am open to international contract projects, remote freelance engagements, and full-time Shopify developer opportunities.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0B1D17] border border-sand-subtle/20">
                <h3 className="text-base font-bold text-gold mb-2">Can you migrate existing stores to Shopify 2.0?</h3>
                <p className="text-xs text-sand/80 leading-relaxed">
                  Absolutely. I migrate legacy Shopify themes (or WooCommerce / Magento stores) to modern Shopify OS 2.0 architecture with zero downtime and SEO retention.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
