import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "./Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drifto",
  description: "Drifto - Drift it untill you risk it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
