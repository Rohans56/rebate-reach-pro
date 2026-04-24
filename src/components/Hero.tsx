import { motion } from "framer-motion";
import { ArrowRight, Sun, Zap, DollarSign, Award, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import adsaLogo from "@/assets/adsa-logo.png";
import { HeroLeadForm } from "@/components/HeroLeadForm";
const stats = [{
  icon: DollarSign,
  value: "$2,300+",
  label: "Avg. Annual Savings"
}, {
  icon: Zap,
  value: "3-5 yrs",
  label: "Payback Period"
}, {
  icon: Award,
  value: "10,000+",
  label: "Happy Customers"
}];
const trustPoints = ["CEC Accredited Installer", "Victorian Government Approved", "10+ Years Experience", "Local Melbourne Team"];
export const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Decorative organic blob shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal blob - top right */}
        <motion.div animate={{
        x: [0, 30, 0],
        y: [0, -20, 0],
        scale: [1, 1.05, 1]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-blob-1 blob-shape opacity-80" />
        
        {/* Coral blob - bottom left */}
        <motion.div animate={{
        x: [0, -20, 0],
        y: [0, 30, 0],
        scale: [1, 0.95, 1]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-blob-2 blob-shape-2 opacity-60" />

        {/* Small floating accent blobs */}
        <motion.div animate={{
        y: [-10, 10, -10]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute top-1/3 left-1/4 w-24 h-24 bg-solar-coral/10 rounded-full blur-2xl" />
        <motion.div animate={{
        y: [10, -15, 10]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-solar-teal/15 rounded-full blur-2xl" />

        {/* Diagonal decorative lines */}
        <div className="absolute top-20 left-10 w-40 h-40 opacity-20">
          <div className="absolute w-full h-0.5 bg-solar-teal/40 rotate-45 origin-left" />
          <div className="absolute w-full h-0.5 bg-solar-teal/30 rotate-45 origin-left translate-y-4" />
          <div className="absolute w-full h-0.5 bg-solar-teal/20 rotate-45 origin-left translate-y-8" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Tagline */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">SOLAR & BATTERY INSTALLER AND RETAILER</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6">
              Powering Victorian{" "}
              <span className="text-gradient-primary">Homes</span>{" "}
              with Solar
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Cut power bills by up to <span className="text-primary font-semibold">$2,300/year</span>. 
              Solar + Battery systems installed with government rebates up to $18,500.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="default" size="xl" asChild>
                <Link to="/services" className="group">
                  Calculate Your Savings
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Get Free Quote
                </Link>
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-solar-mint border-2 border-background flex items-center justify-center text-xs font-semibold text-solar-teal">
                    {["JM", "SK", "LP", "AR"][i - 1]}
                  </div>)}
              </div>
              <div>
                <div className="flex items-center gap-1 text-sm font-semibold text-foreground">
                  <span className="text-primary">★★★★★</span> 4.9/5
                </div>
                <p className="text-xs text-muted-foreground">From 500+ happy customers</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Feature Card */}
          <HeroLeadForm />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }} className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>;
};