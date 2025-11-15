import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInOnScroll } from "@/components/FadeInOnScroll";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import incroyableTalentImg from "@/assets/incroyable-talent.jpg";

const IncroyableTalent = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={incroyableTalentImg}
            alt="Mon Incroyable Talent Kinshasa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 text-lg px-6 py-2">Termes de Référence</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            MON INCROYABLE TALENT
          </h1>
          <p className="text-3xl md:text-4xl font-light italic mb-6">
            KINSHASA
          </p>
          <p className="text-2xl font-medium">
            "Crée. Brille. Inspire."
          </p>
          <div className="mt-8 text-sm">
            <p>Contacts: +243 977 074 034</p>
            <p>contact@fondationalphaperla.com</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Contexte */}
        <FadeInOnScroll>
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                I. CONTEXTE ET JUSTIFICATION
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  Kinshasa, métropole foisonnante de plus de 15 millions d'habitants, est une ville jeune, créative, vibrante. 
                  Chaque jour, dans ses rues, ses quartiers populaires, ses universités, ses marchés, ses ateliers ou ses réseaux sociaux, 
                  des milliers de jeunes expriment, souvent en silence, des talents exceptionnels. Des chanteurs méconnus, des danseurs 
                  autodidactes, des stylistes ingénieux, des artistes numériques, des slameurs percutants, des orateurs puissants, 
                  des maquilleurs créatifs, des penseurs brillants : tous dotés de talents bruts, souvent inexploités, car l'opportunité 
                  de briller leur manque.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Mon Incroyable Talent Kinshasa</strong> naît de ce constat. Ce projet veut devenir la première scène 
                  hebdomadaire et multimédia entièrement dédiée à la révélation et à la valorisation des talents kinois, 
                  dans tous les domaines imaginables :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Arts visuels, danse, chant, slam, musique urbaine,</li>
                  <li>Stylisme, maquillage, coiffure, transformation look,</li>
                  <li>Éloquence, humour, théâtre, communication,</li>
                  <li>Création numérique, artisanat, innovation, technologie...</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  C'est plus qu'un spectacle. C'est un <strong>accélérateur d'identité</strong>. Une <strong>plateforme d'éclosion</strong>. 
                  Un <strong>ascenseur de visibilité</strong>. Chaque semaine, des jeunes auront enfin une scène, un public, 
                  une caméra, un jury, une voix. Et cela dans un cadre bienveillant, éducatif, fédérateur et professionnel.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        {/* Objectifs */}
        <FadeInOnScroll>
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                II. OBJECTIFS
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Le projet vise aussi à :
                </p>
                <ul className="space-y-3">
                  {[
                    "Offrir une scène d'expression et de valorisation aux jeunes artistes et créateurs locaux.",
                    "Encourager la créativité, l'entrepreneuriat et la confiance en soi.",
                    "Créer un événement culturel régulier, viral et fédérateur à Kinshasa.",
                    "Promouvoir les produits et marques partenaires à un public jeune, connecté et influent."
                  ].map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Badge className="mt-1 shrink-0">{idx + 1}</Badge>
                      <span className="text-lg">{obj}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg leading-relaxed mt-6 italic">
                  Ce besoin est d'autant plus urgent que, sans valorisation, de nombreux jeunes finissent par abandonner leurs talents, 
                  faute de reconnaissance, d'encadrement ou de motivation. Or, un talent frustré devient un potentiel gaspillé, 
                  un rêve enterré, parfois une vie déviée.
                </p>
                <p className="text-lg leading-relaxed font-medium">
                  Mon Incroyable Talent Kinshasa, c'est donc un cri d'amour à la jeunesse, une main tendue à la créativité silencieuse, 
                  une réponse à une attente non formulée mais réelle : <strong>exister, briller, inspirer</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        {/* Public Cible & Résultats */}
        <FadeInOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  III. PUBLIC CIBLE
                </h2>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">Âge:</span>
                    <span>15 à 30 ans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary">Profils:</span>
                    <span>Jeunes créateurs, artistes (Musicien, Peintre, Humoriste, Comédien), stylistes, danseurs, 
                    maquilleurs, coiffeurs, influenceurs, étudiants…</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  IV. RÉSULTATS ATTENDUS
                </h2>
                <ul className="space-y-3 text-lg list-disc pl-6">
                  <li>Les jeunes ayant souscrit presteront;</li>
                  <li>Trois jeunes par catégorie représentée seront récompensés;</li>
                  <li>Les produits et services de partenaires seront mis en lumière.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </FadeInOnScroll>

        {/* Mise en Œuvre */}
        <FadeInOnScroll>
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                V. MISE EN ŒUVRE
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { num: "1", text: "Appel à candidature" },
                  { num: "2", text: "Casting pendant la semaine (3 jours)" },
                  { num: "3", text: "Pré-sélection et publication des candidats retenus (jour 4)" },
                  { num: "4", text: "Prestations le samedi" },
                  { num: "5", text: "Proclamation de trois meilleurs par catégorie retenue" },
                  { num: "6", text: "Formation de ces trois meilleurs" },
                  { num: "7", text: "Mise en relation avec les professionnels par domaine" }
                ].map((step) => (
                  <div key={step.num} className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl shrink-0">
                      {step.num}
                    </div>
                    <span className="text-lg">{step.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        {/* Communication */}
        <FadeInOnScroll>
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                VII. COMMUNICATION
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Dans le but rendre célèbre et impactant ce programme, un plan stratégique de communication sera mis en place 
                afin d'atteindre un public plus large avant, pendant et après l'évènement, ce, sur les canaux suivants :
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Badge className="shrink-0 h-fit">1</Badge>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Réseaux sociaux</h3>
                    <p className="text-lg leading-relaxed">
                      Un contenu attirant, imposant sera diffusé sur toutes les plateformes numériques de la Fondation Alpha PERLA, 
                      notamment sur Facebook, YouTube, Instagram, Twitter…
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge className="shrink-0 h-fit">2</Badge>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Médias traditionnels</h3>
                    <p className="text-lg leading-relaxed">
                      Le spot publicitaire, le communiqué, les interviews et les articles de presse seront diffusés dans 
                      les médias locaux avec lesquels la Fondation par le biais du comité d'organisation créera un partenariat 
                      afin d'assurer une promotion accrue de l'évènement.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge className="shrink-0 h-fit">3</Badge>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Communication sur les supports</h3>
                    <p className="text-lg leading-relaxed">
                      La Fondation fera le partenariat avec les agences de communication détenant des panneaux publicitaires 
                      afin d'assurer la vente d'images des jeunes talents, mais aussi les flyers, affiche, invitation et dépliant 
                      pour promouvoir l'événement.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        {/* Contact WhatsApp */}
        <FadeInOnScroll>
          <div className="text-center py-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Vous souhaitez participer ou en savoir plus ?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              Contactez-nous directement sur WhatsApp
            </p>
            <a
              href="https://wa.me/243977074034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-lg px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contacter sur WhatsApp
            </a>
          </div>
        </FadeInOnScroll>
      </div>

      <Footer />
    </div>
  );
};

export default IncroyableTalent;
