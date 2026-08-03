import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { giftCards } from "@/components/gift-cards/data";

interface GiftCardListProps {
  onSelectCard: (cardId: string) => void;
}

export function GiftCardList({ onSelectCard }: GiftCardListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {giftCards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          className="group cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          onClick={() => onSelectCard(card.id)}
        >
          <div className={`h-32 bg-gradient-to-br ${card.color}`}>
            <div className="flex h-full items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2.5 shadow-lg transition-transform group-hover:scale-110">
                <Image
                  src={card.logo}
                  alt={card.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">{card.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">From $5 - $50</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                Instant Delivery
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
