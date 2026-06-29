import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much can I save with solar panels in Victoria?",
    answer: "Most Victorian homeowners save between $1,000 and $2,300 per year on electricity bills after installing solar panels and batteries. Your actual savings depend on your energy usage, system size, and whether you add battery storage. With current government rebates, the payback period is typically 3-5 years.",
  },
  {
    question: "What solar rebates are available in Victoria in 2025?",
    answer: "In 2025, Victorians can access multiple rebates: The STC (Small-scale Technology Certificate) rebate provides up to $2,800 off solar panels depending on system size. The Cheaper Home Batteries Program offers approximately $300-$370 per kWh for battery storage (e.g., ~$3,400 for a 10kWh battery, up to $5,000 for 13.5kWh). Combined, eligible households can access significant savings across both programs.",
  },
  {
    question: "How does the battery rebate work?",
    answer: "The Federal Cheaper Home Batteries Program provides an upfront discount of approximately $300-$370 per kWh of usable battery capacity. This is applied at the point of sale, reducing your upfront cost. For example: a 10kWh battery receives ~$3,400 off, and a 13.5kWh battery can receive up to $5,000 off. Rebate amounts decrease each year, so acting now maximizes your savings.",
  },
  {
    question: "How long does solar installation take?",
    answer: "Most residential solar installations are completed in a single day. For larger systems with batteries, it may take 1-2 days. The overall process from quote to installation typically takes 2-4 weeks, including permits, grid connection applications, and scheduling.",
  },
  {
    question: "What is the payback period for solar in Melbourne?",
    answer: "With current rebates and electricity prices, most solar systems in Melbourne pay for themselves in 3-5 years. After that, you enjoy free electricity for the remaining 20+ years of your system's life. Adding a battery can extend payback slightly but significantly increases your total lifetime savings.",
  },
  {
    question: "Do you offer warranties on solar panels and batteries?",
    answer: "Yes! We only install premium tier-1 solar panels with 25-year performance warranties. Inverters come with 5-12 year warranties (extended options available), and batteries typically include 10+ year warranties. Our workmanship is guaranteed for 10 years, and we provide ongoing support.",
  },
  {
    question: "How do I know what size solar system I need?",
    answer: "System size depends on your energy usage, roof space, and budget. As a guide: small homes (1-2 people) typically need 4-6kW, average homes (3-4 people) benefit from 6.6-8kW, and larger homes or those with EVs often require 10-13kW systems. Use our calculator above for a personalized estimate, or contact us for a detailed assessment.",
  },
  {
    question: "What areas in Victoria do you service?",
    answer: "We service all of Melbourne and greater Victoria, including Point Cook, Tarneit, Werribee, Melton, Truganina, Craigieburn, and surrounding suburbs. Our experienced installation teams can reach most Victorian locations.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">FAQs</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about solar, batteries, and rebates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
