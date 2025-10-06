import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlassFilter } from "@/components/ui/liquid-glass";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeshX - Perpetual Futures for Memecoins",
  description: "Trade memecoin perpetuals on Solana with up to 20x leverage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <GlassFilter />
        {children}
      </body>
    </html>
  );
}
