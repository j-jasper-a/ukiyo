import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

const regular = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-regular",
});

export const metadata: Metadata = {
  title: "Ukiyo (浮世) - Japanese Fine Dining Restaurant",
  description:
    "Ukiyo (浮世) is a Japanese fine dining restaurant established in 2022. It is situated at the heart of Dhaka in Gulshan. It dedicates itself to serving memorable tastes with a strong conviction for authenticity. It prides itself in bringing the complete experience of Japanese food instead of being limited to only one or two categories.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${regular.variable}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
