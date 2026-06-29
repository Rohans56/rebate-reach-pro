import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { CheckCircle, Phone, ArrowRight, MapPin } from "lucide-react";

export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  heroHeading: string;
  heroSub: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { label: string; href: string }[];
}

export const ServicePage = ({ data }: { data: ServicePageData }) => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": data.title,
        "provider": {
          "@type": "LocalBusiness",
          "name": "ADSA Australian Solar",
          "telephone": "0469312118",
          "address": { "@type": "PostalAddress", "addressLocality": "Epping", "addressRegion": "VIC", "addressCountry": "AU" }
        },
        "areaServed": { "@type": "State", "name": "Victoria" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDesc} />
        <meta name="keywords" content={data.keywords} />
        <link rel="canonical" href={`https://adsaaustraliansolar.com.au/${data.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20" style={{ background: "linear-gradient(160deg, #f8fffe 0%, #eef8f5 40%, #fef4f0 100%)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#f26b3a] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#f26b3a] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-600">{data.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e3a5f] leading-tight mb-6">
            {data.heroHeading.split("|").map((part, i) => i === 1
              ? <span key={i} style={{ background: "linear-gradient(135deg,#f26b3a,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{part}</span>
              : <span key={i}>{part}</span>
            )}
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">{data.heroSub}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/contact" className="flex items-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f26b3a]/25 group">
              Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:0469312118" className="flex items-center gap-2 bg-white border border-gray-200 text-[#1e3a5f] font-bold px-8 py-4 rounded-full hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Phone className="w-4 h-4" /> 0469 312 118
            </a>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-gray-500">
            {["CEC Accredited Installer", "Licensed Electricians", "Melbourne-Wide Service", "Government Rebate Assistance"].map(t => (
              <div key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[#2eb87a]" />{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed">{data.intro}</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          {data.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a5f] mb-4">{s.heading}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {data.faqs.map((f, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-[#1e3a5f] list-none">
                  {f.q}
                  <ArrowRight className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-6">Related services</h3>
          <div className="flex flex-wrap gap-3">
            {data.relatedServices.map(s => (
              <Link key={s.href} to={s.href} className="text-sm font-medium text-gray-500 hover:text-[#f26b3a] border border-gray-200 hover:border-[#f26b3a] bg-white px-4 py-2 rounded-full transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#1e3a5f" }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8 text-lg">Free quote, no obligation, response within 24 hours.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#f26b3a] hover:bg-[#e05a2a] text-white font-bold px-10 py-5 rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-[#f26b3a]/30 hover:-translate-y-0.5 group">
            Get Your Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </>
  );
};

// ─── SERVICE PAGE DATA ────────────────────────────────────────────────────────

const relatedAll = [
  { label: "Solar Panel Installation", href: "/solar-panel-installation" },
  { label: "Battery Storage Installation", href: "/solar-battery-installation" },
  { label: "EV Charger Installation", href: "/ev-charger-installation" },
  { label: "Residential Solar", href: "/residential-solar" },
  { label: "Commercial Solar", href: "/commercial-solar" },
  { label: "Solar Rebates Victoria", href: "/solar-rebates-victoria" },
  { label: "Electrical Services", href: "/electrical-services" },
];

// ── Solar Panel Installation ──
export const SolarPanelInstallationPage = () => <ServicePage data={{
  slug: "solar-panel-installation",
  title: "Solar Panel Installation",
  metaTitle: "Solar Panel Installation Melbourne | CEC Accredited | ADSA Solar",
  metaDesc: "Professional solar panel installation across Melbourne and Victoria. CEC accredited installers, tier-1 panels, 25-year warranty. Government rebates up to $3,500. Free quote.",
  keywords: "solar panel installation Melbourne, solar panels Melbourne, solar installation Victoria, solar panel installer Melbourne, residential solar installation Melbourne",
  heroHeading: "Solar Panel Installation|Melbourne & Victoria",
  heroSub: "CEC accredited solar panel installation across Melbourne and Victoria. Tier-1 panels, 25-year warranty, government rebates up to $3,500 applied at point of sale.",
  intro: "ADSA Australian Solar installs premium tier-1 solar panels across Melbourne and greater Victoria. Every installation is carried out by CEC accredited electricians, ensuring your system meets all safety and quality standards — and that you can access every dollar of government rebate you're entitled to.",
  sections: [
    { heading: "What size solar system do I need?", body: "System size depends on your energy usage, roof space, and whether you're adding a battery. For an average Melbourne family home, a 6.6kW system typically covers 70–80% of daytime electricity needs. Larger homes or those with EVs often benefit from 10kW or 13kW systems. We assess your electricity bills and roof before recommending anything." },
    { heading: "Which solar panels do we install?", body: "We install tier-1 panels only — manufactured by financially stable companies with proven quality control. This matters because your panel's 25-year performance warranty is only as good as the manufacturer behind it. We work with brands including Jinko, LONGi, REC, and others based on current performance data and availability." },
    { heading: "What's included in your installation?", body: "A complete ADSA installation includes: site assessment and system design, tier-1 panels, quality inverter, racking and mounting hardware, all electrical work, grid connection application, STC rebate paperwork, metering setup, and Wi-Fi monitoring configuration. We handle everything from quote to switch-on." },
    { heading: "How does the STC rebate work?", body: "The federal Small-scale Technology Certificate (STC) rebate is applied as an upfront discount on your invoice — you don't need to lodge a claim. For a 6.6kW system in Melbourne, this typically reduces your cost by $2,800–$3,200. The rebate decreases each year, so current rates are higher than they will be in 2026." },
  ],
  faqs: [
    { q: "How long does solar panel installation take?", a: "Most residential installations are completed in a single day. The full process from quote to system activation typically takes 2–4 weeks, including permits and grid connection approval." },
    { q: "Do solar panels work in Melbourne's climate?", a: "Yes. Melbourne receives excellent solar irradiance despite its variable weather. Even on cloudy days, panels generate 10–25% of peak output. Annual solar resources in Melbourne are comparable to many European countries that have embraced solar for decades." },
    { q: "What happens to excess solar power?", a: "Excess power is exported to the grid, and your retailer pays you a feed-in tariff (currently 3–8 cents/kWh). Alternatively, a battery stores that excess for use at night — which is more financially beneficial given the gap between import and export rates." },
    { q: "Can I add a battery later?", a: "Yes, provided you install a battery-ready inverter. We always recommend specifying a hybrid inverter even if you don't add a battery immediately — it future-proofs your system and keeps add-on costs lower." },
    { q: "What warranty do I get?", a: "Tier-1 panels carry a 25-year performance warranty and 10–15 year product warranty. Inverters typically carry 5–10 year warranties with extension options. Our workmanship is guaranteed for 10 years." },
  ],
  relatedServices: relatedAll.filter(r => r.href !== "/solar-panel-installation"),
}} />;

// ── Battery Installation ──
export const SolarBatteryInstallationPage = () => <ServicePage data={{
  slug: "solar-battery-installation",
  title: "Solar Battery Installation",
  metaTitle: "Solar Battery Installation Melbourne | Up to $5,000 Rebate | ADSA Solar",
  metaDesc: "Home battery storage installation across Melbourne. Tesla Powerwall, BYD, Sungrow and more. Government rebate up to $5,000 applied upfront. CEC accredited. Free quote.",
  keywords: "solar battery installation Melbourne, battery storage Melbourne, Tesla Powerwall Melbourne, home battery Melbourne, battery rebate Victoria 2025, Sungrow battery Melbourne",
  heroHeading: "Solar Battery Installation|Melbourne & Victoria",
  heroSub: "Store your solar energy and power your home at night. Government battery rebates up to $5,000 applied at point of sale. CEC accredited installation across Melbourne.",
  intro: "A home battery system transforms your solar investment — instead of exporting cheap solar energy to the grid, you store it and use it when power is most expensive. ADSA installs a full range of battery systems across Melbourne, from the Tesla Powerwall 3 to BYD, Sungrow, and GoodWe solutions. The federal Cheaper Home Batteries Program now makes storage significantly more accessible, with rebates of approximately $330 per kWh applied directly to your invoice.",
  sections: [
    { heading: "Which battery brands do we install?", body: "We install Tesla Powerwall 3, BYD Battery Box HVM, Sungrow SBR HV, GoodWe Lynx Home, Alpha ESS, SolarEdge Home Battery, and Enphase IQ Battery systems. We recommend the right battery for your system size, usage patterns, and budget — not the brand with the highest margin for us." },
    { heading: "How does the battery rebate work?", body: "Under the federal Cheaper Home Batteries Program, you receive approximately $330 per kWh of usable battery capacity as an upfront discount. For a 13.5kWh Tesla Powerwall 3, this equals approximately $4,455 off the retail price. For a 10kWh BYD system, approximately $3,300. The rebate is applied at point of sale — no claim required." },
    { heading: "Can I add a battery to existing solar?", body: "In most cases, yes. If your existing inverter is battery-compatible (or hybrid-ready), we can add storage without replacing your panels. If your inverter is not compatible, we'll advise on the most cost-effective path — sometimes replacing the inverter and adding a battery together makes better financial sense." },
    { heading: "What is the payback period for a battery?", body: "At current rebate levels, most mid-range battery systems (10–14kWh) achieve payback in 5–8 years, with a battery lifespan of 10–15 years. For households with EVs or high evening usage, payback can be faster. We'll run the numbers honestly for your specific situation." },
  ],
  faqs: [
    { q: "Does a battery provide backup power during blackouts?", a: "Most battery systems can provide backup power during grid outages, but it depends on the system configuration. The Tesla Powerwall 3 includes whole-home backup capability. Other systems may require an additional backup gateway. We'll specify the right setup for your needs." },
    { q: "How long does battery installation take?", a: "Battery-only installations typically take half a day. Combined solar + battery installations are usually completed in a single day." },
    { q: "What battery size do I need?", a: "For an average Melbourne home (25kWh daily usage), a 10–13.5kWh battery covers most evening electricity needs. Households with EVs or very high usage may benefit from 20kWh+ systems. We assess your actual usage before recommending a size." },
    { q: "Are batteries worth it in Melbourne?", a: "For most households in 2025, yes — especially with the current rebate. The gap between export rates (3–8c/kWh) and import rates (28–38c/kWh) means every kWh you store instead of export saves you 20–30 cents. Over a year, that adds up significantly." },
  ],
  relatedServices: relatedAll.filter(r => r.href !== "/solar-battery-installation"),
}} />;

// ── EV Charger ──
export const EVChargerInstallationPage = () => <ServicePage data={{
  slug: "ev-charger-installation",
  title: "EV Charger Installation",
  metaTitle: "EV Charger Installation Melbourne | Home EV Charging | ADSA Solar",
  metaDesc: "Professional home EV charger installation across Melbourne. Level 2 AC chargers, solar-compatible, fully licensed electricians. Combine with solar to charge on free power. Free quote.",
  keywords: "EV charger installation Melbourne, home EV charger Melbourne, electric car charger Melbourne, Level 2 EV charger Melbourne, solar EV charging Melbourne, Zappi charger Melbourne",
  heroHeading: "EV Charger Installation|Melbourne & Victoria",
  heroSub: "Charge your electric vehicle on free solar power. Fully licensed EV charger installation across Melbourne — standalone or combined with solar panels for maximum savings.",
  intro: "As electric vehicles become mainstream across Melbourne, home EV charging is one of the smartest upgrades you can make. A dedicated Level 2 charger adds 40–130km of range per hour — and when combined with solar panels, you're charging your car on electricity that costs you nothing. ADSA installs EV chargers as standalone upgrades and as part of complete solar + battery + EV charging systems.",
  sections: [
    { heading: "Level 1 vs Level 2 EV chargers", body: "A standard wall outlet (Level 1) adds about 8–12km of range per hour — fine for occasional light use. A dedicated Level 2 charger (7kW or 22kW) adds 40–130km per hour, making it practical for daily driving. We recommend Level 2 for all EV owners who use their vehicle regularly." },
    { heading: "Which EV chargers do we install?", body: "We install Zappi (solar-aware, maximises solar self-consumption), Tesla Wall Connector, Wallbox Pulsar Plus, and other quality AC chargers compatible with all Australian EVs. The Zappi is particularly popular for solar homes — it automatically adjusts charging speed to use only your surplus solar generation." },
    { heading: "Combining EV charging with solar", body: "The combination of solar panels and a home EV charger is one of the most financially rewarding setups available. A typical Melbourne EV owner driving 15,000km/year needs approximately 2,500kWh of electricity annually — worth $800 from the grid, or nearly free from solar. We size solar systems to cover both home usage and EV charging." },
    { heading: "What's involved in installation?", body: "We assess your switchboard capacity, determine the ideal charger location, supply and install the charger unit, and handle all electrical certification. Most installations are completed in 2–4 hours. If your switchboard requires an upgrade, we'll advise on this upfront." },
  ],
  faqs: [
    { q: "How much does EV charger installation cost in Melbourne?", a: "A complete Level 2 EV charger installation in Melbourne typically costs $1,200–$3,700 including the charger unit and installation. Cost varies based on charger brand, switchboard distance, and whether any switchboard upgrades are needed." },
    { q: "Do I need a special meter for EV charging?", a: "Not necessarily. A standard smart meter can track your EV charging consumption. If you want to access EV-specific tariffs from your retailer, you may need to notify them — we'll advise on this during your consultation." },
    { q: "Can I get government rebates for an EV charger?", a: "There are currently no federal rebates specifically for home EV chargers in Victoria, but some electricity retailers offer rebates or discounts for EV customers. Combining with solar does attract the STC solar rebate." },
    { q: "How long does EV charger installation take?", a: "Most residential EV charger installations take 2–4 hours. If your switchboard requires an upgrade, allow a full day." },
  ],
  relatedServices: relatedAll.filter(r => r.href !== "/ev-charger-installation"),
}} />;

// ── Residential Solar ──
export const ResidentialSolarPage = () => <ServicePage data={{
  slug: "residential-solar",
  title: "Residential Solar",
  metaTitle: "Residential Solar Melbourne | Home Solar Panels | ADSA Australian Solar",
  metaDesc: "Residential solar panel and battery installation for Melbourne homes. Tailored systems, government rebates up to $2,800, CEC accredited installers. Free home assessment.",
  keywords: "residential solar Melbourne, home solar panels Melbourne, residential solar installer Melbourne, home solar installation Victoria, solar panels for homes Melbourne",
  heroHeading: "Residential Solar|for Melbourne Homes",
  heroSub: "Tailored solar and battery systems designed for your home, your roof, and your energy usage. CEC accredited installation with full government rebate assistance.",
  intro: "Every Melbourne home is different — different roof orientation, different household size, different energy usage patterns. ADSA designs residential solar systems that are built specifically for your property, not generic packages pulled off a shelf. From the initial consultation through to the day your system switches on, we handle every step with care and transparency.",
  sections: [
    { heading: "How we design your system", body: "We assess your roof (orientation, pitch, shading, available area), review your electricity bills (to understand usage patterns and peak demand times), and consider future needs like EV charging or battery storage. From this we design a system sized to maximise your financial return — not to maximise the size of our invoice." },
    { heading: "The installation process", body: "Once you accept our proposal, we lodge all permits and your grid connection application. On installation day, our licensed electricians arrive, complete the full installation, and commission the system. Most homes are done in a single day. We then handle final grid connection with your network provider — typically completed within a week." },
    { heading: "After installation support", body: "We don't disappear after installation. We set up your system's monitoring app so you can track generation, consumption, and exports in real time. If any issue arises, our team is reachable directly — not through a call centre. Our workmanship warranty covers you for 10 years." },
  ],
  faqs: [
    { q: "What size solar system does a typical Melbourne home need?", a: "A 3–4 person household typically suits a 6.6kW system. Larger families or high-usage homes (ducted cooling, pool, EV) often benefit from 10kW. We always base our recommendation on your actual bills rather than a generic formula." },
    { q: "Can I get solar on a rental property?", a: "Yes, though the process is slightly different. We can advise on the options available for investment properties and rental homes." },
    { q: "What if my roof isn't north-facing?", a: "North-facing is ideal but not essential. East and west-facing roofs produce slightly less power but still deliver strong financial returns. We'll model your specific roof's performance before making any recommendations." },
  ],
  relatedServices: relatedAll.filter(r => r.href !== "/residential-solar"),
}} />;

// ── Commercial Solar ──
export const CommercialSolarPage = () => <ServicePage data={{
  slug: "commercial-solar",
  title: "Commercial Solar",
  metaTitle: "Commercial Solar Melbourne | Business Solar Installation | ADSA Solar",
  metaDesc: "Commercial solar installation for Melbourne businesses. Reduce operating costs, access government incentives, and demonstrate sustainability credentials. Free commercial assessment.",
  keywords: "commercial solar Melbourne, business solar Melbourne, commercial solar installation Victoria, solar for business Melbourne, commercial solar panels Melbourne",
  heroHeading: "Commercial Solar|for Melbourne Businesses",
  heroSub: "Reduce your business energy costs and access government incentives with a commercial solar installation designed around your operations.",
  intro: "Commercial solar delivers some of the strongest financial returns available to Melbourne businesses today. With electricity representing a significant operating cost for most commercial premises, and with commercial solar systems qualifying for substantial government incentives, the case for business solar has never been stronger. ADSA designs and installs commercial solar systems for businesses across Melbourne and Victoria.",
  sections: [
    { heading: "Commercial solar vs residential solar", body: "Commercial systems are typically larger (15kW–100kW+), installed on flat or low-pitch commercial roofs, and designed around business operating hours to maximise self-consumption. Unlike residential, commercial solar also qualifies for accelerated depreciation tax benefits under the instant asset write-off scheme." },
    { heading: "Government incentives for businesses", body: "Commercial systems still qualify for the federal STC rebate, though larger systems above 100kW use the Large-scale Renewable Energy Target (LRET) instead. Businesses can also claim the solar system as a business asset, accessing depreciation benefits. We work with your accountant to ensure you maximise every available incentive." },
    { heading: "Site assessment and design", body: "Commercial solar design requires careful consideration of roof load capacity, electrical infrastructure, energy demand profiles, and grid export limits. We conduct a full site assessment before proposing any system, and design solutions that work within your building's specific constraints." },
  ],
  faqs: [
    { q: "What size commercial solar system do I need?", a: "This depends on your energy consumption, available roof area, and budget. We assess your bills and site before recommending anything. Common commercial system sizes range from 15kW for small businesses to 100kW+ for larger operations." },
    { q: "Can businesses claim solar as a tax deduction?", a: "Yes. Commercial solar systems can be claimed as a business asset. Depending on the asset value and your business structure, accelerated depreciation rules may allow you to write off the full cost in year one. Speak with your accountant for specific advice." },
    { q: "How long is the payback period for commercial solar?", a: "Commercial solar often achieves faster payback than residential due to higher energy consumption and better alignment between solar generation hours and business operating hours. Typical payback for well-designed commercial systems is 3–6 years." },
  ],
  relatedServices: relatedAll.filter(r => r.href !== "/commercial-solar"),
}} />;

// ── Solar Rebates Victoria ──
export const SolarRebatesVictoriaPage = () => <ServicePage data={{
  slug: "solar-rebates-victoria",
  title: "Solar Rebates Victoria",
  metaTitle: "Solar Rebates Victoria 2025 | What You Can Claim | ADSA Solar",
  metaDesc: "Complete guide to solar rebates available in Victoria 2025. STC federal rebate, Cheaper Home Batteries Program, and more. ADSA handles all paperwork. Free quote today.",
  keywords: "solar rebates Victoria 2025, solar panel rebate Victoria, battery rebate Victoria, cheaper home batteries program, STC rebate Melbourne, Victorian solar rebate 2025",
  heroHeading: "Solar Rebates|Victoria 2025",
  heroSub: "Victorian homeowners can access up to $2,800 in combined government rebates in 2025. ADSA handles all rebate paperwork — you simply pay the reduced price.",
  intro: "The combination of federal solar and battery rebates available to Victorian homeowners in 2025 represents some of the strongest government support for home energy ever offered in Australia. Understanding what you're entitled to — and ensuring you claim every dollar — is something ADSA manages on your behalf as part of every installation.",
  sections: [
    { heading: "Federal STC Solar Rebate", body: "The Small-scale Technology Certificate (STC) rebate is the primary federal incentive for solar panels. For a 6.6kW system in Melbourne, this currently equates to approximately $2,800–$3,200 off your installation cost. It's applied as an upfront discount — you never see a separate cheque or lodge a claim. Your installer creates and sells the STCs, passing the value to you. The rebate reduces slightly each January 1." },
    { heading: "Cheaper Home Batteries Program", body: "The federal government's Cheaper Home Batteries Program provides approximately $330 per kWh of usable battery storage capacity, applied at point of sale. For a 10kWh system, this is approximately $3,300 off. For a 13.5kWh Tesla Powerwall 3, approximately $4,455. Combined with the solar rebate, the total upfront support for a solar + battery system can reach $7,000–$8,000 or more." },
    { heading: "Victorian Solar Homes Program", body: "The Victorian government's Solar Homes Program has provided additional state-level rebates and interest-free loans. Availability and terms vary — the program opens and closes in rounds. We monitor current availability and will advise you on what's active at the time of your quote. Check solar.vic.gov.au for current information." },
    { heading: "ADSA handles all paperwork", body: "You don't need to understand the rebate mechanics in detail. When you install with ADSA, we manage every aspect of your rebate claim — STC creation and sale, program registration, and any other paperwork. Your quote already reflects all applicable discounts. You simply pay the net amount." },
  ],
  faqs: [
    { q: "Do I need to apply for solar rebates myself?", a: "No. When you use a CEC accredited installer like ADSA, we handle all rebate paperwork on your behalf. The rebate value is applied as a discount on your invoice — you pay the reduced amount and we manage the rest." },
    { q: "How much can I save with solar rebates in Victoria?", a: "Combined federal rebates for a solar + battery system typically save Victorian homeowners $5,000–$8,500+ upfront, depending on system size. This is in addition to ongoing electricity bill savings of $1,000–$2,300 per year." },
    { q: "Do rebates apply to rental properties?", a: "The STC rebate applies to all eligible solar installations regardless of property type. Some Victorian government programs have additional eligibility criteria. We can advise on what applies to your specific situation." },
    { q: "Will rebates be lower next year?", a: "The STC solar rebate decreases slightly each January 1 as part of the scheme's design. Current year rates are always higher than future rates. The battery rebate amount may also change as the Cheaper Home Batteries Program evolves." },
  ],
  relatedServices: relatedAll.filter(r => r.href !== "/solar-rebates-victoria"),
}} />;

// ── Electrical Services ──
export const ElectricalServicesPage = () => <ServicePage data={{
  slug: "electrical-services",
  title: "Electrical Services",
  metaTitle: "Electrical Services Melbourne | Licensed Electricians | ADSA Solar",
  metaDesc: "Licensed electrical services across Melbourne from ADSA Australian Solar. Switchboard upgrades, general electrical work, EV charger installation and more. Free quote.",
  keywords: "electrical services Melbourne, licensed electrician Melbourne, switchboard upgrade Melbourne, electrical work Melbourne, electrician Epping Melbourne",
  heroHeading: "Electrical Services|Melbourne & Victoria",
  heroSub: "Licensed electrical services across Melbourne from ADSA's qualified electricians. Switchboard upgrades, general electrical work, and solar-related electrical installations.",
  intro: "ADSA Australian Solar's team includes fully licensed electricians who service Melbourne homes for a range of electrical needs — not just solar. Whether you need a switchboard upgrade ahead of a solar installation, general electrical work, or a dedicated circuit for an EV charger, our team delivers safe, certified work across Melbourne and the northern suburbs.",
  sections: [
    { heading: "Switchboard upgrades", body: "Older Melbourne homes often have switchboards that aren't compatible with modern solar systems, EV chargers, or high-capacity appliances. We assess and upgrade switchboards to current safety standards, ensuring your home's electrical infrastructure is ready for today's energy demands." },
    { heading: "Solar-related electrical work", body: "Every solar installation includes all associated electrical work — inverter installation, wiring, meter board connections, and safety certification. Our electricians are trained specifically in solar PV systems and keep up with current Australian standards." },
    { heading: "General electrical services", body: "Beyond solar, our team handles general residential electrical work across Melbourne. Contact us to discuss your specific requirements." },
  ],
  faqs: [
    { q: "Are you licensed electricians?", a: "Yes. All electrical work is carried out by fully licensed and insured electricians. We're also CEC accredited specifically for solar PV installation." },
    { q: "Do I need a switchboard upgrade for solar?", a: "Not always. We assess your switchboard as part of every solar quote. If an upgrade is needed, we'll advise on the cost and include it in your proposal." },
    { q: "What areas do you service?", a: "We service Melbourne and greater Victoria. Based in Epping, we regularly service the northern, western, and south-eastern suburbs." },
  ],
  relatedServices: relatedAll.filter(r => r.href !== "/electrical-services"),
}} />;
