import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  ShieldCheck,
  UserX,
  MessageCircle,
  ChevronRight,
  Gamepad2,
  Sparkles,
  Gift,
} from "lucide-react";

const games = [
  {
    name: "PUBG Mobile",
    description: "UC Top-Up",
    href: "/pubg",
    badge: "5–10 min delivery",
    icon: Gamepad2,
  },
  {
    name: "Mobile Legends",
    description: "Diamonds Top-Up",
    href: "/mlbb",
    badge: "No login needed",
    icon: Sparkles,
  },
];

const giftCards = [
  { name: "Google Play", href: "/gift-cards#google-play" },
  { name: "Apple App Store", href: "/gift-cards#apple" },
  { name: "Steam", href: "/gift-cards#steam" },
  { name: "Garena", href: "/gift-cards#garena" },
];

const paymentRails = [
  { id: "aba", name: "ABA PAY" },
  { id: "wing", name: "Wing" },
  { id: "khqr", name: "KHQR" },
  { id: "truemoney", name: "TrueMoney" },
];

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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 14px)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="stamp mx-auto mb-6 w-fit border-accent text-accent">
                ទូទាត់លឿន · instant top-up
              </span>
              <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Top up fast.
                <br />
                <span className="text-primary">Paid the way Cambodia pays.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                PUBG Mobile UC and MLBB Diamonds, checked out with ABA PAY, Wing, KHQR or
                TrueMoney. No login required.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90 sm:w-auto"
                >
                  <Link href="/pubg">
                    <Gamepad2 className="mr-2 h-5 w-5" />
                    Top Up PUBG
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-accent text-accent transition-transform hover:scale-105 hover:bg-accent/10 sm:w-auto bg-transparent"
                >
                  <Link href="/mlbb">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Top Up MLBB
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full transition-transform hover:scale-105 sm:w-auto"
                >
                  <Link href="/gift-cards">
                    <Gift className="mr-2 h-5 w-5" />
                    Buy Gift Cards
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Games Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
              Popular Games
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {games.map((game) => (
                <Link key={game.name} href={game.href}>
                  <Card className="group h-full overflow-hidden border-border bg-card transition-all hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="flex items-stretch gap-0 p-0">
                      <div className="flex flex-1 items-center gap-4 p-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary/40 text-primary">
                          <game.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
                            {game.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{game.description}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="inline-flex items-center rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-xs font-medium text-accent">
                              {game.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="perforated flex w-14 shrink-0 items-center justify-center border-l-2 border-dashed border-border">
                        <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Cards Preview */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
              Gift Cards
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {giftCards.map((card) => (
                <Link key={card.name} href={card.href}>
                  <Card className="group cursor-pointer border-border bg-background transition-all hover:border-primary/60 hover:shadow-md">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border-2 border-accent/50 text-accent">
                        <Gift className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary">
                        {card.name}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10 bg-transparent">
                <Link href="/gift-cards">
                  View All Gift Cards
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pay how Cambodia pays */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Pay how Cambodia pays
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              No foreign card required. Check out with the app already on your phone.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {paymentRails.map((rail) => (
                <span
                  key={rail.id}
                  className="rounded-lg border-2 border-border bg-card px-5 py-3 font-mono text-sm font-medium tracking-wide text-foreground"
                >
                  {rail.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
      </main>
      <Footer />
    </div>
  );
}
