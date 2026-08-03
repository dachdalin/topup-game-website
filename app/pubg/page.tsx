"use client";

import { useState } from "react";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageGrid } from "@/components/global/package-grid";
import { PaymentMethodSelector } from "@/components/global/payment-method-selector";
import { TermsAgreementCheckbox } from "@/components/global/terms-agreement-checkbox";
import { OrderSummaryCard } from "@/components/global/order-summary-card";
import { CheckoutSuccessCard } from "@/components/global/checkout-success-card";
import { PlayerInfoCard } from "@/components/pubg/player-info-card";
import { ucPackages, paymentMethods } from "@/components/pubg/data";
import type { Step, IdCheckStatus } from "@/components/pubg/types";
import { Coins } from "lucide-react";

export default function PubgPage() {
  const [playerId, setPlayerId] = useState("");
  const [server, setServer] = useState("global");
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [step, setStep] = useState<Step>("select");
  const [isProcessing, setIsProcessing] = useState(false);
  const [idCheckStatus, setIdCheckStatus] = useState<IdCheckStatus>("idle");
  const [checkedNickname, setCheckedNickname] = useState<string | null>(null);

  const selectedPkg = ucPackages.find((pkg) => pkg.amount === selectedPackage);

  const handleCheckPlayerId = async () => {
    if (!playerId.trim() || idCheckStatus === "checking") return;
    setIdCheckStatus("checking");
    setCheckedNickname(null);
    try {
      const res = await fetch("/api/check-player-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId, server }),
      });
      if (!res.ok) throw new Error("lookup failed");
      const data = await res.json();
      setCheckedNickname(data.nickname);
      setIdCheckStatus("done");
    } catch {
      setIdCheckStatus("error");
    }
  };

  const handlePlayerIdChange = (value: string) => {
    setPlayerId(value);
    setIdCheckStatus("idle");
    setCheckedNickname(null);
  };

  const handleConfirmPayment = () => {
    if (!playerId || !selectedPackage || !paymentMethod || !agreedToTerms) return;
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
    setAgreedToTerms(false);
    setIdCheckStatus("idle");
    setCheckedNickname(null);
    setStep("select");
  };

  if (step === "success") {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <CheckoutSuccessCard
            message={`Your ${selectedPackage} UC will be delivered within 5-10 minutes.`}
            rows={[
              { label: "Player ID", value: playerId },
              { label: "Amount", value: `${selectedPackage} UC` },
            ]}
            totalLabel={`$${selectedPkg?.price.toFixed(2)}`}
            onReset={handleReset}
          />
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
              <PlayerInfoCard
                playerId={playerId}
                onPlayerIdChange={handlePlayerIdChange}
                server={server}
                onServerChange={setServer}
                idCheckStatus={idCheckStatus}
                checkedNickname={checkedNickname}
                onCheckPlayerId={handleCheckPlayerId}
              />

              <Card className="mb-6 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Select UC Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <PackageGrid
                    packages={ucPackages}
                    selectedAmount={selectedPackage}
                    onSelect={setSelectedPackage}
                    icon={Coins}
                    idPrefix="UC"
                    unitLabel="UC"
                    size="lg"
                  />
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <PaymentMethodSelector
                    methods={paymentMethods}
                    selected={paymentMethod}
                    onSelect={setPaymentMethod}
                  />
                  <TermsAgreementCheckbox checked={agreedToTerms} onChange={setAgreedToTerms} />
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <OrderSummaryCard
                rows={[
                  { label: "Player ID", value: playerId || "—" },
                  { label: "Server", value: server.charAt(0).toUpperCase() + server.slice(1) },
                  { label: "UC Amount", value: selectedPackage ? `${selectedPackage} UC` : "—" },
                  { label: "Payment", value: paymentMethods.find((m) => m.id === paymentMethod)?.name || "—" },
                ]}
                totalLabel={selectedPkg ? `$${selectedPkg.price.toFixed(2)}` : "$0.00"}
                onConfirm={handleConfirmPayment}
                confirmDisabled={!playerId || !selectedPackage || !paymentMethod || !agreedToTerms}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
