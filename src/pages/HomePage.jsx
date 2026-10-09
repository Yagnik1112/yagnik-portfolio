import SEO from '../components/SEO';
import Hero from '../components/Hero';
import HeroTicker from '../components/HeroTicker';
import SectionDivider from '../components/SectionDivider';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ShopifyAppSection from '../components/ShopifyAppSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';

// Each section animates its own heading, cards and panels as they scroll into view.
export default function HomePage() {
  return (
    <>
      <SEO
        title="Yagnik Bavaliya | Shopify Developer & eCommerce Developer"
        description="Shopify Developer with 2+ years of experience building custom Shopify stores, Shopify 2.0 themes, apps, integrations and eCommerce solutions for international clients."
        canonical="https://yagnik-portfolio.vercel.app/"
      />
      <div className="home-page">
        {/* Hero Section */}
        <Hero />

        {/* Ticker / What I Build For Growing Teams */}
        <HeroTicker />

        <SectionDivider />

        {/* Proven Track Record / Key Metrics (Cream background #f6f5f0) */}
        <StatsSection />

        <SectionDivider />

        {/* Selected Portfolio Work: featured slider + expandable directory (White) */}
        <FeaturedProjects />

        <SectionDivider />

        {/* Services explorer (Cream) */}
        <ServicesSection />

        <SectionDivider />

        {/* Technical Skills & Ecosystem: tabbed categories (White) */}
        <SkillsSection />

        <SectionDivider />

        {/* Custom Shopify App Spotlight (Cream) */}
        <ShopifyAppSection />

        <SectionDivider />

        {/* Work Experience Behind The Work (White) */}
        <ExperienceSection />

        <SectionDivider />

        {/* About & Engineering Philosophy (Cream) */}
        <AboutSection />

        <SectionDivider />

        {/* Blog & Articles slider (White) */}
        <BlogSection />

        <SectionDivider />

        {/* Contact & Inquiries (Cream) */}
        <ContactSection />
      </div>
    </>
  );
}
