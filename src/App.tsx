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
import { WerribeeSolar, TarneitSolar, PointCookSolar, CraigiburnSolar, ClydeNorthSolar, TruginanaSolar, MeltonSolar } from "./pages/SuburbPages";

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
            {/* Suburb SEO pages */}
            <Route path="/solar-panels-werribee" element={<WerribeeSolar />} />
            <Route path="/solar-panels-tarneit" element={<TarneitSolar />} />
            <Route path="/solar-panels-point-cook" element={<PointCookSolar />} />
            <Route path="/solar-panels-craigieburn" element={<CraigiburnSolar />} />
            <Route path="/solar-panels-clyde-north" element={<ClydeNorthSolar />} />
            <Route path="/solar-panels-truganina" element={<TruginanaSolar />} />
            <Route path="/solar-panels-melton" element={<MeltonSolar />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
