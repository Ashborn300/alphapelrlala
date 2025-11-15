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
            <p>fondationalphaperla@gmail.com</p>
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

        {/* Budget */}
        <FadeInOnScroll>
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                VI. BUDGET
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 font-semibold">Poste de dépense</th>
                      <th className="p-4 font-semibold text-right">Coût Unitaire (USD)</th>
                      <th className="p-4 font-semibold text-right">Coût Total (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { poste: "Location de l'espace (6 mois)", unitaire: "1 000", total: "6 000" },
                      { poste: "Sonorisation et technique", unitaire: "1 000", total: "1 000" },
                      { poste: "Déco & ambiance", unitaire: "350", total: "350" },
                      { poste: "Communication & visuels", unitaire: "550", total: "550" },
                      { poste: "Rémunération staff / coachs (6 mois)", unitaire: "500", total: "3 000" },
                      { poste: "Cadeaux & prix (6 mois)", unitaire: "1 500", total: "9 000" },
                      { poste: "Boissons & logistique", unitaire: "500", total: "500" },
                      { poste: "Autres / imprévus (10%)", unitaire: "", total: "2 040" }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b hover:bg-accent/30">
                        <td className="p-4">{row.poste}</td>
                        <td className="p-4 text-right">{row.unitaire}</td>
                        <td className="p-4 text-right font-medium">{row.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-primary/10 font-bold text-lg">
                      <td className="p-4">TOTAL</td>
                      <td className="p-4"></td>
                      <td className="p-4 text-right">22 440 USD</td>
                    </tr>
                  </tbody>
                </table>
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

        {/* Call to Action */}
        <FadeInOnScroll>
          <div className="text-center py-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Ne laissons pas que les talents de nos jeunes s'éteignent!
            </h2>
            <p className="text-2xl md:text-3xl font-light mb-8">
              Donnons-leur un cadre d'expression
            </p>
          </div>
        </FadeInOnScroll>
      </div>

      <Footer />
    </div>
  );
};

export default IncroyableTalent;
