import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, KeyRound, Shuffle } from 'lucide-react';

const tips = [
  {
    icon: KeyRound,
    title: "Length is Strength",
    description: "Aim for at least 12 characters. The longer your password, the harder it is to crack.",
  },
  {
    icon: Shuffle,
    title: "Mix It Up",
    description: "Use a combination of uppercase letters, lowercase letters, numbers, and symbols.",
  },
  {
    icon: Shield,
    title: "Avoid the Obvious",
    description: "Don't use personal information like your name, birthday, or common words like 'password'.",
  },
  {
    icon: CheckCircle,
    title: "One of a Kind",
    description: "Use a unique password for every account. If one is compromised, the others remain safe.",
  },
];

export function PasswordGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">The Guide to Strong Passwords</CardTitle>
        <CardDescription>Follow these best practices to create secure and robust passwords.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {tips.map((tip) => (
            <div key={tip.title} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <tip.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{tip.title}</h3>
                <p className="text-muted-foreground text-sm">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-secondary/50 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">Pro Tip: Use a Password Manager</h4>
            <p className="text-sm text-muted-foreground">Password managers create and store complex, unique passwords for all your accounts. You only need to remember one master password. This is the most effective way to secure your digital life.</p>
        </div>
      </CardContent>
    </Card>
  );
}
