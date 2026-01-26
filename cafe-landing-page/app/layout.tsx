import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; // Playfair Display & Lato
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Lato weights
});

export const metadata: Metadata = {
  title: "Quán Cafe Vintage | Hương Vị Truyền Thống",
  description: "Trải nghiệm cà phê đích thực cho người sành điệu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
