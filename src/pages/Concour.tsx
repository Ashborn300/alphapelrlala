import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Mail, Upload, ChefHat, Calendar, CreditCard, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Concour = () => {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [preuvePaiement, setPreuvePaiement] = useState<File[]>([]);
  const [videoRecette, setVideoRecette] = useState<File | null>(null);
  const [photosRealisations, setPhotosRealisations] = useState<File[]>([]);
  const preuveRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const photosRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    nomComplet: "",
    sexe: "",
    age: "",
    telephone: "",
    email: "",
    commune: "",
    profil: [] as string[],
    profilAutre: "",
    dejaConcours: "",
    typeCuisine: [] as string[],
    motivation: "",
    cuisineRepresente: "",
    lienReseaux: "",
    accepteFilme: "",
    connaitReglement: "",
    autoriseImage: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxArray = (field: string, value: string, checked: boolean) => {
    setForm((prev) => {
      const arr = prev[field as keyof typeof prev] as string[];
      return {
        ...prev,
        [field]: checked ? [...arr, value] : arr.filter((v) => v !== value),
      };
    });
  };


  const validateForm = () => {
    if (preuvePaiement.length === 0) {
      toast({ title: "Preuve de paiement requise", description: "Veuillez joindre au moins une capture de la preuve de paiement.", variant: "destructive" });
      return false;
    }
    const required = [
      { key: "nomComplet", label: "Nom complet" },
      { key: "sexe", label: "Sexe" },
      { key: "age", label: "Âge" },
      { key: "telephone", label: "Téléphone" },
      { key: "email", label: "E-mail" },
      { key: "commune", label: "Commune" },
      { key: "motivation", label: "Motivation" },
      { key: "accepteFilme", label: "Acceptation filmage" },
      { key: "connaitReglement", label: "Règlement" },
      { key: "autoriseImage", label: "Autorisation image" },
    ];
    const missing = required.filter((r) => !form[r.key as keyof typeof form]);
    if (missing.length > 0 || form.profil.length === 0 || form.typeCuisine.length === 0) {
      toast({
        title: "Champs obligatoires",
        description: "Veuillez remplir tous les champs marqués d'un astérisque (*).",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const buildFormText = () => {
    return [
      "👑 INSCRIPTION — LES REINES DE MARS (Édition Kinshasa 2026)",
      "",
      `Nom complet : ${form.nomComplet}`,
      `Sexe : ${form.sexe}`,
      `Âge : ${form.age}`,
      `Téléphone (WhatsApp) : ${form.telephone}`,
      `E-mail : ${form.email}`,
      `Commune (Kinshasa) : ${form.commune}`,
      `Profil : ${form.profil.join(", ")}${form.profilAutre ? ` — ${form.profilAutre}` : ""}`,
      `Déjà participé à un concours culinaire : ${form.dejaConcours}`,
      `Type de cuisine maîtrisée : ${form.typeCuisine.join(", ")}`,
      `Motivation : ${form.motivation}`,
      `La cuisine représente : ${form.cuisineRepresente}`,
      `Réseaux sociaux : ${form.lienReseaux}`,
      `Accepte d'être filmé(e) : ${form.accepteFilme}`,
      `Connaissance du règlement : ${form.connaitReglement}`,
      `Autorise utilisation image : ${form.autoriseImage}`,
    ].join("\n");
  };

  const uploadFiles = async (): Promise<string[]> => {
    const urls: string[] = [];
    const timestamp = Date.now();
    const safeName = form.nomComplet.replace(/[^a-zA-Z0-9]/g, "_");

    const allFiles = [
      ...preuvePaiement.map((f, i) => ({ file: f, path: `${safeName}_${timestamp}/preuve_${i + 1}_${f.name}` })),
      ...(videoRecette ? [{ file: videoRecette, path: `${safeName}_${timestamp}/video_${videoRecette.name}` }] : []),
      ...photosRealisations.map((f, i) => ({ file: f, path: `${safeName}_${timestamp}/photo_${i + 1}_${f.name}` })),
    ];

    for (const { file, path } of allFiles) {
      const { data, error } = await supabase.storage.from("concours-uploads").upload(path, file);
      if (error) throw new Error(`Échec upload ${file.name}: ${error.message}`);
      const { data: urlData } = supabase.storage.from("concours-uploads").getPublicUrl(data.path);
      urls.push(urlData.publicUrl);
    }
    return urls;
  };

  const handleSubmitWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsUploading(true);
    try {
      const fileUrls = await uploadFiles();
      const filesText = fileUrls.length > 0 ? `\n\n📎 FICHIERS JOINTS :\n${fileUrls.join("\n")}` : "";
      const message = encodeURIComponent(buildFormText() + filesText);
      window.open(`https://wa.me/243831915847?text=${message}`, "_blank");
      toast({ title: "Redirection WhatsApp", description: "Fichiers uploadés et redirection vers WhatsApp." });
    } catch (err: any) {
      toast({ title: "Erreur d'upload", description: err.message, variant: "destructive" });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmitEmail = async () => {
    if (!validateForm()) return;
    setIsUploading(true);
    try {
      const fileUrls = await uploadFiles();
      const filesText = fileUrls.length > 0 ? `\n\n📎 FICHIERS JOINTS :\n${fileUrls.join("\n")}` : "";
      const subject = encodeURIComponent(`Inscription Concours — ${form.nomComplet}`);
      const body = encodeURIComponent(buildFormText() + filesText);
      window.open(`mailto:contact@fondationalphaperla.com?subject=${subject}&body=${body}`, "_blank");
      toast({ title: "Ouverture e-mail", description: "Fichiers uploadés. Votre client e-mail va s'ouvrir." });
    } catch (err: any) {
      toast({ title: "Erreur d'upload", description: err.message, variant: "destructive" });
    } finally {
      setIsUploading(false);
    }
  };

  const profilOptions = [
    "Cuisinière professionnelle",
    "Amatrice",
    "Étudiante en hôtellerie/restauration",
  ];

  const cuisineOptions = [
    "Cuisine congolaise",
    "Cuisine africaine",
    "Cuisine internationale",
    "Pâtisserie",
  ];

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

        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {/* Présentation */}
          <Card>
            <CardContent className="pt-6 space-y-5">
              <p className="text-lg font-semibold flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-orange-500" />
                👑 Les Reines de Mars – Saveurs du Congo Réinventées
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bienvenue dans l'aventure culinaire qui célèbre l'excellence au féminin ! À l'occasion du mois de la femme et de la Journée Internationale des Droits des Femmes, nous lançons un défi unique : <strong>réinventer les trésors de notre terroir</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ce concours met en valeur la richesse de la cuisine congolaise à travers une interprétation moderne et créative. Chaque participante devra présenter un <strong>plat congolais revisité</strong> accompagné d'une <strong>garniture inventive</strong>.
              </p>

              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-5 space-y-3">
                <h3 className="font-bold flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  📅 Calendrier & Frais
                </h3>
                <ul className="list-disc ml-6 space-y-1 text-sm text-muted-foreground">
                  <li><strong>Clôture des inscriptions :</strong> Vendredi 16 mars 2026 à minuit.</li>
                  <li><strong>Frais de participation :</strong> 25$ (Vingt-cinq dollars américains).</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-5 space-y-3">
                <h3 className="font-bold flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-orange-500" />
                  💳 Modalités de paiement
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pour valider votre candidature, veuillez effectuer votre transfert uniquement via :
                </p>
                <ul className="list-disc ml-6 text-sm text-muted-foreground">
                  <li><strong>Numéro :</strong> +243 977 074 034</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Formulaire */}
          <form onSubmit={handleSubmitWhatsApp} className="space-y-6">
            {/* Identité */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-lg font-bold text-orange-600">Informations personnelles</h2>
                <div>
                  <Label>Nom complet <span className="text-destructive">*</span></Label>
                  <Input value={form.nomComplet} onChange={(e) => handleChange("nomComplet", e.target.value)} required />
                </div>
                <div>
                  <Label>Sexe <span className="text-destructive">*</span></Label>
                  <RadioGroup value={form.sexe} onValueChange={(v) => handleChange("sexe", v)} className="flex gap-6 mt-1">
                    <div className="flex items-center gap-2"><RadioGroupItem value="M" id="sexeM" /><Label htmlFor="sexeM">M</Label></div>
                    <div className="flex items-center gap-2"><RadioGroupItem value="F" id="sexeF" /><Label htmlFor="sexeF">F</Label></div>
                  </RadioGroup>
                </div>
                <div>
                  <Label>Âge <span className="text-destructive">*</span></Label>
                  <Input value={form.age} onChange={(e) => handleChange("age", e.target.value)} required />
                </div>
                <div>
                  <Label>Numéro de téléphone (WhatsApp) <span className="text-destructive">*</span></Label>
                  <Input value={form.telephone} onChange={(e) => handleChange("telephone", e.target.value)} required placeholder="(+243) ..." />
                </div>
                <div>
                  <Label>Adresse e-mail <span className="text-destructive">*</span></Label>
                  <Input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} required />
                </div>
                <div>
                  <Label>Commune de résidence (Kinshasa) <span className="text-destructive">*</span></Label>
                  <Input value={form.commune} onChange={(e) => handleChange("commune", e.target.value)} required />
                </div>
              </CardContent>
            </Card>

            {/* Profil */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-lg font-bold text-orange-600">Profil culinaire</h2>
                <div>
                  <Label>Êtes-vous : <span className="text-destructive">*</span></Label>
                  <div className="space-y-2 mt-2">
                    {profilOptions.map((opt) => (
                      <div key={opt} className="flex items-center gap-2">
                        <Checkbox
                          id={`profil-${opt}`}
                          checked={form.profil.includes(opt)}
                          onCheckedChange={(c) => handleCheckboxArray("profil", opt, !!c)}
                        />
                        <Label htmlFor={`profil-${opt}`}>{opt}</Label>
                      </div>
                    ))}
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="profil-autre"
                        checked={form.profil.includes("Autre")}
                        onCheckedChange={(c) => handleCheckboxArray("profil", "Autre", !!c)}
                      />
                      <Label htmlFor="profil-autre">Autre :</Label>
                      <Input
                        className="flex-1"
                        placeholder="Précisez..."
                        value={form.profilAutre}
                        onChange={(e) => handleChange("profilAutre", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Avez-vous déjà participé à un concours culinaire ?</Label>
                  <RadioGroup value={form.dejaConcours} onValueChange={(v) => handleChange("dejaConcours", v)} className="flex gap-6 mt-1">
                    <div className="flex items-center gap-2"><RadioGroupItem value="Oui" id="dejaOui" /><Label htmlFor="dejaOui">Oui</Label></div>
                    <div className="flex items-center gap-2"><RadioGroupItem value="Non" id="dejaNon" /><Label htmlFor="dejaNon">Non</Label></div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Type de cuisine maîtrisée : <span className="text-destructive">*</span></Label>
                  <div className="space-y-2 mt-2">
                    {cuisineOptions.map((opt) => (
                      <div key={opt} className="flex items-center gap-2">
                        <Checkbox
                          id={`cuisine-${opt}`}
                          checked={form.typeCuisine.includes(opt)}
                          onCheckedChange={(c) => handleCheckboxArray("typeCuisine", opt, !!c)}
                        />
                        <Label htmlFor={`cuisine-${opt}`}>{opt}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Pourquoi souhaitez-vous participer à ce concours ? <span className="text-destructive">*</span></Label>
                  <Textarea value={form.motivation} onChange={(e) => handleChange("motivation", e.target.value)} required />
                </div>

                <div>
                  <Label>Que représente la cuisine pour vous ?</Label>
                  <Textarea value={form.cuisineRepresente} onChange={(e) => handleChange("cuisineRepresente", e.target.value)} />
                </div>
              </CardContent>
            </Card>

            {/* Fichiers */}
            <Card>
              <CardContent className="pt-6 space-y-5">
                <h2 className="text-lg font-bold text-orange-600">Documents & fichiers</h2>
                <p className="text-sm text-muted-foreground">
                  Les fichiers (preuve de paiement, vidéo, photos) doivent être envoyés directement via WhatsApp ou par e-mail à <strong>contact@fondationalphaperla.com</strong>.
                </p>

                <div className="border border-dashed rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-orange-500" />
                    <span className="font-medium">Preuve de paiement (Capture d'écran) <span className="text-destructive">*</span></span>
                  </div>
                  <p className="text-xs text-muted-foreground">Jusqu'à 5 images, 10 MB max par fichier. À envoyer via WhatsApp ou e-mail.</p>
                </div>

                <div className="border border-dashed rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-orange-500" />
                    <span className="font-medium">Vidéo de la recette (1 min. minimum) <span className="text-destructive">*</span></span>
                  </div>
                  <p className="text-xs text-muted-foreground">1 fichier, 100 MB max. Montrant l'élaboration de la recette et la mise en valeur du plat terminé (dressage sur table). À envoyer via WhatsApp ou e-mail.</p>
                </div>

                <div className="border border-dashed rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-orange-500" />
                    <span className="font-medium">Photos de réalisations culinaires <span className="text-destructive">*</span></span>
                  </div>
                  <p className="text-xs text-muted-foreground">1 fichier : PDF, document ou image. 10 MB max. À envoyer via WhatsApp ou e-mail.</p>
                </div>
              </CardContent>
            </Card>

            {/* Réseaux & consentements */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-lg font-bold text-orange-600">Réseaux sociaux & consentements</h2>

                <div>
                  <Label>Lien vers vos réseaux sociaux</Label>
                  <Input value={form.lienReseaux} onChange={(e) => handleChange("lienReseaux", e.target.value)} placeholder="https://..." />
                </div>

                <div>
                  <Label>Acceptez-vous d'être filmé(e) et photographié(e) pendant l'événement ? <span className="text-destructive">*</span></Label>
                  <RadioGroup value={form.accepteFilme} onValueChange={(v) => handleChange("accepteFilme", v)} className="flex gap-6 mt-1">
                    <div className="flex items-center gap-2"><RadioGroupItem value="Oui" id="filmeOui" /><Label htmlFor="filmeOui">Oui</Label></div>
                    <div className="flex items-center gap-2"><RadioGroupItem value="Non" id="filmeNon" /><Label htmlFor="filmeNon">Non</Label></div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Avez-vous pris connaissance du règlement du concours ? <span className="text-destructive">*</span></Label>
                  <RadioGroup value={form.connaitReglement} onValueChange={(v) => handleChange("connaitReglement", v)} className="flex gap-6 mt-1">
                    <div className="flex items-center gap-2"><RadioGroupItem value="Oui" id="reglOui" /><Label htmlFor="reglOui">Oui</Label></div>
                    <div className="flex items-center gap-2"><RadioGroupItem value="Non" id="reglNon" /><Label htmlFor="reglNon">Non</Label></div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Autorisez-vous la Fondation Alpha Perla à utiliser votre image à des fins de communication ? <span className="text-destructive">*</span></Label>
                  <RadioGroup value={form.autoriseImage} onValueChange={(v) => handleChange("autoriseImage", v)} className="flex gap-6 mt-1">
                    <div className="flex items-center gap-2"><RadioGroupItem value="Oui" id="imgOui" /><Label htmlFor="imgOui">Oui</Label></div>
                    <div className="flex items-center gap-2"><RadioGroupItem value="Non" id="imgNon" /><Label htmlFor="imgNon">Non</Label></div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8">
              <Button type="submit" size="lg" className="gap-2 w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                <Send className="h-5 w-5" />
                Envoyer via WhatsApp
              </Button>
              <Button type="button" onClick={handleSubmitEmail} size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Mail className="h-5 w-5" />
                Envoyer par E-mail
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Concour;
