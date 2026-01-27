import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Shield,
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
    badge: "Instant Delivery",
    icon: Gamepad2,
  },
  {
    name: "Mobile Legends",
    description: "Diamonds Top-Up",
    href: "/mlbb",
    badge: "No Login",
    icon: Sparkles,
  },
];

const giftCards = [
  { name: "Google Play", href: "/gift-cards#google-play" },
  { name: "Apple App Store", href: "/gift-cards#apple" },
  { name: "Steam", href: "/gift-cards#steam" },
  { name: "Garena", href: "/gift-cards#garena" },
];

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Get your top-up within minutes after payment confirmation.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your transactions are protected with industry-standard security.",
  },
  {
    icon: UserX,
    title: "No Account Needed",
    description: "Just enter your Player ID and pay. No registration required.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Get help anytime via Telegram or WhatsApp.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Instant Game Top-Up
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  & Gift Cards
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                PUBG & MLBB — Fast, Safe, No Login Required
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
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
                  className="w-full border-primary/50 text-primary transition-all hover:scale-105 hover:bg-primary/10 sm:w-auto bg-transparent"
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
                  className="w-full transition-all hover:scale-105 sm:w-auto"
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
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">
              Popular Games
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {games.map((game) => (
                <Link key={game.name} href={game.href}>
                  <Card className="group h-full cursor-pointer border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                        <game.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                          {game.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{game.description}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                            {game.badge}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
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
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">
              Gift Cards
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {giftCards.map((card) => (
                <Link key={card.name} href={card.href}>
                  <Card className="group cursor-pointer border-border bg-background transition-all hover:border-primary/50 hover:shadow-md">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <Gift className="h-6 w-6 text-primary" />
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
              <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent">
                <Link href="/gift-cards">
                  View All Gift Cards
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">
              Why Choose Us
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
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
