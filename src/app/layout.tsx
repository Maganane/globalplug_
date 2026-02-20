import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import "./globals.css";
import BackgroundSlider from "@/components/BackgroundSlider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const kanit = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Plug | Smart NFC Products",
  description: "Engage at the speed of a tap. Global Plug embeds NFC technology into custom products for seamless, instant, and tangible connectivity.",
  keywords: "Smart, Seamless, Instant, Connectivity, Embedded, Interactive, Tangible, NFC, Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kanit.variable}`}>
        <BackgroundSlider />
        {children}
      </body>
    </html>
  );
}

