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

const siteUrl = "https://portfolio-eta-rose-i4vh5pmjy6.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Grayson Iller · Product Design, Human Factors",
  description:
    "Design portfolio of Grayson Iller. Human factors training, three years on the Skydio controller, and VUE, a fashion feed designed in Figma and built solo.",
  keywords: [
    "Grayson Iller",
    "Product Designer",
    "Human Factors",
    "Skydio",
    "VUE",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Grayson Iller" }],
  openGraph: {
    title: "Grayson Iller · Product Design, Human Factors",
    description:
      "Design portfolio of Grayson Iller. Human factors training, three years on the Skydio controller, and VUE, a fashion feed designed in Figma and built solo.",
    url: siteUrl,
    siteName: "Grayson Iller",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Grayson Iller: product design and human factors portfolio.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grayson Iller · Product Design, Human Factors",
    description:
      "Design portfolio of Grayson Iller. Human factors training, three years on the Skydio controller, and VUE, a fashion feed designed in Figma and built solo.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
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
