"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import coffee_beans_bag from "@/public/coffee_beans_bag.png";
import cold_brew_glass from "@/public/cold_brew_glass.png";
import pour_over_brewing from "@/public/pour_over_brewing.png";
import { StaticImageData } from "next/image";

interface Product {
    id: number;
    name: string;
    price: string;
    image: StaticImageData;
    tag: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Artisan Dark Roast",
        price: "250.000₫",
        image: coffee_beans_bag,
        tag: "Best Seller",
    },
    {
        id: 2,
        name: "Signature Cold Brew",
        price: "65.000₫",
        image: cold_brew_glass,
        tag: "New Arrival",
    },
    {
        id: 3,
        name: "V60 Brewing Kit",
        price: "850.000₫",
        image: pour_over_brewing,
        tag: "Equipment",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-cafe-cream py-24 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#EADBC8] rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#C84B31] font-bold tracking-widest uppercase text-sm"
                    >
                        Menu Nổi Bật
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display text-cafe-brown mt-2"
                    >
                        Lựa Chọn Của Chuyên Gia
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-[#C84B31] mx-auto mt-6"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#fffaf0] rounded-xl overflow-hidden shadow-lg border border-[#eaddcf] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-cafe-brown text-[#F5F1E8] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    {product.tag}
                                </div>
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-display font-bold text-cafe-brown mb-2 group-hover:text-[#C84B31] transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-[#C84B31] font-bold text-lg mb-6">{product.price}</p>
                                <button className="flex items-center justify-center gap-2 w-full py-3 border-2 border-cafe-brown text-cafe-brown font-bold rounded-lg hover:bg-cafe-brown hover:text-[#F5F1E8] transition-all cursor-pointer group-hover:shadow-lg">
                                    <ShoppingBag size={18} />
                                    Thêm vào giỏ
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
