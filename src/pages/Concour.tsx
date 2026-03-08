import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trophy, MapPin, Phone, Calendar, DollarSign, ChefHat, Award, Star } from "lucide-react";
import afficheImg from "@/assets/concours-affiche.jpg";

const FORM_URL = "https://docs.google.com/forms/d/1_RfZyi7hpoe7ghII7HDQuPdzSJpyowgR0r5wD1lfqbo/edit";

const Concour = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4 md:pt-24 pb-16">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[hsl(210,55%,15%)] via-[hsl(210,45%,20%)] to-[hsl(210,55%,12%)] text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(32,95%,58%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(32,85%,65%) 0%, transparent 50%)" }} />
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <span className="text-5xl md:text-6xl mb-4 block">👑</span>
            <p className="text-secondary font-bold text-lg md:text-xl mb-2 tracking-widest uppercase">La Fondation Alpha Perla présente</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight">
              LES REINES DE MARS
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-2">Concours Culinaires</p>
            <p className="text-lg md:text-xl opacity-90 mb-2">Montrez votre talent en cuisine</p>
            <p className="text-secondary font-semibold text-lg">Édition Kinshasa 2026</p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm md:text-base opacity-80">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Du 08 au 31 mars</span>
              <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Frais : 25$</span>
            </div>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-6 font-bold rounded-full shadow-lg">
                <ChefHat className="w-5 h-5 mr-2" /> PARTICIPER AU CONCOURS
              </Button>
            </a>
          </div>
        </section>

        {/* Affiche */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 max-w-2xl">
            <img
              src={afficheImg}
              alt="Affiche du concours Les Reines de Mars - Fondation Alpha Perla"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          <div className="text-center mt-8">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-6 font-bold rounded-full shadow-lg">
                <ChefHat className="w-5 h-5 mr-2" /> PARTICIPER AU CONCOURS
              </Button>
            </a>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Le trône culinaire vous attend ! 👑🍽️
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                En ce 8 mars, la Fondation Alpha Perla lance officiellement le grand concours culinaire : <strong>LES REINES DE MARS</strong>.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border mb-8">
              <p className="text-foreground text-lg leading-relaxed">
                Vous avez un talent caché ? Vos plats font l'unanimité auprès de vos proches ?
                <br /><br />
                <strong className="text-secondary">C'est le moment de briller et de transformer votre passion en une carrière professionnelle !</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Prix */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-extrabold text-center text-foreground mb-10">
              🎁 À gagner
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🥇", place: "1er Prix", desc: "Un voyage + une formation culinaire à l'étranger !", color: "from-yellow-400 to-yellow-600" },
                { icon: "🥈", place: "2e Prix", desc: "400$ + une formation culinaire professionnelle.", color: "from-gray-300 to-gray-500" },
                { icon: "🥉", place: "3e Prix", desc: "Un kit de cuisine professionnel complet.", color: "from-orange-400 to-orange-600" },
              ].map((prix) => (
                <div key={prix.place} className="bg-card rounded-2xl p-6 text-center shadow-md border border-border hover:shadow-lg transition-shadow">
                  <span className="text-5xl block mb-3">{prix.icon}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{prix.place}</h3>
                  <p className="text-muted-foreground">{prix.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-6 font-bold rounded-full shadow-lg">
                  <ChefHat className="w-5 h-5 mr-2" /> PARTICIPER AU CONCOURS
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Comment participer */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-extrabold text-center text-foreground mb-10">
              📍 Comment participer ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <DollarSign className="w-6 h-6" />, title: "Frais de participation", text: "25$" },
                { icon: <Calendar className="w-6 h-6" />, title: "Inscription", text: "Du 08 au 31 mars" },
                { icon: <Phone className="w-6 h-6" />, title: "Numéro pour le paiement", text: "+243 977 074 034" },
                { icon: <MapPin className="w-6 h-6" />, title: "Adresse", text: "44, Blvd Sendwe, C/Kalamu, 4e Niveau Immeuble Adi Construct" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-card rounded-xl p-5 border border-border shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">📞 Contactez-nous</h2>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <span>📱 +243 977 074 034</span>
              <span>📱 +243 814 268 010</span>
              <span>📱 +243 999 599 853</span>
            </div>
            <div className="mt-4 text-muted-foreground">
              <span>📘 📸 🎵 Fondation Alpha Perla</span>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-gradient-to-br from-[hsl(210,55%,15%)] to-[hsl(210,45%,20%)] text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Prête à devenir la Reine de Mars ? 👑</h2>
            <p className="text-lg opacity-90 mb-8">Inscrivez-vous maintenant et montrez votre talent culinaire !</p>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-10 py-6 font-bold rounded-full shadow-lg">
                <ChefHat className="w-5 h-5 mr-2" /> PARTICIPER AU CONCOURS
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Concour;
