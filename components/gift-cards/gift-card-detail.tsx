import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Loader2 } from "lucide-react";
import { PaymentMethodSelector } from "@/components/global/payment-method-selector";
import { TermsAgreementCheckbox } from "@/components/global/terms-agreement-checkbox";
import { GiftCardValueGrid } from "@/components/gift-cards/gift-card-value-grid";
import { cardValues, paymentMethods, giftCards } from "@/components/gift-cards/data";

interface GiftCardDetailProps {
  card: (typeof giftCards)[number];
  selectedValue: number | null;
  onSelectValue: (value: number) => void;
  email: string;
  onEmailChange: (email: string) => void;
  paymentMethod: string | null;
  onSelectPaymentMethod: (id: string) => void;
  agreedToTerms: boolean;
  onAgreedToTermsChange: (checked: boolean) => void;
  isProcessing: boolean;
  onBuyNow: () => void;
  onBack: () => void;
}

export function GiftCardDetail({
  card,
  selectedValue,
  onSelectValue,
  email,
  onEmailChange,
  paymentMethod,
  onSelectPaymentMethod,
  agreedToTerms,
  onAgreedToTermsChange,
  isProcessing,
  onBuyNow,
  onBack,
}: GiftCardDetailProps) {
  const currentValue = cardValues.find((v) => v.value === selectedValue);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <Button variant="ghost" onClick={onBack} className="mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Gift Cards
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left - Card Preview */}
        <div>
          <Card className={`overflow-hidden border-0 bg-gradient-to-br ${card.color}`}>
            <CardContent className="flex h-48 flex-col items-center justify-center gap-4 p-6 text-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-3 shadow-lg">
                <Image
                  src={card.logo}
                  alt={card.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold">{card.name}</h2>
            </CardContent>
          </Card>
        </div>

        {/* Right - Purchase Form */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{card.name} Gift Card</h1>
            <p className="mt-1 text-muted-foreground">Instant delivery to your email</p>
          </div>

          <div className="space-y-3">
            <Label className="text-foreground">Select Value</Label>
            <GiftCardValueGrid selectedValue={selectedValue} onSelect={onSelectValue} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email to receive code"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-foreground">Payment Method</Label>
            <PaymentMethodSelector
              methods={paymentMethods}
              selected={paymentMethod}
              onSelect={onSelectPaymentMethod}
              unselectedBgClassName="bg-card"
            />
            <TermsAgreementCheckbox
              checked={agreedToTerms}
              onChange={onAgreedToTermsChange}
              uncheckedBgClassName="bg-card"
            />
          </div>

          <Button
            onClick={onBuyNow}
            disabled={!selectedValue || !paymentMethod || !agreedToTerms || isProcessing}
            className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 disabled:scale-100 disabled:opacity-50"
            size="lg"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>Buy Now {currentValue ? `- $${currentValue.price.toFixed(2)}` : ""}</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
