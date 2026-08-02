import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="stamp mb-4 w-fit border-accent text-accent">
            លក្ខខណ្ឌប្រើប្រាស់
          </span>
          <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Terms & Conditions</h1>
          <p className="mb-8 text-muted-foreground">
            The rules for buying UC, Diamonds and gift cards through GameTopUpKH.
          </p>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By using GameTopUpKH, you agree to these terms and conditions. If you do not agree,
                  please do not use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">2. Services</h2>
                <p className="text-muted-foreground">
                  GameTopUpKH provides game top-up services for PUBG Mobile UC and Mobile Legends
                  Diamonds, as well as digital gift cards (Google Play, Apple App Store, Steam,
                  Garena, PlayStation). All transactions are final once the top-up has been
                  delivered or a gift card code has been revealed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">3. User Responsibilities</h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>You must enter an accurate Player ID and Server (PUBG), or User ID and Server ID (MLBB), before paying.</li>
                  <li>You are responsible for verifying these details — orders cannot be redirected once delivered.</li>
                  <li>You must be of legal age to make purchases under the laws of your jurisdiction.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">4. Payments</h2>
                <p className="text-muted-foreground">
                  All prices are displayed in USD. We accept ABA PAY, Wing, KHQR (Bakong) and
                  TrueMoney. Payment must be confirmed by the provider before your top-up is
                  processed — we do not extend credit or accept "pay later" orders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">5. Delivery</h2>
                <p className="text-muted-foreground">
                  Top-ups are typically delivered within 5–10 minutes of payment confirmation. Gift
                  card codes are shown immediately after payment. If your order is delayed, message
                  us on Telegram with your order reference.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  GameTopUpKH is not responsible for issues arising from an incorrect Player ID,
                  User ID or Server, game server outages, or errors on the part of ABA PAY, Wing,
                  Bakong or TrueMoney as third-party payment providers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">7. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of the Kingdom of Cambodia. Any dispute
                  arising from use of GameTopUpKH will first be handled directly with our support
                  team via Telegram.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">8. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these terms at any time. Continued use of our services after a
                  change means you accept the updated terms.
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
