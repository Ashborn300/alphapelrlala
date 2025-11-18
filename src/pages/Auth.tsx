import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, isAdmin, loading: authLoading, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Auth page - user:', user, 'isAdmin:', isAdmin, 'authLoading:', authLoading);
    if (user && !authLoading) {
      // Add a small delay to ensure isAdmin state is fully updated
      const timer = setTimeout(() => {
        console.log('Redirecting - isAdmin:', isAdmin);
        if (isAdmin) {
          navigate("/admin", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [user, isAdmin, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) throw error;
        toast.success("Connexion réussie!");
      } else {
        const { error } = await signUp(email, password);
        if (error) throw error;
        toast.success("Inscription réussie! Vérifiez votre email.");
      }
    } catch (error: any) {
      toast.error(error.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{isLogin ? "Connexion" : "Inscription"}</CardTitle>
            <CardDescription>
              {isLogin
                ? "Connectez-vous à votre compte"
                : "Créez un nouveau compte"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Chargement..." : isLogin ? "Se connecter" : "S'inscrire"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin
                  ? "Pas de compte? Inscrivez-vous"
                  : "Déjà un compte? Connectez-vous"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
