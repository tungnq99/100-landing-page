import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const interDisplay = Inter({ subsets: ["latin"], weight: ["800", "900"], variable: "--font-heading" }); // Mocking Display with Heavy Inter

export const metadata: Metadata = {
    title: "Vaultic - Password Manager for Developers",
    description: "Secure logins. In a single click. A modern password manager built for developers.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} ${interDisplay.variable} font-body bg-background text-primary-foreground antialiased selection:bg-primary/30 selection:text-white`}>
                <Header />
                <main className="min-h-screen flex flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
