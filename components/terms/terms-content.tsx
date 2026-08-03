import { LegalPageShell } from "@/components/global/legal-page-shell";
import { LegalSection } from "@/components/global/legal-section";

export function TermsContent() {
  return (
    <LegalPageShell
      khmerStamp="លក្ខខណ្ឌប្រើប្រាស់"
      title="Terms & Conditions"
      subtitle="The rules for buying UC, Diamonds and gift cards through GameTopUpKH."
      lastUpdated="August 2026"
    >
      <LegalSection title="1. Acceptance of Terms">
        <p className="text-muted-foreground">
          By using GameTopUpKH, you agree to these terms and conditions. If you do not agree, please
          do not use our services.
        </p>
      </LegalSection>

      <LegalSection title="2. Services">
        <p className="text-muted-foreground">
          GameTopUpKH provides game top-up services for PUBG Mobile UC and Mobile Legends Diamonds,
          as well as digital gift cards (Google Play, Apple App Store, Steam, Garena, PlayStation).
          All transactions are final once the top-up has been delivered or a gift card code has been
          revealed.
        </p>
      </LegalSection>

      <LegalSection title="3. User Responsibilities">
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>You must enter an accurate Player ID and Server (PUBG), or User ID and Server ID (MLBB), before paying.</li>
          <li>You are responsible for verifying these details — orders cannot be redirected once delivered.</li>
          <li>You must be of legal age to make purchases under the laws of your jurisdiction.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Payments">
        <p className="text-muted-foreground">
          All prices are displayed in USD. We accept ABA PAY, Wing, KHQR (Bakong) and TrueMoney.
          Payment must be confirmed by the provider before your top-up is processed — we do not
          extend credit or accept "pay later" orders.
        </p>
      </LegalSection>

      <LegalSection title="5. Delivery">
        <p className="text-muted-foreground">
          Top-ups are typically delivered within 5–10 minutes of payment confirmation. Gift card
          codes are shown immediately after payment. If your order is delayed, message us on
          Telegram with your order reference.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation of Liability">
        <p className="text-muted-foreground">
          GameTopUpKH is not responsible for issues arising from an incorrect Player ID, User ID or
          Server, game server outages, or errors on the part of ABA PAY, Wing, Bakong or TrueMoney as
          third-party payment providers.
        </p>
      </LegalSection>

      <LegalSection title="7. Governing Law">
        <p className="text-muted-foreground">
          These terms are governed by the laws of the Kingdom of Cambodia. Any dispute arising from
          use of GameTopUpKH will first be handled directly with our support team via Telegram.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to Terms">
        <p className="text-muted-foreground">
          We may update these terms at any time. Continued use of our services after a change means
          you accept the updated terms.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
