import { ClientProviders } from "./ClientProviders";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mysten/dapp-kit/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Sui Dapp",
  description: "A Next.js app with Sui wallet integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
