"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Check, Gift, Copy, Mail } from "lucide-react";

const generatedCode = "XXXX-XXXX-XXXX-XXXX";

interface GiftCardSuccessProps {
  cardName: string;
  value: number | null;
  email: string;
  onReset: () => void;
}

export function GiftCardSuccess({ cardName, value, email, onReset }: GiftCardSuccessProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-md border-border bg-card">
      <CardContent className="flex flex-col items-center p-8 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
          <Gift className="h-8 w-8 text-success" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-foreground">Your Gift Card is Ready!</h2>
        <p className="mb-6 text-muted-foreground">
          ${value} {cardName} Gift Card
        </p>

        <div className="mb-6 w-full rounded-lg bg-background p-4">
          <Label className="text-xs text-muted-foreground">Your Code</Label>
          <div className="mt-2 flex items-center gap-2">
            <code className="flex-1 rounded bg-card p-3 text-center font-mono text-lg text-primary">
              {generatedCode}
            </code>
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyCode}
              className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {email && (
          <p className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            Code also sent to {email}
          </p>
        )}

        <Button onClick={onReset} className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
          Buy Another Gift Card
        </Button>
      </CardContent>
    </Card>
  );
}
