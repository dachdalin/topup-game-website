import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type OrderSummaryRow = {
  label: string;
  value: string;
};

interface OrderSummaryCardProps {
  rows: OrderSummaryRow[];
  totalLabel: string;
  onConfirm: () => void;
  confirmDisabled: boolean;
  isProcessing: boolean;
  confirmLabel?: string;
}

export function OrderSummaryCard({
  rows,
  totalLabel,
  onConfirm,
  confirmDisabled,
  isProcessing,
  confirmLabel = "Confirm & Pay",
}: OrderSummaryCardProps) {
  return (
    <Card className="sticky top-24 border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg text-foreground">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3 text-sm">
          {rows.map((row) => (
            <div key={row.label} className="flex justify-between">
              <span className="text-muted-foreground">{row.label}</span>
              <span className="font-medium text-foreground">{row.value}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span className="text-foreground">Total</span>
            <span className="text-primary">{totalLabel}</span>
          </div>
        </div>
        <Button
          onClick={onConfirm}
          disabled={confirmDisabled || isProcessing}
          className="w-full bg-primary text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 disabled:scale-100 disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            confirmLabel
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
