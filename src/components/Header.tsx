import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Accueil",
    path: "/"
  }, {
    name: "À Propos",
    path: "/about"
  }, {
    name: "Programmes",
    path: "/programs"
  }, {
    name: "Galerie",
    path: "/gallery"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-beige/95 backdrop-blur-md shadow-lg" : "bg-beige"}`}>
      <nav className="container mx-auto px-4 py-4 bg-slate-200">
        <div className="flex items-center justify-between md:justify-start">
          <Link to="/" className="flex items-center space-x-3 group md:flex-none mx-auto md:mx-0">
            <img src={logo} alt="Fondation Alpha Perla" className="h-20 w-20 md:h-12 md:w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">
                Fondation Alpha Perla
              </h1>
              <p className="text-xs text-muted-foreground">
                Autonomisation & Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-secondary relative group ${location.pathname === link.path ? "text-secondary" : "text-foreground"}`}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>)}
            <a href="https://youtube.com/@fondationalphaperla" target="_blank" rel="noopener noreferrer" className="text-destructive hover:text-destructive/80 transition-colors" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <Button asChild variant="default" size="sm">
              <a href="mailto:foundationalphaperla@gmail.com">Nous Contacter</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-secondary transition-colors" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-medium transition-colors hover:text-secondary ${location.pathname === link.path ? "text-secondary" : "text-foreground"}`}>
                  {link.name}
                </Link>)}
              <a href="https://youtube.com/@fondationalphaperla" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-medium text-destructive hover:text-destructive/80 transition-colors">
                <Youtube className="h-5 w-5" />
                <span>Notre Chaîne YouTube</span>
              </a>
              <Button asChild variant="default" size="sm" className="w-full">
                <a href="mailto:foundationalphaperla@gmail.com">Nous Contacter</a>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;