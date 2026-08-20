import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { z } from "zod";

const TYPES = [
  "Femme d'Excellence et d'Impact",
  "Homme – Champion de la Femme Africaine",
] as const;

const OPPORTUNITES = [
  "Emploi",
  "Entrepreneuriat",
  "Financement",
  "Formation",
  "Mentorat",
  "Leadership",
  "Réseautage",
  "Accompagnement professionnel",
];

const CATEGORIES_FEMMES = [
  "Femme entrepreneure d'impact",
  "Femme leader",
  "Femme d'affaires",
  "Femme innovatrice",
  "Femme dans les sciences et technologies",
  "Femme dans la santé",
  "Femme dans l'éducation",
  "Femme dans les arts et la culture",
  "Femme dans la mode et la beauté",
  "Femme dans les médias et la communication",
  "Femme dans l'agriculture",
  "Femme dans la finance",
  "Femme dans la politique et la gouvernance",
  "Femme engagée dans le social et l'humanitaire",
  "Femme dans le sport",
  "Femme de la diaspora",
  "Prix spécial du Jury",
  "Grand Prix Congolese Woman Excellentia",
];

const CATEGORIES_HOMMES = [
  "Champion de la Promotion de la Femme Africaine",
  "Champion du Soutien et de l'Autonomisation des Femmes",
  "Champion du Leadership Féminin",
  "Champion de l'Accompagnement des Femmes",
  "Prix spécial du Jury",
];

const PIECES = [
  "Photo portrait professionnelle récente",
  "CV ou biographie professionnelle",
  "Copie d'une pièce d'identité",
  "Preuves des réalisations présentées",
  "Photos / documents illustrant les activités",
  "Liens vers les plateformes professionnelles",
  "Articles de presse ou publications",
  "Tout document permettant de confirmer l'impact",
];

const schema = z.object({
  nom: z.string().trim().min(1, "Le nom est requis").max(100),
  telephone: z.string().trim().min(6, "Téléphone / WhatsApp requis").max(40),
  email: z.string().trim().email("Adresse e-mail invalide").max(255),
  nom_complet_declaration: z.string().trim().min(1, "Nom complet requis").max(150),
});

const Field = ({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <Label>
      {label}
      {required && <span className="text-destructive"> *</span>}
    </Label>
    <Input type={type} value={value} maxLength={255} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const Area = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <Textarea value={value} maxLength={2000} rows={3} onChange={(e) => onChange(e.target.value)} />
  </div>
);

const CandidatureForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});
  const [type, setType] = useState<string>(TYPES[0]);
  const [distinctions, setDistinctions] = useState(false);
  const [opportunites, setOpportunites] = useState<string[]>([]);
  const [pieces, setPieces] = useState<string[]>([]);
  const [categorie, setCategorie] = useState("");
  const [accepte, setAccepte] = useState(false);

  const set = (k: string) => (v: string) => setForm((f) => ({ ...f, [k]: v }));
  const g = (k: string) => form[k] ?? "";

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const isFemme = type === TYPES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({
      nom: g("nom"),
      telephone: g("telephone"),
      email: g("email"),
      nom_complet_declaration: g("nom_complet_declaration"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }
    if (!accepte) {
      toast.error("Vous devez accepter les conditions de candidature.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("candidatures_excellentia").insert({
      type_candidature: type,
      nom: parsed.data.nom,
      postnom: g("postnom"),
      prenom: g("prenom"),
      nom_public: g("nom_public"),
      pays: g("pays"),
      ville: g("ville"),
      nationalite: g("nationalite"),
      date_naissance: g("date_naissance"),
      telephone: parsed.data.telephone,
      email: parsed.data.email,
      profession: g("profession"),
      organisation: g("organisation"),
      secteur: g("secteur"),
      lien_facebook: g("lien_facebook"),
      lien_instagram: g("lien_instagram"),
      lien_linkedin: g("lien_linkedin"),
      parcours: g("parcours"),
      realisation_principale: g("realisation_principale"),
      realisations_fierte: g("realisations_fierte"),
      distinctions_recues: distinctions,
      distinctions_details: g("distinctions_details"),
      impact_communaute: g("impact_communaute"),
      nombre_beneficiaires: g("nombre_beneficiaires"),
      initiative_phare: g("initiative_phare"),
      changement_souhaite: g("changement_souhaite"),
      femmes_autonomisation: isFemme ? g("femmes_autonomisation") : "",
      femmes_modele: isFemme ? g("femmes_modele") : "",
      femmes_vision: isFemme ? g("femmes_vision") : "",
      femmes_merite: isFemme ? g("femmes_merite") : "",
      hommes_promotion: !isFemme ? g("hommes_promotion") : "",
      hommes_actions: !isFemme ? g("hommes_actions") : "",
      hommes_opportunites: !isFemme ? opportunites : [],
      hommes_opportunites_autre: !isFemme ? g("hommes_opportunites_autre") : "",
      hommes_nombre_femmes: !isFemme ? g("hommes_nombre_femmes") : "",
      hommes_fierte: !isFemme ? g("hommes_fierte") : "",
      hommes_pourquoi: !isFemme ? g("hommes_pourquoi") : "",
      categorie_distinction: categorie,
      pieces_jointes: pieces,
      nom_complet_declaration: parsed.data.nom_complet_declaration,
      date_declaration: g("date_declaration"),
      accepte_conditions: accepte,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Erreur lors de l'envoi de la candidature. Réessayez.");
      return;
    }
    toast.success("Votre candidature a bien été enregistrée !");
    setForm({});
    setOpportunites([]);
    setPieces([]);
    setCategorie("");
    setAccepte(false);
    setDistinctions(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto text-left">
      <Card>
        <CardHeader>
          <CardTitle>II. Type de candidature</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={type} onValueChange={setType} className="space-y-2">
            {TYPES.map((t) => (
              <div key={t} className="flex items-center gap-3">
                <RadioGroupItem value={t} id={`type-${t}`} />
                <Label htmlFor={`type-${t}`} className="font-normal">{t}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>III. Informations sur la candidate / le candidat</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <Field label="Nom" value={g("nom")} onChange={set("nom")} required />
          <Field label="Postnom" value={g("postnom")} onChange={set("postnom")} />
          <Field label="Prénom" value={g("prenom")} onChange={set("prenom")} />
          <Field label="Nom professionnel / nom public" value={g("nom_public")} onChange={set("nom_public")} />
          <Field label="Pays" value={g("pays")} onChange={set("pays")} />
          <Field label="Ville" value={g("ville")} onChange={set("ville")} />
          <Field label="Nationalité" value={g("nationalite")} onChange={set("nationalite")} />
          <Field label="Date de naissance" type="date" value={g("date_naissance")} onChange={set("date_naissance")} />
          <Field label="Téléphone / WhatsApp" value={g("telephone")} onChange={set("telephone")} required />
          <Field label="Adresse e-mail" type="email" value={g("email")} onChange={set("email")} required />
          <Field label="Profession / Fonction" value={g("profession")} onChange={set("profession")} />
          <Field label="Entreprise / Organisation / Institution" value={g("organisation")} onChange={set("organisation")} />
          <Field label="Secteur d'activité" value={g("secteur")} onChange={set("secteur")} />
          <Field label="Lien Facebook" value={g("lien_facebook")} onChange={set("lien_facebook")} />
          <Field label="Lien Instagram" value={g("lien_instagram")} onChange={set("lien_instagram")} />
          <Field label="Lien LinkedIn / Site internet" value={g("lien_linkedin")} onChange={set("lien_linkedin")} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>IV. Parcours et excellence</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Area label="1. Présentez brièvement votre parcours professionnel et votre engagement." value={g("parcours")} onChange={set("parcours")} />
          <Area label="2. Quelle est votre principale réalisation ou contribution dans votre domaine ?" value={g("realisation_principale")} onChange={set("realisation_principale")} />
          <Area label="3. Quelles sont les réalisations dont vous êtes particulièrement fière/fier ?" value={g("realisations_fierte")} onChange={set("realisations_fierte")} />
          <div className="flex items-center gap-3">
            <Checkbox id="distinctions" checked={distinctions} onCheckedChange={(c) => setDistinctions(!!c)} />
            <Label htmlFor="distinctions" className="font-normal">
              4. J'ai reçu des distinctions, récompenses ou reconnaissances
            </Label>
          </div>
          {distinctions && (
            <Area label="Si oui, lesquelles ?" value={g("distinctions_details")} onChange={set("distinctions_details")} />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>V. Impact et engagement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Area label="1. Quel impact votre travail ou votre engagement a-t-il sur votre communauté ?" value={g("impact_communaute")} onChange={set("impact_communaute")} />
          <Area label="2. Combien de personnes bénéficient directement ou indirectement de vos actions ?" value={g("nombre_beneficiaires")} onChange={set("nombre_beneficiaires")} />
          <Area label="3. Quelle initiative ou action concrète souhaitez-vous mettre en avant ?" value={g("initiative_phare")} onChange={set("initiative_phare")} />
          <Area label="4. Quel changement souhaitez-vous contribuer à apporter dans la société ?" value={g("changement_souhaite")} onChange={set("changement_souhaite")} />
        </CardContent>
      </Card>

      {isFemme ? (
        <Card>
          <CardHeader>
            <CardTitle>VI. Pour les femmes d'excellence et d'impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Area label="1. Comment contribuez-vous au développement et à l'autonomisation des femmes ou des jeunes ?" value={g("femmes_autonomisation")} onChange={set("femmes_autonomisation")} />
            <Area label="2. En quoi votre parcours peut-il servir de modèle à la jeunesse africaine ?" value={g("femmes_modele")} onChange={set("femmes_modele")} />
            <Area label="3. Quelle est votre vision de la femme africaine de demain ?" value={g("femmes_vision")} onChange={set("femmes_vision")} />
            <Area label="4. Pourquoi pensez-vous mériter le Trophée Congolese Woman Excellentia ?" value={g("femmes_merite")} onChange={set("femmes_merite")} />
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>VII. Pour les hommes – Champions de la femme africaine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Cette catégorie distingue les hommes qui, par leurs actions, leurs initiatives ou leur influence,
              contribuent de manière concrète à la promotion, au soutien et à l'autonomisation de la femme africaine.
            </p>
            <Area label="1. Comment contribuez-vous concrètement à la promotion de la femme africaine ?" value={g("hommes_promotion")} onChange={set("hommes_promotion")} />
            <Area label="2. Quelles actions avez-vous mises en place pour soutenir les femmes ?" value={g("hommes_actions")} onChange={set("hommes_actions")} />
            <div className="space-y-2">
              <Label>3. Avez-vous contribué à créer des opportunités pour les femmes ?</Label>
              <div className="grid sm:grid-cols-2 gap-2">
                {OPPORTUNITES.map((o) => (
                  <div key={o} className="flex items-center gap-3">
                    <Checkbox
                      id={`opp-${o}`}
                      checked={opportunites.includes(o)}
                      onCheckedChange={() => toggle(opportunites, setOpportunites, o)}
                    />
                    <Label htmlFor={`opp-${o}`} className="font-normal">{o}</Label>
                  </div>
                ))}
              </div>
              <Field label="Autre" value={g("hommes_opportunites_autre")} onChange={set("hommes_opportunites_autre")} />
            </div>
            <Area label="4. Combien de femmes ont directement bénéficié de vos initiatives ?" value={g("hommes_nombre_femmes")} onChange={set("hommes_nombre_femmes")} />
            <Area label="5. Quelle réalisation en faveur des femmes représente votre plus grande fierté ?" value={g("hommes_fierte")} onChange={set("hommes_fierte")} />
            <Area label="6. Pourquoi estimez-vous être un Champion de la Femme Africaine ?" value={g("hommes_pourquoi")} onChange={set("hommes_pourquoi")} />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>VIII. Catégorie de distinction</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={categorie} onValueChange={setCategorie} className="grid sm:grid-cols-2 gap-2">
            {(isFemme ? CATEGORIES_FEMMES : CATEGORIES_HOMMES).map((c) => (
              <div key={c} className="flex items-center gap-3">
                <RadioGroupItem value={c} id={`cat-${c}`} />
                <Label htmlFor={`cat-${c}`} className="font-normal">{c}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>IX. Pièces à joindre</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Cochez les pièces que vous transmettrez. Elles seront à envoyer par e-mail ou WhatsApp après
            l'enregistrement de votre candidature.
          </p>
          {PIECES.map((p) => (
            <div key={p} className="flex items-center gap-3">
              <Checkbox id={`piece-${p}`} checked={pieces.includes(p)} onCheckedChange={() => toggle(pieces, setPieces, p)} />
              <Label htmlFor={`piece-${p}`} className="font-normal">{p}</Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>X. Déclaration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Je certifie que les informations fournies dans ce formulaire sont exactes et sincères. J'accepte que ma
            candidature soit examinée par le Comité de sélection du Trophée Congolese Woman Excellentia – Afrique.
            En cas de nomination ou de distinction, j'autorise l'organisation à utiliser mon nom, mon image, ma
            biographie et les informations relatives à mon parcours dans le cadre de la communication et de la
            promotion officielle du Trophée.
          </p>
          <div className="flex items-center gap-3">
            <Checkbox id="accepte" checked={accepte} onCheckedChange={(c) => setAccepte(!!c)} />
            <Label htmlFor="accepte" className="font-normal">J'accepte les conditions de candidature et de sélection.</Label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Nom complet" value={g("nom_complet_declaration")} onChange={set("nom_complet_declaration")} required />
            <Field label="Date" type="date" value={g("date_declaration")} onChange={set("date_declaration")} />
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "Envoi en cours..." : "S'inscrire"}
        </Button>
      </div>
    </form>
  );
};

export default CandidatureForm;
