import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { FaqList } from "@/components/global/faq-list";
import { StepsTimeline } from "@/components/how-it-works/steps-timeline";

const faqs = [
  {
    question: "How fast is the delivery?",
    answer:
      "Most top-ups are delivered within 5-10 minutes. Gift card codes are displayed instantly after payment.",
  },
  {
    question: "What if I entered wrong Player ID?",
    answer:
      "Please double-check your Player ID before payment. Contact our support immediately if you made a mistake.",
  },
  {
    question: "Is it safe to use?",
    answer: "Yes! We use official channels and secure payment methods. Your transactions are protected.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No account is required. Just enter your Player ID, pay, and receive your top-up instantly.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">How It Works</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Get your game top-up or gift card in just a few simple steps. No account required.
            </p>
          </div>

          <StepsTimeline />

          <div className="mt-20">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <FaqList items={faqs} columns={2} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
