import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
