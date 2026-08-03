import { Zap, ShieldCheck, UserX, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "UC and Diamonds land in your account within 5–10 minutes of payment.",
  },
  {
    icon: ShieldCheck,
    title: "Local Payment, Verified",
    description: "Pay with ABA PAY, Wing, KHQR or TrueMoney — the rails you already trust.",
  },
  {
    icon: UserX,
    title: "No Account Needed",
    description: "Enter your Player ID and pay. No sign-up, no password to remember.",
  },
  {
    icon: MessageCircle,
    title: "Real Support on Telegram",
    description: "Stuck on an order? A person replies on Telegram or WhatsApp, day or night.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
          Why Choose Us
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/40 text-primary">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
