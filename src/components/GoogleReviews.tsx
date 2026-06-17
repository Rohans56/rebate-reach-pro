import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const REVIEW_LINK = "https://g.page/r/CcHW44-7VcIfEBM/review";
const GOOGLE_PROFILE = "https://www.google.com/maps/place/?q=place_id:ChIJjW4X_KlP1moRwdbjj7tVwh8";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export const GoogleReviews = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 max-w-6xl">

      {/* Header */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f26b3a]" />
            <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-[0.2em]">Google Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a5f] leading-tight">
            What Melbourne homeowners say about us.
          </h2>
        </div>
        <a href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[#1e3a5f] text-sm font-bold px-5 py-3 rounded-full transition-colors flex-shrink-0">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          View on Google <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </motion.div>

      {/* Elfsight live widget */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
        <div className="elfsight-app-1e8fcde0-68ae-4fdf-8e52-ddc41948cd44" data-elfsight-app-lazy></div>
      </motion.div>

      {/* Leave a review CTA */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl"
        style={{ background: "linear-gradient(135deg, #1e3a5f, #2a4f80)" }}>
        <div>
          <p className="font-bold text-white mb-1">Happy with your ADSA installation?</p>
          <p className="text-white/60 text-sm">Your review helps other Melbourne homeowners make the right choice.</p>
        </div>
        <a href={REVIEW_LINK} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-[#1e3a5f] font-bold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors flex-shrink-0">
          Leave a Google Review <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>

    </div>
  </section>
);
