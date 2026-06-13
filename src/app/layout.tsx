import type { Metadata } from "next";
import "./globals.css";
import { playfair, dmSans } from "@/fonts/fonts";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://zephex.in"),
  title: {
    default: "zephex — Full-Stack Developer & Security Enthusiast",
    template: "%s | zephex",
  },
  description:
    "Hey, I'm zephex. I build fast, secure, well-designed web things, CLI tools, and open-source projects. B.Tech CSE (Cyber Security).",
  keywords: [
    "zephex",
    "full-stack developer",
    "cyber security",
    "open source",
    "web development",
    "CLI tools",
    "Go",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "zephex" }],
  creator: "zephex",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zephex.in",
    siteName: "zephex",
    title: "zephex — Full-Stack Developer & Security Enthusiast",
    description:
      "Hey, I'm zephex. I build fast, secure, well-designed web things, CLI tools, and open-source projects.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "zephex's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "zephex — Full-Stack Developer & Security Enthusiast",
    description:
      "Hey, I'm zephex. I build fast, secure, well-designed web things, CLI tools, and open-source projects.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <Analytics />
      <body className="antialiased font-sans" data-theme="editorial">
        {children}
      </body>
    </html>
  );
}
