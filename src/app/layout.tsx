import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";

import "./globals.css";

import Background from "@/components/background/Background";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "Presently — Presentation Remote",
    template: "%s | Presently",
  },

  description:
    "Upload PowerPoint and PDF presentations. Control your presentation seamlessly from your phone using QR code or session code.",

  applicationName: "Presently",

  keywords: [
    "Presently",
    "Presentation Remote",
    "PowerPoint Remote",
    "PDF Remote",
    "Presentation Controller",
    "Presentation Software",
    "QR Presentation",
    "Remote Presentation",
  ],

  authors: [
    {
      name: "Presently",
    },
  ],

  creator: "Presently",

  publisher: "Presently",

  category: "Productivity",

  openGraph: {
    title: "Presently — Presentation Remote",

    description:
      "Upload presentations and control them seamlessly from your phone.",

    type: "website",

    siteName: "Presently",
  },

  twitter: {
    card: "summary_large_image",

    title: "Presently",

    description:
      "Upload presentations and control them from your phone.",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${sora.variable}
          font-sans
          relative
          min-h-screen
          overflow-x-hidden
          antialiased
        `}
      >
        {/* Global Background */}
        <Background />

        {/* Main Application */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}