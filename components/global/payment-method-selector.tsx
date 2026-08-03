import Image from "next/image";

export type PaymentMethod = {
  id: string;
  name: string;
  hint: string;
  logo: string;
};

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  selected: string | null;
  onSelect: (id: string) => void;
  /** Background for an unselected row — pick whichever contrasts with the surrounding container. */
  unselectedBgClassName?: "bg-background" | "bg-card";
}

export function PaymentMethodSelector({
  methods,
  selected,
  onSelect,
  unselectedBgClassName = "bg-background",
}: PaymentMethodSelectorProps) {
  return (
    <>
      {methods.map((method) => {
        const isSelected = selected === method.id;
        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelect(method.id)}
            className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
              isSelected
                ? "border-primary bg-primary/10"
                : `border-border ${unselectedBgClassName} hover:border-primary/50`
            }`}
          >
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                isSelected ? "border-primary" : "border-border"
              }`}
            >
              {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-2">
              <Image
                src={method.logo}
                alt={method.name}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex-1">
              <span className="block font-semibold text-foreground">{method.name}</span>
              <span className="block text-sm text-muted-foreground">{method.hint}</span>
            </span>
          </button>
        );
      })}
    </>
  );
}
