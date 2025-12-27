import { motion } from "framer-motion";
import { Sun, Battery, DollarSign, Shield, Clock, Award, Leaf, TrendingUp, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Up to $3,500 Solar Rebate",
    description: "Government STC rebates can reduce your upfront cost by thousands. A typical 6.6kW system saves $1,500–$3,500.",
    highlight: "$3,500",
    color: "primary",
  },
  {
    icon: Battery,
    title: "$300–$370 per kWh Battery Rebate",
    description: "Under the Cheaper Home Batteries Program, a 10kWh battery can receive ~$3,700 off, and 13.5kWh up to $5,000.",
    highlight: "$5,000",
    color: "secondary",
  },
  {
    icon: TrendingUp,
    title: "Save $1,100–$2,300 Per Year",
    description: "Solar + battery combo delivers massive annual bill reductions. Many Victorian homes save $1,000+ every year.",
    highlight: "$2,300/yr",
    color: "primary",
  },
  {
    icon: Clock,
    title: "3–5 Year Payback Period",
    description: "With rebates and energy savings combined, most systems pay for themselves in just 3–5 years.",
    highlight: "3-5 Years",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "25 Year Panel Warranty",
    description: "Premium tier-1 panels with industry-leading warranties. Your investment is protected for decades.",
    highlight: "25 Years",
    color: "primary",
  },
  {
    icon: Leaf,
    title: "Reduce Carbon Footprint",
    description: "A typical solar system prevents 4+ tonnes of CO2 emissions annually. Power your home sustainably.",
    highlight: "4+ Tonnes",
    color: "secondary",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-solar-mint/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-solar-coral-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">What we offer</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We provide wide range of{" "}
            <span className="text-gradient-primary">solar services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Victorians who are cutting their power bills and enjoying government rebates while they last.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-float transition-all duration-500 border border-border hover:border-primary/20 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  benefit.color === "primary" 
                    ? "bg-primary/10 group-hover:bg-primary" 
                    : "bg-secondary/10 group-hover:bg-secondary"
                }`}>
                  <benefit.icon className={`w-7 h-7 transition-colors duration-300 ${
                    benefit.color === "primary"
                      ? "text-primary group-hover:text-primary-foreground"
                      : "text-secondary group-hover:text-secondary-foreground"
                  }`} />
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                  benefit.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                }`}>
                  {benefit.highlight}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-solar-teal to-solar-teal/80 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-6 h-6 text-white/80" />
              <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                Limited Time
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Rebates Are Highest Now — They Decline Each Year
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              The Victorian solar rebate and Federal battery subsidy decrease annually. Lock in maximum savings by acting now. 
              Maximum rebate cap up to $18,500 per eligible household.
            </p>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-solar-teal font-semibold rounded-xl hover:bg-white/90 transition-colors group"
            >
              Calculate Your Savings Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};