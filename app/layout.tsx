import Providers from "./providers";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto px-6 py-4 flex gap-6">
            <Link
              href="/launches"
              className="hover:text-white text-zinc-400 transition"
            >
              Launches
            </Link>

            <Link
              href="/favorites"
              className="hover:text-white text-zinc-400 transition"
            >
              Favorites
            </Link>
          </div>
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}