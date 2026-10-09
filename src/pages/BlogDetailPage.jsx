import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogArticles } from '../data/blogData';
import { ChevronRight, ArrowLeft, Calendar, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { formatDate } from '../utils/formatDate';

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

      <div className="page-container bg-[#faf8f5] text-[#0a0a0a]">
        {/* Dynamic Ambient Background Orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0F5B4C]/10 rounded-full blur-[170px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="page-intro-item flex items-center gap-2 text-xs font-mono text-gray-500 mb-8">
            <Link to="/" className="hover:text-[#0F5B4C] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/blog" className="hover:text-[#0F5B4C] transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0F5B4C] font-semibold truncate max-w-xs">{article.title}</span>
          </nav>

          {/* Back button */}
          <Link
            to="/blog"
            className="page-intro-item inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#0F5B4C] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#0F5B4C]" />
            <span>Back to All Articles</span>
          </Link>

          {/* Header info */}
          <div className="page-intro mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] font-semibold">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-gray-500">
                <Calendar className="w-3.5 h-3.5 text-[#0F5B4C]" />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </span>
              <span className="flex items-center gap-1 text-gray-500">
                <Clock className="w-3.5 h-3.5 text-[#0F5B4C]" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-black/10 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#0F5B4C] text-white flex items-center justify-center font-bold text-sm">
                YB
              </div>
              <div>
                <div className="text-sm font-bold text-[#0a0a0a]">{article.author}</div>
                <div className="text-xs text-[#0F5B4C] font-mono">Shopify Developer & eCommerce Developer</div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <ScrollReveal as="article" direction="up" delay={300} className="article-body p-8 sm:p-12 rounded-2xl bg-white border border-black/10 shadow-sm mb-16 text-gray-800 space-y-6 text-base leading-relaxed">
            {article.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-[#0a0a0a] mt-8 mb-4 pt-4 border-t border-black/10">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'code') {
                return (
                  <pre key={idx} className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-emerald-400 font-mono text-xs overflow-x-auto my-4 shadow-inner">
                    <code>{block.code}</code>
                  </pre>
                );
              }
              return (
                <p key={idx} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {block.text}
                </p>
              );
            })}
          </ScrollReveal>

          {/* Related Articles */}
          <ScrollReveal direction="up" className="pt-12 border-t border-black/10">
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">Related Articles</h2>
            <ScrollReveal stagger direction="up" className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((relArt) => (
                <div key={relArt.id} className="blog-card group p-5 rounded-xl bg-white border border-black/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#0F5B4C] font-semibold">{relArt.category}</span>
                    <h3 className="text-sm font-bold text-[#0a0a0a] hover:text-[#0F5B4C] transition-colors mt-1 mb-2">
                      <Link to={`/blog/${relArt.slug}`}>{relArt.title}</Link>
                    </h3>
                  </div>
                  <Link to={`/blog/${relArt.slug}`} className="link-arrow text-xs font-semibold text-[#0F5B4C] flex items-center gap-1 mt-3" aria-label={`Read: ${relArt.title}`}>
                    <span>Read</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </ScrollReveal>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
