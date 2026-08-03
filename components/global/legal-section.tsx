import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <Card className="border-border bg-card">
      <CardContent className="space-y-3 p-6">
        <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
        {children}
      </CardContent>
    </Card>
  );
}
