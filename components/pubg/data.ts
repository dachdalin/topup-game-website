import type { TopUpPackage } from "@/components/global/package-grid";
import type { PaymentMethod } from "@/components/global/payment-method-selector";

export const ucPackages: TopUpPackage[] = [
  { amount: 60, price: 0.99 },
  { amount: 120, price: 1.99 },
  { amount: 300, price: 4.99 },
  { amount: 600, price: 9.99, popular: true },
  { amount: 1500, price: 24.99 },
  { amount: 3000, price: 49.99 },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "aba", name: "ABA PAY", hint: "Mobile app", logo: "/payment-methods/aba.png" },
  { id: "wing", name: "Wing", hint: "Mobile money", logo: "/payment-methods/wing.png" },
  { id: "khqr", name: "KHQR", hint: "Scan any bank", logo: "/payment-methods/khqr.png" },
  { id: "truemoney", name: "TrueMoney", hint: "Wallet", logo: "/payment-methods/truemoney.png" },
];
