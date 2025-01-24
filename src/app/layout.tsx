import type { Metadata } from "next";
import "./globals.css";
import { kanit } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Sumit's Portfolio",
  description: "The official portfolio of Sumit Kumar.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lg:cursor-none">
      <body className={`${kanit.className} antialiased `} data-theme="dark">
        {children}
      </body>
    </html>
  );
}
