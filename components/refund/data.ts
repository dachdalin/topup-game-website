import { Wallet, Landmark, QrCode, Smartphone } from "lucide-react";

export const refundByRail = [
  {
    id: "aba",
    name: "ABA PAY",
    icon: Smartphone,
    window: "1–3 business days",
    note: "Returned to the same ABA account used to pay.",
  },
  {
    id: "wing",
    name: "Wing",
    icon: Wallet,
    window: "Same day – 2 business days",
    note: "Credited back to your Wing wallet balance.",
  },
  {
    id: "khqr",
    name: "KHQR (Bakong)",
    icon: QrCode,
    window: "3–7 business days",
    note: "Routed back through your bank, so timing depends on your bank.",
  },
  {
    id: "truemoney",
    name: "TrueMoney",
    icon: Landmark,
    window: "1–3 business days",
    note: "Credited back to your TrueMoney wallet.",
  },
];
