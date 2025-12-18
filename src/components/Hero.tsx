import { motion } from "framer-motion";
import { ArrowRight, Sun, Zap, DollarSign, Award, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar-home.jpg";
import adsaLogo from "@/assets/adsa-logo.png";

const stats = [
  { icon: DollarSign, value: "$2,300+", label: "Avg. Annual Savings" },
  { icon: Zap, value: "3-5 yrs", label: "Payback Period" },
  { icon: Award, value: "10,000+", label: "Happy Customers" },
];

const trustPoints = [
  "CEC Accredited Installer",
  "Victorian Government Approved",
  "10+ Years Experience",
  "Local Melbourne Team",
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern Australian home with solar panels installed"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-solar-green-dark/50 via-transparent to-transparent" />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-solar-orange/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-solar-yellow/15 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6"
            >
              <Sun className="w-4 h-4 text-solar-orange" />
              <span className="text-sm font-medium text-primary-foreground">
                2025 Government Rebates Available
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Cut Power Bills by{" "}
              <span className="text-solar-orange">up to $2,300</span> per year
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl"
            >
              Solar + Battery Systems Installed with Government Rebates. 
              Melbourne & Victoria's Trusted Solar Experts.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#calculator" className="group">
                  Calculate Your Savings
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#benefits">Learn About Rebates</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-solar-orange" />
                    <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-primary-foreground/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - ADSA Branding */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-solar-orange/30 rounded-full blur-[80px] scale-150" />
              
              {/* Logo container */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 30px rgba(255, 140, 0, 0.3)",
                    "0 0 60px rgba(255, 140, 0, 0.5)",
                    "0 0 30px rgba(255, 140, 0, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20"
              >
                <img
                  src={adsaLogo}
                  alt="ADSA Australian Solar"
                  className="w-64 h-auto mb-6"
                />
                
                {/* Company tagline */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                    ADSA Australian Solar
                  </h2>
                  <p className="text-solar-orange font-medium">
                    Powering Victorian Homes
                  </p>
                </div>

                {/* Trust points */}
                <div className="space-y-3">
                  {trustPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-solar-green flex-shrink-0" />
                      <span className="text-primary-foreground/90 text-sm font-medium">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Shield badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-solar-orange rounded-full p-3 shadow-lg"
                >
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </motion.div>
              </motion.div>
            </div>

            {/* Additional trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 flex items-center gap-2 px-4 py-2 bg-solar-green/20 backdrop-blur-sm rounded-full border border-solar-green/30"
            >
              <Award className="w-5 h-5 text-solar-yellow" />
              <span className="text-primary-foreground text-sm font-medium">
                Rated 4.9★ by 500+ Victorians
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
