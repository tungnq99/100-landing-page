"use client";

import { Container } from "@/components/ui/Container";
import { Check, X } from "lucide-react";

const features = [
    { name: "Zero-knowledge Encryption", vaultic: true, traditional: true },
    { name: "First-class CLI Support", vaultic: true, traditional: false },
    { name: "Self-Hosting Option", vaultic: true, traditional: false },
    { name: "Environment Injection", vaultic: true, traditional: false },
    { name: "Open Vault Format", vaultic: true, traditional: false },
    { name: "Transparent Pricing", vaultic: true, traditional: "Usually Per-Seat" },
];

export function ComparisonTable() {
    return (
        <section className="py-24 bg-white/5 border-y border-white/5">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Why developers adhere to Vaultic</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-6 text-left text-gray-400 font-medium w-1/2">Feature</th>
                                <th className="p-6 text-center text-primary font-bold text-xl w-1/4 bg-white/5 rounded-t-xl">Vaultic</th>
                                <th className="p-6 text-center text-gray-500 font-medium w-1/4">Others</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row, idx) => (
                                <tr key={row.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-gray-300 font-medium">{row.name}</td>
                                    <td className="p-6 text-center bg-white/5">
                                        <div className="flex justify-center">
                                            {row.vaultic === true ? (
                                                <div className="bg-primary/20 rounded-full p-1"><Check className="w-5 h-5 text-primary" /></div>
                                            ) : (
                                                <span className="text-white">{row.vaultic}</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <div className="flex justify-center">
                                            {row.traditional === true ? (
                                                <Check className="w-5 h-5 text-gray-500" />
                                            ) : row.traditional === false ? (
                                                <X className="w-5 h-5 text-gray-600" />
                                            ) : (
                                                <span className="text-gray-600 text-sm">{row.traditional}</span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
    );
}
