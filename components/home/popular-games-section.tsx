import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Gamepad2, Sparkles } from "lucide-react";

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

export function PopularGamesSection() {
  return (
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
  );
}
