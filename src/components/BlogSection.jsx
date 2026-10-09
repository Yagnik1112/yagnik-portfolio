import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import Carousel from './Carousel';
import { formatDate } from '../utils/formatDate';

export default function BlogSection() {
  return (
    <section id="blog" className="py-[100px] bg-[#ffffff] text-[#0a0a0a] relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          eyebrow="Technical Insights"
          title={<>Shopify & eCommerce <span className="text-[#0F5B4C]">Articles</span></>}
          action={
            <Link to="/blog" className="section-link group">
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* Latest articles slider (newest first) */}
        <ScrollReveal direction="up">
          <Carousel ariaLabel="Latest articles" perView={{ base: 1.08, sm: 2, lg: 3 }} autoplay interval={6000}>
            {blogArticles.map((article, idx) => (
              <article
                key={article.id}
                className="blog-card interactive-card group h-full rounded-2xl bg-[#f3eee6] text-[#0a0a0a] border border-black/10 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Category & Meta Header */}
                  <div className="p-6 pb-0 flex items-center justify-between text-xs text-stone-600 font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-[#f5f1ea] border border-[#0F5B4C]/30 text-[#0F5B4C] font-bold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-stone-500">
                      <Clock className="w-3.5 h-3.5 text-[#0F5B4C]" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="blog-card-index" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors duration-300 mb-3 leading-snug">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="text-stone-600 text-xs leading-relaxed line-clamp-3 mb-6 font-medium">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-stone-500 font-mono font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#0F5B4C]" />
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </span>

                  <Link
                    to={`/blog/${article.slug}`}
                    className="link-arrow font-bold text-[#0F5B4C] hover:text-[#0c4a3e] flex items-center gap-1 transition-colors"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0F5B4C]" />
                  </Link>
                </div>
              </article>
            ))}
          </Carousel>
        </ScrollReveal>

      </div>
    </section>
  );
}
