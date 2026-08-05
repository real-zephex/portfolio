import { Fraunces, Newsreader, IBM_Plex_Mono } from "next/font/google";

// Fraunces — warm, characterful editorial serif with SOFT/WONK optical axes
export const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

// Newsreader — refined reading serif with optical sizing
export const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

// IBM Plex Mono — for bylines, folios, and small-caps labels
export const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
