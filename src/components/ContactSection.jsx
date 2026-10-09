import { useState } from 'react';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';

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
    <section id="contact" className="py-[100px] bg-[#f6f5f0] text-[#0a0a0a] relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          align="center"
          eyebrow="Get In Touch"
          title={<>Let's work <span className="text-[#0F5B4C]">together.</span></>}
          subtitle="Available for custom Shopify theme builds, 2.0 migrations, private apps, API integrations, and international client opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <ScrollReveal stagger direction="left" className="lg:col-span-5 flex flex-col gap-6">
            
            <a
              href={`mailto:${siteData.email}`}
              className="contact-card p-6 rounded-2xl bg-white text-[#0a0a0a] border border-black/10 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C] group-hover:bg-[#0F5B4C] group-hover:text-white transition-all shadow-2xs">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-bold">Email Direct</div>
                <div className="text-base font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
                  {siteData.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:+91${siteData.phone}`}
              className="contact-card p-6 rounded-2xl bg-white text-[#0a0a0a] border border-black/10 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C] group-hover:bg-[#0F5B4C] group-hover:text-white transition-all shadow-2xs">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-bold">Phone / WhatsApp</div>
                <div className="text-base font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
                  {siteData.phoneFormatted}
                </div>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-white text-[#0a0a0a] border border-black/10 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C] shadow-2xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider font-bold">Location</div>
                <div className="text-base font-bold text-[#0a0a0a]">
                  {siteData.location}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white text-[#0a0a0a] border border-black/10 flex flex-col gap-4 shadow-sm">
              <div className="text-xs font-mono text-[#0F5B4C] uppercase tracking-wider font-bold">Professional Profiles:</div>
              <div className="flex flex-wrap items-center gap-3">
                
                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill px-4 py-2.5 rounded-xl bg-[#f5f1ea] border border-black/10 text-stone-800 text-xs font-semibold flex items-center gap-2"
                  aria-label="Yagnik Bavaliya LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0F5B4C]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60 text-stone-500" />
                </a>

                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill px-4 py-2.5 rounded-xl bg-[#f5f1ea] border border-black/10 text-stone-800 text-xs font-semibold flex items-center gap-2"
                  aria-label="Yagnik Bavaliya GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-[#0F5B4C]" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60 text-stone-500" />
                </a>

                <a
                  href={siteData.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill px-4 py-2.5 rounded-xl bg-[#f5f1ea] border border-black/10 text-stone-800 text-xs font-semibold flex items-center gap-2"
                  aria-label="Yagnik Bavaliya Freelancer Profile"
                >
                  <MessageSquare className="w-4 h-4 text-[#0F5B4C]" />
                  <span>Freelancer</span>
                  <ExternalLink className="w-3 h-3 opacity-60 text-stone-500" />
                </a>

              </div>
            </div>

          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} className="contact-form-card lg:col-span-7 bg-white text-[#0a0a0a] p-8 sm:p-10 rounded-2xl border border-black/10 shadow-xl">
            <h3 className="text-2xl font-bold text-[#0a0a0a] mb-6 flex items-center gap-2">
              <span>Send a Direct Message</span>
            </h3>

            {submitted ? (
              <div className="form-success p-6 rounded-2xl bg-[#f5f1ea] border border-[#0F5B4C]/30 text-stone-800 flex flex-col items-center text-center gap-3" role="status">
                <CheckCircle2 className="w-12 h-12 text-[#0F5B4C]" />
                <h4 className="text-lg font-bold text-[#0a0a0a]">Opening Email Client...</h4>
                <p className="text-xs text-stone-600 font-medium">
                  Thank you! Your email client has been launched with your message pre-filled to <strong className="text-[#0F5B4C]">{siteData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-full border border-[#0F5B4C] text-[#0F5B4C] hover:bg-[#0F5B4C] hover:text-white text-xs font-semibold mt-2 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-stone-700 font-bold uppercase mb-2">
                      Your Name <span className="text-[#0F5B4C]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input w-full bg-[#f5f1ea] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-stone-400 focus:border-[#0F5B4C] focus:outline-none transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-stone-700 font-bold uppercase mb-2">
                      Your Email <span className="text-[#0F5B4C]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input w-full bg-[#f5f1ea] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-stone-400 focus:border-[#0F5B4C] focus:outline-none transition-colors font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-stone-700 font-bold uppercase mb-2">
                    Project Details & Message <span className="text-[#0F5B4C]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Tell me about your Shopify store requirements, timeline, or scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input w-full bg-[#f5f1ea] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-stone-400 focus:border-[#0F5B4C] focus:outline-none transition-colors resize-none font-medium"
                  ></textarea>
                </div>

                <div className="self-start mt-2">
                  <button type="submit" className="tactile-btn tactile-btn-emerald btn-send px-8 py-3.5 text-xs font-semibold flex items-center gap-2">
                    <span>Let's Talk</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
