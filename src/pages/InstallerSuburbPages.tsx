import { InstallerSuburbPage } from "./InstallerSuburbPage";
import { ServicePage } from "./ServicePage";

const commonFaq = (suburb: string) => [
  {
    q: `How much does solar cost in ${suburb}?`,
    a: `After government rebates, a quality 6.6kW solar system in ${suburb} typically costs $4,500–$6,500. A 10kW system runs $7,000–$9,500. The federal STC rebate reduces your upfront cost by $2,800–$4,600 depending on system size.`
  },
  {
    q: `What rebates are available for ${suburb} homeowners in 2025?`,
    a: `${suburb} homeowners can access the federal STC solar rebate (up to $2,800 off panels) and the Cheaper Home Batteries Program ($330 per kWh off battery storage, up to $5,000 for a 13.5kWh battery). Combined, eligible households can save up to $2,800.`
  },
  {
    q: `How long does solar installation take in ${suburb}?`,
    a: `Most residential solar installations in ${suburb} are completed in a single day. The full process from quote to switch-on typically takes 2–4 weeks, including permits, grid connection application, and scheduling.`
  },
  {
    q: `Is a battery worth it in ${suburb}?`,
    a: `For most ${suburb} households, yes — especially if you're away during the day or have an EV. With the current battery rebate reducing upfront cost by thousands, payback periods have shortened significantly. We'll run the numbers honestly for your specific situation.`
  },
  {
    q: `Do you install EV chargers in ${suburb}?`,
    a: `Yes. We install Level 2 home EV chargers across ${suburb} and surrounds. We can combine your EV charger installation with solar panels so you charge your car on free solar power.`
  },
];

const allSuburbs = [
  "werribee", "tarneit", "point-cook", "craigieburn", "clyde-north",
  "truganina", "melton", "cranbourne", "berwick", "geelong",
  "epping", "hoppers-crossing", "wyndham-vale", "donnybrook", "pakenham",
  "officer", "roxburgh-park", "sunbury", "caroline-springs", "altona-meadows"
];

const getNearbySlugs = (current: string) =>
  allSuburbs
    .filter(s => s !== current)
    .slice(0, 6)
    .map(s => ({ name: s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "), slug: s }));

// ── WERRIBEE ──
export const InstallerWerribee = () => <InstallerSuburbPage data={{
  suburb: "Werribee", slug: "werribee", region: "Melbourne's Western Suburbs", postcode: "3030",
  intro: "ADSA Australian Solar is Werribee's trusted local solar installer. We've helped dozens of Werribee families cut their power bills and access government rebates — with installations completed in a single day.",
  whyLocal: "We've completed installations across Werribee's established streets and newer estates. We know the local grid requirements, common roof types, and which systems perform best for western Melbourne's sun exposure.",
  nearbySuburbs: getNearbySlugs("werribee"),
  projectExample: { type: "6.6kW Solar + 10kWh Battery", size: "6.6kW solar + 10kWh battery", saving: "$1,900/yr", location: "Hoppers Crossing Rd, Werribee" },
  faqItems: commonFaq("Werribee"),
}} />;

// ── TARNEIT ──
export const InstallerTarneit = () => <InstallerSuburbPage data={{
  suburb: "Tarneit", slug: "tarneit", region: "Melbourne's Western Growth Corridor", postcode: "3029",
  intro: "Tarneit is one of Melbourne's fastest-growing suburbs — and ADSA is one of the most active solar installers in the area. If you're in a newer Tarneit home, a solar system is one of the smartest investments you can make.",
  whyLocal: "New builds in Tarneit are ideally suited for solar — north-facing roofs, minimal shading, and high daytime electricity use from families at home. We size every system specifically for your home, not a generic package.",
  nearbySuburbs: getNearbySlugs("tarneit"),
  projectExample: { type: "10kW Solar System", size: "10kW", saving: "$2,100/yr", location: "Tarneit, VIC" },
  faqItems: commonFaq("Tarneit"),
}} />;

// ── POINT COOK ──
export const InstallerPointCook = () => <InstallerSuburbPage data={{
  suburb: "Point Cook", slug: "point-cook", region: "Melbourne's South-Western Suburbs", postcode: "3030",
  intro: "Point Cook homeowners are among Victoria's most solar-savvy — and for good reason. ADSA has completed numerous installations across Point Cook, helping families reduce quarterly bills by hundreds of dollars.",
  whyLocal: "Point Cook's modern homes and predominantly north-facing rooftops make it one of Melbourne's best suburbs for solar performance. We've worked across all of Point Cook's estates and know how to maximise your system's output.",
  nearbySuburbs: getNearbySlugs("point-cook"),
  projectExample: { type: "6.6kW Rooftop Solar", size: "6.6kW", saving: "$1,600/yr", location: "Point Cook, VIC" },
  faqItems: commonFaq("Point Cook"),
}} />;

// ── CRAIGIEBURN ──
export const InstallerCraigieburn = () => <InstallerSuburbPage data={{
  suburb: "Craigieburn", slug: "craigieburn", region: "Melbourne's Northern Growth Corridor", postcode: "3064",
  intro: "Craigieburn is one of Melbourne's most popular growth corridors and solar demand is surging. ADSA provides expert solar panel and battery installation throughout Craigieburn, backed by full CEC accreditation.",
  whyLocal: "We service Craigieburn regularly and understand the specific grid connection requirements in this area. Whether you're in an established street or a brand-new estate, we'll design the right system for your property.",
  nearbySuburbs: getNearbySlugs("craigieburn"),
  projectExample: { type: "13.3kW Premium Solar", size: "13.3kW", saving: "$2,300/yr", location: "Craigieburn, VIC" },
  faqItems: commonFaq("Craigieburn"),
}} />;

// ── CLYDE NORTH ──
export const InstallerClydeNorth = () => <InstallerSuburbPage data={{
  suburb: "Clyde North", slug: "clyde-north", region: "Melbourne's South-Eastern Growth Corridor", postcode: "3978",
  intro: "Clyde North is experiencing some of Melbourne's fastest residential growth. As new homeowners settle in, solar is consistently one of the first upgrades they make — and ADSA is their trusted local installer.",
  whyLocal: "New homes in Clyde North are built with solar-ready infrastructure in many cases, making installation straightforward. We've worked across the area's newest estates and deliver fast, clean installations.",
  nearbySuburbs: getNearbySlugs("clyde-north"),
  projectExample: { type: "6.6kW Solar + Battery", size: "6.6kW solar + 10kWh battery", saving: "$1,800/yr", location: "Clyde North, VIC" },
  faqItems: commonFaq("Clyde North"),
}} />;

// ── TRUGANINA ──
export const InstallerTruganina = () => <InstallerSuburbPage data={{
  suburb: "Truganina", slug: "truganina", region: "Melbourne's Western Suburbs", postcode: "3029",
  intro: "Truganina's growing community of homeowners is discovering the power of solar. ADSA delivers professional solar panel and battery installations across Truganina with expert local knowledge of the area.",
  whyLocal: "Truganina's residential density and home styles are well suited for rooftop solar. We've completed installations across the suburb and understand the local network requirements for fast grid connection approval.",
  nearbySuburbs: getNearbySlugs("truganina"),
  projectExample: { type: "10kW Domestic Solar", size: "10kW", saving: "$2,000/yr", location: "Truganina, VIC" },
  faqItems: commonFaq("Truganina"),
}} />;

// ── MELTON ──
export const InstallerMelton = () => <InstallerSuburbPage data={{
  suburb: "Melton", slug: "melton", region: "Melbourne's Western Growth Corridor", postcode: "3337",
  intro: "Melton homeowners are saving thousands every year with ADSA Australian Solar. We've completed large-scale solar and battery installations across Melton, including whole-home energy setups with EV charging.",
  whyLocal: "Melton's larger blocks and established homes often accommodate bigger solar systems — delivering proportionally bigger savings. We've worked across all of Melton's neighbourhoods and suburbs.",
  nearbySuburbs: getNearbySlugs("melton"),
  projectExample: { type: "20kW Solar + 42kWh Battery", size: "20kW solar + 42kWh battery", saving: "$3,200/yr", location: "Melton, VIC" },
  faqItems: commonFaq("Melton"),
}} />;

// ── CRANBOURNE ──
export const InstallerCranbourne = () => <InstallerSuburbPage data={{
  suburb: "Cranbourne", slug: "cranbourne", region: "Melbourne's South-Eastern Suburbs", postcode: "3977",
  intro: "Cranbourne homeowners are increasingly turning to solar to offset rising electricity costs. ADSA provides trusted solar panel and battery installation across Cranbourne with full government rebate assistance.",
  whyLocal: "Cranbourne and its surrounding estates offer great solar conditions with minimal shading on many properties. We design systems that maximise year-round output for south-eastern Melbourne's climate.",
  nearbySuburbs: getNearbySlugs("cranbourne"),
  projectExample: { type: "6.6kW Solar System", size: "6.6kW", saving: "$1,500/yr", location: "Cranbourne, VIC" },
  faqItems: commonFaq("Cranbourne"),
}} />;

// ── BERWICK ──
export const InstallerBerwick = () => <InstallerSuburbPage data={{
  suburb: "Berwick", slug: "berwick", region: "Melbourne's South-Eastern Suburbs", postcode: "3806",
  intro: "Berwick is one of Melbourne's most desirable south-eastern suburbs, and solar uptake is growing rapidly. ADSA installs premium solar and battery systems across Berwick with a focus on quality and long-term performance.",
  whyLocal: "Berwick's mix of established homes and newer estates provides excellent solar opportunities. We design each system around your specific roof orientation and energy usage to maximise your return.",
  nearbySuburbs: getNearbySlugs("berwick"),
  projectExample: { type: "8kW Solar + 13.5kWh Battery", size: "8kW solar + 13.5kWh battery", saving: "$2,200/yr", location: "Berwick, VIC" },
  faqItems: commonFaq("Berwick"),
}} />;

// ── GEELONG ──
export const InstallerGeelong = () => <InstallerSuburbPage data={{
  suburb: "Geelong", slug: "geelong", region: "Victoria's Second Largest City", postcode: "3220",
  intro: "ADSA Australian Solar services Geelong and surrounding areas with the same quality and care we bring to every Melbourne installation. Geelong's coastal climate and strong sun hours make it ideal for solar.",
  whyLocal: "Geelong homeowners enjoy some of Victoria's best solar conditions. We've expanded our service area to meet demand from Geelong families who want a trusted Melbourne-based installer with proven credentials.",
  nearbySuburbs: [
    { name: "Werribee", slug: "werribee" }, { name: "Point Cook", slug: "point-cook" },
    { name: "Melton", slug: "melton" }, { name: "Tarneit", slug: "tarneit" },
    { name: "Hoppers Crossing", slug: "hoppers-crossing" }, { name: "Wyndham Vale", slug: "wyndham-vale" }
  ],
  projectExample: { type: "10kW Solar + Battery", size: "10kW solar + 13.5kWh battery", saving: "$2,200/yr", location: "Geelong, VIC" },
  faqItems: commonFaq("Geelong"),
}} />;

// ── EPPING ──
export const InstallerEpping = () => <InstallerSuburbPage data={{
  suburb: "Epping", slug: "epping", region: "Melbourne's Northern Suburbs", postcode: "3076",
  intro: "ADSA Australian Solar is based in Epping — so when you choose us for your solar installation, you're working with a genuine local team. We're proud to serve our own community first.",
  whyLocal: "As an Epping-based business at 82 Yale Drive, we're your most local solar installer. We're invested in Epping's community and deliver every installation with the care we'd give our own neighbours.",
  nearbySuburbs: getNearbySlugs("epping"),
  projectExample: { type: "6.6kW Solar + 10kWh Battery", size: "6.6kW solar + 10kWh battery", saving: "$1,800/yr", location: "Epping, VIC" },
  faqItems: commonFaq("Epping"),
}} />;

// ── ROXBURGH PARK ──
export const InstallerRoxburghPark = () => <InstallerSuburbPage data={{
  suburb: "Roxburgh Park", slug: "roxburgh-park", region: "Melbourne's Northern Suburbs", postcode: "3064",
  intro: "Roxburgh Park homeowners are discovering that solar is one of the smartest investments they can make. ADSA delivers professional solar installations across Roxburgh Park with fast turnaround and honest advice.",
  whyLocal: "Roxburgh Park sits close to our Epping base, meaning fast response times and local expertise. We know the area's grid network well and handle all connection paperwork with minimal delays.",
  nearbySuburbs: getNearbySlugs("roxburgh-park"),
  faqItems: commonFaq("Roxburgh Park"),
}} />;

// ── SUNBURY ──
export const InstallerSunbury = () => <InstallerSuburbPage data={{
  suburb: "Sunbury", slug: "sunbury", region: "Melbourne's North-Western Fringe", postcode: "3429",
  intro: "Sunbury's semi-rural character and larger properties make it one of Victoria's best locations for solar. ADSA installs premium solar and battery systems across Sunbury, tailored to your home's unique setup.",
  whyLocal: "Sunbury homes often have excellent roof space and minimal shading — ideal for maximising solar output. We design systems that take full advantage of your property's solar potential.",
  nearbySuburbs: getNearbySlugs("sunbury"),
  faqItems: commonFaq("Sunbury"),
}} />;

// ── CAROLINE SPRINGS ──
export const InstallerCarolineSprings = () => <InstallerSuburbPage data={{
  suburb: "Caroline Springs", slug: "caroline-springs", region: "Melbourne's Western Suburbs", postcode: "3023",
  intro: "Caroline Springs is a vibrant western suburb with a strong and growing solar community. ADSA has helped Caroline Springs families reduce their electricity bills significantly with quality solar and battery systems.",
  whyLocal: "We regularly service Caroline Springs and understand the area's housing styles and grid requirements. Our installations are clean, fast, and backed by ongoing support.",
  nearbySuburbs: getNearbySlugs("caroline-springs"),
  faqItems: commonFaq("Caroline Springs"),
}} />;
