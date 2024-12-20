import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unit Converter Plus - Free Online Conversion Tools",
  description:
    "Convert between different units of measurement including length, weight, temperature, and volume. Free, fast, and easy to use.",
  keywords:
    "unit converter, measurement converter, length converter, weight converter, temperature converter, volume converter",
  verification: {
    google: "3ee1SL9ktKFw2VA5Drump0azDsNE77HgQtX1oXGHIpA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7596578471761023"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="3ee1SL9ktKFw2VA5Drump0azDsNE77HgQtX1oXGHIpA"
        />
        <meta name="google-adsense-account" content="ca-pub-7596578471761023" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
