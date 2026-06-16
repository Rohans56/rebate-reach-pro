import { Link } from "react-router-dom";
import { BlogTemplate, BlogPost } from "./BlogTemplate";

// ─── POST 1: Solar Rebates Victoria 2025 ───────────────────────────────────
const rebatesPost: BlogPost = {
  slug: "solar-rebates-victoria-2025",
  title: "Solar Rebates Victoria 2025 — The Complete Guide",
  metaTitle: "Solar Rebates Victoria 2025 | Up to $18,500 | ADSA Australian Solar",
  metaDescription: "Complete guide to solar rebates available in Victoria in 2025. STC federal rebates, Cheaper Home Batteries Program, and more. Find out what you qualify for.",
  keywords: "solar rebates victoria 2025, solar panel rebate victoria, battery rebate victoria, cheaper home batteries program, STC rebate melbourne",
  category: "Rebates & Savings",
  readTime: "8 min",
  date: "June 2025",
  author: "ADSA Australian Solar",
  excerpt: "Victorian homeowners can access up to $18,500 in government rebates in 2025. Here's exactly what's available, who qualifies, and how to claim it.",
  relatedPosts: [
    { slug: "is-solar-battery-worth-it-victoria", title: "Is a Home Battery Worth It in Victoria?" },
    { slug: "how-much-do-solar-panels-cost-melbourne", title: "How Much Do Solar Panels Cost in Melbourne?" },
    { slug: "solar-feed-in-tariff-victoria", title: "Solar Feed-in Tariff Victoria — What You're Actually Getting" },
  ],
  content: (
    <div>
      <p>If you're thinking about going solar in Victoria in 2025, the financial case has never been stronger. Between federal government rebates on solar panels and a newer program covering battery systems, eligible Victorian homeowners can receive up to <strong>$18,500 in government support</strong> — before a single panel is installed.</p>
      <p>But these rebates are not permanent. They decrease every financial year, and the window to claim the maximum amount is right now. This guide breaks down every rebate available, who qualifies, and exactly how much you can expect to save.</p>

      <h2>1. The Federal STC Rebate (Solar Panels)</h2>
      <p>The largest and most widely available solar rebate in Australia is the <strong>Small-scale Technology Certificate (STC) rebate</strong>, administered under the federal government's Small-scale Renewable Energy Scheme (SRES).</p>
      <p>Here's how it works: when you install a solar system, your installer creates a number of STCs based on the size of your system and your location. These certificates are then sold back to the market, and the value is passed on to you as an upfront discount off the cost of your installation.</p>

      <h3>How Much Is the STC Rebate Worth in 2025?</h3>
      <p>The value depends on your system size and Melbourne's solar zone rating. As a guide for a typical Victorian home:</p>
      <table>
        <thead><tr><th>System Size</th><th>Est. STC Rebate</th><th>Best For</th></tr></thead>
        <tbody>
          <tr><td>6.6kW</td><td>~$2,800 – $3,200</td><td>Average 3–4 person home</td></tr>
          <tr><td>10kW</td><td>~$4,000 – $4,600</td><td>Larger homes, high usage</td></tr>
          <tr><td>13.3kW</td><td>~$5,200 – $6,000</td><td>Large homes, EV charging</td></tr>
        </tbody>
      </table>
      <p>This discount is applied at the point of sale — you never need to handle it yourself. Your installer simply reduces the invoice by the rebate value.</p>

      <blockquote>
        <strong>Important:</strong> The STC rebate decreases by 1/15th every year on January 1. This means the rebate available in 2025 is less than it was in 2024 — and will be less again in 2026. The sooner you act, the more you receive.
      </blockquote>

      <h2>2. The Cheaper Home Batteries Program (Battery Storage)</h2>
      <p>Launched in late 2024, the federal government's <strong>Cheaper Home Batteries Program</strong> is one of the most significant energy incentives Australia has seen. It provides an upfront subsidy on home battery storage — making battery systems significantly more accessible for everyday households.</p>

      <h3>How Much Is the Battery Rebate Worth?</h3>
      <p>The rebate is calculated at approximately <strong>$330 per kWh</strong> of usable battery capacity, applied directly as a discount at the point of sale.</p>
      <table>
        <thead><tr><th>Battery Size</th><th>Est. Rebate</th><th>Net Cost After Rebate</th></tr></thead>
        <tbody>
          <tr><td>5 kWh</td><td>~$1,700</td><td>Significantly reduced</td></tr>
          <tr><td>10 kWh</td><td>~$3,300</td><td>Most popular size</td></tr>
          <tr><td>13.5 kWh</td><td>~$4,500</td><td>Tesla Powerwall range</td></tr>
          <tr><td>20 kWh+</td><td>Up to $6,800+</td><td>Maximum independence</td></tr>
        </tbody>
      </table>
      <p>Like the STC rebate, this discount reduces over time as the program matures. Households that install in 2025 will receive more than those who wait until 2026 or 2027.</p>

      <h3>Who Qualifies for the Battery Rebate?</h3>
      <ul>
        <li>Australian homeowners (renters are generally not eligible)</li>
        <li>The battery must be installed by a Clean Energy Council (CEC) accredited installer</li>
        <li>The system must meet minimum technical specifications</li>
        <li>You can pair it with existing solar or install solar and battery together</li>
      </ul>

      <h2>3. The Victorian Solar Homes Program</h2>
      <p>On top of federal rebates, the Victorian government's Solar Homes Program has historically offered additional rebates and interest-free loans for eligible households. While the specific terms of this program change periodically, it has previously provided:</p>
      <ul>
        <li>Up to $1,400 rebate on solar panel systems for owner-occupiers</li>
        <li>Interest-free loans of up to $8,800 for solar hot water systems</li>
        <li>Rebates for rental properties in some circumstances</li>
      </ul>
      <p>We recommend checking the <strong>Solar Victoria website</strong> (solar.vic.gov.au) for the most current availability, as these programs open and close in rounds. Our team at ADSA can also advise you on what's currently active when you get a quote.</p>

      <h2>How Much Can You Save in Total?</h2>
      <p>For a typical Victorian homeowner installing a solar + battery package in 2025, the combined savings look like this:</p>
      <table>
        <thead><tr><th>Component</th><th>Typical Value</th></tr></thead>
        <tbody>
          <tr><td>STC Federal Solar Rebate</td><td>$2,800 – $4,600</td></tr>
          <tr><td>Cheaper Home Batteries Rebate</td><td>$3,300 – $6,800</td></tr>
          <tr><td>Annual electricity bill savings</td><td>$1,400 – $2,300/year</td></tr>
          <tr><td><strong>Total first-year value</strong></td><td><strong>Up to $13,700+</strong></td></tr>
        </tbody>
      </table>

      <h2>How to Claim Your Rebates</h2>
      <p>The good news is that you don't need to do much. When you use a CEC-accredited installer like ADSA Australian Solar:</p>
      <ol>
        <li>We assess your property and design the right system</li>
        <li>We handle all rebate paperwork on your behalf</li>
        <li>The rebate value is deducted directly from your invoice</li>
        <li>You simply pay the reduced amount</li>
      </ol>
      <p>You never receive a cheque or lodge a separate claim — it all happens at the point of sale.</p>

      <h2>Bottom Line</h2>
      <p>2025 is genuinely one of the best years to go solar in Victoria. The combination of federal panel rebates, the new battery subsidy, rising electricity prices, and falling system costs means the numbers stack up better than ever.</p>
      <p>But the window is shrinking. Every year that passes means a smaller STC rebate. The Cheaper Home Batteries Program is designed to wind down as uptake increases. Acting now locks in the maximum available support.</p>
      <p>If you'd like to know exactly what you qualify for based on your home and energy usage, <Link to="/contact" className="text-[#f26b3a] font-semibold">get a free quote from ADSA Australian Solar</Link>. We'll walk you through every rebate you're eligible for and design a system that maximises your savings.</p>
    </div>
  )
};

// ─── POST 2: Is a Battery Worth It ─────────────────────────────────────────
const batteryPost: BlogPost = {
  slug: "is-solar-battery-worth-it-victoria",
  title: "Is a Home Battery Worth It in Victoria? (2025 Honest Answer)",
  metaTitle: "Is a Solar Battery Worth It in Victoria 2025? | Honest Guide | ADSA Solar",
  metaDescription: "Wondering if a home battery is worth the investment in Victoria? We break down the real costs, savings, payback periods and which households benefit most.",
  keywords: "is solar battery worth it victoria, home battery storage melbourne, battery storage cost victoria, solar battery payback period, powerwall victoria",
  category: "Battery Storage",
  readTime: "9 min",
  date: "June 2025",
  author: "ADSA Australian Solar",
  excerpt: "A battery isn't right for everyone — but for many Victorian households in 2025, the numbers are finally making sense. Here's an honest breakdown.",
  relatedPosts: [
    { slug: "solar-rebates-victoria-2025", title: "Solar Rebates Victoria 2025 — The Complete Guide" },
    { slug: "how-much-do-solar-panels-cost-melbourne", title: "How Much Do Solar Panels Cost in Melbourne?" },
    { slug: "ev-charger-solar-melbourne-guide", title: "EV Charger + Solar — The Complete Melbourne Guide" },
  ],
  content: (
    <div>
      <p>It's the most common question we get at ADSA: <em>"Should I add a battery, or just go with solar panels for now?"</em></p>
      <p>The honest answer in 2025 is: <strong>for most Victorian homeowners, yes — a battery is now worth it</strong>. But not because of one reason. It's the combination of falling battery prices, the new federal battery rebate, rising electricity costs, and low feed-in tariffs that have shifted the economics significantly in the last 12 months.</p>
      <p>Here's the full picture, without the sales spin.</p>

      <h2>The Problem Batteries Solve</h2>
      <p>Solar panels only generate electricity when the sun is shining. If you're at work during the day, most of that energy gets exported to the grid — and Victorian electricity retailers currently pay you as little as <strong>3–6 cents per kWh</strong> for it.</p>
      <p>But when you get home in the evening and start using power — cooking dinner, running the dishwasher, watching TV — you're buying electricity back from the grid at <strong>28–38 cents per kWh</strong>.</p>
      <p>That gap — selling cheap, buying expensive — is exactly what a battery fixes. Instead of exporting your solar energy for almost nothing, you store it and use it when power is most expensive.</p>

      <h2>The Real Cost of a Battery in 2025</h2>
      <p>Before the rebate, a quality home battery system typically costs:</p>
      <table>
        <thead><tr><th>Battery</th><th>Capacity</th><th>Before Rebate</th><th>Rebate (~$330/kWh)</th><th>After Rebate</th></tr></thead>
        <tbody>
          <tr><td>Sungrow SBR</td><td>9.6 kWh</td><td>~$8,500</td><td>~$3,170</td><td>~$5,330</td></tr>
          <tr><td>BYD HVM</td><td>11 kWh</td><td>~$9,800</td><td>~$3,630</td><td>~$6,170</td></tr>
          <tr><td>Tesla Powerwall 3</td><td>13.5 kWh</td><td>~$14,500</td><td>~$4,455</td><td>~$10,045</td></tr>
          <tr><td>BYD HVM</td><td>13.8 kWh</td><td>~$11,500</td><td>~$4,554</td><td>~$6,946</td></tr>
        </tbody>
      </table>
      <p>These are estimates — the actual rebate amount and system cost depend on your specific situation. But you can see the rebate takes a meaningful chunk off the price, particularly for mid-range systems.</p>

      <h2>What Are the Annual Savings?</h2>
      <p>This depends heavily on your household. The key factors are:</p>
      <ul>
        <li><strong>How much electricity you use at night</strong> — the more you shift to battery power, the more you save</li>
        <li><strong>Your electricity tariff</strong> — higher rates mean bigger savings per kWh avoided</li>
        <li><strong>Your solar system size</strong> — a bigger solar system means more energy available to store</li>
        <li><strong>Number of people at home</strong> — families with people home during the day get less benefit than those out all day</li>
      </ul>
      <p>For a typical Melbourne family home with a 6.6kW solar system adding a 10kWh battery, annual savings on electricity bills typically range from <strong>$800 to $1,400 per year</strong> on top of existing solar savings.</p>

      <h2>The Payback Period — Realistic Numbers</h2>
      <p>At $800–$1,400 per year in additional savings, and a net cost after rebate of approximately $5,000–$7,000 for a good mid-range battery, the payback period works out to roughly:</p>
      <blockquote>
        <strong>5–8 years for most Victorian households</strong> — with a battery that lasts 10–15 years and carries a 10-year warranty.
      </blockquote>
      <p>That means you're looking at 5–10 years of pure savings after payback. Not as fast as solar panels alone (which typically pay back in 3–5 years), but still a strong return — and that's before factoring in electricity price rises, which historically average 3–5% per year.</p>

      <h2>Who Benefits Most From a Battery?</h2>
      <p>A battery adds the most value for households that:</p>
      <ul>
        <li><strong>Are away from home during the day</strong> — your solar generation goes to waste without storage</li>
        <li><strong>Have high evening electricity usage</strong> — running appliances, EV charging, air conditioning at night</li>
        <li><strong>Have an EV or plan to get one</strong> — charge your car overnight from free solar energy stored during the day</li>
        <li><strong>Experience regular blackouts</strong> — a battery provides backup power when the grid goes down</li>
        <li><strong>Have a larger solar system</strong> (8kW+) — more generation means more energy to store</li>
      </ul>

      <h2>Who Might Want to Wait?</h2>
      <p>A battery may be less urgent for you if:</p>
      <ul>
        <li>Someone is home during the day and can shift usage to daytime hours (washing, dishwasher, etc.)</li>
        <li>Your electricity tariff is already low</li>
        <li>Your primary goal is fast payback rather than energy independence</li>
      </ul>
      <p>In these cases, solar panels alone often make more financial sense as a starting point — and you can always add a battery later.</p>

      <h2>The Blackout Protection Factor</h2>
      <p>This doesn't show up in a payback calculation but it matters enormously to many families. A solar battery system with backup capability means that when Melbourne's grid goes down — during storms, heatwaves, bushfire seasons — your home keeps running.</p>
      <p>Lights stay on. The fridge keeps working. You can charge phones and medical devices. For many households, this peace of mind alone justifies a significant portion of the cost.</p>

      <h2>Our Honest Recommendation</h2>
      <p>If you're installing solar in 2025, we recommend at least getting a battery-ready inverter — even if you don't add the battery immediately. This future-proofs your system and means adding storage later is straightforward and less expensive.</p>
      <p>If you can stretch the budget, installing solar and battery together in 2025 gives you the maximum available rebate, one installation cost, and the full benefit of energy independence from day one.</p>
      <p>Want to see whether a battery stacks up for your specific home? <Link to="/services" className="text-[#f26b3a] font-semibold">Use our battery savings calculator</Link> or <Link to="/contact" className="text-[#f26b3a] font-semibold">get a free personalised quote</Link> — we'll run the numbers honestly for your situation.</p>
    </div>
  )
};

// ─── POST 3: Cost of Solar Panels Melbourne ─────────────────────────────────
const costPost: BlogPost = {
  slug: "how-much-do-solar-panels-cost-melbourne",
  title: "How Much Do Solar Panels Cost in Melbourne? (2025 Price Guide)",
  metaTitle: "How Much Do Solar Panels Cost in Melbourne 2025? | Real Prices | ADSA Solar",
  metaDescription: "Real 2025 solar panel prices in Melbourne after government rebates. 6.6kW, 10kW and 13kW system costs, what's included, and how to avoid getting ripped off.",
  keywords: "how much do solar panels cost melbourne, solar panel prices melbourne 2025, solar system cost victoria, 6.6kw solar cost melbourne, solar installation price melbourne",
  category: "Costs & Pricing",
  readTime: "7 min",
  date: "June 2025",
  author: "ADSA Australian Solar",
  excerpt: "Solar panel prices in Melbourne have dropped significantly. Here are real 2025 prices for every system size, after government rebates — and what to watch out for.",
  relatedPosts: [
    { slug: "solar-rebates-victoria-2025", title: "Solar Rebates Victoria 2025 — The Complete Guide" },
    { slug: "is-solar-battery-worth-it-victoria", title: "Is a Home Battery Worth It in Victoria?" },
    { slug: "how-long-do-solar-panels-last", title: "How Long Do Solar Panels Last in Melbourne?" },
  ],
  content: (
    <div>
      <p>Solar panel prices in Australia have dropped by more than 80% over the past decade — and Melbourne homeowners are benefiting enormously. But pricing can be confusing, with quotes varying wildly between installers and cheap deals that often come at a hidden cost.</p>
      <p>This guide gives you real 2025 prices for every system size, explains what's included in a quality installation, and tells you exactly what to watch out for when comparing quotes.</p>

      <h2>2025 Solar Panel Prices in Melbourne — After Rebates</h2>
      <p>These are realistic price ranges for a quality solar installation in Melbourne, after the federal STC rebate has been applied:</p>
      <table>
        <thead><tr><th>System Size</th><th>Price After Rebate</th><th>Best For</th><th>Est. Annual Saving</th></tr></thead>
        <tbody>
          <tr><td>6.6 kW</td><td>$4,500 – $6,500</td><td>Average 2–4 person home</td><td>$1,200 – $1,600</td></tr>
          <tr><td>10 kW</td><td>$7,000 – $9,500</td><td>Larger families, higher usage</td><td>$1,800 – $2,200</td></tr>
          <tr><td>13.3 kW</td><td>$9,000 – $12,500</td><td>Large homes, EV charging</td><td>$2,200 – $2,800</td></tr>
        </tbody>
      </table>
      <p>At these prices — which already include the government rebate — most systems pay themselves back in <strong>3–5 years</strong> and then deliver free electricity for another 20+ years.</p>

      <h2>What's Included in These Prices?</h2>
      <p>A complete, quality solar installation should include:</p>
      <ul>
        <li><strong>Solar panels</strong> — ideally tier-1 brands with 25-year performance warranty</li>
        <li><strong>Inverter</strong> — the brain of your system, converts DC to AC power (5–12 year warranty)</li>
        <li><strong>Racking and mounting hardware</strong> — attaches panels safely to your roof</li>
        <li><strong>Electrical work</strong> — wiring, switchboard upgrades if required</li>
        <li><strong>Grid connection application</strong> — your installer lodges this with your network provider</li>
        <li><strong>Metering</strong> — so you can see your generation and track savings</li>
        <li><strong>CEC-accredited installation labour</strong></li>
        <li><strong>Rebate paperwork</strong> — your installer handles STC creation</li>
      </ul>

      <h2>Why Do Prices Vary So Much?</h2>
      <p>You'll often see advertised prices well below these ranges. Here's what drives the difference:</p>

      <h3>Panel Quality</h3>
      <p>There are three tiers of solar panels. Tier-1 panels (LG, REC, SunPower, Jinko, LONGi) are manufactured by companies with strong financials and quality control. Tier-3 panels are cheaper but carry real risk — if the manufacturer closes before your 25-year warranty is up, that warranty is worthless. We only install tier-1 panels at ADSA.</p>

      <h3>Inverter Quality</h3>
      <p>The inverter is the component most likely to need replacement over a system's lifetime. Budget inverters with 5-year warranties represent a false economy when a quality inverter with a 10-year warranty adds only a few hundred dollars to the price.</p>

      <h3>Installer Accreditation</h3>
      <p>Only CEC-accredited installers can legally install solar in Australia and create STCs for your rebate. Always verify your installer's CEC accreditation before signing anything.</p>

      <h3>Workmanship Quality</h3>
      <p>A poorly installed system can degrade faster, void warranties, and in worst cases create fire or electrical hazards. Check reviews, ask for examples of past work, and look for an installer who owns their work with a workmanship warranty.</p>

      <h2>The Real Cost of Going Cheap</h2>
      <p>We regularly receive calls from homeowners who purchased a cheap system and are now dealing with:</p>
      <ul>
        <li>Failed inverters outside the warranty period</li>
        <li>Panels underperforming significantly against quoted output</li>
        <li>Roof leaks caused by poor mounting work</li>
        <li>Installer businesses that no longer exist</li>
      </ul>
      <p>A system that costs $1,500 less upfront but produces 20% less energy over its lifetime costs you far more in the long run. <strong>Buy on value, not on price.</strong></p>

      <h2>How to Compare Quotes Properly</h2>
      <p>When comparing quotes from different installers, make sure you're comparing:</p>
      <ul>
        <li>The same panel brand and model (not just wattage)</li>
        <li>The same inverter brand and warranty period</li>
        <li>Whether the grid connection application is included</li>
        <li>The workmanship warranty length</li>
        <li>Whether the quote is before or after the STC rebate</li>
      </ul>

      <h2>Is Now a Good Time to Buy?</h2>
      <p>Yes — for two reasons. First, system prices are at historic lows and panel efficiency is at historic highs. Second, the STC rebate decreases every January 1. Installing in 2025 means claiming the current rebate rate before it drops further in 2026.</p>
      <p>If you're ready to get real, transparent pricing for your Melbourne home, <Link to="/contact" className="text-[#f26b3a] font-semibold">request a free quote from ADSA</Link>. We'll assess your roof, your energy usage, and give you a detailed proposal with no obligation.</p>
    </div>
  )
};

// ─── POST 4: Feed-in Tariff Victoria ────────────────────────────────────────
const fitPost: BlogPost = {
  slug: "solar-feed-in-tariff-victoria",
  title: "Solar Feed-in Tariff Victoria — What You're Actually Getting in 2025",
  metaTitle: "Solar Feed-in Tariff Victoria 2025 | Rates Explained | ADSA Solar",
  metaDescription: "Victorian solar feed-in tariff rates for 2025 explained clearly. What you get paid for excess solar, which retailers pay most, and how to maximise your returns.",
  keywords: "solar feed in tariff victoria 2025, feed in tariff melbourne, solar export rate victoria, best feed in tariff victoria, solar buyback rate victoria",
  category: "Savings & Bills",
  readTime: "6 min",
  date: "June 2025",
  author: "ADSA Australian Solar",
  excerpt: "Victoria's solar feed-in tariff rates have dropped significantly. Here's what you're actually getting paid in 2025, and smarter ways to maximise your solar returns.",
  relatedPosts: [
    { slug: "solar-rebates-victoria-2025", title: "Solar Rebates Victoria 2025 — The Complete Guide" },
    { slug: "is-solar-battery-worth-it-victoria", title: "Is a Home Battery Worth It in Victoria?" },
    { slug: "how-much-do-solar-panels-cost-melbourne", title: "How Much Do Solar Panels Cost in Melbourne?" },
  ],
  content: (
    <div>
      <p>When solar panels generate more electricity than your home is using, that excess power flows back into the electricity grid — and your retailer pays you for it. This payment is called the <strong>solar feed-in tariff (FiT)</strong>.</p>
      <p>The problem is that Victoria's feed-in tariff rates have dropped sharply over the past few years. In 2012, some Victorian households were getting 60+ cents per kWh exported. Today, the minimum rate is set by the Essential Services Commission — and it's a fraction of that.</p>
      <p>Here's what you need to know about feed-in tariffs in Victoria in 2025.</p>

      <h2>What Is the Current Feed-in Tariff Rate in Victoria?</h2>
      <p>For 2025, the Essential Services Commission (ESC) has set the <strong>minimum feed-in tariff at approximately 3.3–4.9 cents per kWh</strong> depending on the time of export. Some retailers offer higher voluntary rates above this minimum.</p>
      <p>To put that in perspective:</p>
      <ul>
        <li>You export solar energy at: <strong>3–8 cents per kWh</strong></li>
        <li>You import grid electricity at: <strong>28–38 cents per kWh</strong></li>
      </ul>
      <p>That's a gap of roughly 25–30 cents per kWh. Every unit of solar energy you export instead of using yourself effectively costs you that difference. This is why <strong>self-consumption is significantly more valuable than export</strong>.</p>

      <h2>Which Victorian Retailers Pay the Most?</h2>
      <p>Feed-in tariff rates vary between retailers. As a general guide in 2025, some retailers offer time-varying rates that pay more during peak demand periods (typically late afternoon and evening). Others offer a flat rate across all hours.</p>
      <p>The best approach is to:</p>
      <ol>
        <li>Get quotes from several retailers using the Victorian Energy Compare tool at <strong>compare.energy.vic.gov.au</strong></li>
        <li>Look at the combination of feed-in tariff AND electricity usage rates together — a higher feed-in tariff with a higher usage rate may not be better overall</li>
        <li>Consider time-of-use tariffs if you have or plan to get a battery — you can export during peak times when rates are highest</li>
      </ol>

      <h2>Does a Low Feed-in Tariff Mean Solar Isn't Worth It?</h2>
      <p>Absolutely not — and this is where many people misunderstand the value of solar.</p>
      <p>The primary financial benefit of solar is <strong>not</strong> what you get paid for exports. It's what you <strong>don't pay</strong> for electricity you generate and use yourself. Every kWh of solar energy you consume directly saves you 28–38 cents. Every kWh you export earns you 3–8 cents.</p>
      <p>The maths strongly favours using your solar power rather than exporting it. This is why we recommend:</p>
      <ul>
        <li><strong>Shifting daytime appliance use</strong> — run the dishwasher, washing machine and dryer during solar hours</li>
        <li><strong>Adding a battery</strong> — store midday solar for evening use instead of exporting it cheaply</li>
        <li><strong>EV charging during the day</strong> — if you work from home or have a family member at home</li>
      </ul>

      <h2>Time-Varying Feed-in Tariffs</h2>
      <p>Some Victorian retailers now offer time-varying feed-in tariffs that pay different rates at different times of day. Under these plans:</p>
      <ul>
        <li><strong>Peak export times</strong> (late afternoon, early evening): higher rates, sometimes 10–20 cents/kWh</li>
        <li><strong>Off-peak export times</strong> (midday): lower rates, sometimes below the minimum</li>
      </ul>
      <p>If you have a battery, a time-varying tariff can be very valuable — you store energy during the low-rate midday period and either use it yourself in the evening or export it during the high-rate peak window, depending on which is more profitable.</p>

      <h2>The Bottom Line</h2>
      <p>Don't choose your solar system based primarily on maximising feed-in tariff income. The real value of solar in Victoria in 2025 is in the electricity bills you no longer pay — not what you receive for exports.</p>
      <p>Size your system to match your actual usage. Add a battery if you want to increase self-consumption further. Choose your retailer based on the overall package — tariff rates plus usage rates together.</p>
      <p>If you'd like advice tailored to your home and current retailer plan, <Link to="/contact" className="text-[#f26b3a] font-semibold">speak to the ADSA team</Link> — we'll help you understand the full financial picture before you make any decisions.</p>
    </div>
  )
};

// ─── POST 5: EV Charger + Solar ──────────────────────────────────────────────
const evPost: BlogPost = {
  slug: "ev-charger-solar-melbourne-guide",
  title: "EV Charger + Solar Panels — The Complete Melbourne Guide (2025)",
  metaTitle: "EV Charger + Solar Melbourne 2025 | Drive on Sunshine | ADSA Solar",
  metaDescription: "Everything Melbourne homeowners need to know about combining an EV charger with solar panels. Costs, savings, best chargers, and how to drive on free solar energy.",
  keywords: "ev charger solar melbourne, electric car charger solar panels, ev charger installation melbourne, solar ev charging victoria, home ev charger melbourne",
  category: "EV Charging",
  readTime: "8 min",
  date: "June 2025",
  author: "ADSA Australian Solar",
  excerpt: "The combination of solar panels and a home EV charger is one of the most powerful financial and environmental moves a Melbourne household can make in 2025.",
  relatedPosts: [
    { slug: "solar-rebates-victoria-2025", title: "Solar Rebates Victoria 2025 — The Complete Guide" },
    { slug: "is-solar-battery-worth-it-victoria", title: "Is a Home Battery Worth It in Victoria?" },
    { slug: "how-much-do-solar-panels-cost-melbourne", title: "How Much Do Solar Panels Cost in Melbourne?" },
  ],
  content: (
    <div>
      <p>Electric vehicles are arriving on Melbourne driveways faster than ever. And for homeowners who already have solar — or are thinking about getting it — the combination of solar panels and a home EV charger is one of the most financially compelling setups available today.</p>
      <p>The concept is simple: your solar panels generate electricity during the day, your EV charger uses that electricity to charge your car, and you drive on sunshine — for free.</p>

      <h2>How Much Can You Save Charging Your EV on Solar?</h2>
      <p>The average Victorian EV driver travels roughly 12,000–15,000km per year. Most EVs use approximately 15–20kWh per 100km, meaning annual energy consumption of around 2,000–3,000kWh.</p>
      <p>Compare the cost of that energy from two sources:</p>
      <table>
        <thead><tr><th>Charging Source</th><th>Cost per kWh</th><th>Annual Fuel Cost (2,500 kWh)</th></tr></thead>
        <tbody>
          <tr><td>Grid electricity (home)</td><td>~32 cents</td><td>~$800</td></tr>
          <tr><td>Solar panels (self-generated)</td><td>~2–4 cents (system cost amortised)</td><td>~$60–$100</td></tr>
          <tr><td>Petrol equivalent</td><td>—</td><td>~$2,500–$3,500</td></tr>
        </tbody>
      </table>
      <p>Charging your EV from solar effectively reduces your fuel cost from $800/year (grid) to almost nothing. For a household spending $3,000/year on petrol, switching to an EV charged from solar panels can save over $2,800 annually in fuel alone.</p>

      <h2>What Size Solar System Do You Need?</h2>
      <p>Adding an EV to your household significantly increases your energy demand. If you're sizing a solar system to cover both home usage and EV charging, you'll typically need:</p>
      <ul>
        <li><strong>Home usage only:</strong> 6.6kW system is usually sufficient</li>
        <li><strong>Home + EV (charging during the day):</strong> 10kW system recommended</li>
        <li><strong>Home + EV + battery (charging any time):</strong> 10–13kW solar + 10–13kWh battery</li>
      </ul>
      <p>The key is whether you're home to charge during solar hours (roughly 9am–3pm). If you can plug in during the day, a larger solar system without a battery works well. If you charge overnight, you'll want battery storage to avoid drawing expensive grid power.</p>

      <h2>Home EV Charger Options for Melbourne</h2>
      <p>There are two types of home EV chargers:</p>

      <h3>Level 1 — Standard Wall Outlet (Slow)</h3>
      <p>Plugs into a standard 10A power point. Adds roughly 8–12km of range per hour. Adequate for light users who drive under 50km/day but impractical for most families with an EV as a primary vehicle.</p>

      <h3>Level 2 — Dedicated EV Charger (Recommended)</h3>
      <p>A dedicated 7kW or 22kW AC charger installed by a licensed electrician. Adds 40–130km of range per hour depending on your vehicle and charger capacity. This is what most Melbourne homeowners install and what we recommend.</p>
      <p>Popular models in Australia include:</p>
      <ul>
        <li><strong>Zappi</strong> — solar-aware charger that automatically maximises charging from your panels</li>
        <li><strong>Tesla Wall Connector</strong> — best for Tesla owners, integrates with the Powerwall</li>
        <li><strong>Wallbox Pulsar Plus</strong> — compact, smart, widely compatible</li>
        <li><strong>EVSE Australia models</strong> — reliable Australian option</li>
      </ul>

      <h2>The Zappi Charger — A Special Mention</h2>
      <p>If you're combining solar and an EV, the Zappi charger deserves special attention. It's designed specifically to work with solar panels — it monitors your generation in real time and automatically adjusts charging speed to use only your surplus solar energy.</p>
      <p>This means instead of exporting cheap solar energy to the grid while charging your car from expensive grid power at night, you're charging your car directly from solar during the day. The financial benefit is significant over a year.</p>

      <h2>Cost of Installing a Home EV Charger in Melbourne</h2>
      <p>A quality Level 2 EV charger installation in Melbourne typically costs:</p>
      <ul>
        <li><strong>Charger unit:</strong> $800 – $2,500 depending on brand and features</li>
        <li><strong>Installation (licensed electrician):</strong> $400 – $1,200 depending on switchboard work required</li>
        <li><strong>Total installed:</strong> $1,200 – $3,700</li>
      </ul>
      <p>When installed at the same time as a solar system, you can often reduce costs as the electrical work is combined.</p>

      <h2>The Solar + Battery + EV Combination</h2>
      <p>The ultimate setup for Melbourne EV owners is solar panels + battery storage + EV charger. This allows you to:</p>
      <ul>
        <li>Generate solar during the day</li>
        <li>Store excess solar in the battery</li>
        <li>Charge your EV overnight from battery power — not the grid</li>
        <li>Export any remaining surplus during peak tariff times</li>
      </ul>
      <p>For a household that previously spent $3,500/year on petrol and $2,000/year on electricity, this combination can reduce those combined costs to under $500/year — a saving of over $5,000 annually.</p>

      <h2>Is Now the Right Time?</h2>
      <p>EV adoption in Victoria is accelerating rapidly. More models are available, prices are falling, and charging infrastructure is improving. The government's rebate on battery storage — combined with falling solar and EV charger costs — means 2025 is an excellent time to future-proof your home for electric living.</p>
      <p>If you'd like advice on sizing a solar system for your EV or getting an EV charger installed alongside solar panels, <Link to="/contact" className="text-[#f26b3a] font-semibold">contact the ADSA team</Link> for a free assessment.</p>
    </div>
  )
};

// ─── POST 6: 6.6kW vs 10kW ──────────────────────────────────────────────────
const systemSizePost: BlogPost = {
  slug: "6-6kw-vs-10kw-solar-system-melbourne",
  title: "6.6kW vs 10kW Solar System — Which Is Right for Your Melbourne Home?",
  metaTitle: "6.6kW vs 10kW Solar System Melbourne | Which Size? | ADSA Solar",
  metaDescription: "Not sure whether to choose a 6.6kW or 10kW solar system for your Melbourne home? This guide breaks down the differences, costs, savings and which suits your household.",
  keywords: "6.6kw solar system melbourne, 10kw solar system melbourne, solar system size melbourne, what size solar system do i need, solar panel system size guide victoria",
  category: "Buying Guide",
  readTime: "7 min",
  date: "June 2025",
  author: "ADSA Australian Solar",
  excerpt: "Choosing the wrong system size is the most common solar mistake Melbourne homeowners make. Here's how to get it right the first time.",
  relatedPosts: [
    { slug: "how-much-do-solar-panels-cost-melbourne", title: "How Much Do Solar Panels Cost in Melbourne?" },
    { slug: "solar-rebates-victoria-2025", title: "Solar Rebates Victoria 2025 — The Complete Guide" },
    { slug: "how-long-do-solar-panels-last", title: "How Long Do Solar Panels Last in Melbourne?" },
  ],
  content: (
    <div>
      <p>One of the most important decisions you'll make when going solar is choosing the right system size. Go too small and you miss out on savings. Go too large without a battery and you end up exporting cheap energy you've paid to generate.</p>
      <p>The 6.6kW system has been the most popular size in Australia for years — but as electricity prices rise, EVs become mainstream, and batteries come down in price, many Melbourne homeowners are finding that 10kW makes more financial sense.</p>
      <p>Here's how to think through the decision.</p>

      <h2>How Solar System Size Is Measured</h2>
      <p>Solar systems are rated in kilowatts (kW) of installed panel capacity. A 6.6kW system consists of approximately 15 x 440W panels. A 10kW system has around 22–24 panels. The system size determines how much electricity you can generate at peak solar output.</p>
      <p>On a good Melbourne day, a 6.6kW system generates roughly 25–28kWh of electricity. A 10kW system generates around 38–42kWh.</p>

      <h2>The 6.6kW System — Who It's Best For</h2>
      <p>A 6.6kW system is well suited for:</p>
      <ul>
        <li>Households of 2–4 people with average energy usage</li>
        <li>Homes with quarterly electricity bills around $300–$500</li>
        <li>Properties with limited north-facing roof space</li>
        <li>Households where someone is home during the day to use power directly</li>
        <li>Buyers focused on the fastest possible payback period</li>
      </ul>
      <p>At a typical installed price of $4,500–$6,500 after rebates and annual savings of $1,200–$1,600, a 6.6kW system often achieves payback in 3–4 years.</p>

      <h2>The 10kW System — Who It's Best For</h2>
      <p>A 10kW system makes more sense for:</p>
      <ul>
        <li>Larger families with 4+ people and high energy usage</li>
        <li>Homes with quarterly bills above $600</li>
        <li>Households with a pool, spa, or ducted air conditioning</li>
        <li>Anyone who currently has or plans to get an electric vehicle</li>
        <li>Homeowners adding a battery — more solar means more to store</li>
        <li>People who work from home with high daytime energy use</li>
      </ul>
      <p>The additional cost over a 6.6kW system is typically $2,500–$3,500 — but the additional annual savings of $600–$800 can justify this within 3–5 years.</p>

      <h2>The 5kW Inverter Myth</h2>
      <p>You'll often see 6.6kW of panels paired with a 5kW inverter. This is standard practice and completely normal — the Clean Energy Council actually allows up to 33% panel oversizing relative to inverter capacity. It maximises output during morning and afternoon shoulder periods without significantly reducing peak performance.</p>
      <p>For a 10kW system, you'll typically have a 10kW inverter — or two 5kW inverters for flexibility and redundancy.</p>

      <h2>What About Going Even Bigger?</h2>
      <p>Systems of 13.3kW are increasingly popular for large Melbourne homes, particularly those with multiple occupants, EVs, or commercial-style usage. The rebate scales with system size, and the per-panel cost decreases at larger sizes. For homes that can accommodate the roof space, bigger systems often deliver better overall value — especially when combined with battery storage.</p>

      <h2>The Role of Battery Storage in Sizing Decisions</h2>
      <p>If you're planning to add a battery now or in the future, this changes the sizing equation significantly. With a battery, all of your excess solar generation gets stored rather than exported cheaply — so a larger system has more value. Many households that would choose 6.6kW without a battery opt for 10kW when adding storage.</p>

      <h2>How to Choose — A Simple Framework</h2>
      <table>
        <thead><tr><th>Your Situation</th><th>Recommended Size</th></tr></thead>
        <tbody>
          <tr><td>2 people, low usage, small roof</td><td>6.6kW</td></tr>
          <tr><td>Average family, moderate usage</td><td>6.6kW – 10kW</td></tr>
          <tr><td>Large family or high usage</td><td>10kW</td></tr>
          <tr><td>EV owner or planning to get one</td><td>10kW+</td></tr>
          <tr><td>Adding a battery</td><td>10kW+</td></tr>
          <tr><td>Pool, spa, or ducted heating/cooling</td><td>10kW – 13kW</td></tr>
        </tbody>
      </table>

      <h2>Our Recommendation</h2>
      <p>When in doubt, go bigger rather than smaller. Panel prices are at historic lows, the STC rebate scales with system size, and you can't easily expand a system later without additional costs. Oversizing slightly is almost always the better long-term decision.</p>
      <p>The best way to choose is to have your actual electricity bills assessed by a professional. <Link to="/contact" className="text-[#f26b3a] font-semibold">Get a free assessment from ADSA</Link> — we'll look at your usage patterns and recommend the exact system size for your home, not a one-size-fits-all solution.</p>
    </div>
  )
};

// ─── POST 7: How Long Do Solar Panels Last ───────────────────────────────────
const lifespanPost: BlogPost = {
  slug: "how-long-do-solar-panels-last",
  title: "How Long Do Solar Panels Last in Melbourne? (What to Realistically Expect)",
  metaTitle: "How Long Do Solar Panels Last? Melbourne Guide 2025 | ADSA Solar",
  metaDescription: "How long do solar panels really last in Melbourne's climate? The truth about panel lifespan, performance degradation, warranties, and when to consider replacing your system.",
  keywords: "how long do solar panels last, solar panel lifespan australia, solar panel degradation, solar panel warranty australia, when to replace solar panels melbourne",
  category: "Solar Basics",
  readTime: "7 min",
  date: "June 2025",
  author: "ADSA Australian Solar",
  excerpt: "Quality solar panels in Melbourne routinely last 25–30 years. Here's what to expect in terms of performance over time, what warranties actually cover, and when replacement makes sense.",
  relatedPosts: [
    { slug: "how-much-do-solar-panels-cost-melbourne", title: "How Much Do Solar Panels Cost in Melbourne?" },
    { slug: "solar-rebates-victoria-2025", title: "Solar Rebates Victoria 2025 — The Complete Guide" },
    { slug: "6-6kw-vs-10kw-solar-system-melbourne", title: "6.6kW vs 10kW Solar System — Which Is Right for Your Home?" },
  ],
  content: (
    <div>
      <p>One of the most common questions from homeowners considering solar is: <em>"How long will the panels actually last?"</em></p>
      <p>The short answer: quality solar panels installed in Melbourne today will realistically last <strong>25–30 years</strong>, and often longer. But understanding what happens to performance over that time — and what your warranty actually protects you against — is just as important as knowing the headline lifespan figure.</p>

      <h2>The Lifespan of Modern Solar Panels</h2>
      <p>Solar panels don't have moving parts, which makes them extraordinarily reliable. The primary cause of performance decline is gradual degradation of the photovoltaic cells inside the panel — a natural process caused by UV exposure and thermal cycling.</p>
      <p>Most tier-1 solar panels are rated to deliver at least <strong>80–90% of their original output after 25 years</strong>. This degradation rate is typically guaranteed in the panel's performance warranty.</p>
      <p>Practically, this means a 400W panel installed today will likely still produce 340–360W after 25 years. That's still a highly functional solar panel.</p>

      <h2>Performance Degradation — Year by Year</h2>
      <p>Degradation doesn't happen all at once. The typical pattern for a quality panel looks like this:</p>
      <table>
        <thead><tr><th>Year</th><th>Typical Output Remaining</th></tr></thead>
        <tbody>
          <tr><td>Year 1</td><td>98% (first-year stabilisation)</td></tr>
          <tr><td>Year 5</td><td>95–97%</td></tr>
          <tr><td>Year 10</td><td>93–95%</td></tr>
          <tr><td>Year 15</td><td>90–93%</td></tr>
          <tr><td>Year 25</td><td>80–87%</td></tr>
        </tbody>
      </table>
      <p>Premium panels from manufacturers like REC, LG (legacy stock) and SunPower are rated to degrade at less than 0.3% per year, compared to the industry average of around 0.5% per year. This might sound small but adds up meaningfully over 25 years.</p>

      <h2>How Melbourne's Climate Affects Panel Longevity</h2>
      <p>Melbourne's climate is generally favourable for solar panel lifespan. Key factors:</p>
      <ul>
        <li><strong>UV exposure</strong> — Melbourne receives substantial UV radiation year-round, which contributes to natural degradation. Quality encapsulants in tier-1 panels handle this well.</li>
        <li><strong>Temperature variation</strong> — Melbourne's "four seasons in one day" means panels experience significant thermal cycling. Quality panels are rated to handle this across thousands of cycles.</li>
        <li><strong>Hail</strong> — Melbourne occasionally experiences hailstorms. Quality panels are IEC hail-rated, typically able to withstand 25mm hailstones at 83km/h. Check your panel's hail rating when purchasing.</li>
        <li><strong>Salt air</strong> — Not a significant factor for most Melbourne suburbs, but worth considering for coastal properties in Port Phillip Bay areas.</li>
      </ul>

      <h2>Understanding Your Solar Warranty</h2>
      <p>When installers talk about solar warranties, there are actually two separate warranties to understand:</p>

      <h3>Product Warranty (10–15 years)</h3>
      <p>Covers manufacturing defects and premature failure of the panel itself. If a panel stops working or physically fails within this period due to a manufacturing fault, the manufacturer replaces it. Most quality panels carry a 10–15 year product warranty.</p>

      <h3>Performance Warranty (25 years)</h3>
      <p>Guarantees that your panel will produce at least a specified percentage of its rated output after 25 years (typically 80–87% depending on the brand). If your panels degrade faster than the guaranteed rate, the manufacturer compensates you.</p>
      <p><strong>Important caveat:</strong> a warranty is only as good as the company standing behind it. A 25-year performance warranty from a manufacturer that closes in 10 years is worthless. This is why we strongly recommend tier-1 panels from financially stable manufacturers with a proven long-term track record.</p>

      <h2>What About Inverters?</h2>
      <p>While panels last 25+ years, inverters have a shorter lifespan — typically <strong>10–15 years</strong>. Budget for an inverter replacement around the 12–15 year mark. Quality inverters carry 10-year warranties, with extended warranty options often available at purchase.</p>
      <p>This is why inverter quality matters almost as much as panel quality when choosing a system — a cheaper inverter that fails at year 8 requires an unplanned replacement expense.</p>

      <h2>Signs Your Existing Solar System Needs Attention</h2>
      <p>If you already have solar panels and are noticing any of these, it's worth having the system inspected:</p>
      <ul>
        <li>Electricity bills rising despite no change in usage habits</li>
        <li>Solar monitoring showing output significantly below historical averages</li>
        <li>Inverter error codes or fault lights</li>
        <li>Visible damage to panels (discolouration, cracked glass, delamination)</li>
        <li>System older than 15 years with no recent inspection</li>
      </ul>

      <h2>When Does Replacing a Solar System Make Financial Sense?</h2>
      <p>For systems installed in the early 2010s, replacement is increasingly worth considering because:</p>
      <ul>
        <li>Panel efficiency has improved dramatically — new panels often generate 30–40% more power in the same roof space</li>
        <li>System costs have fallen significantly — a replacement system may cost less than the original</li>
        <li>Battery storage is now available — adding a battery alongside a new system makes excellent financial sense</li>
        <li>New rebates apply — the STC rebate and battery rebate apply to new installations</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Solar panels installed today are genuinely long-term assets. A quality system installed in Melbourne in 2025 will realistically still be generating meaningful electricity in 2050 — long after it has paid for itself many times over.</p>
      <p>The key is buying quality upfront. Tier-1 panels, quality inverters, CEC-accredited installation, and proper workmanship warranty protection all significantly extend the useful life of your system and protect your investment.</p>
      <p>If you're ready to invest in a solar system built to last, <Link to="/contact" className="text-[#f26b3a] font-semibold">get a free quote from ADSA Australian Solar</Link>. We only install tier-1 panels and back every installation with our workmanship warranty.</p>
    </div>
  )
};

// ─── EXPORTS ─────────────────────────────────────────────────────────────────
export const allPosts: BlogPost[] = [
  rebatesPost,
  batteryPost,
  costPost,
  fitPost,
  evPost,
  systemSizePost,
  lifespanPost,
];

export const BlogRebates = () => <BlogTemplate post={rebatesPost} />;
export const BlogBattery = () => <BlogTemplate post={batteryPost} />;
export const BlogCost = () => <BlogTemplate post={costPost} />;
export const BlogFiT = () => <BlogTemplate post={fitPost} />;
export const BlogEV = () => <BlogTemplate post={evPost} />;
export const BlogSystemSize = () => <BlogTemplate post={systemSizePost} />;
export const BlogLifespan = () => <BlogTemplate post={lifespanPost} />;
