import type { TopUpPackage } from "@/components/global/package-grid";
import type { PaymentMethod } from "@/components/global/payment-method-selector";

export const diamondPackages: TopUpPackage[] = [
  { amount: 86, price: 1.49 },
  { amount: 172, price: 2.99 },
  { amount: 257, price: 4.49 },
  { amount: 344, price: 5.99 },
  { amount: 706, price: 11.99 },
  { amount: 1412, price: 23.99 },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "aba", name: "ABA PAY", hint: "Mobile app", logo: "/payment-methods/aba.png" },
  { id: "wing", name: "Wing", hint: "Mobile money", logo: "/payment-methods/wing.png" },
  { id: "khqr", name: "KHQR", hint: "Scan any bank", logo: "/payment-methods/khqr.png" },
  { id: "truemoney", name: "TrueMoney", hint: "Wallet", logo: "/payment-methods/truemoney.png" },
];
