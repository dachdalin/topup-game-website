import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, User, CreditCard, Zap } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Choose Game or Gift Card",
    description: "Select from our available games (PUBG Mobile, Mobile Legends) or browse our gift card collection.",
    icon: Gamepad2,
  },
  {
    number: 2,
    title: "Enter Player ID / Select Value",
    description: "For game top-ups, enter your Player ID. For gift cards, choose your preferred value.",
    icon: User,
  },
  {
    number: 3,
    title: "Make Payment",
    description: "Choose your preferred payment method and complete the transaction securely.",
    icon: CreditCard,
  },
  {
    number: 4,
    title: "Receive Instantly",
    description: "Your top-up will be delivered within minutes, or your gift card code will be displayed immediately.",
    icon: Zap,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">How It Works</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Get your game top-up or gift card in just a few simple steps. No account required.
            </p>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:left-1/2 md:-ml-px md:block" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex items-center gap-6 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg md:absolute md:left-1/2 md:-ml-8">
                    <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <Card
                    className={`flex-1 border-border bg-card md:w-[calc(50%-4rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">How fast is the delivery?</h3>
                  <p className="text-sm text-muted-foreground">
                    Most top-ups are delivered within 5-10 minutes. Gift card codes are displayed instantly after payment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">What if I entered wrong Player ID?</h3>
                  <p className="text-sm text-muted-foreground">
                    Please double-check your Player ID before payment. Contact our support immediately if you made a mistake.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Is it safe to use?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! We use official channels and secure payment methods. Your transactions are protected.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-foreground">Do I need to create an account?</h3>
                  <p className="text-sm text-muted-foreground">
                    No account is required. Just enter your Player ID, pay, and receive your top-up instantly.
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
