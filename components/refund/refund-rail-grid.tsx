import { refundByRail } from "@/components/refund/data";

export function RefundRailGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {refundByRail.map((rail) => (
        <div key={rail.id} className="flex items-start gap-3 rounded-xl border-2 border-border bg-background p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <rail.icon className="h-5 w-5" />
          </span>
          <div>
            <div className="font-semibold text-foreground">{rail.name}</div>
            <div className="font-mono text-sm text-accent">{rail.window}</div>
            <div className="mt-1 text-xs text-muted-foreground">{rail.note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
