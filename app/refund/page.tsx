import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Landmark, QrCode, Smartphone } from "lucide-react";

const refundByRail = [
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

export default function RefundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="stamp mb-4 w-fit border-accent text-accent">
            គោលការណ៍សងប្រាក់វិញ
          </span>
          <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Refund Policy</h1>
          <p className="mb-8 text-muted-foreground">
            How refunds work for GameTopUpKH orders paid with ABA PAY, Wing, KHQR or TrueMoney.
          </p>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">General Policy</h2>
                <p className="text-muted-foreground">
                  Our products are digital and delivered directly to your game account. Once a top-up
                  has landed on your Player ID, or a gift card code has been revealed, the sale is
                  final — the same standard most digital top-up services in Cambodia follow, since
                  in-game currency and revealed codes cannot be "returned."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Eligible Refunds</h2>
                <p className="text-muted-foreground">Refunds may be issued when:</p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Payment was confirmed by ABA PAY, Wing, KHQR or TrueMoney but the UC or Diamonds never arrived due to an error on our end</li>
                  <li>You were charged twice for the same order</li>
                  <li>Your order was cancelled before we began processing it</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Non-Refundable Cases</h2>
                <p className="text-muted-foreground">Refunds will NOT be issued for:</p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>A wrong Player ID, Server (Global/Korea/Vietnam), or MLBB User ID(Server ID) entered at checkout</li>
                  <li>Top-ups already delivered to the account you provided</li>
                  <li>Gift card codes that have already been revealed or redeemed</li>
                  <li>Change of mind after payment is confirmed</li>
                  <li>Account bans or restrictions issued by the game publisher</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-4 p-6">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Refund Timing by Payment Method
                  </h2>
                  <p className="mt-1 text-muted-foreground">
                    Once a refund is approved, it goes back the way it came. Typical timing by rail:
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {refundByRail.map((rail) => (
                    <div
                      key={rail.id}
                      className="flex items-start gap-3 rounded-xl border-2 border-border bg-background p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <rail.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold text-foreground">{rail.name}</div>
                        <div className="font-mono text-sm text-accent">{rail.window}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{rail.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  These windows are typical, not guaranteed — your bank or wallet provider sets the
                  final timing on their end.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">How to Request a Refund</h2>
                <p className="text-muted-foreground">
                  Message us on Telegram within 24 hours of your purchase — our fastest channel — with:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Your order reference number</li>
                  <li>A screenshot of the payment (ABA PAY / Wing / KHQR / TrueMoney)</li>
                  <li>The reason for your refund request</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  We reply in Khmer or English, whichever you write in.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
                <p className="text-muted-foreground">
                  For refund requests, reach us on{" "}
                  <a href="https://t.me/gametopup" className="text-primary hover:underline">
                    Telegram
                  </a>{" "}
                  or{" "}
                  <a href="https://wa.me/1234567890" className="text-primary hover:underline">
                    WhatsApp
                  </a>
                  , or email support@gametopup.com.
                </p>
              </CardContent>
            </Card>

            <p className="pt-2 font-mono text-xs text-muted-foreground">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
