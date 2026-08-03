import type { ReactNode } from "react";
import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";

interface LegalPageShellProps {
  khmerStamp: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageShell({ khmerStamp, title, subtitle, lastUpdated, children }: LegalPageShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="stamp mb-4 w-fit border-accent text-accent">{khmerStamp}</span>
          <h1 className="mb-2 font-display text-3xl font-bold text-foreground">{title}</h1>
          <p className="mb-8 text-muted-foreground">{subtitle}</p>

          <div className="space-y-6">
            {children}
            <p className="pt-2 font-mono text-xs text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
