import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

export type TopUpPackage = {
  amount: number;
  price: number;
  popular?: boolean;
};

interface PackageGridProps {
  packages: TopUpPackage[];
  selectedAmount: number | null;
  onSelect: (amount: number) => void;
  icon: LucideIcon;
  /** Short code shown above the amount, e.g. "UC" or "DM". */
  idPrefix: string;
  /** Unit suffix appended after the amount, e.g. "UC". Omit for none. */
  unitLabel?: string;
  gridClassName?: string;
  size?: "lg" | "sm";
}

const sizeStyles = {
  lg: {
    cardGap: "gap-1.5 p-4 pt-5",
    badge: "h-14 w-14",
    icon: "h-7 w-7",
    selectedMark: "right-2 top-2 h-5 w-5",
    selectedCheck: "h-3 w-3",
    tinyText: "text-[10px]",
    amountText: "text-xl",
    priceText: "text-lg",
  },
  sm: {
    cardGap: "gap-1 p-3",
    badge: "h-11 w-11",
    icon: "h-5 w-5",
    selectedMark: "right-1.5 top-1.5 h-4 w-4",
    selectedCheck: "h-2.5 w-2.5",
    tinyText: "text-[9px]",
    amountText: "text-base",
    priceText: "text-sm",
  },
} as const;

export function PackageGrid({
  packages,
  selectedAmount,
  onSelect,
  icon: Icon,
  idPrefix,
  unitLabel,
  gridClassName = "grid grid-cols-2 gap-4 sm:grid-cols-3",
  size = "lg",
}: PackageGridProps) {
  const s = sizeStyles[size];

  return (
    <div className={gridClassName}>
      {packages.map((pkg) => {
        const isSelected = selectedAmount === pkg.amount;
        return (
          <button
            key={pkg.amount}
            type="button"
            onClick={() => onSelect(pkg.amount)}
            className={`group relative flex flex-col items-center ${s.cardGap} rounded-xl border-2 text-center shadow-md transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isSelected
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                : pkg.popular
                  ? "border-accent/60 bg-background shadow-black/20 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
                  : "border-border bg-background shadow-black/20 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
            }`}
          >
            {pkg.popular && !isSelected && (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 -rotate-2 whitespace-nowrap rounded-full bg-accent px-2.5 py-0.5 font-khmer text-[9px] tracking-wide text-accent-foreground shadow">
                ពេញនិយម · popular
              </span>
            )}
            {isSelected && (
              <span
                className={`absolute flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow ${s.selectedMark}`}
              >
                <Check className={s.selectedCheck} />
              </span>
            )}
            <span
              className={`flex ${s.badge} items-center justify-center rounded-full border-4 shadow-inner transition-colors ${
                isSelected ? "border-accent bg-accent/20" : "border-accent/50 bg-accent/10 group-hover:border-accent"
              }`}
            >
              <Icon className={`${s.icon} text-accent`} />
            </span>
            <div className={`font-mono ${s.tinyText} uppercase tracking-widest text-muted-foreground`}>
              {idPrefix}-{pkg.amount}
            </div>
            <div className={`font-display ${s.amountText} font-bold text-foreground`}>
              {pkg.amount}
              {unitLabel ? ` ${unitLabel}` : ""}
            </div>
            <div className={`font-mono ${s.priceText} font-semibold text-primary`}>
              ${pkg.price.toFixed(2)}
            </div>
            <div className={`font-khmer ${s.tinyText} tracking-wide text-muted-foreground`}>
              ភ្លាមៗ · instant
            </div>
          </button>
        );
      })}
    </div>
  );
}
