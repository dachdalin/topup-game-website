import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gamepad2, Sparkles, Gift } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="stamp mx-auto mb-6 w-fit border-accent text-accent">
            ទូទាត់លឿន · instant top-up
          </span>
          <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Top up fast.
            <br />
            <span className="text-primary">Paid the way Cambodia pays.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            PUBG Mobile UC and MLBB Diamonds, checked out with ABA PAY, Wing, KHQR or
            TrueMoney. No login required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90 sm:w-auto"
            >
              <Link href="/pubg">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Top Up PUBG
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-accent text-accent transition-transform hover:scale-105 hover:bg-accent/10 sm:w-auto bg-transparent"
            >
              <Link href="/mlbb">
                <Sparkles className="mr-2 h-5 w-5" />
                Top Up MLBB
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full transition-transform hover:scale-105 sm:w-auto"
            >
              <Link href="/gift-cards">
                <Gift className="mr-2 h-5 w-5" />
                Buy Gift Cards
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
