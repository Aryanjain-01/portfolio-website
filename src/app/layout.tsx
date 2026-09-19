import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Jain — Software Engineer | Financial Systems & AI",
  description: "Portfolio of Aryan Jain, a Software Engineer focused on Financial Systems, Algorithmic Trading, and AI.",
  openGraph: {
    title: "Aryan Jain — Software Engineer | Financial Systems & AI",
    description: "Portfolio of Aryan Jain, a Software Engineer focused on Financial Systems, Algorithmic Trading, and AI.",
    url: "https://aryanjain.dev",
    siteName: "Aryan Jain Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed]">
        <div className="fixed inset-0 z-[-1] bg-noise pointer-events-none"></div>
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
