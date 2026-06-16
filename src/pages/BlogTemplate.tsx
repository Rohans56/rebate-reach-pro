import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { ArrowRight, Clock, Calendar, User, ChevronRight } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: React.ReactNode;
  relatedPosts?: { slug: string; title: string }[];
}

export const BlogTemplate = ({ post }: { post: BlogPost }) => {
  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={`https://adsaaustraliansolar.com.au/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.metaDescription,
            "author": { "@type": "Organization", "name": "ADSA Australian Solar" },
            "publisher": {
              "@type": "Organization",
              "name": "ADSA Australian Solar",
              "url": "https://adsaaustraliansolar.com.au"
            },
            "datePublished": post.date,
            "mainEntityOfPage": `https://adsaaustraliansolar.com.au/blog/${post.slug}`
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#1e3a5f] to-[#2a4f80] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80 truncate">{post.title}</span>
          </div>

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 bg-[#f26b3a]/20 border border-[#f26b3a]/30 text-[#f26b3a] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            {post.category}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main content */}
            <article className="lg:col-span-2 prose prose-lg max-w-none
              prose-headings:font-extrabold prose-headings:text-[#1e3a5f]
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
              prose-li:text-gray-600 prose-li:mb-2
              prose-strong:text-[#1e3a5f]
              prose-a:text-[#f26b3a] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-[#f26b3a] prose-blockquote:bg-orange-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:not-italic
              prose-table:text-sm prose-th:bg-[#1e3a5f] prose-th:text-white prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-gray-200
            ">
              {post.content}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">

              {/* CTA card */}
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4f80] rounded-2xl p-6 text-white sticky top-24">
                <div className="w-12 h-12 bg-[#f26b3a]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#f26b3a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Get Your Free Solar Quote</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">See exactly how much you could save. No obligation, response within 24 hours.</p>
                <button
                  onClick={scrollToContact}
                  className="w-full bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </button>
                <a href="tel:0469312118" className="w-full mt-3 border border-white/20 hover:border-white/40 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                  📞 0469 312 118
                </a>
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  {["CEC Accredited Installer", "25-Year Panel Warranty", "500+ Installations"].map(t => (
                    <div key={t} className="flex items-center gap-2 text-xs text-white/60">
                      <svg className="w-3.5 h-3.5 text-[#2eb87a] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related posts */}
              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-[#1e3a5f] mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {post.relatedPosts.map(p => (
                      <Link key={p.slug} to={`/blog/${p.slug}`} className="flex items-start gap-2 text-sm text-gray-600 hover:text-[#f26b3a] transition-colors group">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#f26b3a] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{p.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Suburb links */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#1e3a5f] mb-4">Find Solar in Your Suburb</h3>
                <div className="space-y-2">
                  {[
                    { label: "Werribee", slug: "werribee" },
                    { label: "Tarneit", slug: "tarneit" },
                    { label: "Point Cook", slug: "point-cook" },
                    { label: "Craigieburn", slug: "craigieburn" },
                    { label: "Melton", slug: "melton" },
                    { label: "Pakenham", slug: "pakenham" },
                  ].map(({ label, slug }) => (
                    <Link key={slug} to={`/solar-panels-${slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#f26b3a] transition-colors group">
                      <ArrowRight className="w-3.5 h-3.5 text-[#f26b3a] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      Solar Panels {label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-[#2eb87a] to-[#1ea866]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Make the Switch?</h2>
          <p className="text-white/80 mb-8">Get a free, no-obligation quote from Melbourne's trusted solar installer. We'll walk you through exactly what system you need and what rebates you qualify for.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={scrollToContact} className="flex items-center gap-2 bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </button>
            <a href="tel:0469312118" className="flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/25 transition-colors">
              📞 0469 312 118
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </>
  );
};
