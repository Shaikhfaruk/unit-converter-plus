import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unit Converter Plus - Free Online Conversion Tools",
  description:
    "Convert between different units of measurement including length, weight, temperature, and volume. Free, fast, and easy to use.",
  keywords:
    "unit converter, measurement converter, length converter, weight converter, temperature converter, volume converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
