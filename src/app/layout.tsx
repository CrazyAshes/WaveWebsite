import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "WAVE — Explore the Future of Blue",
  description:
    "WAVE Shark Series underwater drones deliver immersive ocean exploration and aquaculture pollution monitoring. Explore the Future of Blue.",
  keywords: [
    "underwater drone",
    "autonomous underwater vehicle",
    "AUV",
    "ocean exploration",
    "marine research",
    "deep sea",
    "WAVE",
    "Shark Series",
  ],
  authors: [{ name: "WAVE Technologies" }],
  openGraph: {
    title: "WAVE — Autonomous Underwater Exploration Systems",
    description:
      "Next-generation autonomous underwater drones pushing the boundaries of deep-sea exploration.",
    type: "website",
    locale: "en_US",
    siteName: "WAVE",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "WAVE — Autonomous Underwater Exploration Systems",
    description:
      "Next-generation autonomous underwater drones pushing the boundaries of deep-sea exploration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WAVE Technologies",
              description:
                "Autonomous underwater exploration systems for deep-sea research and ocean conservation.",
              url: SITE_URL,
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
