import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/navbar';
import {Footer} from '@/components/footer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wagerwheel",
  description: "Landing Page of Wagerwheel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
