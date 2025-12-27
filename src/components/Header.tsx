import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/adsa-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Calculator", href: "#calculator" },
  { label: "Solar Panels", href: "#benefits" },
  { label: "Batteries", href: "#batteries" },
  { label: "Our Work", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <img
                src={logo}
                alt="ADSA Solar - Australian Solar Panel Installation"
                className="h-12 md:h-14 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:1300123456" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                1300 123 456
              </a>
              <Button variant="default" size="default" asChild>
                <a href="#calculator">Get Free Quote</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden pt-20 bg-background"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-xl"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:1300123456"
                  className="flex items-center justify-center gap-2 py-4 text-lg font-medium text-primary"
                >
                  <Phone className="w-5 h-5" />
                  1300 123 456
                </a>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="#calculator">Get Your Free Quote</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};