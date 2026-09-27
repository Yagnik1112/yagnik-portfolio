import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogArticles } from '../data/blogData';
import { ChevronRight, ArrowLeft, Calendar, Clock, User, Share2, BookOpen, CheckCircle2 } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();

  const article = blogArticles.find((a) => a.slug === slug) || blogArticles[0];
  const relatedArticles = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={article.seoTitle || `${article.title} | Yagnik Bavaliya`}
        description={article.metaDescription || article.excerpt}
        canonical={`https://yagnik-portfolio.vercel.app/blog/${article.slug}`}
        ogType="article"
        article={article}
        breadcrumbs={[
          { name: 'Home', url: 'https://yagnik-portfolio.vercel.app/' },
          { name: 'Blog', url: 'https://yagnik-portfolio.vercel.app/blog' },
          { name: article.title, url: `https://yagnik-portfolio.vercel.app/blog/${article.slug}` }
        ]}
      />

      <div className="pt-32 pb-24 bg-[#0B1D17] min-h-screen relative overflow-hidden">
        {/* Dynamic Animated Ambient Background Orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[170px] pointer-events-none animate-float-orb"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>

        {/* Ambient Grid & Dot Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
        <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-sand/70 mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand/40" />
            <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-sand/40" />
            <span className="text-gold font-semibold truncate max-w-xs">{article.title}</span>
          </nav>

          {/* Back button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand hover:text-gold transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-gold" />
            <span>Back to All Articles</span>
          </Link>

          {/* Header info */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
              <span className="px-3 py-1 rounded bg-forest-card border border-gold/30 text-gold">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-sand/70">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                {article.date}
              </span>
              <span className="flex items-center gap-1 text-sand/70">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-cream tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-forest-card border border-sand-subtle/20">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold">
                YB
              </div>
              <div>
                <div className="text-sm font-bold text-cream">{article.author}</div>
                <div className="text-xs text-gold font-mono">Shopify Developer & eCommerce Developer</div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-8 sm:p-12 rounded-2xl bg-forest-card border border-sand-subtle/30 shadow-2xl mb-16 text-sand/90 space-y-6 text-base leading-relaxed">
            {article.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-cream mt-8 mb-4 pt-4 border-t border-sand-subtle/20">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'code') {
                return (
                  <pre key={idx} className="p-4 rounded-xl bg-[#0B1D17] border border-gold/30 text-emerald-300 font-mono text-xs overflow-x-auto my-4">
                    <code>{block.code}</code>
                  </pre>
                );
              }
              return (
                <p key={idx} className="text-sand/90 leading-relaxed text-sm sm:text-base">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Related Articles */}
          <div className="pt-12 border-t border-sand-subtle/30">
            <h2 className="text-2xl font-bold text-cream mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((relArt) => (
                <div key={relArt.id} className="p-5 rounded-xl bg-forest-card border border-sand-subtle/20 hover:border-gold/40 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gold">{relArt.category}</span>
                    <h3 className="text-sm font-bold text-cream hover:text-gold transition-colors mt-1 mb-2">
                      <Link to={`/blog/${relArt.slug}`}>{relArt.title}</Link>
                    </h3>
                  </div>
                  <Link to={`/blog/${relArt.slug}`} className="text-xs font-semibold text-gold flex items-center gap-1 mt-3">
                    <span>Read</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
