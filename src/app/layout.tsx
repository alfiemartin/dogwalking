import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunters dog walking",
  description: "dog walking in sheffiield",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Header />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
