# Top-Up Game Website

This is a web application for a game top-up service, built using the Next.js framework.

## Project Structure

```
/topup-game-website/
├───.gitignore
├───components.json
├───next.config.mjs
├───package.json
├───pnpm-lock.yaml
├───postcss.config.mjs
├───tsconfig.json
├───app/
│   ├───globals.css
│   ├───layout.tsx
│   ├───page.tsx
│   └───... (route pages)
├───components/
│   ├───footer.tsx
│   ├───header.tsx
│   ├───theme-provider.tsx
│   └───ui/
│       └───... (shadcn/ui components)
├───hooks/
│   ├───use-mobile.ts
│   └───use-toast.ts
├───lib/
│   └───utils.ts
└───public/
    └───... (static assets)
```

## Technologies Used

*   **Framework**: [Next.js](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **UI Library**: [React](https://react.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library**: [shadcn/ui](https://ui.shadcn.com/)
*   **Package Manager**: [pnpm](https://pnpm.io/)

## How to Install

1.  **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/en) (v20 or later) and [pnpm](https://pnpm.io/installation) installed.

2.  **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    ```

3.  **Navigate to the project directory**:
    ```bash
    cd topup-game-website
    ```

4.  **Install dependencies**:
    ```bash
    pnpm install
    ```

5.  **Run the development server**:
    ```bash
    pnpm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
