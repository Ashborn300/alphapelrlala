import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface JobFormProps {
  onSuccess: () => void;
}

const JobForm = ({ onSuccess }: JobFormProps) => {
  const [formData, setFormData] = useState({
    titre_poste: "",
    type_contrat: "",
    localisation: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("offres_emploi").insert([formData]);

    if (error) {
      toast.error("Erreur lors de la création de l'offre");
      console.error(error);
    } else {
      toast.success("Offre créée avec succès");
      setFormData({
        titre_poste: "",
        type_contrat: "",
        localisation: "",
        description: "",
      });
      onSuccess();
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Créer une nouvelle offre d'emploi</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="titre_poste">Titre du poste *</Label>
            <Input
              id="titre_poste"
              value={formData.titre_poste}
              onChange={(e) => setFormData({ ...formData, titre_poste: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type_contrat">Type de contrat *</Label>
            <Input
              id="type_contrat"
              value={formData.type_contrat}
              onChange={(e) => setFormData({ ...formData, type_contrat: e.target.value })}
              placeholder="CDI, CDD, Stage, etc."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="localisation">Localisation *</Label>
            <Input
              id="localisation"
              value={formData.localisation}
              onChange={(e) => setFormData({ ...formData, localisation: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              className="min-h-[200px]"
              placeholder="Décrivez les responsabilités, qualifications requises, etc."
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Création..." : "Créer l'offre"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default JobForm;
