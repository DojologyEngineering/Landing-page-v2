import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Russo_One, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import CollaborateModal from "../components/CollaborateModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dojology Tech & Ventures",
  description: "Building technology for startups and SMEs through flexible equity, revenue share, and cashflow partnerships. No massive upfront costs, just pure growth.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${russoOne.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <CollaborateModal />
      </body>
    </html>
  );
}
