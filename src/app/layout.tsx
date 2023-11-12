import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans, Playfair_Display, Rubik } from "next/font/google";

const fontRegular = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-regular",
});

const fontSpecial = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-special",
});

export const metadata: Metadata = {
  title: "Ukiyo (浮世) - Japanese Fine Dining Restaurant",
  description:
    "Ukiyo (浮世) is a Japanese fine dining restaurant established in 2022. It is situated at the heart of Dhaka in Gulshan. It dedicates itself to serving memorable tastes with a strong conviction for authenticity. It prides itself in bringing the complete experience of Japanese food instead of being limited to only one or two categories.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${fontRegular.variable} ${fontSpecial.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
