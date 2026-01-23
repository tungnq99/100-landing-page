import { Manrope } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
});

export const metadata = {
    title: 'Prodmast - Future of Manufacturing',
    description: 'Prodmast Manufacturing SaaS Tech',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={manrope.variable} suppressHydrationWarning>
            <body className="font-sans antialiased text-secondary-dark bg-page-bg">
                {children}
            </body>
        </html>
    );
}
