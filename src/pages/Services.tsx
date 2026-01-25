import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { BatterySystems } from "@/components/BatterySystems";
import { BatteryCalculator } from "@/components/BatteryCalculator";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Solar & Battery Services | ADSA Solar Melbourne</title>
        <meta 
          name="description" 
          content="Explore our solar panel and battery storage solutions. Calculate your savings with our interactive tools. Government rebates up to $18,500 available." 
        />
        <link rel="canonical" href="https://adsasolar.com.au/services" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <SavingsCalculator />
          <BatterySystems />
          <BatteryCalculator />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
};

export default Services;
