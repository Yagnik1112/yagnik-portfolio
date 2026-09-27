import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ShopifyAppSection from '../components/ShopifyAppSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Yagnik Bavaliya | Shopify Developer & eCommerce Developer"
        description="Shopify Developer with 2+ years of experience building custom Shopify stores, Shopify 2.0 themes, apps, integrations and eCommerce solutions for international clients."
        canonical="https://yagnik-portfolio.vercel.app/"
      />
      <main>
        <Hero />
        
        <ScrollReveal direction="up" delay={100}>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal direction="scale" delay={150}>
          <StatsSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <ServicesSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <SkillsSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <ExperienceSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <FeaturedProjects />
        </ScrollReveal>

        <ScrollReveal direction="scale" delay={150}>
          <ShopifyAppSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <BlogSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <ContactSection />
        </ScrollReveal>
      </main>
    </>
  );
}
