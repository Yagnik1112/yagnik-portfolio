import { useState } from 'react';
import SEO from '../components/SEO';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';
import Accordion from '../components/Accordion';

const faqs = [
  {
    question: 'What is your project turnaround time?',
    answer: 'For custom Shopify 2.0 section development, standard turnaround is 2-4 business days. Full custom theme builds typically take 2-4 weeks depending on scope.'
  },
  {
    question: 'Do you build custom Shopify Apps?',
    answer: 'Yes, I write private custom Python and Node.js applications connecting external warehouse hardware, REST/GraphQL APIs, and custom inventory databases to Shopify stores.'
  },
  {
    question: 'Are you available for contract or full-time roles?',
    answer: 'Yes! I am open to international contract projects, remote freelance engagements, and full-time Shopify developer opportunities.'
  },
  {
    question: 'Can you migrate existing stores to Shopify 2.0?',
    answer: 'Absolutely. I migrate legacy Shopify themes (or WooCommerce / Magento stores) to modern Shopify OS 2.0 architecture with zero downtime and SEO retention.'
  }
];

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

      <div className="page-container bg-[#faf8f5] text-[#0a0a0a]">
        {/* Dynamic Background Orbs */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#0F5B4C]/10 rounded-full blur-[170px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="page-intro max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] text-xs font-mono tracking-widest uppercase mb-4">
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
              Let's Work <span className="text-[#0F5B4C]">Together</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Available for custom Shopify store builds, 2.0 migrations, private app development, API integrations, and international contract opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Cards */}
            <ScrollReveal stagger direction="left" className="lg:col-span-5 flex flex-col gap-6">
              
              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card p-6 rounded-2xl bg-white border border-black/10 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 group-hover:bg-[#0F5B4C] group-hover:text-white transition-all">
                  <WhatsappIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#0F5B4C] uppercase tracking-wider font-semibold">WhatsApp Direct</div>
                  <div className="text-base font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
                    +91 97128 47247
                  </div>
                </div>
              </a>

              {/* Direct Email Card */}
              <a
                href={`mailto:${siteData.email}`}
                className="contact-card p-6 rounded-2xl bg-white border border-black/10 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C] group-hover:bg-[#0F5B4C] group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email Direct</div>
                  <div className="text-base font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
                    {siteData.email}
                  </div>
                </div>
              </a>

              {/* Direct Phone Card */}
              <a
                href={`tel:+91${siteData.phone}`}
                className="contact-card p-6 rounded-2xl bg-white border border-black/10 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C] group-hover:bg-[#0F5B4C] group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Phone / Call</div>
                  <div className="text-base font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
                    {siteData.phoneFormatted}
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-white border border-black/10 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Location</div>
                  <div className="text-base font-bold text-[#0a0a0a]">
                    {siteData.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="p-6 rounded-2xl bg-white border border-black/10 flex flex-col gap-4 shadow-sm">
                <div className="text-xs font-mono text-[#0F5B4C] uppercase tracking-wider font-bold">Online Profiles:</div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={siteData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-xs font-semibold flex items-center gap-2"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0F5B4C]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={siteData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-xs font-semibold flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4 text-[#0F5B4C]" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={siteData.freelancer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-xs font-semibold flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#0F5B4C]" />
                    <span>Freelancer</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

            </ScrollReveal>

            {/* Right Column: Contact Form */}
            <ScrollReveal direction="up" delay={120} className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-black/10 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6">Send a Direct Message</h2>

              {submitted ? (
                <div className="form-success p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col items-center text-center gap-3" role="status">
                  <CheckCircle2 className="w-12 h-12 text-[#0F5B4C]" />
                  <h3 className="text-lg font-bold text-[#0a0a0a]">Opening Email Client...</h3>
                  <p className="text-xs text-gray-600">
                    Thank you! Your email client has been launched with your message pre-filled to <strong className="text-[#0F5B4C]">{siteData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="tactile-btn tactile-btn-white px-4 py-2 text-xs font-semibold mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-gray-600 uppercase mb-2">
                        Your Name <span className="text-[#0F5B4C]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a0a0a] focus:border-[#0F5B4C] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-gray-600 uppercase mb-2">
                        Your Email <span className="text-[#0F5B4C]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a0a0a] focus:border-[#0F5B4C] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-gray-600 uppercase mb-2">
                      Project Details & Message <span className="text-[#0F5B4C]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows="6"
                      required
                      placeholder="Tell me about your Shopify store requirements, timeline, or scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0a0a0a] focus:border-[#0F5B4C] focus:outline-none transition-colors resize-none"
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

          {/* Frequently Asked Questions */}
          <ScrollReveal direction="up" className="mt-20 p-8 sm:p-10 rounded-2xl bg-white border border-black/10 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">Frequently Asked Questions</h2>
            <Accordion items={faqs} />
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
