import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const REVIEW_LINK = "https://g.page/r/CcHW44-7VcIfEBM/review";
const GOOGLE_PROFILE = "https://www.google.com/maps/place/?q=place_id:ChIJjW4X_KlP1moRwdbjj7tVwh8";

const reviews = [
  {
    author: "Sarah M.",
    location: "Point Cook, VIC",
    rating: 5,
    text: "ADSA installed our solar system professionally and on time. Bills dropped from $650 to $180 per quarter. The team handled everything including the rebate paperwork. Couldn't be happier.",
    initials: "SM",
    color: "#f26b3a",
  },
  {
    author: "Michael P.",
    location: "Werribee, VIC",
    rating: 5,
    text: "The whole process was seamless. ADSA helped us with all the rebate paperwork and we got a great price on our solar and battery system. Best investment we've made for our home.",
    initials: "MP",
    color: "#2eb87a",
  },
  {
    author: "James & Lisa T.",
    location: "Tarneit, VIC",
    rating: 5,
    text: "We were skeptical about the savings claims but our first bill proved everything. Amazing installation quality and after-sales support is excellent. Highly recommend ADSA.",
    initials: "JT",
    color: "#1e3a5f",
  },
  {
    author: "Priya K.",
    location: "Craigieburn, VIC",
    rating: 5,
    text: "Great local team, excellent communication and a spotless installation. They explained everything clearly and finished in one day. Our power bills have dropped dramatically.",
    initials: "PK",
    color: "#f26b3a",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-[#f97316] text-[#f97316]" : "fill-gray-200 text-gray-200"}`} />
    ))}
  </div>
);

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

      {/* Review cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {reviews.map((r, i) => (
          <motion.div
            key={r.author}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            <StarRating rating={r.rating} />
            <p className="text-gray-600 text-sm leading-relaxed flex-1">"{r.text}"</p>
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: r.color }}>
                {r.initials}
              </div>
              <div>
                <div className="font-bold text-[#1e3a5f] text-sm">{r.author}</div>
                <div className="text-xs text-gray-400">{r.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
