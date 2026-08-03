import Link from "next/link";

interface TermsAgreementCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Background for the unchecked state — pick whichever contrasts with the surrounding container. */
  uncheckedBgClassName?: "bg-background" | "bg-card";
}

export function TermsAgreementCheckbox({
  checked,
  onChange,
  uncheckedBgClassName = "bg-background",
}: TermsAgreementCheckboxProps) {
  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={() => onChange(!checked)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
      className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
        checked ? "border-primary bg-primary/10" : `border-border ${uncheckedBgClassName} hover:border-primary/50`
      }`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
          checked ? "border-primary" : "border-border"
        }`}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
      </span>
      <span className="text-sm text-foreground">
        I have read and agree to the{" "}
        <Link href="/terms" onClick={(e) => e.stopPropagation()} className="text-primary underline">
          Terms & Conditions
        </Link>
      </span>
    </div>
  );
}
