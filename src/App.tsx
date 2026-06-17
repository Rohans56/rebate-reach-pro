import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import Refund from "./pages/Refund";
import NotFound from "./pages/NotFound";
import OffersPage from "./pages/Offers";
import { WerribeeSolar, TarneitSolar, PointCookSolar, CraigiburnSolar, ClydeNorthSolar, TruginanaSolar, MeltonSolar, HoppersCrossingSolar, WyndhamValeSolar, DonnybrookSolar, PakenhamSolar, OfficerSolar } from "./pages/SuburbPages";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogRebates, BlogBattery, BlogCost, BlogFiT, BlogEV, BlogSystemSize, BlogLifespan } from "./pages/BlogPosts";
import { InstallerWerribee, InstallerTarneit, InstallerPointCook, InstallerCraigieburn, InstallerClydeNorth, InstallerTruganina, InstallerMelton, InstallerCranbourne, InstallerBerwick, InstallerGeelong, InstallerEpping, InstallerRoxburghPark, InstallerSunbury, InstallerCarolineSprings } from "./pages/InstallerSuburbPages";
import { SolarPanelInstallationPage, SolarBatteryInstallationPage, EVChargerInstallationPage, ResidentialSolarPage, CommercialSolarPage, SolarRebatesVictoriaPage, ElectricalServicesPage } from "./pages/ServicePage";
import { ProjectPointCookSolar, ProjectDonnybrookBattery, ProjectTruganinaSolar, ProjectWerribeeBattery, ProjectMeltonCombo, ProjectCraigiburnSolar, ProjectWerribee2026 } from "./pages/ProjectPages";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/offers" element={<OffersPage />} />
            {/* Suburb SEO pages */}
            <Route path="/solar-panels-werribee" element={<WerribeeSolar />} />
            <Route path="/solar-panels-tarneit" element={<TarneitSolar />} />
            <Route path="/solar-panels-point-cook" element={<PointCookSolar />} />
            <Route path="/solar-panels-craigieburn" element={<CraigiburnSolar />} />
            <Route path="/solar-panels-clyde-north" element={<ClydeNorthSolar />} />
            <Route path="/solar-panels-truganina" element={<TruginanaSolar />} />
            <Route path="/solar-panels-melton" element={<MeltonSolar />} />
            <Route path="/solar-panels-hoppers-crossing" element={<HoppersCrossingSolar />} />
            <Route path="/solar-panels-wyndham-vale" element={<WyndhamValeSolar />} />
            <Route path="/solar-panels-donnybrook" element={<DonnybrookSolar />} />
            <Route path="/solar-panels-pakenham" element={<PakenhamSolar />} />
            <Route path="/solar-panels-officer" element={<OfficerSolar />} />
            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/solar-rebates-victoria-2025" element={<BlogRebates />} />
            <Route path="/blog/is-solar-battery-worth-it-victoria" element={<BlogBattery />} />
            <Route path="/blog/how-much-do-solar-panels-cost-melbourne" element={<BlogCost />} />
            <Route path="/blog/solar-feed-in-tariff-victoria" element={<BlogFiT />} />
            <Route path="/blog/ev-charger-solar-melbourne-guide" element={<BlogEV />} />
            <Route path="/blog/6-6kw-vs-10kw-solar-system-melbourne" element={<BlogSystemSize />} />
            <Route path="/blog/how-long-do-solar-panels-last" element={<BlogLifespan />} />
            {/* Solar Installers suburb pages */}
            <Route path="/solar-installers-werribee" element={<InstallerWerribee />} />
            <Route path="/solar-installers-tarneit" element={<InstallerTarneit />} />
            <Route path="/solar-installers-point-cook" element={<InstallerPointCook />} />
            <Route path="/solar-installers-craigieburn" element={<InstallerCraigieburn />} />
            <Route path="/solar-installers-clyde-north" element={<InstallerClydeNorth />} />
            <Route path="/solar-installers-truganina" element={<InstallerTruganina />} />
            <Route path="/solar-installers-melton" element={<InstallerMelton />} />
            <Route path="/solar-installers-cranbourne" element={<InstallerCranbourne />} />
            <Route path="/solar-installers-berwick" element={<InstallerBerwick />} />
            <Route path="/solar-installers-geelong" element={<InstallerGeelong />} />
            <Route path="/solar-installers-epping" element={<InstallerEpping />} />
            <Route path="/solar-installers-roxburgh-park" element={<InstallerRoxburghPark />} />
            <Route path="/solar-installers-sunbury" element={<InstallerSunbury />} />
            <Route path="/solar-installers-caroline-springs" element={<InstallerCarolineSprings />} />
            {/* Service pages */}
            <Route path="/solar-panel-installation" element={<SolarPanelInstallationPage />} />
            <Route path="/solar-battery-installation" element={<SolarBatteryInstallationPage />} />
            <Route path="/ev-charger-installation" element={<EVChargerInstallationPage />} />
            <Route path="/residential-solar" element={<ResidentialSolarPage />} />
            <Route path="/commercial-solar" element={<CommercialSolarPage />} />
            <Route path="/solar-rebates-victoria" element={<SolarRebatesVictoriaPage />} />
            <Route path="/electrical-services" element={<ElectricalServicesPage />} />
            {/* Project case studies */}
            <Route path="/projects/solar-installation-point-cook" element={<ProjectPointCookSolar />} />
            <Route path="/projects/solar-battery-installation-donnybrook" element={<ProjectDonnybrookBattery />} />
            <Route path="/projects/solar-installation-truganina" element={<ProjectTruganinaSolar />} />
            <Route path="/projects/battery-installation-werribee" element={<ProjectWerribeeBattery />} />
            <Route path="/projects/solar-battery-installation-melton" element={<ProjectMeltonCombo />} />
            <Route path="/projects/solar-installation-craigieburn" element={<ProjectCraigiburnSolar />} />
            <Route path="/projects/solar-installation-werribee-2026" element={<ProjectWerribee2026 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
