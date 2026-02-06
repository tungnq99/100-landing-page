import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import GSAPProvider from '../components/GSAPProvider';
import Navbar from '../components/Navbar';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: 'VELOCITY X | Beyond Speed',
  description: 'The future of high-performance cycling.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0a0a0a]">
      <body className={`${rajdhani.variable} font-sans antialiased bg-[#0a0a0a] text-white overflow-x-hidden`}>
        <GSAPProvider>
          <Navbar />
          {children}
        </GSAPProvider>
      </body>
    </html>
  );
}
