import { useState } from 'react';
import SEO from '../components/SEO';
import { blogArticles } from '../data/blogData';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SegmentedTabs from '../components/SegmentedTabs';
import { formatDate } from '../utils/formatDate';

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

      <div className="page-container bg-[#faf8f5] text-[#0a0a0a]">
        {/* Dynamic Background Orbs */}
        <div className="absolute top-1/4 right-10 w-[650px] h-[650px] bg-[#0F5B4C]/10 rounded-full blur-[170px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-[#10B981]/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="page-intro max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] text-xs font-mono tracking-widest uppercase mb-4">
              <span>Engineering Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4">
              Shopify & eCommerce <span className="text-[#0F5B4C]">Technical Articles</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              In-depth tutorials, theme development guides, Liquid syntax tips, and performance engineering strategies written for developers and merchants.
            </p>
          </div>

          {/* Filter Bar */}
          <ScrollReveal direction="up" delay={250} className="filter-bar flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 p-4 rounded-2xl bg-white border border-black/10 shadow-sm">
            {/* Category filter with sliding indicator */}
            <SegmentedTabs
              mode="filter"
              items={categories}
              value={activeCategory}
              onChange={setActiveCategory}
              ariaLabel="Filter articles by category"
            />

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="search"
                aria-label="Search articles"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-xs text-[#0a0a0a] placeholder:text-gray-400 focus:border-[#0F5B4C] focus:outline-none transition-colors"
              />
            </div>
          </ScrollReveal>

          {/* Articles Grid */}
          <ScrollReveal key={activeCategory} stagger direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="blog-card group rounded-2xl bg-white border border-black/10 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="p-6 pb-0 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 text-[#0F5B4C] font-semibold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0F5B4C]" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors duration-300 mb-3 leading-snug">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-black/10 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </span>

                  <Link
                    to={`/blog/${article.slug}`}
                    className="link-arrow font-semibold text-[#0F5B4C] hover:text-[#10B981] flex items-center gap-1 transition-colors"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </ScrollReveal>

          {filteredArticles.length === 0 && (
            <p className="empty-state">No articles match your search.</p>
          )}

        </div>
      </div>
    </>
  );
}
