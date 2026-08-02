"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Check, Loader2, Gem, Smartphone, Wallet, QrCode, CreditCard } from "lucide-react";

const diamondPackages = [
  { amount: 86, price: 1.49 },
  { amount: 172, price: 2.99 },
  { amount: 257, price: 4.49 },
  { amount: 344, price: 5.99 },
  { amount: 706, price: 11.99 },
  { amount: 1412, price: 23.99 },
];

const paymentMethods = [
  { id: "aba", name: "ABA PAY", hint: "Mobile app", icon: Smartphone },
  { id: "wing", name: "Wing", hint: "Mobile money", icon: Wallet },
  { id: "khqr", name: "KHQR", hint: "Scan any bank", icon: QrCode },
  { id: "truemoney", name: "TrueMoney", hint: "Wallet", icon: CreditCard },
];

type Step = "select" | "payment" | "success";

export default function MlbbPage() {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [step, setStep] = useState<Step>("select");
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedPkg = diamondPackages.find((pkg) => pkg.amount === selectedPackage);

  const handleConfirmPayment = () => {
    if (!userId || !serverId || !selectedPackage || !paymentMethod || !agreedToTerms) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
    }, 2000);
  };

  const handleReset = () => {
    setUserId("");
    setServerId("");
    setSelectedPackage(null);
    setPaymentMethod(null);
    setAgreedToTerms(false);
    setStep("select");
  };

  const fullPlayerId = userId && serverId ? `${userId}(${serverId})` : "";

  if (step === "success") {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <Card className="w-full max-w-md border-border bg-card">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <div className="stamp mb-6 border-success text-success">
                <Check className="h-4 w-4" />
                បង់ រួច · paid
              </div>
              <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Order Received!</h2>
              <p className="mb-6 text-muted-foreground">
                Your {selectedPackage} Diamonds will be delivered within 5-10 minutes.
              </p>
              <div className="mb-6 w-full rounded-lg bg-background p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Player ID:</span>
                  <span className="font-medium text-foreground">{fullPlayerId}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium text-foreground">{selectedPackage} Diamonds</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-muted-foreground">Total:</span>
                  <span className="font-medium text-primary">${selectedPkg?.price.toFixed(2)}</span>
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
              <Button onClick={handleReset} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Make Another Purchase
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground">Mobile Legends Diamonds Top-Up</h1>
            <p className="mt-2 text-muted-foreground">
              Fast and secure Diamond delivery to your account
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              {/* Player Info */}
              <Card className="mb-6 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Player Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="userId" className="text-foreground">User ID</Label>
                      <Input
                        id="userId"
                        placeholder="Enter your User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serverId" className="text-foreground">Server ID</Label>
                      <Input
                        id="serverId"
                        placeholder="Enter Server ID"
                        value={serverId}
                        onChange={(e) => setServerId(e.target.value)}
                        className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                  {fullPlayerId && (
                    <p className="text-sm text-primary">
                      Your Player ID: <span className="font-medium">{fullPlayerId}</span>
                    </p>
                  )}
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <AlertCircle className="h-3 w-3" />
                    Example: 12345678(1234) - Double-check before payment
                  </p>
                </CardContent>
              </Card>

              {/* Diamond Packages */}
              <Card className="mb-6 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Select Diamond Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {diamondPackages.map((pkg) => {
                      const isSelected = selectedPackage === pkg.amount;
                      return (
                        <button
                          key={pkg.amount}
                          type="button"
                          onClick={() => setSelectedPackage(pkg.amount)}
                          className={`group relative flex flex-col items-center gap-1 rounded-xl border-2 p-3 text-center shadow-md transition-all ${
                            isSelected
                              ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                              : "border-border bg-background shadow-black/20 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
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
                            <Gem className="h-5 w-5 text-accent" />
                          </span>
                          <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                            DM-{pkg.amount}
                          </div>
                          <div className="font-display text-base font-bold text-foreground">
                            {pkg.amount}
                          </div>
                          <div className="font-mono text-sm font-semibold text-primary">
                            ${pkg.price.toFixed(2)}
                          </div>
                          <div className="font-khmer text-[9px] tracking-wide text-muted-foreground">
                            ភ្លាមៗ · instant
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                            : "border-border bg-background hover:border-primary/50"
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
                        : "border-border bg-background hover:border-primary/50"
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
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <Card className="sticky top-24 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Player ID</span>
                      <span className="font-medium text-foreground">{fullPlayerId || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Diamonds</span>
                      <span className="font-medium text-foreground">
                        {selectedPackage ? `${selectedPackage} Diamonds` : "—"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payment</span>
                      <span className="font-medium text-foreground">
                        {paymentMethods.find((m) => m.id === paymentMethod)?.name || "—"}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">
                        {selectedPkg ? `$${selectedPkg.price.toFixed(2)}` : "$0.00"}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={handleConfirmPayment}
                    disabled={!userId || !serverId || !selectedPackage || !paymentMethod || !agreedToTerms || isProcessing}
                    className="w-full bg-primary text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 disabled:scale-100 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Confirm & Pay"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
