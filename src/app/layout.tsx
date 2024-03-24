import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Wrapper from "./components/Wrapper";
import localfont from "next/font/local"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const kobuzan = localfont({
  src: "../../public/fonts/Kobuzan.woff2",
  variable: "--font-kobuzan"
})

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
      <body className={kobuzan.className + " " + inter.variable}>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
