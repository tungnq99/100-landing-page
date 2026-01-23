import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-jakarta',
    display: 'swap',
});

export const metadata = {
    title: 'Devnote - AI Powered Code Plugin',
    description: 'Help your daily coding with AI powered code plugin.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={jakarta.variable} suppressHydrationWarning>
            <body className="font-sans antialiased text-text-main bg-white selection:bg-primary-accent selection:text-white">
                {children}
            </body>
        </html>
    );
}
