import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-foreground">Terms & Conditions</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By using GameTopUp, you agree to these terms and conditions. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Services</h2>
              <p>
                GameTopUp provides game top-up services for PUBG Mobile and Mobile Legends, as well as digital gift cards. All transactions are final once the top-up has been delivered.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate Player ID information.</li>
                <li>You are responsible for verifying your Player ID before payment.</li>
                <li>You must be of legal age to make purchases in your jurisdiction.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Payments</h2>
              <p>
                All prices are displayed in USD. We accept various payment methods including e-wallets, bank transfers, and cryptocurrency. Payment must be completed before the top-up is processed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Delivery</h2>
              <p>
                Top-ups are typically delivered within 5-10 minutes after payment confirmation. Gift card codes are displayed immediately after payment. In case of delays, please contact our support team.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
              <p>
                GameTopUp is not responsible for any issues arising from incorrect Player ID input, game server issues, or third-party payment processing errors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the updated terms.
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
