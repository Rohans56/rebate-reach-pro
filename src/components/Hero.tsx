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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

      {/* Hero background — sunset over solar panels */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay — very light on right (behind form), soft on left (behind text) */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(105deg, rgba(255,252,248,0.96) 0%, rgba(255,250,245,0.92) 38%, rgba(255,248,240,0.82) 55%, rgba(254,244,234,0.65) 75%, rgba(254,240,228,0.45) 100%)"
        }} />
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
              Melbourne's Trusted<br />
              <span style={{ background: "linear-gradient(135deg, #f26b3a, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Solar & Battery Experts.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[#3a4f6a] mb-10 max-w-lg leading-relaxed font-medium"
            >
              Join Melbourne homeowners making the switch to solar. Get a free quote, expert advice, and a system tailored to your energy needs.
            </motion.p>

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
                className="flex items-center gap-2 bg-white/80 hover:bg-white backdrop-blur-sm text-[#1e3a5f] font-bold px-8 py-4 rounded-full text-base border border-[#1e3a5f]/15 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" /> 0469 312 118
              </a>
            </motion.div>

            {/* Stats row — no boxes, just numbers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#1e3a5f]/10"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                >
                  <div className="text-2xl font-extrabold text-[#1e3a5f]">{s.value}</div>
                  <div className="text-xs text-[#1e3a5f]/50 mt-0.5 font-medium">{s.label}</div>
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
