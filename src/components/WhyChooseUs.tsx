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
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const WhyChooseUs = () => (
  <section className="py-20" style={{ background: "#fff" }}>
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#2eb87a]" />
          <span className="text-xs font-bold text-[#2eb87a] uppercase tracking-[0.2em]">Why choose ADSA</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] leading-tight">
          Why Choose ADSA Australian Solar
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
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
              <div className="font-bold text-[#1e3a5f] mb-0.5">{point.label}</div>
              <div className="text-sm text-gray-400 leading-relaxed">{point.detail}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
