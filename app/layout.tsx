import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Enayat - Mobile App Engineer & Flutter Developer",
  description: "Software Engineer with 4+ years building high-performance, scalable mobile applications. Specialized in Flutter, Android, iOS, and AI/ML integration.",
  keywords: "Flutter Developer, Mobile App Developer, Android Developer, iOS Developer, Software Engineer, App Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorFollower />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

