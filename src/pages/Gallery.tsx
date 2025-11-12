import Header from "@/components/Header";
import Footer from "@/components/Footer";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";

const Gallery = () => {
  const images = [
    {
      src: event1,
      alt: "Séminaire de renforcement des capacités - Leadership Féminin",
      title: "Séminaire Leadership Féminin",
    },
    {
      src: event2,
      alt: "Formation Perla Coaching - 4 Clés d'une vie à succès",
      title: "Formation Perla Coaching",
    },
    {
      src: event3,
      alt: "Événement de la Fondation Alpha Perla",
      title: "Événement Communautaire",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Galerie
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up">
            Découvrez nos événements et activités en images
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-2">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Plus de Contenus
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Visitez notre chaîne YouTube pour découvrir plus de vidéos de nos
              événements et formations
            </p>
            <a
              href="https://youtube.com/@fondationalphaperla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-destructive text-white rounded-lg font-semibold hover:bg-destructive/90 transition-colors"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Visiter Notre Chaîne YouTube
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
