import type { Metadata } from "next";
import "./globals.css";
import { playfair, inter } from "@/fonts/fonts";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "zephex's Portfolio",
  description: "The official portfolio of zephex.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <Analytics />
      <body className="antialiased font-sans" data-theme="editorial">
        {children}
      </body>
    </html>
  );
}
