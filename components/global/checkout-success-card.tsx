import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { OrderSummaryRow } from "@/components/global/order-summary-card";

interface CheckoutSuccessCardProps {
  message: string;
  rows: OrderSummaryRow[];
  totalLabel: string;
  onReset: () => void;
}

export function CheckoutSuccessCard({ message, rows, totalLabel, onReset }: CheckoutSuccessCardProps) {
  return (
    <Card className="w-full max-w-md border-border bg-card">
      <CardContent className="flex flex-col items-center p-8 text-center">
        <div className="stamp mb-6 border-success text-success">
          <Check className="h-4 w-4" />
          បង់ រួច · paid
        </div>
        <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Order Received!</h2>
        <p className="mb-6 text-muted-foreground">{message}</p>
        <div className="mb-6 w-full rounded-lg bg-background p-4">
          {rows.map((row) => (
            <div key={row.label} className="flex justify-between text-sm first:mt-0 mt-2">
              <span className="text-muted-foreground">{row.label}:</span>
              <span className="font-medium text-foreground">{row.value}</span>
            </div>
          ))}
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-muted-foreground">Total:</span>
            <span className="font-medium text-primary">{totalLabel}</span>
          </div>
        </div>
        <p className="mb-6 text-sm text-muted-foreground">
          Need help? Contact us on{" "}
          <a href="https://t.me/gametopup" className="text-primary hover:underline">
            Telegram
          </a>{" "}
          or{" "}
          <a href="https://wa.me/1234567890" className="text-primary hover:underline">
            WhatsApp
          </a>
        </p>
        <Button onClick={onReset} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Make Another Purchase
        </Button>
      </CardContent>
    </Card>
  );
}
