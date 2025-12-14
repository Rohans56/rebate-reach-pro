import { motion } from "framer-motion";
import { Sun, Battery, DollarSign, Shield, Clock, Award, Leaf, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Up to $3,500 Solar Rebate",
    description: "Government STC rebates can reduce your upfront cost by thousands. A typical 6.6kW system saves $1,500–$3,500.",
    highlight: "$3,500",
  },
  {
    icon: Battery,
    title: "$300–$370 per kWh Battery Rebate",
    description: "Under the Cheaper Home Batteries Program, a 10kWh battery can receive ~$3,700 off, and 13.5kWh up to $5,000.",
    highlight: "$5,000",
  },
  {
    icon: TrendingUp,
    title: "Save $1,100–$2,300 Per Year",
    description: "Solar + battery combo delivers massive annual bill reductions. Many Victorian homes save $1,000+ every year.",
    highlight: "$2,300/yr",
  },
  {
    icon: Clock,
    title: "3–5 Year Payback Period",
    description: "With rebates and energy savings combined, most systems pay for themselves in just 3–5 years.",
    highlight: "3-5 Years",
  },
  {
    icon: Shield,
    title: "25 Year Panel Warranty",
    description: "Premium tier-1 panels with industry-leading warranties. Your investment is protected for decades.",
    highlight: "25 Years",
  },
  {
    icon: Leaf,
    title: "Reduce Carbon Footprint",
    description: "A typical solar system prevents 4+ tonnes of CO2 emissions annually. Power your home sustainably.",
    highlight: "4+ Tonnes",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sun className="w-4 h-4" />
            <span className="text-sm font-semibold">Why Go Solar</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Massive Savings, <span className="text-primary">Real Results</span>
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
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-3">
                {benefit.highlight}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-accent rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground/80 uppercase tracking-wider">
              Limited Time
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-3">
            Rebates Are Highest Now — They Decline Each Year
          </h3>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-6">
            The Victorian solar rebate and Federal battery subsidy decrease annually. Lock in maximum savings by acting now. 
            Maximum rebate cap up to $18,500 per eligible household.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-xl hover:bg-primary-foreground/90 transition-colors"
          >
            Calculate Your Savings Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};
