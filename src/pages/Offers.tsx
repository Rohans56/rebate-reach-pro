import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const OffersPage = () => {
  return (
    <>
      <Helmet>
        <title>Current Offers | EOFY Solar & Battery Deals | ADSA Australian Solar</title>
        <meta name="description" content="ADSA Australian Solar current offers — End of Financial Year Mega Sale. 10.56kW Solar + 30kWh Battery for $8,500. CEC Accredited. Limited stock. Contact us today." />
        <link rel="canonical" href="https://adsaaustraliansolar.com.au/offers" />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #f8fffe 0%, #eef8f5 40%, #fef4f0 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(242,107,58,0.08) 0%, transparent 70%)" }} />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 bg-[#f26b3a]/10 text-[#f26b3a] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Clock className="w-3.5 h-3.5" /> Current Offers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e3a5f] leading-tight mb-5">
              End of Financial Year <br />
              <span style={{ background: "linear-gradient(135deg, #f26b3a, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Mega Sale
              </span>
            </h1>
            <p className="text-lg text-[#3a5070] max-w-xl mx-auto leading-relaxed">
              Our biggest deal of the year. Premium solar and battery system at an unbeatable price — for a limited time only.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            {/* Banner image — full width, high quality */}
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#1e3a5f]/15 mb-12">
              <img
                src="/eofy-offer.jpg"
                alt="ADSA Australian Solar EOFY Mega Sale — 10.56kW Solar + 30kWh Battery for $8,500. CEC Accredited, Solar Victoria, NETC Approved."
                className="w-full h-auto block"
              />
            </div>

            {/* What's included breakdown */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-[#f26b3a]" />
                  <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-widest">What's included</span>
                </div>
                <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-6">10.56kW Solar + 30kWh Battery — $8,500</h2>
                <div className="space-y-3 mb-8">
                  {[
                    "10.56kW high-efficiency solar panel system",
                    "30kWh battery storage",
                    "CEC accredited installation by licensed electricians",
                    "Grid connection application handled by ADSA",
                    "Government rebates applied at point of sale",
                    "25-year panel performance warranty",
                    "10-year installation workmanship warranty",
                    "Wi-Fi monitoring setup included",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2eb87a] flex-shrink-0 mt-0.5" />
                      <span className="text-[#3a5070]">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 italic">*T&Cs Apply. Limited stock available. Contact us to confirm availability.</p>
              </div>

              {/* CTA panel */}
              <div className="sticky top-28">
                <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #1e3a5f, #2a4f80)" }}>
                  <div className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">EOFY Sale Price</div>
                  <div className="text-6xl font-black text-[#f26b3a] mb-1">$8,500</div>
                  <div className="text-white/50 text-sm mb-8">*T&Cs Apply</div>

                  <div className="space-y-3 mb-8">
                    {[
                      { label: "System Size", value: "10.56 kW Solar" },
                      { label: "Battery Storage", value: "30 kWh" },
                      { label: "Accreditation", value: "CEC Accredited" },
                      { label: "Stock", value: "Limited — act fast" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/50 text-sm">{label}</span>
                        <span className="text-white font-semibold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f26b3a]/30 mb-3 group"
                  >
                    Claim This Offer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:0469312118"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4" /> 0469 312 118
                  </a>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {["CEC Accredited", "Solar Victoria", "NETC Approved", "Fully Licensed"].map(b => (
                      <div key={b} className="flex items-center gap-1.5 text-xs text-white/50">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2eb87a] flex-shrink-0" /> {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFFER BANNER 2 — EOFY Sale Reminder */}
      <section className="py-16" style={{ background: "#f8fffe" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            {/* Banner image — full width, high quality */}
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#1e3a5f]/15 mb-12">
              <img
                src="/eofy-offer-2.png"
                alt="ADSA Australian Solar EOFY Sale Reminder — Ends June 30. 6.6kW Solar + Battery Packages from $6,990. CEC Accredited, Solar Victoria, NETC Approved."
                className="w-full h-auto block"
              />
            </div>

            {/* What's included breakdown */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-[#f26b3a]" />
                  <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-widest">What's included</span>
                </div>
                <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-6">6.6kW Solar + Battery Packages — From $6,990</h2>
                <div className="space-y-3 mb-8">
                  {[
                    "6.6kW high-efficiency solar panel system",
                    "Battery storage included",
                    "CEC accredited installation by licensed electricians",
                    "Grid connection application handled by ADSA",
                    "Government rebates applied at point of sale",
                    "25-year panel performance warranty",
                    "10-year installation workmanship warranty",
                    "Wi-Fi monitoring setup included",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2eb87a] flex-shrink-0 mt-0.5" />
                      <span className="text-[#3a5070]">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 italic">*T&Cs Apply. Price may vary depending on system size and site requirements. Picture is for illustration purposes only.</p>
              </div>

              {/* CTA panel */}
              <div className="sticky top-28">
                <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #1e3a5f, #2a4f80)" }}>
                  <div className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">EOFY Sale Reminder — Ends June 30</div>
                  <div className="text-5xl font-black text-[#f26b3a] mb-1">From $6,990</div>
                  <div className="text-white/50 text-sm mb-8">*T&Cs Apply</div>

                  <div className="space-y-3 mb-8">
                    {[
                      { label: "System Size", value: "6.6 kW Solar" },
                      { label: "Battery Storage", value: "Included" },
                      { label: "Accreditation", value: "CEC Accredited" },
                      { label: "Offer Ends", value: "June 30" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/50 text-sm">{label}</span>
                        <span className="text-white font-semibold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f26b3a]/30 mb-3 group"
                  >
                    Claim This Offer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:0469312118"
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4" /> 0469 312 118
                  </a>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {["CEC Accredited", "Solar Victoria", "NETC Approved", "Fully Licensed"].map(b => (
                      <div key={b} className="flex items-center gap-1.5 text-xs text-white/50">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2eb87a] flex-shrink-0" /> {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-16" style={{ background: "#1e3a5f" }}>
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <p className="text-white/50 text-sm uppercase tracking-widest font-bold mb-1">Don't miss out</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Contact us for End of Financial Year discounts.</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link to="/contact" className="flex items-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 group">
              Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:0469312118" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-full transition-colors">
              <Phone className="w-4 h-4" /> 0469 312 118
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </>
  );
};

export default OffersPage;
