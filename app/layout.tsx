import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = "https://grayson-iller.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Grayson Iller · Design Engineer",
  description:
    "Design engineer working at the seam of product design and front-end systems. Human factors background, systems experience at Skydio, and VUE, a fashion drop platform designed and built solo.",
  keywords: [
    "Grayson Iller",
    "Design Engineer",
    "Product Designer",
    "Front-end Engineer",
    "Human Factors",
    "Skydio",
    "VUE",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Grayson Iller" }],
  openGraph: {
    title: "Grayson Iller · Design Engineer",
    description:
      "Design engineer at the seam of product design and front-end systems. Creator of VUE (vueniverse.com).",
    url: siteUrl,
    siteName: "Grayson Iller",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grayson Iller · Design Engineer",
    description:
      "Design engineer at the seam of product design and front-end systems. Creator of VUE.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="bg-aura font-sans antialiased">{children}</body>
    </html>
  );
}
