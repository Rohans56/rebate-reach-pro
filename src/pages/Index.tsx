import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Benefits } from "@/components/Benefits";
import { BatterySystems } from "@/components/BatterySystems";
import { BatteryCalculator } from "@/components/BatteryCalculator";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ADSA Solar | Solar Panel & Battery Installation Melbourne | Save up to $2,300/year</title>
        <meta 
          name="description" 
          content="Melbourne's trusted solar & battery installers. Cut power bills by up to $2,300/year with government rebates up to $18,500. Free quotes & 3-5 year payback. CEC Accredited." 
        />
        <meta name="keywords" content="solar panels Melbourne, solar panel installation Victoria, solar battery installation Australia, solar battery rebates, solar panel rebates Victoria, solar + battery systems savings, government solar rebate 2025" />
        <link rel="canonical" href="https://adsasolar.com.au" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ADSA Solar | Cut Power Bills by $2,300/year with Solar + Battery" />
        <meta property="og:description" content="Melbourne's trusted solar installers. Government rebates up to $18,500. Free quotes & fast installation." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AU" />
        
        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ADSA Australian Solar",
            "description": "Professional solar panel and battery installation services in Melbourne and Victoria",
            "url": "https://adsasolar.com.au",
            "telephone": "1300123456",
            "email": "info@adsasolar.com.au",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "areaServed": {
              "@type": "State",
              "name": "Victoria"
            },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much can I save with solar panels in Victoria?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Victorian homeowners save between $1,000 and $2,300 per year on electricity bills after installing solar panels and batteries."
                }
              },
              {
                "@type": "Question",
                "name": "What solar rebates are available in Victoria in 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Victorians can access STC rebates ($1,500-$3,500 for solar) and Cheaper Home Batteries Program rebates (~$300-$370 per kWh). Maximum combined rebate can reach up to $18,500."
                }
              },
              {
                "@type": "Question",
                "name": "What is the payback period for solar in Melbourne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With current rebates and electricity prices, most solar systems in Melbourne pay for themselves in 3-5 years."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <SavingsCalculator />
          <Benefits />
          <BatterySystems />
          <BatteryCalculator />
          <Projects />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
};

export default Index;
