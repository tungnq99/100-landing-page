import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="px-6 py-8 max-w-7xl mx-auto mt-10">
            <div className="bg-zinc-900 rounded-t-[45px] p-8 lg:p-14 text-white">

                {/* Top Navbar in Footer */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold font-space-grotesk italic text-white leading-none">Positivus</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-8 text-lg underline">
                        <Link href="#about">About us</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#use-cases">Use Cases</Link>
                        <Link href="#pricing">Pricing</Link>
                        <Link href="#blog">Blog</Link>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                            <Linkedin size={18} />
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                            <Facebook size={18} />
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                            <Twitter size={18} />
                        </div>
                    </div>
                </div>

                {/* Contact & Subscribe */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-20 border-b border-gray-700 pb-12 mb-12">
                    <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
                        <h4 className="text-black bg-lime-300 px-2 rounded-md inline-block text-xl font-medium">Contact us:</h4>
                        <div className="text-lg space-y-2">
                            <p>Email: info@positivus.com</p>
                            <p>Phone: 555-567-8901</p>
                            <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
                        </div>
                    </div>

                    <div className="bg-zinc-800 rounded-2xl p-10 flex flex-col lg:flex-row gap-4 items-center w-full lg:w-auto">
                        <input type="email" placeholder="Email" className="px-6 py-4 bg-zinc-800 border border-white rounded-2xl text-white placeholder-gray-400 outline-none w-full lg:w-64" />
                        <button className="px-8 py-4 bg-lime-300 text-black rounded-2xl w-full lg:w-auto font-medium hover:bg-lime-400 transition-colors">
                            Subscribe to news
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col lg:flex-row gap-10 text-lg text-gray-400 items-center">
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <Link href="#" className="underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
