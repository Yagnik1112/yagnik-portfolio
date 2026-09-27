import React, { useState } from 'react';
import SEO from '../components/SEO';
import { blogArticles } from '../data/blogData';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(blogArticles.map((a) => a.category))];

  const filteredArticles = blogArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Shopify & eCommerce Blog | Yagnik Bavaliya"
        description="Technical guides, Liquid optimization tips, Shopify 2.0 theme architecture, Metafields tutorial, and eCommerce performance engineering by Yagnik Bavaliya."
        canonical="https://yagnik-portfolio.vercel.app/blog"
      />

      <div className="py-[60px] lg:py-[100px] bg-[#0B1D17] min-h-screen relative overflow-hidden">
        {/* Dynamic Animated Ambient Background Orbs */}
        <div className="absolute top-1/4 right-10 w-[650px] h-[650px] bg-emerald-500/15 rounded-full blur-[170px] pointer-events-none animate-float-orb"></div>
        <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-gold/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute top-2/3 right-1/3 w-[450px] h-[450px] bg-emerald-700/10 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Ambient Grid & Dot Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
        <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4">
              <span>Engineering Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream tracking-tight mb-4">
              Shopify & eCommerce <span className="gold-gradient-text">Technical Articles</span>
            </h1>
            <p className="text-sand/85 text-base sm:text-lg leading-relaxed">
              In-depth tutorials, theme development guides, Liquid syntax tips, and performance engineering strategies written for developers and merchants.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 p-4 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-xl">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gold text-forest-dark shadow-md'
                      : 'text-sand/80 hover:text-gold hover:bg-forest-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gold pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0B1D17] border border-sand-subtle/30 rounded-full pl-10 pr-4 py-2.5 text-xs text-cream placeholder:text-sand/60 focus:border-gold focus:outline-none transition-colors shadow-inner"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="interactive-card group rounded-2xl bg-forest-card border border-sand-subtle/20 hover:border-gold/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="p-6 pb-0 flex items-center justify-between text-xs text-sand/70 font-mono">
                    <span className="px-2.5 py-1 rounded bg-[#0B1D17] border border-gold/30 text-gold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-cream group-hover:text-gold transition-colors duration-300 mb-3 leading-snug">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="text-sand/80 text-xs leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-sand-subtle/20 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-sand/60 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>

                  <Link
                    to={`/blog/${article.slug}`}
                    className="font-semibold text-gold hover:text-gold-light flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
