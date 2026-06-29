import { motion } from "framer-motion";
import { Battery, Zap, Shield, Clock, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import batteryImage1 from "@/assets/project-battery-1.jpeg";
import batteryImage2 from "@/assets/project-battery-2.jpeg";

const batteryFeatures = [
  { icon: Zap, text: "Power your home during blackouts" },
  { icon: Shield, text: "10+ year warranty protection" },
  { icon: Clock, text: "Use stored solar energy at night" },
  { icon: Battery, text: "Reduce grid dependency by 80%" },
];

const batterySizes = [
  { size: "5 kWh", rebate: "$1,700", savings: "$500/yr", ideal: "Small homes, basic backup" },
  { size: "10 kWh", rebate: "$3,400", savings: "$1,000/yr", ideal: "Average homes, most popular" },
  { size: "13.5 kWh", rebate: "$4,500", savings: "$1,400/yr", ideal: "Large homes, EV charging" },
  { size: "20 kWh", rebate: "$6,800", savings: "$2,000/yr", ideal: "Maximum independence" },
];

export const BatterySystems = () => {
  return (
    <section id="batteries" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Battery className="w-4 h-4" />
              <span className="text-sm font-semibold">Battery Storage</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Store Your Solar. <span className="text-accent">Use It Anytime.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With government battery rebates of $300–$370 per kWh, there has never been a better time to add storage. 
              A 13.5kWh battery can save you up to $5,000 upfront.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {batteryFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="group">
                Get Battery Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src={batteryImage1}
                alt="Professional battery installation - Melbourne home"
                className="rounded-2xl shadow-card object-cover h-64 md:h-80 w-full"
              />
              <img
                src={batteryImage2}
                alt="Growatt battery system installation"
                className="rounded-2xl shadow-card object-cover h-64 md:h-80 w-full mt-8"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card shadow-lg rounded-xl px-6 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-xl font-bold text-accent-foreground">$</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Up to</p>
                <p className="text-2xl font-bold text-foreground">$5,000 Battery Rebate</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Battery Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Battery Rebate & Savings Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl shadow-card overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Battery Size</th>
                  <th className="px-6 py-4 text-left font-semibold">Est. Rebate</th>
                  <th className="px-6 py-4 text-left font-semibold">Annual Savings</th>
                  <th className="px-6 py-4 text-left font-semibold">Ideal For</th>
                </tr>
              </thead>
              <tbody>
                {batterySizes.map((battery, index) => (
                  <tr key={index} className="border-t border-border hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-5">
                      <span className="font-bold text-foreground text-lg">{battery.size}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-bold text-accent text-lg">{battery.rebate}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-semibold text-primary">{battery.savings}</span>
                    </td>
                    <td className="px-6 py-5 text-muted-foreground">{battery.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            *Rebates based on ~$340/kWh under the Cheaper Home Batteries Program. Savings vary by usage.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
