import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function SupportHoursCard() {
  return (
    <Card className="mb-12 border-border bg-card">
      <CardContent className="flex items-center gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Clock className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Support Hours</h3>
          <p className="text-muted-foreground">24/7 - We are always available to help you</p>
        </div>
      </CardContent>
    </Card>
  );
}
