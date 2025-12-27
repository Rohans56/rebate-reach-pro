import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Solar Quote | ADSA Solar Melbourne</title>
        <meta 
          name="description" 
          content="Request your free solar and battery quote today. We respond within 24 hours. Servicing all of Melbourne and Victoria." 
        />
        <link rel="canonical" href="https://adsasolar.com.au/contact" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <ContactForm />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
