import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Gift } from "lucide-react";

const giftCards = [
  { name: "Google Play", href: "/gift-cards#google-play" },
  { name: "Apple App Store", href: "/gift-cards#apple" },
  { name: "Steam", href: "/gift-cards#steam" },
  { name: "Garena", href: "/gift-cards#garena" },
];

export function GiftCardsPreviewSection() {
  return (
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
  );
}
