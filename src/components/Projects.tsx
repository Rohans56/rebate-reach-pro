import { motion } from "framer-motion";
import { MapPin, Calendar, Zap, Battery } from "lucide-react";
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
    type: "solar",
  },
  {
    image: projectBattery1,
    title: "51kWh Battery + 13.3kW Solar",
    location: "Donnybrook, VIC",
    date: "November 2025",
    specs: "Hybrid System",
    type: "battery",
  },
  {
    image: projectSolar2,
    title: "10kW Domestic Solar",
    location: "Truganina, VIC",
    date: "November 2025",
    specs: "24 x 440W Panels",
    type: "solar",
  },
  {
    image: projectBattery2,
    title: "20kWh Growatt Battery",
    location: "Werribee, VIC",
    date: "November 2025",
    specs: "Backup System",
    type: "battery",
  },
  {
    image: projectHouse,
    title: "Complete Home Electrical + Solar + Battery",
    location: "Melton, VIC",
    date: "December 2025",
    specs: "20kW Solar + 42kWh Battery",
    type: "combo",
  },
  {
    image: projectSolar3,
    title: "13.3kW Premium Install",
    location: "Craigieburn, VIC",
    date: "December 2025",
    specs: "32 x 415W Panels",
    type: "solar",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Recent Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Installations, <span className="text-primary">Real Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we have helped Melbourne homeowners cut their power bills and secure government rebates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === "solar" 
                      ? "bg-primary text-primary-foreground" 
                      : project.type === "battery"
                      ? "bg-accent text-accent-foreground"
                      : "bg-solar-green-light text-accent-foreground"
                  }`}>
                    {project.type === "solar" ? "Solar" : project.type === "battery" ? "Battery" : "Solar + Battery"}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {project.type === "battery" || project.type === "combo" ? (
                    <Battery className="w-4 h-4 text-accent" />
                  ) : (
                    <Zap className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-sm text-muted-foreground">{project.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-hero rounded-2xl p-8 md:p-12"
        >
          {[
            { value: "500+", label: "Installations Completed" },
            { value: "4.9★", label: "Customer Rating" },
            { value: "10+", label: "Years Experience" },
            { value: "$2M+", label: "Customer Savings" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
