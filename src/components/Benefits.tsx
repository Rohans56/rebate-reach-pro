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

      {/* ── SECTION 1: INTRO ── with Melbourne aerial background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/melbourne-aerial.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.93) 100%)" }} />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#f26b3a]" />
              <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-[0.2em]">What we do</span>
              <div className="h-px w-10 bg-[#f26b3a]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a5f] leading-tight mb-5">
              Everything you need to go solar — done properly.
            </h2>
            <p className="text-[#3a5070] text-lg leading-relaxed">
              From the initial call to the day your system switches on, ADSA handles everything — design, installation, rebate paperwork, and grid connection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE 01: SOLAR PANELS ── white background */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(242,107,58,0.06) 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-5xl font-black text-[#f26b3a]">01</span>
                <div className="h-px flex-1 bg-[#f26b3a]/20" />
              </div>
              <div className="inline-block bg-[#f26b3a]/10 text-[#f26b3a] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                High-efficiency photovoltaic panels
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-5">Solar Panels</h3>
              <p className="text-[#3a5070] text-lg leading-relaxed mb-8">
                Premium tier-1 panels with a 25-year performance warranty — sized perfectly for your roof, your usage, and your goals. We don't do one-size-fits-all.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-[#f26b3a] text-sm group hover:gap-3 transition-all">
                Get a quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} className="flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(242,107,58,0.10) 0%, rgba(242,107,58,0.03) 70%)", border: "1.5px solid rgba(242,107,58,0.20)" }}>
                <Sun className="w-12 h-12 text-[#f26b3a] mb-3" />
                <div className="text-5xl font-black text-[#f26b3a]">$2,800</div>
                <div className="text-sm font-semibold text-[#1e3a5f] mt-2 text-center px-6">Solar rebate available</div>
                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#f26b3a]/30" />
                <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full bg-[#f26b3a]/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 02: BATTERY STORAGE ── light teal background */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#f0faf6" }}>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(46,184,122,0.08) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Stat side first on desktop */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center justify-center order-2 md:order-1">
              <div className="relative w-64 h-64 rounded-full flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(46,184,122,0.12) 0%, rgba(46,184,122,0.03) 70%)", border: "1.5px solid rgba(46,184,122,0.25)" }}>
                <Battery className="w-12 h-12 text-[#2eb87a] mb-3" />
                <div className="text-5xl font-black text-[#2eb87a]">$5,000</div>
                <div className="text-sm font-semibold text-[#1e3a5f] mt-2 text-center px-6">Battery rebate available</div>
                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#2eb87a]/30" />
                <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full bg-[#2eb87a]/20" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} className="order-1 md:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-5xl font-black text-[#2eb87a]">02</span>
                <div className="h-px flex-1 bg-[#2eb87a]/20" />
              </div>
              <div className="inline-block bg-[#2eb87a]/10 text-[#2eb87a] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                Store your solar, use it anytime
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-5">Battery Storage</h3>
              <p className="text-[#3a5070] text-lg leading-relaxed mb-8">
                Never pay for grid power in the evening again. Store your midday solar energy and run your home at night — with backup power when the grid goes down.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-[#2eb87a] text-sm group hover:gap-3 transition-all">
                Get a quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 03: SOLAR + BATTERY ── light navy background */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#f0f4fa" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(30,58,95,0.07) 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-5xl font-black text-[#1e3a5f]">03</span>
                <div className="h-px flex-1 bg-[#1e3a5f]/20" />
              </div>
              <div className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                The complete energy solution
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] mb-5">Solar + Battery Packages</h3>
              <p className="text-[#3a5070] text-lg leading-relaxed mb-8">
                Our most popular option. Install both together for maximum savings, a single installation day, and the full combined government rebate — up to $18,500.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-[#1e3a5f] text-sm group hover:gap-3 transition-all">
                Get a quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} className="flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle, rgba(30,58,95,0.10) 0%, rgba(30,58,95,0.03) 70%)", border: "1.5px solid rgba(30,58,95,0.20)" }}>
                <Zap className="w-12 h-12 text-[#1e3a5f] mb-3" />
                <div className="text-4xl font-black text-[#1e3a5f]">$18,500</div>
                <div className="text-sm font-semibold text-[#1e3a5f] mt-2 text-center px-6">Max combined rebate</div>
                <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#1e3a5f]/20" />
                <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full bg-[#1e3a5f]/15" />
              </div>
            </motion.div>
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
