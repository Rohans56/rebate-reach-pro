import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const trustPoints = [
  { label: "Licensed Local Installers", detail: "CEC accredited electricians based in Epping, Melbourne" },
  { label: "Quality Solar & Battery Systems", detail: "Tier-1 panels, leading battery brands, 25-year warranty" },
  { label: "Rebate Assistance Included", detail: "We handle all government rebate paperwork at no extra charge" },
  { label: "Transparent Pricing", detail: "No hidden fees — your quote is exactly what you pay" },
  { label: "Melbourne-Based Support", detail: "Local team, real people, response within 24 hours" },
  { label: "500+ Installations Completed", detail: "Trusted by homeowners across Melbourne's growth suburbs" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const WhyChooseUs = () => (
  <section className="relative overflow-hidden py-28">

    {/* Full-bleed background image */}
    <div className="absolute inset-0">
      <img
        src="/install-1.jpg"
        alt="ADSA solar installer placing panel on roof"
        className="w-full h-full object-cover object-center"
      />
      {/* Dark navy overlay — keeps text readable, image feels atmospheric */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(110deg, rgba(30,58,95,0.94) 0%, rgba(30,58,95,0.88) 50%, rgba(30,58,95,0.75) 100%)"
      }} />
    </div>

    <div className="container mx-auto px-6 max-w-5xl relative z-10">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#2eb87a]" />
          <span className="text-xs font-bold text-[#2eb87a] uppercase tracking-[0.2em]">Why choose ADSA</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Why Choose ADSA Australian Solar
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {trustPoints.map((point, i) => (
          <motion.div
            key={point.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <CheckCircle className="w-5 h-5 text-[#2eb87a] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-1">{point.label}</div>
              <div className="text-sm text-white/55 leading-relaxed">{point.detail}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
