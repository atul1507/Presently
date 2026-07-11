import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";

import Background from "@/components/background/Background";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Presently",
  description: "Presently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} font-sans min-h-screen antialiased`}
      >
        <Background />

        {children}
      </body>
    </html>
  );
}