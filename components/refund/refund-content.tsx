import { LegalPageShell } from "@/components/global/legal-page-shell";
import { LegalSection } from "@/components/global/legal-section";
import { RefundRailGrid } from "@/components/refund/refund-rail-grid";

export function RefundContent() {
  return (
    <LegalPageShell
      khmerStamp="គោលការណ៍សងប្រាក់វិញ"
      title="Refund Policy"
      subtitle="How refunds work for GameTopUpKH orders paid with ABA PAY, Wing, KHQR or TrueMoney."
      lastUpdated="August 2026"
    >
      <LegalSection title="General Policy">
        <p className="text-muted-foreground">
          Our products are digital and delivered directly to your game account. Once a top-up has
          landed on your Player ID, or a gift card code has been revealed, the sale is final — the
          same standard most digital top-up services in Cambodia follow, since in-game currency and
          revealed codes cannot be "returned."
        </p>
      </LegalSection>

      <LegalSection title="Eligible Refunds">
        <p className="text-muted-foreground">Refunds may be issued when:</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Payment was confirmed by ABA PAY, Wing, KHQR or TrueMoney but the UC or Diamonds never arrived due to an error on our end</li>
          <li>You were charged twice for the same order</li>
          <li>Your order was cancelled before we began processing it</li>
        </ul>
      </LegalSection>

      <LegalSection title="Non-Refundable Cases">
        <p className="text-muted-foreground">Refunds will NOT be issued for:</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>A wrong Player ID, Server (Global/Korea/Vietnam), or MLBB User ID(Server ID) entered at checkout</li>
          <li>Top-ups already delivered to the account you provided</li>
          <li>Gift card codes that have already been revealed or redeemed</li>
          <li>Change of mind after payment is confirmed</li>
          <li>Account bans or restrictions issued by the game publisher</li>
        </ul>
      </LegalSection>

      <LegalSection title="Refund Timing by Payment Method">
        <p className="-mt-1 text-muted-foreground">
          Once a refund is approved, it goes back the way it came. Typical timing by rail:
        </p>
        <RefundRailGrid />
        <p className="text-xs text-muted-foreground">
          These windows are typical, not guaranteed — your bank or wallet provider sets the final
          timing on their end.
        </p>
      </LegalSection>

      <LegalSection title="How to Request a Refund">
        <p className="text-muted-foreground">
          Message us on Telegram within 24 hours of your purchase — our fastest channel — with:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Your order reference number</li>
          <li>A screenshot of the payment (ABA PAY / Wing / KHQR / TrueMoney)</li>
          <li>The reason for your refund request</li>
        </ul>
        <p className="text-sm text-muted-foreground">We reply in Khmer or English, whichever you write in.</p>
      </LegalSection>

      <LegalSection title="Contact">
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
      </LegalSection>
    </LegalPageShell>
  );
}
