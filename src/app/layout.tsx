import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const geistSans = Urbanist({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Website CFDevs",
  description: "This is a modern web with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
