import { LegalPageShell } from "@/components/global/legal-page-shell";
import { LegalSection } from "@/components/global/legal-section";

export function PrivacyContent() {
  return (
    <LegalPageShell
      khmerStamp="គោលការណ៍ភាពឯកជន"
      title="Privacy Policy"
      subtitle="What GameTopUpKH collects, and what we never touch."
      lastUpdated="August 2026"
    >
      <LegalSection title="Information We Collect">
        <p className="text-muted-foreground">We collect only what's needed to deliver your order:</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Game Player ID / User ID and Server (for top-up delivery)</li>
          <li>Email address (optional, for gift card code delivery)</li>
          <li>Telegram or WhatsApp handle, if you contact support through them</li>
          <li>Payment confirmation details from ABA PAY, Wing, KHQR or TrueMoney</li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p className="text-muted-foreground">Your information is used solely for:</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Processing and delivering your top-up or gift card order</li>
          <li>Providing support when you message us on Telegram or WhatsApp</li>
          <li>Sending order confirmations and, if requested, refund updates</li>
        </ul>
      </LegalSection>

      <LegalSection title="Data Security">
        <p className="text-muted-foreground">
          Payment is handled directly by ABA PAY, Wing, Bakong (KHQR) or TrueMoney — we never see or
          store your card number, bank login, or wallet PIN. We only receive confirmation that a
          payment was made.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p className="text-muted-foreground">
          We keep order records for support and dispute-handling purposes. We do not sell or share
          your personal information with third parties for marketing.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p className="text-muted-foreground">
          We use only the minimal cookies needed for the website to function. No advertising or
          tracking cookies are used.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
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
      </LegalSection>
    </LegalPageShell>
  );
}
