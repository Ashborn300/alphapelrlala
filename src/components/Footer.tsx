import { Link } from "react-router-dom";
import { Mail, MapPin, Youtube, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Fondation Alpha Perla"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Fondation Alpha Perla</h3>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Œuvrant pour l'autonomisation des femmes, le développement de la
              jeunesse et la promotion de l'excellence en Afrique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Programmes
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Kinshasa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bureau Kinshasa</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <p className="text-sm text-primary-foreground/80">
                  N°44, Blvd Sendwe, 4ème niveau
                  <br />
                  Immeuble Addi Construct
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="mailto:contact@fondationalphaperla.com"
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    contact@fondationalphaperla.com
                  </a>
                  <a
                    href="mailto:fondationalphaperla@gmail.com"
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    fondationalphaperla@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Lubumbashi */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bureau Lubumbashi</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <p className="text-sm text-primary-foreground/80">
                  Avenue Kasai, coin Kambove
                  <br />
                  N°1249
                </p>
              </div>
              <div className="mt-4">
                <h5 className="text-sm font-semibold mb-3">Suivez-nous</h5>
                <div className="flex flex-col space-y-2">
                  <a
                    href="https://youtube.com/@fondationalphaperla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100066871133653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/fondation_alphaperla?igsh=OXFnY2I4NnM1Y3lp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://cd.linkedin.com/in/fondation-alpha-perla-177572392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Fondation Alpha Perla. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
