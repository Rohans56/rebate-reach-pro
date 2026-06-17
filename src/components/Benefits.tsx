import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sun, Battery, Zap, Shield, TrendingUp, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const services = [
  {
    icon: Sun,
    number: "01",
    title: "Solar Panels",
    sub: "High-efficiency photovoltaic panels",
    body: "Premium tier-1 panels with a 25-year performance warranty — sized perfectly for your roof, your usage, and your goals. We don't do one-size-fits-all.",
    stat: "$3,500",
    statLabel: "Solar rebate available",
    color: "#f26b3a",
  },
  {
    icon: Battery,
    number: "02",
    title: "Battery Storage",
    sub: "Store your solar, use it anytime",
    body: "Never pay for grid power in the evening again. Store your midday solar energy and run your home at night — with backup power when the grid goes down.",
    stat: "$5,000",
    statLabel: "Battery rebate available",
    color: "#2eb87a",
  },
  {
    icon: Zap,
    number: "03",
    title: "Solar + Battery Packages",
    sub: "The complete energy solution",
    body: "Our most popular option. Install both together for maximum savings, a single installation day, and the full combined government rebate — up to $18,500.",
    stat: "$18,500",
    statLabel: "Max combined rebate",
    color: "#1e3a5f",
  },
];

const reasons = [
  { icon: Shield, title: "CEC Accredited", body: "Every installation meets Clean Energy Council standards — mandatory for accessing government rebates." },
  { icon: TrendingUp, title: "3–5 Year Payback", body: "With current rebates and electricity prices, most systems pay for themselves faster than ever." },
  { icon: Leaf, title: "4+ Tonnes CO₂ Saved", body: "A typical household solar system prevents over 4 tonnes of carbon emissions every single year." },
  { icon: Sun, title: "25-Year Warranty", body: "Tier-1 panels backed by industry-leading performance warranties. Your investment is protected for decades." },
];

export const Benefits = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div ref={sectionRef}>

      {/* ── SECTION 1: WHAT WE OFFER ── seamless flow from hero */}
      <section className="py-28 relative overflow-hidden">

        {/* Melbourne aerial — solar panels visible on rooftops */}
        <div className="absolute inset-0">
          <img
            src="/melbourne-aerial.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          {/* Light overlay — keeps aerial visible but content readable */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.93) 0%, rgba(255,255,255,0.90) 40%, rgba(255,255,255,0.93) 100%)"
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mb-20"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#f26b3a]" />
              <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-[0.2em]">What we do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a5f] leading-tight mb-5">
              Everything you need to go solar — done properly.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              From the initial call to the day your system switches on, ADSA handles everything — design, installation, rebate paperwork, and grid connection.
            </p>
          </motion.div>

          {/* Services — alternating layout, no cards */}
          <div className="space-y-20">
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Content side */}
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-6xl font-black" style={{ color: s.color, opacity: 0.15 }}>{s.number}</span>
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{s.sub}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-4">{s.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">{s.body}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-bold text-sm group"
                    style={{ color: s.color }}
                  >
                    Get a quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Stat side — large ambient number, no box */}
                <div className={`flex items-center justify-center ${i % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <div className="relative">
                    {/* Ambient circle */}
                    <div className="w-64 h-64 rounded-full flex flex-col items-center justify-center" style={{ background: `radial-gradient(circle, ${s.color}10 0%, ${s.color}04 70%)`, border: `1px solid ${s.color}15` }}>
                      <s.icon className="w-10 h-10 mb-4" style={{ color: s.color }} />
                      <div className="text-5xl font-black" style={{ color: s.color }}>{s.stat}</div>
                      <div className="text-xs font-semibold text-gray-400 mt-2 text-center px-8">{s.statLabel}</div>
                    </div>
                    {/* Floating accent dot */}
                    <motion.div
                      animate={{ y: [-8, 8, -8] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-8 h-8 rounded-full"
                      style={{ background: s.color, opacity: 0.3 }}
                    />
                    <motion.div
                      animate={{ y: [6, -6, 6] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full"
                      style={{ background: s.color, opacity: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY CHOOSE US ── dark, immersive */}
      <section className="py-28 relative overflow-hidden" style={{ background: "#1e3a5f" }}>
        {/* House with solar panels — subtle background */}
        <div className="absolute inset-0">
          <img
            src="/install-2.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,58,95,0.97) 0%, rgba(30,58,95,0.85) 60%, rgba(30,58,95,0.95) 100%)" }} />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(242,107,58,0.1) 0%, transparent 60%)", transform: "translate(30%, -40%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(46,184,122,0.08) 0%, transparent 60%)", transform: "translate(-30%, 30%)" }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mb-20"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#f26b3a]" />
              <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-[0.2em]">Why ADSA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              We're not just installers.<br />We're your energy partners.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              From the first call to decades of savings — ADSA is with you every step. Honest advice, zero pressure, and support that actually shows up.
            </p>
          </motion.div>

          {/* Reasons — horizontal flow, no boxes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="py-10 pr-10 border-b border-white/10 sm:border-b-0 sm:border-r last:border-r-0"
              >
                <r.icon className="w-7 h-7 text-[#f26b3a] mb-5" />
                <h3 className="text-lg font-bold text-white mb-3">{r.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Big CTA — inline, no box */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                Contact us for End of Financial Year <span className="text-[#f26b3a]">discounts.</span>
              </div>
              <p className="text-white/50 text-lg">Take advantage of our End of Financial Year discounts. Get in touch today for a free quote.</p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 flex items-center gap-3 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#f26b3a]/30 hover:-translate-y-0.5 group"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: SOCIAL PROOF ── light, airy */}
      <section className="py-28" style={{ background: "#f8fffe" }}>
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#2eb87a]" />
              <span className="text-xs font-bold text-[#2eb87a] uppercase tracking-[0.2em]">Real results</span>
              <div className="h-px w-10 bg-[#2eb87a]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a5f] mb-4">
              Trusted by Melbourne homeowners.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              500+ installations across Victoria. Here's what our customers actually say.
            </p>
          </motion.div>

          {/* Testimonials — horizontal strip, no cards */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Sarah M.", location: "Point Cook, VIC", system: "6.6kW Solar + 10kWh Battery", saving: "$1,900/yr", quote: "Our electricity bill went from $650 quarterly to just $180. The team handled everything including the rebate paperwork. Couldn't be happier." },
              { name: "James & Lisa T.", location: "Tarneit, VIC", system: "10kW Solar System", saving: "$2,100/yr", quote: "We were skeptical about the savings claims but our first bill proved everything. Amazing installation quality and the after-sales support is excellent." },
              { name: "Michael P.", location: "Werribee, VIC", system: "8kW Solar + 13.5kWh Battery", saving: "$2,300/yr", quote: "The whole process was seamless. ADSA helped us with all the rebate paperwork and we got nearly $8,000 off our solar and battery system." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Giant quote mark — decorative, not a box */}
                <div className="text-8xl font-black text-[#2eb87a] leading-none mb-4" style={{ opacity: 0.12 }}>"</div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 -mt-8">{t.quote}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#f97316] text-lg">★</span>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-[#1e3a5f]">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.location} · {t.system}</div>
                  <div className="text-sm font-bold text-[#2eb87a] mt-1">Saving {t.saving}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust logos strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-gray-100 flex flex-wrap items-center justify-center gap-10"
          >
            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Trusted & Accredited</span>
            {["CEC Accredited Installer", "Solar Victoria", "NETC Approved", "Fully Licensed & Insured", "25-Year Warranty"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2eb87a]" />
                <span className="text-sm font-semibold text-gray-400">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
