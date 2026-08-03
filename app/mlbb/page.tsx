"use client";

import { useState } from "react";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageGrid } from "@/components/global/package-grid";
import { PaymentMethodSelector } from "@/components/global/payment-method-selector";
import { TermsAgreementCheckbox } from "@/components/global/terms-agreement-checkbox";
import { OrderSummaryCard } from "@/components/global/order-summary-card";
import { CheckoutSuccessCard } from "@/components/global/checkout-success-card";
import { PlayerInfoCard } from "@/components/mlbb/player-info-card";
import { diamondPackages, paymentMethods } from "@/components/mlbb/data";
import type { Step, IdCheckStatus } from "@/components/mlbb/types";
import { Gem } from "lucide-react";

export default function MlbbPage() {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [step, setStep] = useState<Step>("select");
  const [isProcessing, setIsProcessing] = useState(false);
  const [idCheckStatus, setIdCheckStatus] = useState<IdCheckStatus>("idle");
  const [checkedNickname, setCheckedNickname] = useState<string | null>(null);

  const selectedPkg = diamondPackages.find((pkg) => pkg.amount === selectedPackage);

  const fullPlayerId = userId && serverId ? `${userId}(${serverId})` : "";

  const handleCheckPlayerId = async () => {
    if (!fullPlayerId || idCheckStatus === "checking") return;
    setIdCheckStatus("checking");
    setCheckedNickname(null);
    try {
      const res = await fetch("/api/check-player-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId: fullPlayerId }),
      });
      if (!res.ok) throw new Error("lookup failed");
      const data = await res.json();
      setCheckedNickname(data.nickname);
      setIdCheckStatus("done");
    } catch {
      setIdCheckStatus("error");
    }
  };

  const handleUserIdChange = (value: string) => {
    setUserId(value);
    setIdCheckStatus("idle");
    setCheckedNickname(null);
  };

  const handleServerIdChange = (value: string) => {
    setServerId(value);
    setIdCheckStatus("idle");
    setCheckedNickname(null);
  };

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
            message={`Your ${selectedPackage} Diamonds will be delivered within 5-10 minutes.`}
            rows={[
              { label: "Player ID", value: fullPlayerId },
              { label: "Amount", value: `${selectedPackage} Diamonds` },
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
            <h1 className="font-display text-3xl font-bold text-foreground">Mobile Legends Diamonds Top-Up</h1>
            <p className="mt-2 text-muted-foreground">
              Fast and secure Diamond delivery to your account
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <PlayerInfoCard
                userId={userId}
                onUserIdChange={handleUserIdChange}
                serverId={serverId}
                onServerIdChange={handleServerIdChange}
                fullPlayerId={fullPlayerId}
                idCheckStatus={idCheckStatus}
                checkedNickname={checkedNickname}
                onCheckPlayerId={handleCheckPlayerId}
              />

              <Card className="mb-6 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Select Diamond Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <PackageGrid
                    packages={diamondPackages}
                    selectedAmount={selectedPackage}
                    onSelect={setSelectedPackage}
                    icon={Gem}
                    idPrefix="DM"
                    size="sm"
                    gridClassName="grid grid-cols-2 gap-3 sm:grid-cols-4"
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
                  { label: "Player ID", value: fullPlayerId || "—" },
                  { label: "Diamonds", value: selectedPackage ? `${selectedPackage} Diamonds` : "—" },
                  { label: "Payment", value: paymentMethods.find((m) => m.id === paymentMethod)?.name || "—" },
                ]}
                totalLabel={selectedPkg ? `$${selectedPkg.price.toFixed(2)}` : "$0.00"}
                onConfirm={handleConfirmPayment}
                confirmDisabled={!userId || !serverId || !selectedPackage || !paymentMethod || !agreedToTerms}
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
