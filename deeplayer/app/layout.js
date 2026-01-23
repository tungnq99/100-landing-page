import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
    title: 'Deeplayer - Scalable Blockchain Design',
    description: 'Design and deploy scalable blockchains in weeks.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans antialiased text-text-jungle bg-white relative overflow-x-hidden`} suppressHydrationWarning>
                {/* Background Gradient Blob */}
                <div className="fixed bottom-0 left-[-10%] w-[500px] h-[500px] bg-highlight-lime/40 blur-[120px] rounded-full pointer-events-none z-0"></div>
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
