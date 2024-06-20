import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Up-to-code",
  description: "Create your websit with up-to-code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className + " bg-base-100"}>
        <NavBar />
        <main className="min-h-screen max-w-5xl m-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// night
// light