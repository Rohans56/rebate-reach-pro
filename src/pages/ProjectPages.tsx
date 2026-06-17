import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { motion } from "framer-motion";
import { MapPin, Calendar, Zap, Battery, Sun, ArrowRight, CheckCircle, Phone } from "lucide-react";

export interface ProjectData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  location: string;
  suburb: string;
  suburbSlug: string;
  date: string;
  type: "solar" | "battery" | "combo";
  systemSize: string;
  panels?: string;
  battery?: string;
  inverter?: string;
  annualSaving: string;
  payback: string;
  quarterlyBillBefore?: string;
  quarterlyBillAfter?: string;
  rebateReceived: string;
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
  relatedProjects: { title: string; slug: string; location: string }[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export const ProjectCaseStudy = ({ data }: { data: ProjectData }) => {
  const typeLabel = data.type === "solar" ? "Solar Installation" : data.type === "battery" ? "Battery Installation" : "Solar + Battery Installation";
  const typeColor = data.type === "solar" ? "#f26b3a" : data.type === "battery" ? "#1e3a5f" : "#2eb87a";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.metaDesc,
    "author": { "@type": "Organization", "name": "ADSA Australian Solar" },
    "publisher": {
      "@type": "Organization",
      "name": "ADSA Australian Solar",
      "url": "https://adsaaustraliansolar.com.au",
      "logo": { "@type": "ImageObject", "url": "https://adsaaustraliansolar.com.au/adsa-logo-new.png" }
    },
    "datePublished": data.date,
    "image": `https://adsaaustraliansolar.com.au${data.image}`,
    "mainEntityOfPage": `https://adsaaustraliansolar.com.au/projects/${data.slug}`
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDesc} />
        <link rel="canonical" href={`https://adsaaustraliansolar.com.au/projects/${data.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      {/* HERO IMAGE — full bleed */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,58,95,0.85) 0%, rgba(30,58,95,0.3) 60%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-10 pt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4" style={{ background: typeColor, color: "white" }}>
              {typeLabel}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 max-w-3xl leading-tight">{data.title}</h1>
            <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{data.location}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{data.date}</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" />{data.systemSize}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#1e3a5f" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "System Size", value: data.systemSize },
              { label: "Annual Saving", value: data.annualSaving },
              { label: "Rebate Received", value: data.rebateReceived },
              { label: "Payback Period", value: data.payback },
            ].map(({ label, value }) => (
              <div key={label} className="py-6 px-6 text-center">
                <div className="text-xl md:text-2xl font-extrabold text-[#f26b3a]">{value}</div>
                <div className="text-xs text-white/50 mt-1 font-medium uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Article */}
            <div className="lg:col-span-2 space-y-12">

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-[#f26b3a]" />
                  <span className="text-xs font-bold text-[#f26b3a] uppercase tracking-widest">The Challenge</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{data.challenge}</p>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-[#2eb87a]" />
                  <span className="text-xs font-bold text-[#2eb87a] uppercase tracking-widest">Our Solution</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{data.solution}</p>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-[#1e3a5f]" />
                  <span className="text-xs font-bold text-[#1e3a5f] uppercase tracking-widest">The Outcome</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{data.outcome}</p>
              </motion.div>

              {/* Bill comparison */}
              {data.quarterlyBillBefore && (
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #f8fffe, #eef8f5)" }}>
                  <div className="p-6">
                    <h3 className="font-extrabold text-[#1e3a5f] mb-6 text-lg">Quarterly Bill Comparison</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-white rounded-xl">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Before Solar</div>
                        <div className="text-4xl font-extrabold text-gray-400 line-through">{data.quarterlyBillBefore}</div>
                        <div className="text-xs text-gray-400 mt-1">per quarter</div>
                      </div>
                      <div className="text-center p-6 bg-white rounded-xl border-2 border-[#2eb87a]">
                        <div className="text-xs font-bold text-[#2eb87a] uppercase tracking-wider mb-2">After Solar</div>
                        <div className="text-4xl font-extrabold text-[#2eb87a]">{data.quarterlyBillAfter}</div>
                        <div className="text-xs text-[#2eb87a] mt-1">per quarter</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* System specs */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #1e3a5f, #2a4f80)" }}>
                <h3 className="font-extrabold text-white mb-5">System Details</h3>
                <div className="space-y-4">
                  {[
                    { label: "Location", value: data.location },
                    { label: "Date", value: data.date },
                    { label: "System Size", value: data.systemSize },
                    ...(data.panels ? [{ label: "Panels", value: data.panels }] : []),
                    ...(data.battery ? [{ label: "Battery", value: data.battery }] : []),
                    ...(data.inverter ? [{ label: "Inverter", value: data.inverter }] : []),
                    { label: "Rebate Received", value: data.rebateReceived },
                    { label: "Annual Saving", value: data.annualSaving },
                    { label: "Payback Period", value: data.payback },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span className="text-white/50 text-sm">{label}</span>
                      <span className="text-white text-sm font-semibold text-right max-w-[55%]">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #f8fffe, #eef8f5)" }}>
                <h3 className="font-extrabold text-[#1e3a5f] mb-2">Want a similar result?</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">We can design the right system for your home in {data.suburb}. Free quote, no obligation.</p>
                <Link to="/contact" className="flex items-center justify-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold py-3 px-5 rounded-xl transition-colors text-sm group w-full">
                  Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:0469312118" className="flex items-center justify-center gap-2 mt-3 text-[#1e3a5f] font-semibold text-sm py-3">
                  <Phone className="w-4 h-4" /> 0469 312 118
                </a>
              </motion.div>

              {/* Trust */}
              <div className="space-y-2">
                {["CEC Accredited Installation", "25-Year Panel Warranty", "All rebates applied at point of sale", "Grid connection handled by ADSA"].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-[#2eb87a] flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {data.relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-extrabold text-[#1e3a5f] mb-8">More recent installations</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.relatedProjects.map(p => (
                <Link key={p.slug} to={`/projects/${p.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#f26b3a] hover:shadow-lg transition-all duration-300">
                  <div className="font-bold text-[#1e3a5f] mb-1 group-hover:text-[#f26b3a] transition-colors">{p.title}</div>
                  <div className="text-sm text-gray-400 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{p.location}</div>
                  <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#f26b3a]">View case study <ArrowRight className="w-3.5 h-3.5" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUBURB LINK */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-gray-400 text-sm mb-3">Looking for solar installers in {data.suburb}?</p>
          <Link to={`/solar-installers-${data.suburbSlug}`}
            className="inline-flex items-center gap-2 text-[#f26b3a] font-bold hover:underline">
            <MapPin className="w-4 h-4" /> Solar Installers {data.suburb} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </>
  );
};

// ─── ALL 6 PROJECT PAGES ─────────────────────────────────────────────────────

const allRelated = [
  { title: "6.6kW Rooftop Solar", slug: "solar-installation-point-cook", location: "Point Cook, VIC" },
  { title: "51kWh Battery + 13.3kW Solar", slug: "solar-battery-installation-donnybrook", location: "Donnybrook, VIC" },
  { title: "10kW Domestic Solar", slug: "solar-installation-truganina", location: "Truganina, VIC" },
  { title: "20kWh Growatt Battery", slug: "battery-installation-werribee", location: "Werribee, VIC" },
  { title: "20kW Solar + 42kWh Battery", slug: "solar-battery-installation-melton", location: "Melton, VIC" },
  { title: "13.3kW Premium Install", slug: "solar-installation-craigieburn", location: "Craigieburn, VIC" },
];

// ── 1. POINT COOK 6.6kW ──
export const ProjectPointCookSolar = () => <ProjectCaseStudy data={{
  slug: "solar-installation-point-cook",
  title: "6.6kW Rooftop Solar Installation — Point Cook",
  metaTitle: "6.6kW Solar Installation Point Cook | Case Study | ADSA Australian Solar",
  metaDesc: "See how ADSA installed a 6.6kW rooftop solar system in Point Cook, VIC. 15 x 440W tier-1 panels, $3,200 STC rebate, saving $1,600/year. Full case study.",
  location: "Point Cook, VIC",
  suburb: "Point Cook",
  suburbSlug: "point-cook",
  date: "November 2025",
  type: "solar",
  systemSize: "6.6kW",
  panels: "15 x 440W Tier-1 Panels",
  inverter: "5kW Hybrid Inverter",
  annualSaving: "$1,600/yr",
  payback: "4 years",
  quarterlyBillBefore: "$480",
  quarterlyBillAfter: "$95",
  rebateReceived: "$3,200",
  image: "/src/assets/project-solar-1.jpeg",
  challenge: "This Point Cook family was spending close to $480 per quarter on electricity — driven by a large family home with ducted cooling running through Melbourne's hot summers. They wanted to reduce their bills significantly but were unsure whether solar alone, or solar plus battery, was the right starting point for their budget.",
  solution: "After reviewing their electricity bills and assessing the roof, we designed a 6.6kW system using 15 x 440W tier-1 panels on the home's north-facing roof section. We paired this with a hybrid inverter to keep the system battery-ready for a future upgrade. The STC federal rebate reduced their upfront cost by $3,200, applied directly on the invoice.",
  outcome: "The system was installed in a single day with zero disruption to the family. Their first quarterly bill arrived at $95 — a saving of $385 per quarter, or $1,540 per year. With the rebate applied, the net system cost will be recovered in approximately 4 years. The hybrid inverter means they can add battery storage at any time.",
  relatedProjects: allRelated.filter(p => p.slug !== "solar-installation-point-cook").slice(0, 3),
}} />;

// ── 2. DONNYBROOK 51kWh BATTERY + 13.3kW SOLAR ──
export const ProjectDonnybrookBattery = () => <ProjectCaseStudy data={{
  slug: "solar-battery-installation-donnybrook",
  title: "51kWh Battery + 13.3kW Solar — Donnybrook",
  metaTitle: "51kWh Battery + 13.3kW Solar Donnybrook | Case Study | ADSA Solar",
  metaDesc: "Large-scale solar + battery installation in Donnybrook, VIC. 13.3kW solar array plus 51kWh of battery storage. Near-total energy independence. Full case study.",
  location: "Donnybrook, VIC",
  suburb: "Donnybrook",
  suburbSlug: "donnybrook",
  date: "November 2025",
  type: "combo",
  systemSize: "13.3kW Solar + 51kWh Battery",
  panels: "32 x 415W Tier-1 Panels",
  battery: "51kWh Lithium Battery Array",
  inverter: "13.3kW Hybrid Inverter",
  annualSaving: "$3,000/yr",
  payback: "5 years",
  quarterlyBillBefore: "$920",
  quarterlyBillAfter: "$60",
  rebateReceived: "$22,000+",
  image: "/src/assets/project-battery-1.jpeg",
  challenge: "This large Donnybrook property had electricity bills exceeding $920 per quarter, driven by a large home with multiple air conditioning units, a pool, and high general consumption from a large family. The homeowner wanted near-total energy independence — minimal reliance on the grid at any time of day or night.",
  solution: "We designed a comprehensive energy system featuring 32 x 415W tier-1 solar panels delivering 13.3kW of generation capacity, combined with 51kWh of lithium battery storage. This scale of battery storage is sufficient to power the home through most nights and cloudy periods without grid draw. The system qualified for the maximum battery rebate under the Cheaper Home Batteries Program, plus the STC solar rebate — totalling over $22,000 in combined government support.",
  outcome: "This installation is one of the largest residential solar + battery systems we have completed. The homeowner's quarterly bill dropped from $920 to approximately $60 — essentially covering only fixed grid connection charges. Annual savings of approximately $3,000 mean the system achieves payback in around 5 years despite its scale, thanks to the substantial rebates applied.",
  relatedProjects: allRelated.filter(p => p.slug !== "solar-battery-installation-donnybrook").slice(0, 3),
}} />;

// ── 3. TRUGANINA 10kW ──
export const ProjectTruganinaSolar = () => <ProjectCaseStudy data={{
  slug: "solar-installation-truganina",
  title: "10kW Domestic Solar Installation — Truganina",
  metaTitle: "10kW Solar Installation Truganina | Case Study | ADSA Australian Solar",
  metaDesc: "10kW solar installation in Truganina, VIC. 24 x 440W tier-1 panels, $4,400 STC rebate, saving $2,000/year. Full project case study from ADSA Australian Solar.",
  location: "Truganina, VIC",
  suburb: "Truganina",
  suburbSlug: "truganina",
  date: "November 2025",
  type: "solar",
  systemSize: "10kW",
  panels: "24 x 440W Tier-1 Panels",
  inverter: "10kW Hybrid Inverter",
  annualSaving: "$2,000/yr",
  payback: "4.5 years",
  quarterlyBillBefore: "$620",
  quarterlyBillAfter: "$110",
  rebateReceived: "$4,400",
  image: "/src/assets/project-solar-2.jpeg",
  challenge: "This Truganina family had a large 5-bedroom home with significant electricity consumption across all seasons — cooling in summer, heating in winter, and high general appliance usage year-round. Their quarterly bills were consistently above $600. They had considered a 6.6kW system but wanted to ensure they were generating enough to cover their usage rather than just offset a portion of it.",
  solution: "We recommended a 10kW system using 24 x 440W tier-1 panels. The larger system size was justified by their consumption profile and the relatively low incremental cost of going from 6.6kW to 10kW at current panel prices. A hybrid inverter was installed to facilitate future battery addition. The STC federal rebate of approximately $4,400 was applied at point of sale.",
  outcome: "The 10kW system generates substantially more energy than a smaller system would, covering the majority of this family's consumption even in winter. Quarterly bills dropped from $620 to around $110 — a saving of $510 per quarter, or $2,040 per year. The payback period is estimated at 4.5 years.",
  relatedProjects: allRelated.filter(p => p.slug !== "solar-installation-truganina").slice(0, 3),
}} />;

// ── 4. WERRIBEE 20kWh BATTERY ──
export const ProjectWerribeeBattery = () => <ProjectCaseStudy data={{
  slug: "battery-installation-werribee",
  title: "20kWh Growatt Battery Installation — Werribee",
  metaTitle: "20kWh Battery Installation Werribee | Case Study | ADSA Australian Solar",
  metaDesc: "Growatt 20kWh battery installation added to existing solar in Werribee, VIC. $6,600 battery rebate applied. Saving $1,800/year in electricity costs. Full case study.",
  location: "Werribee, VIC",
  suburb: "Werribee",
  suburbSlug: "werribee",
  date: "November 2025",
  type: "battery",
  systemSize: "20kWh Battery",
  battery: "Growatt 20kWh Lithium Battery",
  inverter: "Growatt Hybrid Inverter",
  annualSaving: "$1,800/yr",
  payback: "5 years",
  rebateReceived: "$6,600",
  image: "/src/assets/project-battery-2.jpeg",
  challenge: "This Werribee homeowner had an existing 6.6kW solar system installed several years earlier. While the panels were working well, they were exporting the majority of their generation back to the grid at just 5 cents per kWh — while buying power back in the evenings at 32 cents per kWh. They were effectively giving away their solar energy and paying premium prices at night.",
  solution: "We designed a battery retrofit using a Growatt 20kWh lithium battery system, compatible with their existing solar setup. A Growatt hybrid inverter replaced their existing inverter to enable the battery integration. The 20kWh capacity was selected to store enough daytime solar to cover their full evening and overnight consumption. The Cheaper Home Batteries Program rebate of $330/kWh applied to 20kWh, delivering $6,600 off the installed cost.",
  outcome: "After installation, the homeowner's grid imports dropped by approximately 80%. Evening electricity is now powered almost entirely by stored solar rather than grid power. Their electricity bill saving increased from approximately $600/year (solar panels alone) to approximately $1,800/year with battery storage — a net additional saving of $1,200/year from the battery alone. Payback on the battery (after rebate) is approximately 5 years.",
  relatedProjects: allRelated.filter(p => p.slug !== "battery-installation-werribee").slice(0, 3),
}} />;

// ── 5. MELTON 20kW + 42kWh ──
export const ProjectMeltonCombo = () => <ProjectCaseStudy data={{
  slug: "solar-battery-installation-melton",
  title: "20kW Solar + 42kWh Battery — Complete Home System, Melton",
  metaTitle: "20kW Solar + 42kWh Battery Melton | Case Study | ADSA Australian Solar",
  metaDesc: "Whole-home energy system in Melton, VIC. 20kW solar plus 42kWh battery with EV charging capability. Saving $3,200/year. Government rebates plus EOFY discounts applied.",
  location: "Melton, VIC",
  suburb: "Melton",
  suburbSlug: "melton",
  date: "December 2025",
  type: "combo",
  systemSize: "20kW Solar + 42kWh Battery",
  panels: "46 x 440W Tier-1 Panels",
  battery: "42kWh Lithium Battery Array",
  inverter: "20kW Commercial-Grade Hybrid Inverter",
  annualSaving: "$3,200/yr",
  payback: "5 years",
  quarterlyBillBefore: "$1,100",
  quarterlyBillAfter: "$75",
  rebateReceived: "$30,000+",
  image: "/src/assets/project-house.jpeg",
  challenge: "This large Melton property — a sizeable family home with a pool, two EVs, ducted heating and cooling, and a home office — was running quarterly electricity bills exceeding $1,100. The homeowner wanted a comprehensive solution: not just reduced bills, but near-complete energy independence and the ability to charge both EVs on solar power. The property also required a full electrical switchboard upgrade as part of the project scope.",
  solution: "We designed and installed one of the largest residential energy systems in our portfolio: 46 x 440W tier-1 solar panels delivering 20kW of generation capacity, paired with a 42kWh battery array and a commercial-grade hybrid inverter capable of handling the full load of the property including simultaneous EV charging. A dedicated EV charging circuit was installed for both vehicles. Full electrical switchboard upgrade was completed as part of the installation. Combined government rebates exceeded $30,000 on this system.",
  outcome: "This installation transformed the property into a near energy-independent home. Quarterly bills dropped from $1,100 to approximately $75 — covering only the fixed network access charge. Both EVs now charge entirely from stored solar power at near-zero cost. Annual electricity and fuel savings combined exceed $5,000 when factoring in the eliminated petrol costs. The system represents one of the strongest financial cases for integrated solar, battery and EV charging we have seen.",
  relatedProjects: allRelated.filter(p => p.slug !== "solar-battery-installation-melton").slice(0, 3),
}} />;

// ── 6. CRAIGIEBURN 13.3kW ──
export const ProjectCraigiburnSolar = () => <ProjectCaseStudy data={{
  slug: "solar-installation-craigieburn",
  title: "13.3kW Premium Solar Installation — Craigieburn",
  metaTitle: "13.3kW Solar Installation Craigieburn | Case Study | ADSA Australian Solar",
  metaDesc: "13.3kW premium solar installation in Craigieburn, VIC. 32 x 415W tier-1 panels, $5,600 STC rebate, saving $2,300/year. Full project case study.",
  location: "Craigieburn, VIC",
  suburb: "Craigieburn",
  suburbSlug: "craigieburn",
  date: "December 2025",
  type: "solar",
  systemSize: "13.3kW",
  panels: "32 x 415W Tier-1 Panels",
  inverter: "13.3kW Hybrid Inverter",
  annualSaving: "$2,300/yr",
  payback: "4 years",
  quarterlyBillBefore: "$720",
  quarterlyBillAfter: "$150",
  rebateReceived: "$5,600",
  image: "/src/assets/project-solar-3.jpeg",
  challenge: "This Craigieburn home had a large roof area and significant electricity consumption driven by a family of six, ducted air conditioning, and a home workshop. Quarterly bills were consistently around $720. The homeowner wanted the maximum feasible solar system within their roof capacity to lay the foundation for future battery and EV charging additions.",
  solution: "We designed a 13.3kW system using 32 x 415W tier-1 panels, spread across the home's available north and west-facing roof surfaces for maximum year-round generation. A 13.3kW hybrid inverter was installed — battery-ready for future storage addition. The STC federal rebate reduced the upfront cost by $5,600. Installation was completed in a single day by our licensed team.",
  outcome: "The 13.3kW system generates substantially more power than smaller systems would, with excess generation during peak solar hours available for export or future battery storage. Quarterly bills fell from $720 to approximately $150 — a reduction of $570 per quarter, or $2,280 per year. Payback is estimated at 4 years, after which the system generates approximately $2,300 in savings annually for its remaining 20+ year lifespan.",
  relatedProjects: allRelated.filter(p => p.slug !== "solar-installation-craigieburn").slice(0, 3),
}} />;
