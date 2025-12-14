import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/adsa-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-solar-green-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="ADSA Solar" className="h-14 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Melbourne's trusted solar and battery installation experts. Helping Victorians save thousands on electricity since 2014.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#benefits" className="hover:text-primary-foreground transition-colors">Solar Panel Installation</a></li>
              <li><a href="#batteries" className="hover:text-primary-foreground transition-colors">Battery Storage Systems</a></li>
              <li><a href="#calculator" className="hover:text-primary-foreground transition-colors">Solar + Battery Packages</a></li>
              <li><a href="#rebates" className="hover:text-primary-foreground transition-colors">Rebate Assistance</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Commercial Solar</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#calculator" className="hover:text-primary-foreground transition-colors">Savings Calculator</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#projects" className="hover:text-primary-foreground transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Solar Rebate Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-solar-orange mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone</p>
                  <a href="tel:1300123456" className="font-semibold hover:text-solar-orange transition-colors">1300 123 456</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-solar-orange mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <a href="mailto:info@adsasolar.com.au" className="font-semibold hover:text-solar-orange transition-colors">info@adsasolar.com.au</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-solar-orange mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Service Area</p>
                  <p className="font-semibold">Melbourne & All Victoria</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 ADSA Australian Solar. All rights reserved. CEC Accredited Installer.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
