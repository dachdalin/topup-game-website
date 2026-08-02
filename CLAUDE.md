# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js (App Router) marketing/storefront site for a game top-up service (PUBG Mobile UC, Mobile Legends Diamonds, and gift cards for Google Play/Apple/Steam/Garena/PlayStation). There is no backend, database, or payment integration — every "purchase" flow is a client-side simulated checkout (`setTimeout` fakes payment processing, then shows a static success screen). Treat any product/payment data in page files as hardcoded mock data, not a real API contract.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml`).

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server at http://localhost:3000
pnpm build         # production build
pnpm start         # run production build
pnpm lint          # eslint .
```

There are no tests in this repo, and no ESLint config file or `eslint` devDependency currently exists, so `pnpm lint` will not run as-is — check for a config before relying on it.

## Architecture

- **Routing**: Next.js App Router under `app/`. Each top-level route is a single-file page (`app/pubg/page.tsx`, `app/mlbb/page.tsx`, `app/gift-cards/page.tsx`, `app/how-it-works/page.tsx`, `app/contact/page.tsx`, plus static legal pages `privacy`, `refund`, `terms`). There is no route grouping, no nested layouts beyond the root, and no API routes.
- **Page pattern**: The three purchase pages (`pubg`, `mlbb`, `gift-cards`) are `"use client"` components that all follow the same shape:
  - Local `useState` for form fields (player/user ID, server, selected package, payment method) and a `step` state machine (`"select" | "payment" | "success"`, gift-cards has an extra step for delivery method).
  - Hardcoded package/pricing arrays and a hardcoded `paymentMethods` array (`ewallet`, `bank`, `crypto`) defined at module scope.
  - `handleConfirmPayment` fakes async work via `setTimeout` and flips `step` to `"success"`; there is no real payment or delivery integration.
  - Shared page shell: `<Header />` + `<main>` + `<Footer />`, content inside `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
  - Support links point to hardcoded Telegram (`t.me/gametopup`) / WhatsApp (`wa.me/1234567890`) numbers.
  - When adding a new top-up product or gift card flow, follow this existing pattern rather than introducing a new form abstraction.
- **Global layout**: `app/layout.tsx` sets metadata (title/description/icons), loads Geist/Geist Mono fonts, and mounts `@vercel/analytics`. `Header`/`Footer` are not part of the root layout — each page includes them itself.
- **Components** (`components/`):
  - `header.tsx`, `footer.tsx`, `theme-provider.tsx` are app-specific.
  - `components/ui/` is the shadcn/ui component set (New York style, Radix-based, configured via `components.json`). Treat these as generated/library code — prefer composing them over hand-editing, and use the shadcn CLI to add new primitives rather than hand-rolling.
- **Styling**: Tailwind CSS v4 (see `postcss.config.mjs` using `@tailwindcss/postcss`). Theme tokens (`primary`, `accent`, `card`, `border`, `muted-foreground`, `success`, etc.) are CSS variables consumed via Tailwind utility classes — reuse existing tokens/gradient patterns (`bg-gradient-to-r from-primary to-accent`) instead of introducing new colors. Global styles live in `app/globals.css` (shadcn config also references `styles/globals.css`; check which is actually imported before editing).
- **Path alias**: `@/*` maps to the repo root (`tsconfig.json`), matching the shadcn aliases in `components.json` (`@/components`, `@/lib`, `@/hooks`, `@/components/ui`).
- **Next config** (`next.config.mjs`): `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` — type errors will not fail `pnpm build`, and `next/image` optimization is disabled.
- **Icons**: `lucide-react` throughout; shadcn is configured with `iconLibrary: "lucide"`.
