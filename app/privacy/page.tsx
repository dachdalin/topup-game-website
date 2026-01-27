import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-foreground">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
              <p>
                We collect minimal information necessary to process your orders:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Game Player IDs (for top-up delivery)</li>
                <li>Email addresses (optional, for gift card delivery)</li>
                <li>Payment transaction information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
              <p>
                Your information is used solely for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing and delivering your orders</li>
                <li>Providing customer support</li>
                <li>Sending order confirmations and receipts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information. Payment processing is handled by secure third-party providers, and we do not store your payment card details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Retention</h2>
              <p>
                We retain order information for customer support purposes and legal compliance. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
              <p>
                We use minimal cookies necessary for website functionality. No tracking cookies are used for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact us via Telegram or email at support@gametopup.com.
              </p>
            </section>

            <p className="mt-8 text-sm">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
