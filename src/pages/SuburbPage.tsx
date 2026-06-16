import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { CheckCircle, Star, Phone, ArrowRight, MapPin, Zap, Battery, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SuburbData {
  suburb: string;
  slug: string;
  region: string;
  postcode: string;
  blurb: string;
  nearbySuburbs: string[];
  projectExample?: {
    type: string;
    size: string;
    saving: string;
  };
}

const reviews = [
  { name: "Sarah M.", text: "ADSA installed our solar system professionally and on time. Bills dropped dramatically from day one.", rating: 5 },
  { name: "James T.", text: "Really happy with the whole process — quote, install, rebate paperwork all sorted. Highly recommend.", rating: 5 },
  { name: "Priya K.", text: "Great local team, excellent communication and a spotless installation. Best decision we've made.", rating: 5 },
];

const services = [
  { icon: Sun, title: "Solar Panel Installation", desc: "Premium tier-1 panels with 25-year performance warranty. Sized perfectly for your home and usage." },
  { icon: Battery, title: "Battery Storage Systems", desc: "Store your solar energy and power your home at night. Government rebates up to $5,000 available now." },
  { icon: Zap, title: "Solar + Battery Packages", desc: "The ultimate combination. Maximise self-sufficiency and lock in the biggest savings available." },
];

export const SuburbPage = ({ data }: { data: SuburbData }) => {
  const scrollToContact = () => {
    const el = document.getElementById("suburb-contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Solar Panels {data.suburb} | ADSA Australian Solar | Local Installer</title>
        <meta
          name="description"
          content={`Looking for solar panels in ${data.suburb}? ADSA Australian Solar installs solar panels and battery systems across ${data.suburb}, ${data.region}. Government rebates up to $18,500. Free quote today.`}
        />
        <meta name="keywords" content={`solar panels ${data.suburb}, solar installation ${data.suburb}, solar installer ${data.suburb}, battery installation ${data.suburb}, solar rebates ${data.suburb}, solar ${data.suburb} ${data.postcode}`} />
        <link rel="canonical" href={`https://adsaaustraliansolar.com.au/solar-panels-${data.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ADSA Australian Solar",
            "description": `Solar panel and battery installation in ${data.suburb}, ${data.region}`,
            "url": `https://adsaaustraliansolar.com.au/solar-panels-${data.slug}`,
            "telephone": "0469312118",
            "email": "info@adsaaustraliansolar.com.au",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": data.suburb,
              "addressRegion": "VIC",
              "postalCode": data.postcode,
              "addressCountry": "AU"
            },
            "areaServed": {
              "@type": "City",
              "name": data.suburb
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4f80] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f26b3a] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2eb87a] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Solar Panels {data.suburb}</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f26b3a]/20 border border-[#f26b3a]/30 text-[#f26b3a] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <MapPin className="w-3.5 h-3.5" /> Servicing {data.suburb} & Surrounds
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Solar Panels{" "}
              <span className="text-[#f26b3a]">{data.suburb}</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              {data.blurb}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#f26b3a]/30 transition-all hover:-translate-y-0.5"
              >
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:0469312118"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" /> 0469 312 118
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              {["CEC Accredited Installer", "25-Year Panel Warranty", "500+ Installations", "4.9★ Rating"].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#2eb87a]" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY SOLAR IN THIS SUBURB */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-6">
            Why {data.suburb} Homeowners Are Going Solar
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Homeowners in {data.suburb} are switching to solar faster than ever — and it's easy to see why. With electricity prices rising every year, a quality solar and battery system is one of the smartest investments you can make for your home in {data.region}.
            </p>
            <p>
              At ADSA Australian Solar, we've completed installations across {data.suburb} and the wider {data.region} corridor. We understand the local roof types, energy usage patterns, and grid connection requirements in the area — which means a faster, smoother installation and a system sized exactly for your needs.
            </p>
            <p>
              Right now, Victorian homeowners in {data.suburb} can access government rebates of up to <strong className="text-[#f26b3a]">$18,500</strong> — combining the federal STC solar rebate and the Cheaper Home Batteries Program. These rebates reduce every year, so acting now means locking in the maximum savings.
            </p>
            {data.projectExample && (
              <div className="bg-[#e8f8f1] border border-[#2eb87a]/30 rounded-2xl p-6 not-prose">
                <p className="text-sm font-bold text-[#2eb87a] uppercase tracking-wide mb-2">Recent Project Near You</p>
                <p className="text-[#1e3a5f] font-bold text-lg">{data.projectExample.type} installed near {data.suburb}</p>
                <p className="text-gray-600 text-sm mt-1">System size: <strong>{data.projectExample.size}</strong> · Estimated saving: <strong className="text-[#f26b3a]">{data.projectExample.saving}/year</strong></p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] text-center mb-4">
            Our Solar Services in {data.suburb}
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Whether you want solar only, a battery add-on, or a full solar + battery package, we've got you covered.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#f26b3a]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#f26b3a]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REBATES */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Government Rebates Available in {data.suburb}
          </h2>
          <p className="text-white/75 mb-10 text-lg">
            Victorian homeowners are eligible for multiple rebates right now. Here's what's on offer:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { amount: "Up to $3,500", label: "Solar Panel Rebate", note: "STC Federal Rebate" },
              { amount: "Up to $5,000", label: "Battery Storage Rebate", note: "Cheaper Home Batteries Program" },
              { amount: "3–5 Years", label: "Typical Payback Period", note: "Then free power for 20+ years" },
            ].map(({ amount, label, note }) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <p className="text-3xl font-extrabold text-[#f26b3a] mb-1">{amount}</p>
                <p className="font-bold text-white">{label}</p>
                <p className="text-white/55 text-sm mt-1">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-sm">
            Rebates decrease annually. Lock in the maximum available in {data.suburb} by acting before June 30.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] text-center mb-10">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f97316] text-[#f97316]" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">"{r.text}"</p>
                <p className="font-bold text-[#1e3a5f] text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY SUBURBS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-extrabold text-[#1e3a5f] mb-6 text-center">
            We Also Service Nearby Areas
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {data.nearbySuburbs.map((s) => (
              <Link
                key={s}
                to={`/solar-panels-${s.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#f26b3a] hover:text-[#f26b3a] text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" /> Solar Panels {s}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="suburb-contact" className="py-16 bg-gradient-to-br from-[#2eb87a] to-[#1ea866]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get Your Free Solar Quote in {data.suburb}
          </h2>
          <p className="text-white/80 mb-8">
            No pressure, no obligation — just an honest assessment of what solar could save you.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-left">
            <form
              name={`suburb-quote-${data.slug}`}
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch within 24 hours."); }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Full Name *</label>
                  <input required placeholder="John Smith" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Phone Number *</label>
                  <input required type="tel" placeholder="0400 000 000" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Email Address *</label>
                <input required type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Suburb *</label>
                  <input required defaultValue={data.suburb} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">What are you interested in?</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10">
                    <option>Solar Panels</option>
                    <option>Battery System</option>
                    <option>Solar + Battery Package</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <textarea placeholder="Anything else? (optional)" rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26b3a] focus:ring-2 focus:ring-[#f26b3a]/10 resize-none" />
              <button type="submit" className="w-full bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Get My Free Quote <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-gray-400">No spam. Your info is 100% secure.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </>
  );
};
