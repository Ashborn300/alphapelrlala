import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Concour = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4 md:pt-24 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-14 mb-10">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="text-5xl mb-4 block">👑</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Inscription : Les Reines de Mars
            </h1>
            <p className="text-xl font-semibold opacity-95">Édition Kinshasa 2026</p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf_RfZyi7hpoe7ghII7HDQuPdzSJpyowgR0r5wD1lfqbo/viewform?embedded=true"
            width="100%"
            height="3000"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-lg border"
            title="Formulaire d'inscription - Les Reines de Mars"
          >
            Chargement…
          </iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Concour;
