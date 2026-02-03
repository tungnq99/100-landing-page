import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
    Product: ["Features", "Security", "Pricing", "Changelog", "Docs"],
    Company: ["About", "Blog", "Careers", "Contact", "Partners"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Acceptable Use"],
    Social: ["Twitter", "GitHub", "LinkedIn", "Discord"],
};

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                    <div className="col-span-2">
                        <Logo />
                        <p className="mt-6 text-gray-400 max-w-sm">
                            Vaultic is the modern password manager designed for developers and technical teams.
                            Secure, fast, and CLI-first.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Product</h3>
                        <ul className="space-y-4">
                            {footerLinks.Product.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Company</h3>
                        <ul className="space-y-4">
                            {footerLinks.Company.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Connect</h3>
                        <ul className="space-y-4">
                            {footerLinks.Social.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Vaultic Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {footerLinks.Legal.map((item) => (
                            <Link key={item} href="#" className="text-gray-500 hover:text-white text-xs transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
