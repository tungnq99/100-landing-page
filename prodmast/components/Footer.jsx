'use client';

export default function Footer() {
    return (
        <footer className="bg-[#142F32] text-white py-16 border-t border-white/5 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-accent-lime flex items-center justify-center">
                            <span className="text-primary-dark font-bold text-lg">P</span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Prodmast</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Empowering manufacturers with next-gen technology for a smarter, more efficient future.
                    </p>
                </div>

                {[
                    { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Docs'] },
                    { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact', 'Partners'] },
                    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookies'] }
                ].map((col, i) => (
                    <div key={i}>
                        <h4 className="font-bold mb-6 text-white">{col.title}</h4>
                        <ul className="space-y-3">
                            {col.links.map(link => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 text-sm hover:text-accent-lime transition-colors block">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <span>&copy; 2026 Prodmast Inc. All rights reserved.</span>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
}
