import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Solar Installations Melbourne | ADSA Solar</title>
        <meta 
          name="description" 
          content="View our recent solar panel and battery installations across Melbourne. Real projects, real savings. 500+ installations completed with 4.9★ rating." 
        />
        <link rel="canonical" href="https://adsasolar.com.au/projects" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Projects />
          <Testimonials />
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
};

export default ProjectsPage;
