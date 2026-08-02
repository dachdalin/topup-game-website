"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Check, Zap, Loader2 } from "lucide-react";

const ucPackages = [
  { amount: 60, price: 0.99 },
  { amount: 120, price: 1.99 },
  { amount: 300, price: 4.99 },
  { amount: 600, price: 9.99 },
  { amount: 1500, price: 24.99 },
  { amount: 3000, price: 49.99 },
];

const paymentMethods = [
  { id: "aba", name: "ABA PAY", hint: "Mobile app" },
  { id: "wing", name: "Wing", hint: "Mobile money" },
  { id: "khqr", name: "KHQR", hint: "Scan any bank" },
  { id: "truemoney", name: "TrueMoney", hint: "Wallet" },
];

type Step = "select" | "payment" | "success";

export default function PubgPage() {
  const [playerId, setPlayerId] = useState("");
  const [server, setServer] = useState("global");
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("select");
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedPkg = ucPackages.find((pkg) => pkg.amount === selectedPackage);

  const handleConfirmPayment = () => {
    if (!playerId || !selectedPackage || !paymentMethod) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
    }, 2000);
  };

  const handleReset = () => {
    setPlayerId("");
    setServer("global");
    setSelectedPackage(null);
    setPaymentMethod(null);
    setStep("select");
  };

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
                Your {selectedPackage} UC will be delivered within 5-10 minutes.
              </p>
              <div className="mb-6 w-full rounded-lg bg-background p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Player ID:</span>
                  <span className="font-medium text-foreground">{playerId}</span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium text-foreground">{selectedPackage} UC</span>
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
            <h1 className="font-display text-3xl font-bold text-foreground">PUBG Mobile UC Top-Up</h1>
            <p className="mt-2 text-muted-foreground">
              Fast and secure UC delivery to your account
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
                  <div className="space-y-2">
                    <Label htmlFor="playerId" className="text-foreground">Player ID</Label>
                    <Input
                      id="playerId"
                      placeholder="Enter your Player ID"
                      value={playerId}
                      onChange={(e) => setPlayerId(e.target.value)}
                      className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                    />
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <AlertCircle className="h-3 w-3" />
                      Double-check your Player ID before payment
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="server" className="text-foreground">Server</Label>
                    <Select value={server} onValueChange={setServer}>
                      <SelectTrigger className="border-border bg-background text-foreground">
                        <SelectValue placeholder="Select server" />
                      </SelectTrigger>
                      <SelectContent className="border-border bg-card">
                        <SelectItem value="global">Global</SelectItem>
                        <SelectItem value="kr">Korea</SelectItem>
                        <SelectItem value="vn">Vietnam</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* UC Packages */}
              <Card className="mb-6 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Select UC Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {ucPackages.map((pkg) => {
                      const isSelected = selectedPackage === pkg.amount;
                      return (
                        <button
                          key={pkg.amount}
                          type="button"
                          onClick={() => setSelectedPackage(pkg.amount)}
                          className={`group flex overflow-hidden rounded-lg border-2 text-left transition-all ${
                            isSelected
                              ? "border-primary bg-primary/10"
                              : "border-border bg-background hover:border-primary/50"
                          }`}
                        >
                          <div className="flex-1 p-4">
                            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                              UC-{pkg.amount}
                            </div>
                            <div className="mt-1 font-display text-xl font-bold text-foreground">
                              {pkg.amount} UC
                            </div>
                            <div className="mt-1 font-mono text-lg font-semibold text-primary">
                              ${pkg.price.toFixed(2)}
                            </div>
                          </div>
                          <div
                            className={`scratch-foil flex w-10 shrink-0 items-center justify-center border-l-2 border-dashed ${
                              isSelected ? "border-primary bg-primary/20 text-primary" : "border-border text-muted-foreground"
                            }`}
                          >
                            {isSelected ? <Check className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
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
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`rounded-xl border-2 p-4 text-center transition-all ${
                          paymentMethod === method.id
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-primary/50"
                        }`}
                      >
                        <div className="font-mono text-sm font-semibold text-foreground">{method.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{method.hint}</div>
                      </button>
                    ))}
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
                      <span className="font-medium text-foreground">{playerId || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Server</span>
                      <span className="font-medium text-foreground capitalize">{server}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">UC Amount</span>
                      <span className="font-medium text-foreground">
                        {selectedPackage ? `${selectedPackage} UC` : "—"}
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
                    disabled={!playerId || !selectedPackage || !paymentMethod || isProcessing}
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
