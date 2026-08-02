import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="stamp mb-4 w-fit border-accent text-accent">
            គោលការណ៍ភាពឯកជន
          </span>
          <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mb-8 text-muted-foreground">
            What GameTopUpKH collects, and what we never touch.
          </p>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect only what's needed to deliver your order:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Game Player ID / User ID and Server (for top-up delivery)</li>
                  <li>Email address (optional, for gift card code delivery)</li>
                  <li>Telegram or WhatsApp handle, if you contact support through them</li>
                  <li>Payment confirmation details from ABA PAY, Wing, KHQR or TrueMoney</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground">Your information is used solely for:</p>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Processing and delivering your top-up or gift card order</li>
                  <li>Providing support when you message us on Telegram or WhatsApp</li>
                  <li>Sending order confirmations and, if requested, refund updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Data Security</h2>
                <p className="text-muted-foreground">
                  Payment is handled directly by ABA PAY, Wing, Bakong (KHQR) or TrueMoney — we
                  never see or store your card number, bank login, or wallet PIN. We only receive
                  confirmation that a payment was made.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Data Retention</h2>
                <p className="text-muted-foreground">
                  We keep order records for support and dispute-handling purposes. We do not sell
                  or share your personal information with third parties for marketing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Cookies</h2>
                <p className="text-muted-foreground">
                  We use only the minimal cookies needed for the website to function. No
                  advertising or tracking cookies are used.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3 p-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  Questions about this policy? Reach us on{" "}
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
