import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Point Cook, VIC",
    rating: 5,
    text: "Our electricity bill went from $650 quarterly to just $180! The team at ADSA were professional from start to finish. The battery rebate saved us over $4,000.",
    system: "6.6kW Solar + 10kWh Battery",
    savings: "Saving $1,900/year",
  },
  {
    name: "James & Lisa T.",
    location: "Tarneit, VIC",
    rating: 5,
    text: "We were skeptical about the savings claims but our first bill proved everything. Amazing installation quality and the after-sales support is excellent.",
    system: "10kW Solar System",
    savings: "Saving $2,100/year",
  },
  {
    name: "Michael P.",
    location: "Werribee, VIC",
    rating: 5,
    text: "The whole process was seamless. ADSA helped us with all the rebate paperwork and we got nearly $8,000 off our solar + battery system. Highly recommend!",
    system: "8kW Solar + 13.5kWh Battery",
    savings: "Saving $2,300/year",
  },
  {
    name: "Priya K.",
    location: "Craigieburn, VIC",
    rating: 5,
    text: "Best investment we've made for our home. The team explained everything clearly and finished the install in one day. Our power bills have dropped dramatically.",
    system: "6.6kW Solar System",
    savings: "Saving $1,400/year",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Melbourne Homeowners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands of Victorians are installing solar this month. See what our customers say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-solar-orange fill-current" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">"{testimonial.text}"</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{testimonial.system}</p>
                  <p className="text-sm font-semibold text-accent">{testimonial.savings}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Join over <span className="font-bold text-foreground">500+ happy Victorian families</span> who have switched to solar
          </p>
        </motion.div>
      </div>
    </section>
  );
};
