import { Zap, ArrowRight, Clock } from "lucide-react";

export const EOFYBanner = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#1e3a5f] via-[#f26b3a] to-[#1e3a5f] py-0">
      {/* Animated shimmer layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%]" />

      <div className="relative z-10 px-4 py-8 md:py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Badge + headline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            {/* Flashing badge */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-white/15 border-2 border-white/40 animate-pulse">
              <Zap className="w-8 h-8 text-yellow-300 fill-yellow-300" />
            </div>

            <div>
              {/* Eyebrow */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Clock className="w-4 h-4 text-yellow-300" />
                <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest">
                  Limited Time Only
                </span>
              </div>

              {/* Main headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                🎉 End of Financial Year{" "}
                <span className="text-yellow-300 underline decoration-wavy decoration-yellow-400/60 underline-offset-4">
                  Sale — On Now!
                </span>
              </h2>

              {/* Subtext */}
              <p className="mt-1 text-white/85 text-sm md:text-base max-w-xl">
                Lock in the biggest solar + battery rebates of the year before{" "}
                <strong className="text-white">June 30</strong>. Government rebates
                up to <strong className="text-yellow-300">$2,800</strong> — don't
                miss out.
              </p>
            </div>
          </div>

          {/* Right: CTA button */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-[#1e3a5f] font-extrabold text-base md:text-lg px-7 py-4 rounded-2xl shadow-lg shadow-yellow-400/30 hover:shadow-yellow-300/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-white/60 text-xs">Free quote · No obligation</p>
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400" />
    </div>
  );
};
