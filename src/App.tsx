import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Education from "./pages/Education";
import Entrepreneurship from "./pages/Entrepreneurship";
import PersonalDevelopment from "./pages/PersonalDevelopment";
import SocialAction from "./pages/SocialAction";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import Admin from "./pages/Admin";
import Writing from "./pages/Writing";
import IncroyableTalent from "./pages/IncroyableTalent";
import CulturalEvents from "./pages/CulturalEvents";
import HeritageManagement from "./pages/HeritageManagement";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/education" element={<Education />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/personal-development" element={<PersonalDevelopment />} />
          <Route path="/social-action" element={<SocialAction />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/incroyable-talent" element={<IncroyableTalent />} />
          <Route path="/cultural-events" element={<CulturalEvents />} />
          <Route path="/heritage-management" element={<HeritageManagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
