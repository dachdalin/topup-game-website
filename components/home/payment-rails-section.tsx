const paymentRails = [
  { id: "aba", name: "ABA PAY" },
  { id: "wing", name: "Wing" },
  { id: "khqr", name: "KHQR" },
  { id: "truemoney", name: "TrueMoney" },
];

export function PaymentRailsSection() {
  return (
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
  );
}
