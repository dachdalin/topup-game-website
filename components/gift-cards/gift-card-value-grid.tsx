import { Check, Gift } from "lucide-react";
import { cardValues } from "@/components/gift-cards/data";

interface GiftCardValueGridProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

export function GiftCardValueGrid({ selectedValue, onSelect }: GiftCardValueGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {cardValues.map((v) => {
        const isSelected = selectedValue === v.value;
        return (
          <button
            key={v.value}
            type="button"
            onClick={() => onSelect(v.value)}
            className={`group relative flex flex-col items-center gap-1 rounded-xl border-2 p-3 text-center shadow-md transition-all ${
              isSelected
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                : "border-border bg-card shadow-black/20 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
            }`}
          >
            {isSelected && (
              <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
                <Check className="h-2.5 w-2.5" />
              </span>
            )}
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full border-4 shadow-inner transition-colors ${
                isSelected ? "border-accent bg-accent/20" : "border-accent/50 bg-accent/10 group-hover:border-accent"
              }`}
            >
              <Gift className="h-5 w-5 text-accent" />
            </span>
            <div className="font-display text-base font-bold text-foreground">${v.value}</div>
            <div className="font-mono text-sm font-semibold text-primary">${v.price.toFixed(2)}</div>
            <div className="font-khmer text-[9px] tracking-wide text-muted-foreground">ភ្លាមៗ · instant</div>
          </button>
        );
      })}
    </div>
  );
}
