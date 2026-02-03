"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Solo",
        price: { monthly: "$9", yearly: "$90" },
        description: "For individual developers",
        features: ["Unlimited passwords", "1 Device Sync", "CLI Access Basic", "Community Support"],
    },
    {
        name: "Team",
        price: { monthly: "$29", yearly: "$290" },
        description: "For small teams & startups",
        features: ["Everything in Solo", "Unlimited Devices", "Shared Vaults", "RBAC Permissions", "Priority Support"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: { monthly: "Custom", yearly: "Custom" },
        description: "For large organizations",
        features: ["Everything in Team", "SSO (SAML/OIDC)", "Audit Logs", "Self-hosting", "Dedicated Manager"],
    },
];

export function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-24" id="pricing">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Predictable Pricing</h2>

                    <div className="flex items-center justify-center gap-4">
                        <span className={cn("text-sm font-medium transition-colors", !isYearly ? "text-white" : "text-gray-500")}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 rounded-full bg-white/10 p-1 relative transition-colors hover:bg-white/20"
                        >
                            <div
                                className={cn(
                                    "w-6 h-6 rounded-full bg-primary transition-all duration-300",
                                    isYearly ? "translate-x-6" : "translate-x-0"
                                )}
                            />
                        </button>
                        <span className={cn("text-sm font-medium transition-colors", isYearly ? "text-white" : "text-gray-500")}>
                            Yearly <span className="text-primary text-xs ml-1">(Save ~20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "relative p-8 rounded-3xl border flex flex-col",
                                plan.popular
                                    ? "bg-white/5 border-primary shadow-[0_0_50px_-20px_rgba(107,237,185,0.3)] z-10 scale-105"
                                    : "bg-black border-white/10 opacity-80 hover:opacity-100 transition-opacity"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-bold text-white font-heading">
                                        {isYearly ? plan.price.yearly : plan.price.monthly}
                                    </span>
                                    {plan.price.monthly !== "Custom" && (
                                        <span className="text-gray-500">/{isYearly ? "yr" : "mo"}</span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-primary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button variant={plan.popular ? "primary" : "secondary"} className="w-full">
                                {plan.price.monthly === "Custom" ? "Contact Sales" : "Start Free Trial"}
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
