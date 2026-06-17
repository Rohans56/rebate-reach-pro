import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { HeroLeadForm } from "@/components/HeroLeadForm";

const stats = [
  { value: "500+", label: "Installations" },
  { value: "$2,300", label: "Avg. Annual Saving" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "$18,500", label: "Max Rebate Available" },
];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(160deg, #f8fffe 0%, #eef8f5 40%, #fef4f0 100%)" }}>

      {/* Parallax background Australia shape */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <img
          src="/adsa-australia.png"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto max-w-[55%] object-contain object-right opacity-[0.07]"
          style={{ filter: "saturate(0)" }}
        />
      </motion.div>

      {/* Ambient colour orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(46,184,122,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(242,107,58,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-[#f26b3a]" />
              <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-[0.2em]">CEC Accredited · Melbourne, Victoria</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1e3a5f] leading-[1.05] mb-6 tracking-tight"
            >
              Stop paying<br />
              <span style={{ background: "linear-gradient(135deg, #f26b3a, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                their prices.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray-500 mb-6 max-w-lg leading-relaxed"
            >
              Victorian families are cutting their power bills by up to{" "}
              <span className="text-[#1e3a5f] font-semibold">$2,300 every year</span> with solar + battery —
              and the government is covering up to{" "}
              <span className="text-[#1e3a5f] font-semibold">$18,500</span> of the cost.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-3 mb-10 p-4 rounded-2xl"
              style={{ background: "rgba(242,107,58,0.06)", border: "1px solid rgba(242,107,58,0.12)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#f26b3a] flex-shrink-0 animate-pulse" />
              <p className="text-sm font-semibold text-[#1e3a5f]">
                ⚡ Rebates decrease every year — <span className="text-[#f26b3a]">2025 is the highest they'll ever be.</span> Act before June 30.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <Link
                to="/contact"
                className="group flex items-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#f26b3a]/30 hover:-translate-y-0.5"
              >
                See How Much I Save
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:0469312118"
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1e3a5f] font-bold px-8 py-4 rounded-full text-base border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" /> 0469 312 118
              </a>
            </motion.div>

            {/* Stats row — no boxes, just numbers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                >
                  <div className="text-2xl font-extrabold text-[#1e3a5f]">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5 font-medium">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — form, no card box feel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroLeadForm />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
