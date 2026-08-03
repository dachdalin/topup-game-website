"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Gift, Loader2, Copy, Mail, ArrowLeft, Wallet, Landmark, Bitcoin } from "lucide-react";

const giftCards = [
  { id: "google-play", name: "Google Play", color: "from-green-500 to-green-700", logo: "/gift-cards/googleplay.svg" },
  { id: "apple", name: "Apple App Store", color: "from-gray-600 to-gray-800", logo: "/gift-cards/apple.svg" },
  { id: "steam", name: "Steam", color: "from-blue-600 to-blue-900", logo: "/gift-cards/steam.svg" },
  { id: "garena", name: "Garena", color: "from-orange-500 to-red-600", logo: "/gift-cards/garena.png" },
  { id: "playstation", name: "PlayStation", color: "from-blue-500 to-blue-700", logo: "/gift-cards/playstation.svg" },
];

const cardValues = [
  { value: 5, price: 5.49 },
  { value: 10, price: 10.99 },
  { value: 25, price: 26.99 },
  { value: 50, price: 52.99 },
];

const paymentMethods = [
  { id: "ewallet", name: "E-Wallet", hint: "Pay from your wallet balance", icon: Wallet },
  { id: "bank", name: "Bank Transfer", hint: "Direct transfer from your bank", icon: Landmark },
  { id: "crypto", name: "Crypto", hint: "Pay with cryptocurrency", icon: Bitcoin },
];

type Step = "list" | "detail" | "success";

export default function GiftCardsPage() {
  const [step, setStep] = useState<Step>("list");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentCard = giftCards.find((c) => c.id === selectedCard);
  const currentValue = cardValues.find((v) => v.value === selectedValue);

  // Generate a fake code for demo
  const generatedCode = "XXXX-XXXX-XXXX-XXXX";

  const handleSelectCard = (cardId: string) => {
    setSelectedCard(cardId);
    setStep("detail");
  };

  const handleBuyNow = () => {
    if (!selectedValue || !paymentMethod || !agreedToTerms) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
    }, 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setStep("list");
    setSelectedCard(null);
    setSelectedValue(null);
    setEmail("");
    setPaymentMethod(null);
    setAgreedToTerms(false);
  };

  // Success screen
  if (step === "success") {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <Card className="w-full max-w-md border-border bg-card">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
                <Gift className="h-8 w-8 text-success" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-foreground">Your Gift Card is Ready!</h2>
              <p className="mb-6 text-muted-foreground">
                ${selectedValue} {currentCard?.name} Gift Card
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

              <Button
                onClick={handleReset}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Buy Another Gift Card
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Detail screen
  if (step === "detail" && currentCard) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              onClick={() => setStep("list")}
              className="mb-6 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gift Cards
            </Button>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left - Card Preview */}
              <div>
                <Card className={`overflow-hidden border-0 bg-gradient-to-br ${currentCard.color}`}>
                  <CardContent className="flex h-48 flex-col items-center justify-center gap-4 p-6 text-white">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-3 shadow-lg">
                      <Image
                        src={currentCard.logo}
                        alt={currentCard.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h2 className="text-2xl font-bold">{currentCard.name}</h2>
                  </CardContent>
                </Card>
              </div>

              {/* Right - Purchase Form */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{currentCard.name} Gift Card</h1>
                  <p className="mt-1 text-muted-foreground">Instant delivery to your email</p>
                </div>

                {/* Value Selection */}
                <div className="space-y-3">
                  <Label className="text-foreground">Select Value</Label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {cardValues.map((v) => {
                      const isSelected = selectedValue === v.value;
                      return (
                        <button
                          key={v.value}
                          type="button"
                          onClick={() => setSelectedValue(v.value)}
                          className={`group relative flex flex-col items-center gap-1 rounded-xl border-2 p-3 text-center shadow-md transition-all ${
                            isSelected
                              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                              : "border-border bg-card shadow-black/20 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
                              <Check className="h-2.5 w-2.5" />
                            </span>
                          )}
                          <span
                            className={`flex h-11 w-11 items-center justify-center rounded-full border-4 shadow-inner transition-colors ${
                              isSelected ? "border-accent bg-accent/20" : "border-accent/50 bg-accent/10 group-hover:border-accent"
                            }`}
                          >
                            <Gift className="h-5 w-5 text-accent" />
                          </span>
                          <div className="font-display text-base font-bold text-foreground">${v.value}</div>
                          <div className="font-mono text-sm font-semibold text-primary">
                            ${v.price.toFixed(2)}
                          </div>
                          <div className="font-khmer text-[9px] tracking-wide text-muted-foreground">
                            ភ្លាមៗ · instant
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email to receive code"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Payment Method */}
                <div className="space-y-3">
                  <Label className="text-foreground">Payment Method</Label>
                  {paymentMethods.map((method) => {
                    const isSelected = paymentMethod === method.id;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                          isSelected
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card hover:border-primary/50"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                            isSelected ? "border-primary" : "border-border"
                          }`}
                        >
                          {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
                        </span>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <method.icon className="h-5 w-5" />
                        </span>
                        <span className="flex-1">
                          <span className="block font-semibold text-foreground">{method.name}</span>
                          <span className="block text-sm text-muted-foreground">{method.hint}</span>
                        </span>
                      </button>
                    );
                  })}

                  <div
                    role="checkbox"
                    aria-checked={agreedToTerms}
                    tabIndex={0}
                    onClick={() => setAgreedToTerms((v) => !v)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setAgreedToTerms((v) => !v);
                      }
                    }}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                      agreedToTerms
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                        agreedToTerms ? "border-primary" : "border-border"
                      }`}
                    >
                      {agreedToTerms && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
                    </span>
                    <span className="text-sm text-foreground">
                      I have read and agree to the{" "}
                      <Link
                        href="/terms"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary underline"
                      >
                        Terms & Conditions
                      </Link>
                    </span>
                  </div>
                </div>

                {/* Buy Button */}
                <Button
                  onClick={handleBuyNow}
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
        </main>
        <Footer />
      </div>
    );
  }

  // List screen
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Gift Cards</h1>
            <p className="mt-2 text-muted-foreground">
              Buy gift cards instantly and receive your code right away
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {giftCards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                className="group cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                onClick={() => handleSelectCard(card.id)}
              >
                <div className={`h-32 bg-gradient-to-br ${card.color}`}>
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2.5 shadow-lg transition-transform group-hover:scale-110">
                      <Image
                        src={card.logo}
                        alt={card.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {card.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">From $5 - $50</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Instant Delivery
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
