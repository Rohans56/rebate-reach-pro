import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { CheckCircle, Phone, ArrowRight, MapPin, Zap, Battery, Sun, Shield, Clock, Star } from "lucide-react";

export interface InstallerSuburbData {
  suburb: string;
  slug: string;
  region: string;
  postcode: string;
  intro: string;
  whyLocal: string;
  nearbySuburbs: { name: string; slug: string }[];
  faqItems: { q: string; a: string }[];
  projectExample?: { type: string; size: string; saving: string; location: string };
}

export const InstallerSuburbPage = ({ data }: { data: InstallerSuburbData }) => {
  const scrollToContact = () => {
    document.getElementById("installer-contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "ADSA Australian Solar",
        "description": `CEC accredited solar installers servicing ${data.suburb}, ${data.region}. Solar panels, battery storage and EV charger installation.`,
        "url": `https://adsaaustraliansolar.com.au/solar-installers-${data.slug}`,
        "telephone": "0469312118",
        "email": "info@adsaaustraliansolar.com.au",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "82 Yale Dr",
          "addressLocality": "Epping",
          "addressRegion": "VIC",
          "postalCode": "3076",
          "addressCountry": "AU"
        },
        "areaServed": { "@type": "City", "name": data.suburb },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqItems.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Solar Installers {data.suburb} | CEC Accredited | ADSA Australian Solar</title>
        <meta name="description" content={`Looking for trusted solar installers in ${data.suburb}? ADSA Australian Solar installs solar panels, batteries and EV chargers across ${data.suburb}. CEC accredited, government rebates up to $2,800. Free quote.`} />
        <meta name="keywords" content={`solar installers ${data.suburb}, solar installation ${data.suburb}, solar company ${data.suburb}, battery installer ${data.suburb}, solar panels ${data.suburb} ${data.postcode}, EV charger ${data.suburb}`} />
        <link rel="canonical" href={`https://adsaaustraliansolar.com.au/solar-installers-${data.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20" style={{ background: "linear-gradient(160deg, #f8fffe 0%, #eef8f5 40%, #fef4f0 100%)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#f26b3a] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Solar Installers {data.suburb}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#f26b3a]/10 text-[#f26b3a] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <MapPin className="w-3.5 h-3.5" /> Servicing {data.suburb} & Surrounds
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e3a5f] leading-tight mb-6">
            Solar Installers <br />
            <span style={{ background: "linear-gradient(135deg, #f26b3a, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {data.suburb}
            </span>
          </h1>

          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">{data.intro}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={scrollToContact} className="flex items-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f26b3a]/25 group">
              Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:0469312118" className="flex items-center gap-2 bg-white border border-gray-200 text-[#1e3a5f] font-bold px-8 py-4 rounded-full transition-all hover:shadow-md hover:-translate-y-0.5">
              <Phone className="w-4 h-4" /> 0469 312 118
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            {["CEC Accredited Installer", "Licensed Electricians", "25-Year Panel Warranty", "4.9★ Rating — 500+ Installs", "Same-Day Response"].map(t => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#2eb87a]" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#f26b3a]" />
                <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-widest">Local Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-6 leading-tight">
                Why {data.suburb} homeowners choose ADSA
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{data.whyLocal}</p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "CEC accredited — required to access government rebates" },
                  { icon: Clock, text: "Fast turnaround — most installs completed in a single day" },
                  { icon: Zap, text: "We handle all paperwork — grid connection, rebates, permits" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[#2eb87a] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats ambient */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "500+", label: "Installations completed" },
                { val: "4.9★", label: "Customer rating" },
                { val: "$2,800", label: "Max rebate available" },
                { val: "1 Day", label: "Typical install time" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center py-8 px-4 rounded-2xl" style={{ background: "linear-gradient(135deg, #f8fffe, #eef8f5)" }}>
                  <div className="text-3xl font-extrabold text-[#1e3a5f] mb-1">{val}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20" style={{ background: "#1e3a5f" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f26b3a]" />
            <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-widest">What we install in {data.suburb}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 leading-tight">
            Full solar services, <br />one local team.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              { icon: Sun, title: "Solar Panels", desc: "Tier-1 panels, 25-year performance warranty, sized for your home." },
              { icon: Battery, title: "Battery Storage", desc: "Store solar for night use. Government rebates up to $5,000." },
              { icon: Zap, title: "EV Charger Installation", desc: "Charge your EV on free solar power. Fully licensed installation." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#1e3a5f] p-8">
                <Icon className="w-8 h-8 text-[#f26b3a] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT EXAMPLE */}
      {data.projectExample && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#2eb87a]" />
              <span className="text-xs font-bold text-[#2eb87a] uppercase tracking-widest">Recent Project</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-8">Recent installation near {data.suburb}</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl" style={{ background: "linear-gradient(135deg, #f8fffe, #eef8f5)" }}>
              <div className="flex-1">
                <div className="text-sm font-bold text-[#2eb87a] uppercase tracking-wide mb-2">Completed Installation</div>
                <div className="text-2xl font-extrabold text-[#1e3a5f] mb-1">{data.projectExample.type}</div>
                <div className="text-gray-500 mb-4">{data.projectExample.location}</div>
                <div className="flex flex-wrap gap-6">
                  <div><div className="text-xs text-gray-400 mb-1">System Size</div><div className="font-bold text-[#1e3a5f]">{data.projectExample.size}</div></div>
                  <div><div className="text-xs text-gray-400 mb-1">Annual Saving</div><div className="font-bold text-[#f26b3a]">{data.projectExample.saving}</div></div>
                </div>
              </div>
              <button onClick={scrollToContact} className="flex items-center gap-2 bg-[#f26b3a] text-white font-bold px-6 py-3 rounded-full hover:bg-[#e05a2a] transition-colors">
                Get a similar quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#f26b3a]" />
              <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-widest">FAQ</span>
              <div className="h-px w-10 bg-[#f26b3a]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#1e3a5f]">Common questions from {data.suburb} homeowners</h2>
          </div>
          <div className="space-y-4">
            {data.faqItems.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-[#1e3a5f] list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-10 text-center">What our customers say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", loc: "Point Cook", text: "ADSA installed our solar system professionally. Bills dropped from $650 to $180 per quarter.", saving: "$1,900/yr" },
              { name: "Michael P.", loc: "Werribee", text: "Seamless process — they handled all the rebate paperwork. Saved nearly $8,000 upfront.", saving: "$2,300/yr" },
              { name: "Priya K.", loc: "Craigieburn", text: "Great local team, excellent communication and a spotless installation. Best decision we've made.", saving: "$1,400/yr" },
            ].map((r, i) => (
              <div key={i}>
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#f97316] text-[#f97316]" />)}</div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">"{r.text}"</p>
                <div className="border-t border-gray-100 pt-3">
                  <div className="font-bold text-[#1e3a5f] text-sm">{r.name} · {r.loc}</div>
                  <div className="text-sm text-[#2eb87a] font-semibold">Saving {r.saving}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-6">Also serving nearby suburbs</h3>
          <div className="flex flex-wrap gap-3">
            {data.nearbySuburbs.map(s => (
              <Link key={s.slug} to={`/solar-installers-${s.slug}`}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#f26b3a] border border-gray-200 hover:border-[#f26b3a] bg-white px-4 py-2 rounded-full transition-colors">
                <MapPin className="w-3.5 h-3.5" /> Solar Installers {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="installer-contact" className="py-20" style={{ background: "linear-gradient(135deg, #2eb87a, #1ea866)" }}>
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Free solar quote for {data.suburb}</h2>
          <p className="text-white/75 mb-8">No pressure, no obligation — just honest advice and a personalised system proposal.</p>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-left">
            <form onSubmit={e => { e.preventDefault(); alert("Thanks! We'll be in touch within 24 hours."); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-medium text-gray-700 block mb-1">Full Name *</label><input required placeholder="John Smith" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10" /></div>
                <div><label className="text-sm font-medium text-gray-700 block mb-1">Phone Number *</label><input required type="tel" placeholder="0400 000 000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10" /></div>
              </div>
              <div><label className="text-sm font-medium text-gray-700 block mb-1">Email Address *</label><input required type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10" /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-medium text-gray-700 block mb-1">Suburb *</label><input required defaultValue={data.suburb} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10" /></div>
                <div><label className="text-sm font-medium text-gray-700 block mb-1">Interested in?</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10">
                    <option>Solar Panels</option><option>Battery System</option><option>Solar + Battery</option><option>EV Charger</option><option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <textarea placeholder="Anything else? (optional)" rows={2} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10 resize-none" />
              <button type="submit" className="w-full bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Get My Free Quote <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-gray-400">No spam · 100% free · Response within 24 hours</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </>
  );
};
