import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/provider";
import { Bricolage_Grotesque } from 'next/font/google'


const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "nexttoyou",
  description: "Search nearby hostels and pgs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
