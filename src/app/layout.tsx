import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "./Wrapper";
import localfont from "next/font/local"

const inter = Inter({ subsets: ["latin"] });

const bionix = localfont({
  src: "../../public/fonts/Bionix.woff2",
  variable: "--font-bionix"
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
      <body className={inter.className + " " + bionix.variable}>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
