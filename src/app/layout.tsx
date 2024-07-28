import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
const inter = Merriweather({ subsets: ["latin"], weight:  ["700" ] });

export const metadata: Metadata = {
  title: "Study Abroad Information",
  description: "Find information about studying abroad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen bg-gradient-to-t from-cyan-500  to-pink-500 text-black-500 text-white">
        <Navbar/>
        {children}
      </div>  
        </body>
    </html>
  );
}
