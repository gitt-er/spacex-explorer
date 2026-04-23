import Providers from "./providers";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <Providers>
          <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: "var(--border)", backgroundColor: "color-mix(in srgb, var(--surface) 92%, transparent)" }}>
            <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
              <div className="flex gap-6">
              <Link
                href="/launches"
                className="ui-muted transition hover:text-foreground"
              >
                Launches
              </Link>

              <Link
                href="/favorites"
                className="ui-muted transition hover:text-foreground"
              >
                Favorites
              </Link>
              </div>
              <ThemeToggle />
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}