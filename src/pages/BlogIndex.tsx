import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { allPosts } from "./BlogPosts";

export const BlogIndex = () => {
  return (
    <>
      <Helmet>
        <title>Solar Blog | Tips, Guides & Rebate News | ADSA Australian Solar</title>
        <meta name="description" content="Expert solar advice for Melbourne homeowners. Guides on solar rebates, battery storage, costs, feed-in tariffs, EV charging and more from ADSA Australian Solar." />
        <link rel="canonical" href="https://adsaaustraliansolar.com.au/blog" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4f80] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#f26b3a]/20 border border-[#f26b3a]/30 text-[#f26b3a] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Solar Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Solar Guides for <span className="text-[#f26b3a]">Melbourne Homeowners</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            Honest, practical advice on solar panels, battery storage, government rebates and everything else you need to make the smartest energy decision for your home.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Category colour bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#f26b3a] to-[#f97316]" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Category */}
                  <span className="inline-block text-xs font-bold text-[#f26b3a] uppercase tracking-widest mb-3">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-extrabold text-[#1e3a5f] mb-3 leading-snug group-hover:text-[#f26b3a] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-[#f26b3a] group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#2eb87a] to-[#1ea866]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Solar for Your Home?</h2>
          <p className="text-white/80 mb-8">Get a free, no-obligation quote from Melbourne's trusted solar installer.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </>
  );
};
