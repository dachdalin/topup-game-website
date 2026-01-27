import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Clock } from "lucide-react";

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

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Contact & Support</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Need help? Our support team is available 24/7 to assist you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-transform group-hover:scale-110">
                      <method.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{method.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{method.description}</p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      {method.action}
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Working Hours */}
          <Card className="mb-12 border-border bg-card">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Support Hours</h3>
                <p className="text-muted-foreground">
                  24/7 - We are always available to help you
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">Common Issues</h2>
            <div className="space-y-4">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Top-up not received?</h3>
                  <p className="text-sm text-muted-foreground">
                    Most top-ups are delivered within 5-10 minutes. If you haven&apos;t received yours after 30 minutes, please contact us with your order details and payment proof.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Entered wrong Player ID?</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us immediately before the top-up is processed. Unfortunately, if the top-up has already been delivered to the wrong account, we cannot reverse it.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Payment failed?</h3>
                  <p className="text-sm text-muted-foreground">
                    If your payment was deducted but the order wasn&apos;t placed, please wait 24 hours for automatic refund. If the issue persists, contact us with your payment screenshot.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
