import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { FaqList } from "@/components/global/faq-list";
import { ContactMethods } from "@/components/contact/contact-methods";
import { SupportHoursCard } from "@/components/contact/support-hours-card";

const commonIssues = [
  {
    question: "Top-up not received?",
    answer:
      "Most top-ups are delivered within 5-10 minutes. If you haven't received yours after 30 minutes, please contact us with your order details and payment proof.",
  },
  {
    question: "Entered wrong Player ID?",
    answer:
      "Contact us immediately before the top-up is processed. Unfortunately, if the top-up has already been delivered to the wrong account, we cannot reverse it.",
  },
  {
    question: "Payment failed?",
    answer:
      "If your payment was deducted but the order wasn't placed, please wait 24 hours for automatic refund. If the issue persists, contact us with your payment screenshot.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Contact & Support</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Need help? Our support team is available 24/7 to assist you.
            </p>
          </div>

          <ContactMethods />
          <SupportHoursCard />

          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">Common Issues</h2>
            <FaqList items={commonIssues} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
