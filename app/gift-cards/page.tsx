"use client";

import { useState } from "react";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { GiftCardList } from "@/components/gift-cards/gift-card-list";
import { GiftCardDetail } from "@/components/gift-cards/gift-card-detail";
import { GiftCardSuccess } from "@/components/gift-cards/gift-card-success";
import { giftCards } from "@/components/gift-cards/data";
import type { Step } from "@/components/gift-cards/types";

export default function GiftCardsPage() {
  const [step, setStep] = useState<Step>("list");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentCard = giftCards.find((c) => c.id === selectedCard);

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

  const handleReset = () => {
    setStep("list");
    setSelectedCard(null);
    setSelectedValue(null);
    setEmail("");
    setPaymentMethod(null);
    setAgreedToTerms(false);
  };

  if (step === "success") {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <GiftCardSuccess
            cardName={currentCard?.name ?? ""}
            value={selectedValue}
            email={email}
            onReset={handleReset}
          />
        </main>
        <Footer />
      </div>
    );
  }

  if (step === "detail" && currentCard) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-8">
          <GiftCardDetail
            card={currentCard}
            selectedValue={selectedValue}
            onSelectValue={setSelectedValue}
            email={email}
            onEmailChange={setEmail}
            paymentMethod={paymentMethod}
            onSelectPaymentMethod={setPaymentMethod}
            agreedToTerms={agreedToTerms}
            onAgreedToTermsChange={setAgreedToTerms}
            isProcessing={isProcessing}
            onBuyNow={handleBuyNow}
            onBack={() => setStep("list")}
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
            <h1 className="text-3xl font-bold text-foreground">Gift Cards</h1>
            <p className="mt-2 text-muted-foreground">
              Buy gift cards instantly and receive your code right away
            </p>
          </div>
          <GiftCardList onSelectCard={handleSelectCard} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
