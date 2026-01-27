import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RefundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-foreground">Refund Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground">General Policy</h2>
              <p>
                Due to the digital nature of our products, all sales are final once the top-up has been successfully delivered to your account or the gift card code has been revealed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Eligible Refunds</h2>
              <p>
                Refunds may be issued in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Technical errors on our end that prevent delivery</li>
                <li>Duplicate charges for the same order</li>
                <li>Order cancellation before processing begins</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Non-Refundable Cases</h2>
              <p>
                Refunds will NOT be issued for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Incorrect Player ID entered by the customer</li>
                <li>Top-ups already delivered to the specified account</li>
                <li>Gift card codes that have been revealed</li>
                <li>Change of mind after purchase</li>
                <li>Account bans or restrictions by the game publisher</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">How to Request a Refund</h2>
              <p>
                To request a refund, please contact our support team within 24 hours of your purchase with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Order reference number</li>
                <li>Payment proof/screenshot</li>
                <li>Reason for refund request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Refund Processing</h2>
              <p>
                Approved refunds will be processed within 5-7 business days using the original payment method. Processing time may vary depending on your payment provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p>
                For refund inquiries, please contact us via Telegram or email at support@gametopup.com.
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
