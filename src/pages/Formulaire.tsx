import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Formulaire = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    raisonSociale: "",
    idNationale: "",
    rccm: "",
    impot: "",
    typeEntreprise: "",
    adresseSiege: "",
    villeSiege: "",
    provinceSiege: "",
    nomComplet: "",
    fonction: "",
    numPasseport: "",
    adresseParticipant: "",
    villeParticipant: "",
    provinceParticipant: "",
    email: "",
    telephone: "",
    personneUrgence: "",
    activitePrincipale: "",
    activitesSecondaires: "",
    secteurInteret: "",
    produitsPrincipaux: "",
    domainesCooperation: "",
    nomOrganisation: "",
    secteurActivite: "",
    villeProjet: "",
    typeOrganisation: "",
    nomProjet: "",
    promoteurs: "",
    partenaires: "",
    secteurProjet: "",
    objectifProjet: "",
    resultatsAttendus: "",
    montantInvestissement: "",
    typeFinancement: "",
    optionsFinancement: "",
    dureeProjet: "",
    personneContact: "",
    remarques: "",
    categorie: "",
    categorieAffaires: [] as string[],
    autresCategorieAffaires: "",
    interetExportation: "",
    interetImportation: "",
    representationPartenariat: "",
    profilEntreprise: "",
    dateDepot: "",
    lieuDepot: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (field: string, value: string, checked: boolean) => {
    setForm(prev => {
      const arr = prev[field as keyof typeof prev] as string[];
      return {
        ...prev,
        [field]: checked ? [...arr, value] : arr.filter(v => v !== value),
      };
    });
  };

  const validateForm = () => {
    if (!form.raisonSociale || !form.nomComplet || !form.telephone) {
      toast({
        title: "Champs obligatoires",
        description: "Veuillez remplir au moins la raison sociale, le nom complet et le téléphone.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const buildFormText = () => {
    return [
      "📋 FORMULAIRE DE PARTICIPATION - MISSION ÉCONOMIQUE WORLD CONNECT",
      "",
      "1. INFORMATIONS GÉNÉRALES",
      `Raison sociale : ${form.raisonSociale}`,
      `N° ID Nationale : ${form.idNationale}`,
      `N° RCCM : ${form.rccm}`,
      `N° Impôt : ${form.impot}`,
      `Type d'entreprise : ${form.typeEntreprise}`,
      `Adresse siège : ${form.adresseSiege}`,
      `Ville : ${form.villeSiege} | Province : ${form.provinceSiege}`,
      "",
      "2. PARTICIPANT",
      `Nom complet : ${form.nomComplet}`,
      `Fonction : ${form.fonction}`,
      `N° Passeport : ${form.numPasseport}`,
      `Adresse : ${form.adresseParticipant}`,
      `Ville : ${form.villeParticipant} | Province : ${form.provinceParticipant}`,
      `Email : ${form.email}`,
      `Tél : ${form.telephone}`,
      `Personne urgence : ${form.personneUrgence}`,
      "",
      "3. ACTIVITÉS",
      `Activité principale : ${form.activitePrincipale}`,
      `Activités secondaires : ${form.activitesSecondaires}`,
      `Secteur d'intérêt : ${form.secteurInteret}`,
      `Produits principaux : ${form.produitsPrincipaux}`,
      `Domaines coopération : ${form.domainesCooperation}`,
      "",
      "4. PROJET D'INVESTISSEMENT",
      `Organisation : ${form.nomOrganisation}`,
      `Secteur : ${form.secteurActivite}`,
      `Ville/Province : ${form.villeProjet}`,
      `Type organisation : ${form.typeOrganisation}`,
      `Nom du projet : ${form.nomProjet}`,
      `Promoteur(s) : ${form.promoteurs}`,
      `Partenaire(s) : ${form.partenaires}`,
      `Secteur projet : ${form.secteurProjet}`,
      `Objectif : ${form.objectifProjet}`,
      `Résultats attendus : ${form.resultatsAttendus}`,
      `Montant investissement : ${form.montantInvestissement}`,
      `Type financement : ${form.typeFinancement}`,
      `Options financement : ${form.optionsFinancement}`,
      `Durée : ${form.dureeProjet}`,
      `Contact : ${form.personneContact}`,
      `Remarques : ${form.remarques}`,
      "",
      "5. CATÉGORIE DE PARTICIPATION",
      `Catégorie choisie : ${form.categorie}`,
      "",
      "6. FORMALITÉS",
      `Catégorie d'affaires : ${form.categorieAffaires.join(", ")} ${form.autresCategorieAffaires}`,
      `Intérêt exportation : ${form.interetExportation}`,
      `Intérêt importation : ${form.interetImportation}`,
      `Représentation/Partenariat : ${form.representationPartenariat}`,
      `Profil entreprise : ${form.profilEntreprise}`,
    ].join("\n");
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = encodeURIComponent(buildFormText());
    window.open(`https://wa.me/243831915847?text=${message}`, "_blank");
    toast({ title: "Formulaire envoyé", description: "Vous allez être redirigé vers WhatsApp." });
  };

  const handleSubmitEmail = () => {
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Formulaire de Participation - ${form.raisonSociale}`);
    const body = encodeURIComponent(buildFormText());
    window.open(`mailto:contact@fondationalphaperla.com?subject=${subject}&body=${body}`, "_blank");
    toast({ title: "Formulaire envoyé", description: "Votre client e-mail va s'ouvrir avec le formulaire pré-rempli." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4 md:pt-24 pb-16">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-12 mb-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mission Économique World Connect</h1>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Formulaire de participation — Remplissez cette fiche pour identifier vos besoins et établir des partenariats commerciaux stratégiques entre la RDC et l'Égypte.
            </p>
          </div>
        </section>

        <form onSubmit={handleSubmitWhatsApp} className="container mx-auto px-4 max-w-4xl space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader><CardTitle>1. Informations Générales sur l'Entreprise</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-lg">Identification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Raison sociale *</Label><Input value={form.raisonSociale} onChange={e => handleChange("raisonSociale", e.target.value)} required /></div>
                <div><Label>N° Identification Nationale</Label><Input value={form.idNationale} onChange={e => handleChange("idNationale", e.target.value)} /></div>
                <div><Label>N° RCCM</Label><Input value={form.rccm} onChange={e => handleChange("rccm", e.target.value)} /></div>
                <div><Label>N° Impôt</Label><Input value={form.impot} onChange={e => handleChange("impot", e.target.value)} /></div>
                <div className="md:col-span-2"><Label>Type d'entreprise</Label><Input value={form.typeEntreprise} onChange={e => handleChange("typeEntreprise", e.target.value)} /></div>
              </div>
              <h3 className="font-semibold text-lg pt-4">Siège Social</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2"><Label>Adresse</Label><Input value={form.adresseSiege} onChange={e => handleChange("adresseSiege", e.target.value)} /></div>
                <div><Label>Ville</Label><Input value={form.villeSiege} onChange={e => handleChange("villeSiege", e.target.value)} /></div>
                <div><Label>Province</Label><Input value={form.provinceSiege} onChange={e => handleChange("provinceSiege", e.target.value)} /></div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader><CardTitle>2. Participant(s)</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Personne(s) représentant l'entreprise lors de la mission</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Nom complet *</Label><Input value={form.nomComplet} onChange={e => handleChange("nomComplet", e.target.value)} required /></div>
                <div><Label>Fonction</Label><Input value={form.fonction} onChange={e => handleChange("fonction", e.target.value)} /></div>
                <div><Label>N° de passeport</Label><Input value={form.numPasseport} onChange={e => handleChange("numPasseport", e.target.value)} /></div>
                <div className="md:col-span-2"><Label>Adresse</Label><Input value={form.adresseParticipant} onChange={e => handleChange("adresseParticipant", e.target.value)} /></div>
                <div><Label>Ville</Label><Input value={form.villeParticipant} onChange={e => handleChange("villeParticipant", e.target.value)} /></div>
                <div><Label>Province</Label><Input value={form.provinceParticipant} onChange={e => handleChange("provinceParticipant", e.target.value)} /></div>
                <div><Label>E-mail</Label><Input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} /></div>
                <div><Label>Téléphone *</Label><Input value={form.telephone} onChange={e => handleChange("telephone", e.target.value)} required placeholder="(+243) ..." /></div>
                <div className="md:col-span-2"><Label>Personne à contacter en cas d'urgence</Label><Textarea value={form.personneUrgence} onChange={e => handleChange("personneUrgence", e.target.value)} /></div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader><CardTitle>3. Activités de l'Entreprise</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div><Label>Activité principale</Label><Input value={form.activitePrincipale} onChange={e => handleChange("activitePrincipale", e.target.value)} /></div>
              <div><Label>Activité(s) secondaire(s)</Label><Textarea value={form.activitesSecondaires} onChange={e => handleChange("activitesSecondaires", e.target.value)} /></div>
              <div><Label>Secteur d'intérêt</Label><Textarea placeholder="Représentation commerciale, Distributeur officiel, Fournisseur, Partenariat public-privé…" value={form.secteurInteret} onChange={e => handleChange("secteurInteret", e.target.value)} /></div>
              <div><Label>Produits principaux (fabriqués ou importés)</Label><Textarea value={form.produitsPrincipaux} onChange={e => handleChange("produitsPrincipaux", e.target.value)} /></div>
              <div><Label>Domaines de coopération recherchés</Label><Textarea value={form.domainesCooperation} onChange={e => handleChange("domainesCooperation", e.target.value)} /></div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader><CardTitle>4. Projet d'Investissement – World Connect</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">À remplir pour un seul projet par fiche — annexes possibles pour les descriptions détaillées</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Nom de l'organisation</Label><Input value={form.nomOrganisation} onChange={e => handleChange("nomOrganisation", e.target.value)} /></div>
                <div><Label>Secteur d'activité</Label><Input value={form.secteurActivite} onChange={e => handleChange("secteurActivite", e.target.value)} /></div>
                <div><Label>Ville / Province</Label><Input value={form.villeProjet} onChange={e => handleChange("villeProjet", e.target.value)} /></div>
                <div><Label>Type d'organisation (Privée / Publique / Parapublique)</Label><Input value={form.typeOrganisation} onChange={e => handleChange("typeOrganisation", e.target.value)} /></div>
                <div><Label>Nom du projet</Label><Input value={form.nomProjet} onChange={e => handleChange("nomProjet", e.target.value)} /></div>
                <div><Label>Promoteur(s)</Label><Input value={form.promoteurs} onChange={e => handleChange("promoteurs", e.target.value)} /></div>
                <div><Label>Partenaire(s) associé(s)</Label><Input value={form.partenaires} onChange={e => handleChange("partenaires", e.target.value)} /></div>
                <div><Label>Secteur du projet</Label><Input value={form.secteurProjet} onChange={e => handleChange("secteurProjet", e.target.value)} /></div>
              </div>
              <div><Label>Objectif du projet</Label><Textarea value={form.objectifProjet} onChange={e => handleChange("objectifProjet", e.target.value)} /></div>
              <div><Label>Résultats attendus</Label><Textarea value={form.resultatsAttendus} onChange={e => handleChange("resultatsAttendus", e.target.value)} /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><Label>Montant total de l'investissement requis</Label><Input value={form.montantInvestissement} onChange={e => handleChange("montantInvestissement", e.target.value)} /></div>
                <div><Label>Type de financement recherché</Label><Input value={form.typeFinancement} onChange={e => handleChange("typeFinancement", e.target.value)} /></div>
                <div><Label>Options de financement envisagées</Label><Input value={form.optionsFinancement} onChange={e => handleChange("optionsFinancement", e.target.value)} /></div>
                <div><Label>Durée du projet</Label><Input value={form.dureeProjet} onChange={e => handleChange("dureeProjet", e.target.value)} /></div>
                <div><Label>Personne de contact</Label><Input value={form.personneContact} onChange={e => handleChange("personneContact", e.target.value)} /></div>
              </div>
              <div><Label>Remarques additionnelles</Label><Textarea value={form.remarques} onChange={e => handleChange("remarques", e.target.value)} /></div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader><CardTitle>5. Catégorie de Participation</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground">Tarifs individuels — Le paiement peut être effectué en espèces sur rendez-vous au siège de BJSACCESS ou par tout autre moyen conforme.</p>
              <RadioGroup value={form.categorie} onValueChange={v => handleChange("categorie", v)} className="space-y-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="A - 5.500 USD" id="catA" />
                    <Label htmlFor="catA" className="font-semibold">Catégorie A – 5.500 USD / personne</Label>
                  </div>
                  <ul className="text-sm text-muted-foreground ml-6 list-disc space-y-1">
                    <li>Visa 3 mois multiples-entrées</li>
                    <li>Hôtel 5 étoiles (10 nuits, chambre de luxe + petit déjeuner)</li>
                    <li>Rencontres B2B (max. 3 directeurs)</li>
                    <li>Visite guidée de 3 entreprises ciblées</li>
                    <li>Billet d'avion Business (A/R)</li>
                    <li>Services aéroportuaires + Go pass</li>
                    <li>Véhicule à disposition (07h00–20h30)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="B - 4.500 USD" id="catB" />
                    <Label htmlFor="catB" className="font-semibold">Catégorie B – 4.500 USD / personne</Label>
                  </div>
                  <ul className="text-sm text-muted-foreground ml-6 list-disc space-y-1">
                    <li>Visa 1 mois entrée-unique</li>
                    <li>Hôtel 4 étoiles (10 nuits, chambre standard + petit déjeuner)</li>
                    <li>Tous repas (hors extras)</li>
                    <li>2 visites guidées d'entreprises</li>
                    <li>Billet d'avion Classe Éco (A/R)</li>
                    <li>Services aéroportuaires + Go pass</li>
                    <li>Transport collectif (07h00–19h00)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="C - 3.500 USD" id="catC" />
                    <Label htmlFor="catC" className="font-semibold">Catégorie C – 3.500 USD / personne</Label>
                  </div>
                  <ul className="text-sm text-muted-foreground ml-6 list-disc space-y-1">
                    <li>Visa 1 mois entrée-unique</li>
                    <li>Hôtel 4 étoiles (10 nuits, chambre standard + petit déjeuner)</li>
                    <li>Repas (hors extras)</li>
                    <li>Billet d'avion Classe Éco (A/R)</li>
                    <li>Services aéroportuaires + Go pass</li>
                    <li>Transport collectif (07h00–19h00)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="D - 3.000 USD" id="catD" />
                    <Label htmlFor="catD" className="font-semibold">Catégorie D – 3.000 USD / personne</Label>
                  </div>
                  <ul className="text-sm text-muted-foreground ml-6 list-disc space-y-1">
                    <li>Visa 1 mois entrée-unique</li>
                    <li>Appartement 3 chambres (3 pers.) + service traiteur (10 jours)</li>
                    <li>Billet d'avion Classe Éco (A/R)</li>
                    <li>Services aéroportuaires + Go pass</li>
                    <li>Transport collectif (07h00–19h00)</li>
                  </ul>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader><CardTitle>6. Formalités à Remplir</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">A. Catégorie d'affaires</h3>
                <div className="flex flex-wrap gap-4">
                  {["Exportateur", "Importateur"].map(cat => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox
                        id={cat}
                        checked={form.categorieAffaires.includes(cat)}
                        onCheckedChange={(checked) => handleCheckbox("categorieAffaires", cat, !!checked)}
                      />
                      <Label htmlFor={cat}>{cat}</Label>
                    </div>
                  ))}
                </div>
                <div className="mt-2"><Label>Autres (préciser)</Label><Input value={form.autresCategorieAffaires} onChange={e => handleChange("autresCategorieAffaires", e.target.value)} /></div>
              </div>
              <div><Label>B. Intérêt pour l'exportation — Produits/services à exporter</Label><Textarea value={form.interetExportation} onChange={e => handleChange("interetExportation", e.target.value)} /></div>
              <div><Label>C. Intérêt pour l'importation — Produits/services à importer</Label><Textarea value={form.interetImportation} onChange={e => handleChange("interetImportation", e.target.value)} /></div>
              <div><Label>D. Représentation commerciale / Partenariat recherché</Label><Textarea value={form.representationPartenariat} onChange={e => handleChange("representationPartenariat", e.target.value)} /></div>
              <div><Label>E. Profil de l'entreprise (activités principales)</Label><Textarea value={form.profilEntreprise} onChange={e => handleChange("profilEntreprise", e.target.value)} /></div>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader><CardTitle>7. Conditions d'admission pour le visa</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-1 text-sm text-muted-foreground">
                <li>Fiche de participation remplie et signée</li>
                <li>Paiement des frais de participation</li>
                <li>Dépôt de la preuve de paiement à BJSACCESS</li>
                <li>Formulaire officiel de demande de visa</li>
                <li>Passeport valide</li>
                <li>Deux photos format passeport</li>
                <li>Ordre de mission (pour entreprises publiques et étatiques)</li>
                <li>Ordre de mission + documents officiels (pour entreprises privées)</li>
                <li>Carte jaune de vaccination</li>
              </ul>
            </CardContent>
          </Card>

          {/* Engagement */}
          <Card>
            <CardHeader><CardTitle>8. Engagement du participant</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">
                Je certifie avoir pris connaissance des conditions de participation et m'engage à remplir toutes les formalités requises.
              </p>
              <p className="text-xs text-muted-foreground">Siège social BJSACCESS — N° 74, Avenue du Commerce, Kinshasa-Gombe</p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8">
            <Button type="submit" size="lg" className="gap-2 w-full sm:w-auto">
              <Send className="h-5 w-5" />
              Envoyer via WhatsApp
            </Button>
            <Button type="button" onClick={handleSubmitEmail} size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <Mail className="h-5 w-5" />
              Envoyer par E-mail
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Formulaire;
