import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ShoppingCart, Quote, Heart } from "lucide-react";
import bookImage from "@/assets/book.jpg";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import author1 from "@/assets/author-1.jpg";
import author2 from "@/assets/author-2.jpg";
import author3 from "@/assets/author-3.jpg";
import author4 from "@/assets/author-4.jpg";
import author5 from "@/assets/author-5.jpg";
import author6 from "@/assets/author-6.jpg";
import author7 from "@/assets/author-7.jpg";
import author8 from "@/assets/author-8.jpg";
import author9 from "@/assets/author-9.jpg";
import author10 from "@/assets/author-10.jpg";
import poem1Image from "@/assets/poem-1.jpg";
import poem2Image from "@/assets/poem-2.jpg";
import poem4Image from "@/assets/poem-4.jpg";
const Writing = () => {
  const [quantity, setQuantity] = useState(1);
  const handleOrder = () => {
    const message = `Bonjour, je souhaite commander ${quantity} exemplaire(s) du livre "Les larmes d'une femme meurtrie sècheront-elles" de Alpha Perla Mboyo.`;
    window.open(`https://wa.me/243977074034?text=${encodeURIComponent(message)}`, '_blank');
  };
  return <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Écriture et Publication
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez l'œuvre littéraire d'Alpha Perla Mboyo, une voix qui résonne pour la justice et l'humanité.
              </p>
            </div>
          </div>
        </section>

        {/* Book Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Book Image */}
              <div className="animate-fade-in">
                <div className="overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 sticky top-24">
                  <img src={bookImage} alt="Alpha Perla Mboyo - Les larmes d'une femme meurtrie sècheront-elles" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Book Information */}
              <div className="animate-fade-in-up space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                    Les larmes d'une femme meurtrie sècheront-elles
                  </h2>
                  <p className="text-xl text-muted-foreground mb-2">
                    Par <span className="font-semibold text-primary">Alpha Perla Mboyo</span>
                  </p>
                </div>

                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <div className="flex items-start space-x-3 mb-4">
                    <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground italic">
                      "Un témoignage poignant inspiré par les atrocités se déroulant à l'est de la République Démocratique du Congo. À travers ces pages, l'auteure donne une voix aux femmes meurtries et appelle à la compassion et à l'action."
                    </p>
                  </div>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary flex items-center">
                    <BookOpen className="h-6 w-6 mr-2" />
                    À propos de l'ouvrage
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cet ouvrage littéraire puissant explore les douleurs et les espoirs des femmes affectées par les conflits dans l'est de la RDC. Alpha Perla Mboyo, avec une plume sensible et engagée, nous plonge dans des récits qui interpellent notre conscience collective.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Plus qu'un simple livre, c'est un cri du cœur pour la paix, la dignité humaine et la reconnaissance des souffrances endurées par tant de femmes courageuses.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary flex items-center">
                    <Heart className="h-6 w-6 mr-2" />
                    Thèmes abordés
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">Les violences faites aux femmes dans les zones de conflit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">La résilience et l'espoir face à l'adversité</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">L'appel à la justice et à la paix</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">La force des femmes congolaises</span>
                    </li>
                  </ul>
                </div>

                {/* Order Section */}
                <Card className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                    <ShoppingCart className="h-6 w-6 mr-2" />
                    Commander l'ouvrage
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Procurez-vous votre exemplaire et soutenez la voix de celles qui n'ont pas été entendues.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <label className="text-muted-foreground font-medium">Quantité:</label>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-10 w-10">
                        -
                      </Button>
                      <span className="text-2xl font-bold text-primary min-w-[3rem] text-center">
                        {quantity}
                      </span>
                      <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10">
                        +
                      </Button>
                    </div>
                  </div>
                  <Button onClick={handleOrder} size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Commander via WhatsApp
                  </Button>
                </Card>

                {/* Author Section */}
                <Card className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">À propos de l'autrice</h3>
                  
                  {/* Author Carousel */}
                  <div className="mb-6">
                    <Carousel className="w-full max-w-lg mx-auto" plugins={[Autoplay({
                    delay: 2500
                  })]}>
                      <CarouselContent>
                        {[author1, author2, author3, author4, author5, author6, author7, author8, author9, author10].map((image, index) => <CarouselItem key={index}>
                            <div className="overflow-hidden rounded-xl">
                              <img src={image} alt={`Alpha Perla Mboyo - Photo ${index + 1}`} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                          </CarouselItem>)}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-primary">Alpha Perla Mboyo</span> est une femme engagée, présidente fondatrice de la Fondation Alpha Perla. Passionnée de littérature, elle utilise sa plume pour défendre les droits humains et sensibiliser aux injustices sociales. Son œuvre reflète son engagement profond pour l'excellence, l'éducation et l'action humanitaire.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Poems Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Poèmes
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez les œuvres poétiques d'Alpha Perla Mboyo
              </p>
            </div>

            {/* Poem 1 */}
            <div className="max-w-6xl mx-auto mb-20">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="overflow-hidden">
                    <img 
                      src={poem1Image} 
                      alt="Femme Debout" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                      Femme Debout, Bâtit Aujourd'hui Pour Demain
                    </h3>
                    <div className="font-garamond text-base md:text-lg leading-relaxed text-muted-foreground space-y-4 max-h-[500px] overflow-y-auto">
                      <p className="italic">
                        Hier négligée, réduit à donner du plaisir et à procréer, chosifiée et considérée comme peu inférieur, exclue et ne pouvant pas prendre part à la prise des décisions importantes ni occuper des postes de hautes responsabilités, La femme n'avait pas son mot à dire et n'était que spectatrice, Ne devant se contenter que de son travail de procréer et du reste, Rester confondue avec d'autres décors dans la maison ou encore comme un trophée qu'on devait exhiber partout sans dignité ni respect, Devrait rester silencieuse et encaisser toute sa vie tout en se valant la face et jouer le rôle d'une femme heureuse à la face de la société, famille hors en réalité malheureuse et prisonnière des coutumes et enseignements légués par ses pères, Elles souffrent en silence, détruite de l'intérieur, meurtrie et sans défense, vivant juste pour les autres, pour plaire aux autres et jouer son rôle de procréation,...
                      </p>
                      <p className="font-semibold text-primary">
                        Femme Debout, Bâtit aujourd'hui pour demain!
                      </p>
                      <p>
                        Stop!!! stop!!!, stop!!!, Le temps change, l'heure est à la prise de conscience maintenant,
                      </p>
                      <p>
                        Femme, tu es une Reine, une déesse, une héroïne, une mère, porteuse de vie, une voix, celle qui apporte la joie, pleine des ressources. Celle qui porte en elle et maîtrise le secret de tout et dès le premier jour car en plongeant l'homme dans un profond sommeil pour en faire sortir la femme, le pouvoir, la connaissance, secret et la maîtrise de tout lui avait été donné. Une femme porte la vie et la mort en elle, bénédiction et malédiction, joie et tristesse, elle peut construire et détruire tout, elle sait très bien et avec exactitude où toucher et comment pour émerveiller et endeuiller. Il suffit qu'elle soit consciente de qui elle est exactement : une force inébranlable...
                      </p>
                      <p className="font-semibold text-primary">
                        Femme Debout, Bâtit aujourd'hui pour demain!
                      </p>
                      <p className="font-semibold">
                        Comment est-ce possible?
                      </p>
                      <p>
                        La clé pour te découvrir et exercer le pouvoir et tout le reste qui sont en toi femme, c'est de t'aimer, t'accepter et d'avoir confiance en toi. Ceci t'ouvrira des portes pour explorer ta beauté intérieure et c'est en elle que tu découvriras qui tu es exactement, ta puissance, ton pouvoir, tes missions, tes récompenses et comment jouer ton rôle et quand le faire...
                      </p>
                      <p>
                        La beauté intérieure est illimitée, elle ne vieillit jamais mais se bonifie avec l'âge, elle t'amènera à développer des aptitudes et des regards physiques et surnaturels avant d'apporter ton jugement ou avant d'ouvrir la bouche. Elle te donnera plusieurs façons de voir les choses et d'appréhender les dangers...
                      </p>
                      <p className="font-semibold text-primary">
                        Femme Debout, Bâtit aujourd'hui pour demain!
                      </p>
                      <p>
                        Tu es une étoile et tu es appelée à briller, tu as tout en toi pour briller, braver tout et peu importe même traverser la vallée de l'ombre de la mort pour y arriver et en toute dignité et élégance en mettant sa féminité en avant avec respect et admiration, marquer ses empreintes, oser, poser les premières pierres comme des vraies bâtisseuses, poser des bases solides et veiller à ce que chaque effort dans chaque domaine, chaque victoire soit considérée comme une pierre posée sur une fondation solide et inébranlable les unes après les autres, écrire l'histoire au féminin. L'ensemble des petites victoires qui seront des édifices pour des générations à venir telle est le rôle ultime de toute femme debout, consciencieuse, battante et bâtisseuse car en réalité tu n'es pas ici-bas par hasard ni pour accompagner les autres.
                      </p>
                      <p>
                        Tu as un rôle à jouer dans l'histoire et cherche juste à le savoir en passant par ses piliers qui sont la prière, l'amour de soi, l'acceptation de soi, la confiance en soi et explorer sa beauté intérieure.
                      </p>
                      <p className="font-semibold">
                        Une question : Tu veux rester spectatrice ou jouer enfin ton rôle ultime?
                      </p>
                      <p className="text-sm text-right mt-6">
                        — Alpha Perla Offiel
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Poem 2 */}
            <div className="max-w-6xl mx-auto mb-20">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 bg-gradient-to-br from-secondary/5 to-primary/5 order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                      Africa Debout - prend ton destin à main
                    </h3>
                    <div className="font-garamond text-base md:text-lg leading-relaxed text-muted-foreground space-y-4 max-h-[500px] overflow-y-auto">
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!! Ooooo!!! Africa,
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!! Ooooo !!!Africa,
                      </p>
                      <p>
                        BERCEAU DE L'HUMANITÉ, terre accueillante, chaleureuse, symbole d'amour et Fraternité, tu as vus naître des grandes empires, royaumes et civilisations qui ont marqués le monde entier par leur maîtrise en construction pharaonique, la façon de tailler la pierre et de l'aligner, leurs religions monogames,... les méthodes utilisées furent des précurseurs des beaucoup des sciences, technologies et savoir d'aujourd'hui.
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!! Ooooo !!!! Africa,
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!! Ooooo !!!! Africa,
                      </p>
                      <p>
                        Plusieurs savants reconnus mondialement ont piétinés les terres Africaines un jour à la recherche du savoir, un SAVOIR pur et très complexe, convoité jusqu'à vouloir s'en approprier, Terre des plusieurs merveilles et scandales géographique, démographique et climatique avec ses diversités de tout genre, culturelle, linguistique, morphologie... Des terres impressionnantes, des forêts pleines des diverses espèces éblouissantes, fascinantes, complexes, imposantes, avec ses rivières, douces, des mers, fleuves qui nous laissant sans voix, des espèces uniques au monde, des lieux insolites, un véritable HAVRE DE PAIX l'Afrique,
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!! Ooooo !!!! Africa,
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!! Ooooo !!!! Africa,
                      </p>
                      <p>
                        Jadis L'AFRIQUE a vu ses enfants arrachés à leur terre et vendus de l'autre côté de l'atlantique comme des vulgaires animaux ou trophées, la colonisation battait son plein avec toute sorte des troubles et bavures que les peuples africains ont subis, d'autres furent même exposés dans des musées comme des objets ou des animaux, l'homme blanc avait jeté toute sa fureur sur ses peuples, nous réduire au plus bas et à leur merci, l'homme blanc s'était imposé en nous prenant tout tel un lavage de cerveau en nous inculquant ce qu'il voulait, selon lui et selon sa version de l'histoire qu'il voulait qu'on retienne, une histoire falsifiée, nous imposant par force sa religion, ses valeurs, en commençant par prendre leur nom au détriment de nos noms africains, des guerres ici et là dont le commanditaire reste et demeure l'occident pour ses propres intérêts maquillés mais l'AFRIQUE n'est pas votre GÂTEAU dont vous vous partagez à votre guise???
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!!! Ooooo!!!! Africa,
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!!! Ooooo!!!! Africa,
                      </p>
                      <p>
                        Les blancs nous aiment quand on leur fait rire, quand on danse, quand on est dans le sexe, les futilités, les distractions et non quand on se met à réfléchir ou écrire ou encore poser des questions, chercher la vraie information, la vraie histoire sur nous, nos ancêtres, défier et refuser leur information maquillée comme l'exemple des statuts des pharaons avec des nez coupés ou des nez qui ont subits une chirurgie plastique, on nous voit comme une bombe à retardement qu'on doit à tout prix surveiller de près.
                      </p>
                      <p>
                        Ils nous considèrent comme de peu inférieur à eux voila pourquoi ils nous appellent L'AFRIQUE UN GRAND PAYS car pour eux on est dans un même panier " l' Afrique".
                      </p>
                      <p>
                        Nous ne sommes pas sensés découvrir des choses au risque de sortir de leur enclos invisible et nous épanouir en nous developpent, mais un jour l'Afrique se réveillera comme un ÉLÉPHANT, se lèvera et le monde tremblera car on a tout ce que eux n'ont pas et leur politique c'est de diviser pour mieux régner ou de mordre tout en soufflent de l'air sur la plaie comme le RAT.
                      </p>
                      <p>
                        Le moment est arrivé ou tout AFRICAIN doit prendre conscience, être consciencieux de notre situation et étudier sur comment nous développer, nous imposer, sortir de tout enclos de diverses formes des colonialismes et prouver au monde entier que nous sommes capable, fort, libre..., le berceau de l'humanité, Africains Noirs et fier de l'être.
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!!! Ooooo !!!!! Africa,
                      </p>
                      <p className="font-semibold text-lg">
                        Africaaaaaaa!!!! Ooooo !!!!! Africa.
                      </p>
                      <p className="text-sm text-right mt-6">
                        — ALPHA PERLA
                      </p>
                    </div>
                  </div>
                  <div className="overflow-hidden order-1 md:order-2">
                    <img 
                      src={poem2Image} 
                      alt="Africa Debout" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Poem 3 - Kinshasa en Larme (no image) */}
            <div className="max-w-4xl mx-auto mb-20">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary text-center">
                  Kinshasa en Larme
                </h3>
                <div className="font-garamond text-base md:text-lg leading-relaxed text-muted-foreground space-y-4 max-h-[600px] overflow-y-auto">
                  <p className="font-semibold text-lg">
                    Oooo!! Kinshasa ma ville,<br />
                    Oooo!! Kinshasa Ma capitale,<br />
                    Oooo!! Kinshasa la belle,
                  </p>
                  <p>
                    Tu es une ville pleine des joies de vivre, d'hospitalité, une ville très mouvementée, tu regorge une forte énergie et transmet à tout les kinois le courage d'affronter chaque journée avec détermination, joie, force comme si elle était leur dernière journée, malgré la pauvreté et la misère et des multiples questions sans réponses, les kinois et kinoises font de leur mieux pour s'accrocher et ne pas perdre l'espoir car en réalité, ils ne croient presque plus à un demain meilleur, ni aux politiciens, ni aux hommes de Dieu... mais vivent du jour le jour à cause de la misères, fatigués de tout, ne savent plus qui croire, à qui faire confiance, qui dit vrai, et qui dit faux, tous dans une confusion sans nom,
                  </p>
                  <p className="font-semibold text-lg">
                    Oooo!! Kinshasa ma ville,<br />
                    Oooo!! Kinshasa ma capitale,<br />
                    Oooo!! Kinshasa la belle,
                  </p>
                  <p className="font-semibold">
                    Je me sens en insécurité et étranger dans ma ville
                  </p>
                  <p>
                    l'insécurité en outrance, les enlèvements au vu et au su de tout le monde, on nous éventre vivant, prenant nos organes, on dirait des animaux, des vies s'en vont brutalement ainsi et sans défense, homme, femme, enfant dans une désolation sans nom, mais où êtes vous l'état congolais ? Où êtes vous autorité de la ville et du pays, où êtes vous députés que nous avions élus ? Où êtes vous leaders de l'opposition, société civile et droit de l'homme ?
                  </p>
                  <p>
                    Nous kinois et kinoises sommes sans voix, le silence de nos autorités sensées nous protéger nous répugnent, À qui irions nous si vous policiers, agents de l'ordre qui êtes sensés nous protéger êtes de mèche avec ses réseaux des kidnappeurs ? Les kinois ne savent plus où aller et à quelle bonne porte toquer, on nous manipulent à leur guise à longueur des journées, des mois et des années, tout nous échappent, on ne comprend plus rien dans la ville,
                  </p>
                  <p className="font-semibold">
                    Oooo!! Kinshasa ma ville, Oooo!! Kinshasa ma capital, Oooo!! Kinshasa la belle,
                  </p>
                  <p>
                    Jadis, tu étais Kinshasa la belle, aujourd'hui tu es devenu Kinshasa la poubelle, nous vivons dans l'insalubrité sans non, quand il pleut, on a une peur bleu car après la pluie, c'est plus le beau temps à Kinshasa mais plutôt le déluge, tout est emporté par Dame la pluie, on ne sait plus sur qui viendra la solution, les pleures par ici les pleures par là, on se bat nuit est jour pour survivre car on est très loin de vivre,
                  </p>
                  <p className="font-semibold">
                    Oooo!! Kinshasa ma ville, Oooo!! Kinshasa ma capitale, Oooo!! Kinshasa ma belle,
                  </p>
                  <p>
                    Dès 4heure du matin, la journée commence, dès que tu visualise ce que sera la journée, quelques gouttes des larmes n'hesitent pas de tomber sur tes joues, les transports difficiles,
                  </p>
                  <p className="font-semibold">
                    Les enlèvements par ici,
                  </p>
                  <p>
                    des tracaseries routières par là, des routes en mauvaises états, des embouteillages monstres par là, le ventre affamé accompagné d'une peur bleu car tu ne sais pas si tu vas rentrer chez toi, vu le niveau de l'insécurité observé ce dernier temps dans la ville,
                  </p>
                  <p className="font-semibold text-lg">
                    Oooo!! Kinshasa ma ville,<br />
                    Oooo!! Kinshasa ma capitale,<br />
                    Oooo!! Kinshasa la belle,
                  </p>
                  <p>
                    Arrivé malgré tout au centre ville vers 8 heure ou 9 heure du matin après un long trajet cherchant quoi mettre sur la dent, avec le taux de dollar à la hausse, 1000 fc en poche, quoi manger? Une larme coule encore sur une joue, Oooo!! Dieu ait pitié de tes enfants, Après avoir passé 8 heures au travail et quel travail ? Je vous laissent imaginer,
                  </p>
                  <p className="font-semibold text-lg">
                    Oooo!! Kinshasa ma ville,<br />
                    Oooo!! Kinshasa ma capitale,<br />
                    Oooo!! Kinshasa la belle,
                  </p>
                  <p className="font-semibold">
                    Misère qui es-tu?
                  </p>
                  <p>
                    Perdu dans l'inconscience, on se retrouve dans une villa, dans un grand salon en face des personnes bizarres qui nous donnent des coups sans pitié, les couteaux et autres instruments médicaux, on veut me prendre mes organes précieux cœur, reins, foie... Tout en étant vivant et sans défense, Je vois ma vie défiler sous mes yeux, Ai-je mérité une mort si atroce ? Mes enfants, mes enfants, mes enfants, pitié, pitié, pitié, pourquoi ? seigneur !!!
                  </p>
                  <p className="font-semibold text-lg">
                    Oooo!! Kinshasa ma ville<br />
                    Oooo!! Kinshasa ma capitale<br />
                    Oooo!! Kinshasa ma ville
                  </p>
                  <p>
                    Chers autorités, vous avez le droit de protéger la population, mettez vous au travail, arrêtez avec le Népotisme, les Tribalisme,... car ce ne sont pas des compétences qui manquent dans ce grand pays, il y a des personnes capables avec toutes les compétences possibles et qui méritent d'être à la place qu'il faut mais, c'est plutôt la mauvaise volonté, l'égoïsme et tant d'autres sentiments méchants et maléfiques qui animent nos autorités,… Travaillez et arrêtez de nous endormir avec des simples slogans et tant d'affiches et campagnes publicitaires colossaux sans impacts concrets oublient le vrai besoin du peuple, Hors les ennemis sont là, la population est en danger, il faut agir comme une grande nation que nous sommes, Jusqu'à quand resteriez-vous silencieux Chers députés que nous avons votés?
                  </p>
                  <p className="font-semibold text-lg">
                    Oooo!! Kinshasa ma ville<br />
                    Oooo!! Kinshasa ma capitale,<br />
                    Oooo!! Kinshasa la belle,
                  </p>
                  <p className="text-sm text-right mt-6">
                    — Alpha Perla
                  </p>
                </div>
              </Card>
            </div>

            {/* Poem 4 */}
            <div className="max-w-6xl mx-auto mb-20">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="overflow-hidden">
                    <img 
                      src={poem4Image} 
                      alt="Les Cris des Douleurs" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 md:p-12 bg-gradient-to-br from-secondary/5 to-primary/5">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                      Les Cris des Douleurs d'une Femme Meurtrie
                    </h3>
                    <div className="font-garamond text-base md:text-lg leading-relaxed text-muted-foreground space-y-4 max-h-[500px] overflow-y-auto">
                      <p className="font-semibold">
                        Au secours!!!<br />
                        Au secours!!!<br />
                        Au secours !!!
                      </p>
                      <p>
                        Je m'appelle Femme, Woman, Muasi, Bibi, Mukaji, celle qui donne la vie, la mère de l'humanité,
                      </p>
                      <p className="font-semibold">
                        Au secours!!!
                      </p>
                      <p>
                        celle qu'on devrait respecter et honorer, un être présenter comme faible mais aussi forte car elle a les deux en elle, celle qui apporte la joie, le bonheur, le sourire, admiration et louange, d'une beauté envoûtante et captivante, avec ses rondeurs, sa démarche, porteuse de vie, indispensable et irremplaçable, irrésistible et inoubliable et intelligente, femme de bon sens, femme des valeurs humanitaires, africaines, congolaises et bantu, de fois naïve et intelligente,
                      </p>
                      <p className="font-semibold">
                        Au secours !!!<br />
                        Au secours !!!
                      </p>
                      <p>
                        Mère dévouée, mais aujourd'hui déchirée dans son amour propre par des multiples violences très déplorables, l'homme a montré ses limites en affligeant toute sortes des violences à la femme, cet être si vénéré, spécial et unique, Il montre sa domination sur elle en l'infligent toutes sortes des âneries, des bavures, maltraitance et autres traitements inhumains envers celle qui porte et donne la vie, larmes et désespoirs sont sa vie quotidienne, jusqu'à quand? Les multiples guerres ont faits qu'aggraver sa peine, elle doit s'adapter au monde moderne pour survivre, elle qui était éduquer que pour servir l'homme mais aujourd'hui, Elle doit survivre en se conformant à la mondialisation, un monde compétitif où tout est question de gagner, de se surpasser, d'avoir une longueur d'avance...
                      </p>
                      <p className="font-semibold">
                        Au secours !!!<br />
                        Au secours !!!
                      </p>
                      <p>
                        violé à répétition, comme des milliers Des femmes les sont à l'Est de notre RDC, Avec une méchanceté sans nom, profaneant totalement le corps de la Femme et ses parties intimes, telle qu'un message codé adressé aux congolais, Car violer avec des objets ainsi avec Une extreme barbarie celle qui donne la vie,
                      </p>
                      <p className="font-semibold">
                        Au secours !!!
                      </p>
                      <p>
                        c'est souhaiter la disparition casiment du congolais, Moi, perdu dans mes illusions, souffrant du manque d'acceptation de soi, confiance en soi, n'ayant pas étudié, naïve, très émotionnelle, ni aucune compétence et sans savoir quoi faire dans un monde où je me vois comme une proie, je me tourne vers le plus vieux métier du monde pour m'en sortir et survivre avec toutes les risques possibles, ayant perdu tout mes rêves, mon Identité, ma dignité, ma fierté en tant que femme, je cries très fort,
                      </p>
                      <p className="font-semibold">
                        Au secours !!!<br />
                        Au secours !!!<br />
                        Au secours !!!
                      </p>
                      <p>
                        À un moment de recesissement, je me retrouve à l'église, rongé de l'intérieure par le dégoût, les blessures intérieures, la colère et douleur mélangés, cherchant la paix, juste une oreille attentive et une épaule sur quoi s'appuyer car étant about, c'est une autre forme de torture que je fais face car même à l'église on est pas épargner, les hommes de Dieu qui abusent de moi, profitant de ma naïveté, je me retrouve enceinte et puis chassée comme une malpropre avec une étiquette au front sorcière, Mais sur qui se tourner et par où trouverais-je la paix? Mes cris de douleurs...
                      </p>
                      <p className="font-semibold">
                        Au secours !!!<br />
                        Au secours !!!<br />
                        Au secours !!!
                      </p>
                      <p>
                        Me voilà mère d'un enfant sans père ni avenir, moi même suis perdu et doit m'occuper de cet être que j'ai à mains, fruit des tant des viols à répétitions, mais je dois réunir le peu de force qui me reste pour faire sortir la guerrière qui dort en moi enfin de vivre non pour moi mais pour ce petit être innocent et sans défense, pour lui, je ferai tout pour lui donner le meilleur de moi et trouver consolation, Je m'en dors et me réveille, les jours, les mois, les années passent avec espoir qu'un beau jour, je veux me réveiller de ce cauchemar et dire que ce n'etait qu'un mauvais rêve, mais ça n'arrivera jamais car c'est belle est bien la réalité, une réalité à la quelle je dois faire face et l'accepter, m'accepter, apprendre à m'aimer pour guérir et servir de modèle à d'autres, Car ce qui ne me tue pas me rend plus forte et j'y arriverais un jour.
                      </p>
                      <p className="font-semibold">
                        Au secours !!!<br />
                        Au secours !!!<br />
                        Au secours !!!
                      </p>
                      <p className="text-sm text-right mt-6">
                        — ALPHA PERLA
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Partagez cette œuvre importante
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Aidez-nous à faire entendre ces voix et à sensibiliser le monde aux réalités vécues par les femmes de l'est du Congo.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://wa.me/243977074034?text=Bonjour,%20je%20souhaite%20commander%20le%20livre%20%22Les%20larmes%20d'une%20femme%20meurtrie%20s%C3%A8cheront-elles%22%20de%20Alpha%20Perla%20Mboyo." target="_blank" rel="noopener noreferrer">
                  Commander maintenant
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Writing;