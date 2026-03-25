import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProdMind | Know what to build next",
  description: "ProdMind analyzes user feedback and turns it into clear product decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pt-6 font-sans bg-paper text-primary overflow-x-hidden selection:bg-primary selection:text-paper">
        {children}
      </body>
    </html>
  );
}
