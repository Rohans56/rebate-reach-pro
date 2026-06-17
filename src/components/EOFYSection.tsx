import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const EOFYSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1e3a5f] via-[#1a3356] to-[#1e3a5f] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f26b3a]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2eb87a]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Clock className="w-3.5 h-3.5" />
            Limited Time — Ends June 30
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            EOFY <span className="text-yellow-300">Mega Sale</span> — On Now
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Our biggest deal of the year. Lock in a premium 10.56kW solar + 30kWh battery system before June 30 and save thousands.
          </p>
        </div>

        {/* Main content: flyer + details side by side */}
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">

          {/* Flyer image */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Glow effect behind flyer */}
              <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-2xl scale-105" />
              <img
                src="/eofy-sale.png"
                alt="ADSA Australian Solar EOFY Mega Sale — 10.56kW Solar + 30kWh Battery for $8,500"
                className="relative w-full rounded-2xl shadow-2xl shadow-black/40"
              />
            </div>
          </div>

          {/* Deal details */}
          <div className="flex-1 text-white space-y-6">

            {/* Deal breakdown */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">What's Included</h3>
              {[
                { label: "Solar System", value: "10.56 kW" },
                { label: "Battery Storage", value: "30 kWh" },
                { label: "CEC Accredited Install", value: "✓ Included" },
                { label: "Grid Connection", value: "✓ Included" },
                { label: "25-Year Panel Warranty", value: "✓ Included" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-white/70 text-sm">{label}</span>
                  <span className="font-bold text-white">{value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2">
                <span className="text-white/70">EOFY Sale Price</span>
                <span className="text-3xl font-extrabold text-yellow-300">$8,500</span>
              </div>
              <p className="text-white/40 text-xs">*T&Cs Apply. Limited stock available.</p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🏅", label: "CEC Accredited" },
                { icon: "☀️", label: "Solar Victoria" },
                { icon: "✅", label: "NETC Approved" },
                { icon: "🛡️", label: "Fully Licensed & Insured" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl px-3 py-2.5">
                  <span className="text-lg">{icon}</span>
                  <span className="text-xs font-semibold text-white/80">{label}</span>
                </div>
              ))}
            </div>

            {/* Urgency bar */}
            <div className="flex items-center gap-3 bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3">
              <Clock className="w-5 h-5 text-red-400 flex-shrink-0 animate-pulse" />
              <p className="text-sm font-semibold text-white">
                <span className="text-red-400">Limited stock available.</span> This deal ends June 30 — don't miss out.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#1e3a5f] font-extrabold py-4 px-6 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-400/20 text-base"
              >
                Claim This Deal <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0469312118"
                className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-6 rounded-xl transition-all text-base"
              >
                📞 0469 312 118
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
