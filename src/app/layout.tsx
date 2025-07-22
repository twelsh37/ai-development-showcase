// new layout.tsx file

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "AI-Driven Development Showcase | Asset Management System",
  description:
    "A comprehensive showcase of how generative AI transformed the development of a complete asset management system using Cursor IDE and modern web technologies.",
  keywords:
    "AI development, generative AI, Cursor IDE, Next.js, TypeScript, asset management, software development",
  openGraph: {
    title: "AI-Driven Development Showcase",
    description:
      "See how AI transformed software development with a complete asset management system",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
