import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});
const generalSans = localFont({
  src: [{ path: "../public/fonts/GeneralSans-Variable.ttf", style: "normal" }],
  variable: "--font-general-sans",
});
export const metadata: Metadata = {
  title: "Anirban",
  description: "Generated by create next app",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${generalSans.variable} antialiased bg-background`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
