import type { PaymentMethod } from "@/components/global/payment-method-selector";

export const giftCards = [
  { id: "google-play", name: "Google Play", color: "from-green-500 to-green-700", logo: "/gift-cards/googleplay.svg" },
  { id: "apple", name: "Apple App Store", color: "from-gray-600 to-gray-800", logo: "/gift-cards/apple.svg" },
  { id: "steam", name: "Steam", color: "from-blue-600 to-blue-900", logo: "/gift-cards/steam.svg" },
  { id: "garena", name: "Garena", color: "from-orange-500 to-red-600", logo: "/gift-cards/garena.png" },
  { id: "playstation", name: "PlayStation", color: "from-blue-500 to-blue-700", logo: "/gift-cards/playstation.svg" },
];

export const cardValues = [
  { value: 5, price: 5.49 },
  { value: 10, price: 10.99 },
  { value: 25, price: 26.99 },
  { value: 50, price: 52.99 },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "aba", name: "ABA PAY", hint: "Mobile app", logo: "/payment-methods/aba.png" },
  { id: "wing", name: "Wing", hint: "Mobile money", logo: "/payment-methods/wing.png" },
  { id: "khqr", name: "KHQR", hint: "Scan any bank", logo: "/payment-methods/khqr.png" },
  { id: "truemoney", name: "TrueMoney", hint: "Wallet", logo: "/payment-methods/truemoney.png" },
];
