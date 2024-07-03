import { Mulish, Space_Grotesk, Sofia } from "next/font/google";

export const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const space_grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const sofia = Sofia({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sofia",
});
