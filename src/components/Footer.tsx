import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/adsa-logo.png";

const suburbLinks = [
  { label: "Solar Installers Werribee", slug: "werribee", type: "installers" },
  { label: "Solar Installers Tarneit", slug: "tarneit", type: "installers" },
  { label: "Solar Installers Point Cook", slug: "point-cook", type: "installers" },
  { label: "Solar Installers Craigieburn", slug: "craigieburn", type: "installers" },
  { label: "Solar Installers Clyde North", slug: "clyde-north", type: "installers" },
  { label: "Solar Installers Melton", slug: "melton", type: "installers" },
  { label: "Solar Installers Cranbourne", slug: "cranbourne", type: "installers" },
  { label: "Solar Installers Berwick", slug: "berwick", type: "installers" },
  { label: "Solar Installers Geelong", slug: "geelong", type: "installers" },
  { label: "Solar Installers Epping", slug: "epping", type: "installers" },
  { label: "Solar Panels Truganina", slug: "truganina", type: "panels" },
  { label: "Solar Panels Hoppers Crossing", slug: "hoppers-crossing", type: "panels" },
  { label: "Solar Panels Wyndham Vale", slug: "wyndham-vale", type: "panels" },
  { label: "Solar Panels Donnybrook", slug: "donnybrook", type: "panels" },
  { label: "Solar Panels Pakenham", slug: "pakenham", type: "panels" },
  { label: "Solar Panels Officer", slug: "officer", type: "panels" },
];

export const Footer = () => {
  return (
    <footer className="bg-solar-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-solar-teal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 py-16 relative z-10">

        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img src={logo} alt="ADSA Australian Solar" className="h-14 mb-4" />
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted solar and battery installation experts. Helping Australians save thousands on electricity.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/solar-panel-installation" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Solar Panel Installation <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/solar-battery-installation" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Battery Storage Installation <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/ev-charger-installation" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">EV Charger Installation <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/residential-solar" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Residential Solar <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/commercial-solar" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Commercial Solar <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/solar-rebates-victoria" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Solar Rebates Victoria <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/electrical-services" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Electrical Services <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/services" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Savings Calculator <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">FAQ <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Our Work <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Blog <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">Solar Rebate Guide <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-solar-orange/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-solar-orange" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <a href="tel:0469312118" className="font-semibold hover:text-primary transition-colors">0469 312 118</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <a href="mailto:info@adsaaustraliansolar.com.au" className="font-semibold hover:text-primary transition-colors text-sm">info@adsaaustraliansolar.com.au</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Address</p>
                  <p className="font-semibold">82 Yale Dr, Epping, 3076</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas We Service */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Areas We Service
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
            {suburbLinks.map(({ label, slug, type }) => (
              <Link
                key={slug + type}
                to={`/solar-${type === "installers" ? "installers" : "panels"}-${slug}`}
                className="text-sm text-white/60 hover:text-primary transition-colors inline-flex items-center gap-1 group"
              >
                <ArrowRight className="w-3 h-3 flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 ADSA Australian Solar. All rights reserved. CEC Accredited Installer.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
