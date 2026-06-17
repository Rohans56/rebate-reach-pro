import { motion } from "framer-motion";
import { MapPin, Calendar, Zap, Battery, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectSolar1 from "@/assets/project-solar-1.jpeg";
import projectSolar2 from "@/assets/project-solar-2.jpeg";
import projectSolar3 from "@/assets/project-solar-3.jpeg";
import projectHouse from "@/assets/project-house.jpeg";
import projectBattery1 from "@/assets/project-battery-1.jpeg";
import projectBattery2 from "@/assets/project-battery-2.jpeg";

const projects = [
  {
    image: projectSolar1,
    title: "6.6kW Rooftop Solar",
    location: "Point Cook, VIC",
    date: "November 2025",
    specs: "15 x 440W Panels",
    saving: "$1,600/yr",
    type: "solar",
    slug: "solar-installation-point-cook",
  },
  {
    image: projectBattery1,
    title: "51kWh Battery + 13.3kW Solar",
    location: "Donnybrook, VIC",
    date: "November 2025",
    specs: "Hybrid System",
    saving: "$3,000/yr",
    type: "battery",
    slug: "solar-battery-installation-donnybrook",
  },
  {
    image: projectSolar2,
    title: "10kW Domestic Solar",
    location: "Truganina, VIC",
    date: "November 2025",
    specs: "24 x 440W Panels",
    saving: "$2,000/yr",
    type: "solar",
    slug: "solar-installation-truganina",
  },
  {
    image: projectBattery2,
    title: "20kWh Growatt Battery",
    location: "Werribee, VIC",
    date: "November 2025",
    specs: "Backup System",
    saving: "$1,800/yr",
    type: "battery",
    slug: "battery-installation-werribee",
  },
  {
    image: projectHouse,
    title: "Complete Home Electrical + Solar + Battery",
    location: "Melton, VIC",
    date: "December 2025",
    specs: "20kW Solar + 42kWh Battery",
    saving: "$3,200/yr",
    type: "combo",
    slug: "solar-battery-installation-melton",
  },
  {
    image: projectSolar3,
    title: "13.3kW Premium Install",
    location: "Craigieburn, VIC",
    date: "December 2025",
    specs: "32 x 415W Panels",
    saving: "$2,300/yr",
    type: "solar",
    slug: "solar-installation-craigieburn",
  },
];

const typeConfig = {
  solar: { label: "Solar", color: "#f26b3a", bg: "rgba(242,107,58,0.9)" },
  battery: { label: "Battery", color: "#1e3a5f", bg: "rgba(30,58,95,0.9)" },
  combo: { label: "Solar + Battery", color: "#2eb87a", bg: "rgba(46,184,122,0.9)" },
};

export const Projects = () => (
  <section id="projects" className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#f26b3a]" />
          <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-[0.2em]">Our work</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a5f] leading-tight max-w-lg">
            Real installations.<br />
            <span style={{ background: "linear-gradient(135deg,#f26b3a,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Real results.
            </span>
          </h2>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Every project below is a real installation by our team. Click through for the full case study — system specs, before/after bills, and rebates received.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          const cfg = typeConfig[p.type as keyof typeof typeConfig];
          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={`/projects/${p.slug}`} className="group block rounded-2xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-400 hover:-translate-y-1">

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Type badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: cfg.bg, backdropFilter: "blur(8px)" }}>
                    {cfg.label}
                  </div>
                  {/* Saving badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-black/40 backdrop-blur-sm">
                    Saving {p.saving}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1e3a5f]/0 group-hover:bg-[#1e3a5f]/20 transition-all duration-400 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-white/15 backdrop-blur-sm px-5 py-2.5 rounded-full">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-extrabold text-[#1e3a5f] mb-3 group-hover:text-[#f26b3a] transition-colors leading-snug">{p.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{p.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{p.date}</span>
                    <span className="flex items-center gap-1">
                      {p.type === "battery" ? <Battery className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5" />}
                      {p.specs}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
        style={{ background: "#1e3a5f" }}
      >
        {[
          { value: "500+", label: "Installations Completed" },
          { value: "4.9★", label: "Customer Rating" },
          { value: "10+", label: "Years Experience" },
          { value: "$2M+", label: "Customer Savings" },
        ].map((s, i) => (
          <div key={i} className="bg-[#1e3a5f] py-10 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[#f26b3a] mb-1">{s.value}</div>
            <div className="text-sm text-white/50">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
