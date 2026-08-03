import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail } from "lucide-react";

const contactMethods = [
  {
    name: "Telegram",
    description: "Chat with us for instant support",
    icon: MessageCircle,
    href: "https://t.me/gametopup",
    action: "Open Telegram",
  },
  {
    name: "WhatsApp",
    description: "Send us a message anytime",
    icon: MessageCircle,
    href: "https://wa.me/1234567890",
    action: "Open WhatsApp",
  },
  {
    name: "Email",
    description: "support@gametopup.com",
    icon: Mail,
    href: "mailto:support@gametopup.com",
    action: "Send Email",
  },
];

export function ContactMethods() {
  return (
    <div className="mb-12 grid gap-6 sm:grid-cols-3">
      {contactMethods.map((method) => (
        <a key={method.name} href={method.href} target="_blank" rel="noopener noreferrer" className="group">
          <Card className="h-full border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-transform group-hover:scale-110">
                <method.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">{method.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{method.description}</p>
              <span className="inline-flex items-center text-sm font-medium text-primary">{method.action}</span>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
