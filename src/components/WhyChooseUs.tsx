import { motion } from "framer-motion";
import { CheckCircle, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";

const trustPoints = [
  { label: "Local Melbourne-Based Team", detail: "Based in Epping, servicing Melbourne's North, West and South-East" },
  { label: "Licensed Solar & Electrical Experts", detail: "CEC accredited installers · Electrical licence VIC" },
  { label: "Quality Solar & Battery Systems", detail: "Tier-1 panels: Jinko, LONGi, REC · Batteries: Tesla, BYD, Sungrow, Growatt" },
  { label: "Assistance With Available Rebates", detail: "We handle all STC and battery rebate paperwork at no extra charge" },
  { label: "Transparent Pricing", detail: "No hidden fees — your quote is exactly what you pay" },
  { label: "Ongoing Support After Installation", detail: "10-year workmanship warranty · 25-year panel warranty · Local aftercare" },
];

const brands = ["Jinko", "LONGi", "REC", "Tesla", "BYD", "Sungrow", "Growatt", "GoodWe", "Fronius"];

const suburbs = [
  "Epping", "Craigieburn", "Werribee", "Tarneit", "Point Cook",
  "Melton", "Clyde North", "Cranbourne", "Berwick", "Truganina",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const WhyChooseUs = () => (
  <div>
    {/* ── WHY CHOOSE US ── photo background */}
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <img src="/install-1.jpg" alt="ADSA solar installer placing panel on roof" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(30,58,95,0.95) 0%, rgba(30,58,95,0.90) 50%, rgba(30,58,95,0.80) 100%)" }} />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#2eb87a]" />
            <span className="text-xs font-bold text-[#2eb87a] uppercase tracking-[0.2em]">Why choose ADSA</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Why Choose ADSA Australian Solar
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mb-14">
          {trustPoints.map((point, i) => (
            <motion.div key={point.label} variants={fadeUp} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }} className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#2eb87a] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white mb-1">{point.label}</div>
                <div className="text-sm text-white/55 leading-relaxed">{point.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews trust signal */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10 border-t border-white/10">
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#f97316] text-[#f97316]" />)}
              <span className="text-white font-bold ml-2">4.9 / 5</span>
            </div>
            <p className="text-white/50 text-sm">Based on Google Reviews from verified customers</p>
          </div>
          <a
            href="https://www.google.com/search?q=ADSA+Australian+Solar+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all"
          >
            View Google Reviews <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>

    {/* ── BRANDS WE INSTALL ── */}
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-6">Brands we install</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {brands.map(b => (
              <span key={b} className="text-sm font-bold text-[#1e3a5f]/50 hover:text-[#1e3a5f] transition-colors">{b}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── SERVICE AREA ── */}
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f26b3a]" />
            <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-widest">Where we work</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#1e3a5f] mb-2">
            Proudly servicing Melbourne's North, West and South-East
          </h3>
          <p className="text-gray-400 text-sm mb-6">Based in Epping — close to the communities we serve.</p>
          <div className="flex flex-wrap gap-3">
            {suburbs.map(s => (
              <Link
                key={s}
                to={`/solar-installers-${s.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-semibold text-[#1e3a5f] bg-white border border-gray-200 hover:border-[#f26b3a] hover:text-[#f26b3a] px-4 py-2 rounded-full transition-colors"
              >
                {s}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);
