import React from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';

export default function BlogSection() {
  const latestArticles = blogArticles.slice(0, 3);

  return (
    <section id="blog" className="py-[60px] lg:py-[100px] bg-[#0B1D17] relative overflow-hidden border-t border-sand-subtle/30">
      {/* Animated Ambient Background Visuals */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none animate-float-orb"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gold/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-card border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-3">
              <span>Technical Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
              Shopify & eCommerce <span className="gold-gradient-text">Articles</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="btn-outline text-xs px-5 py-2.5 flex items-center gap-2 hover:border-gold group self-start md:self-auto"
          >
            <span>View All {blogArticles.length} Articles</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <article
              key={article.id}
              className="interactive-card group rounded-2xl bg-forest-card border border-sand-subtle/20 hover:border-gold/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Category & Meta Header */}
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
                  <h3 className="text-xl font-bold text-cream group-hover:text-gold transition-colors duration-300 mb-3 leading-snug">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>

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
    </section>
  );
}
