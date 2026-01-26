"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import story_roaster from "@/public/story_roaster.png";

export default function Story() {
    return (
        <section className="py-24 bg-[#EADBC8] overflow-hidden relative">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] w-full transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
                            <Image
                                src={story_roaster}
                                alt="Máy rang xay cà phê cổ điển"
                                fill
                                className="object-cover rounded-sm sepia-[0.3] shadow-2xl"
                            />
                            {/* Vintage Frame Effect */}
                            <div className="absolute inset-0 border-[12px] border-white/90 rounded-sm shadow-inner pointer-events-none" />
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#C84B31] -z-10 rounded-sm" />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <span className="block text-[#C84B31] font-bold tracking-widest uppercase text-sm mb-4">Câu Chuyện Thương Hiệu</span>
                        <h2 className="text-4xl md:text-5xl font-display text-cafe-brown mb-8 leading-tight">
                            Di Sản Từ <span className="text-[#C84B31] border-b-4 border-[#C84B31]/30">1985</span>
                        </h2>
                        <p className="text-lg text-cafe-brown/80 font-bold mb-6 leading-relaxed">
                            Chúng tôi không chỉ pha chế cà phê, chúng tôi kể lại câu chuyện của thời gian. Mỗi hạt cà phê được tuyển chọn từ những vùng đất đỏ bazan huyền thoại, rang xay thủ công bằng chiếc máy rang Probat cổ điển để giữ trọn hương vị nguyên bản.
                        </p>
                        <p className="text-lg text-cafe-brown/80 mb-10 leading-relaxed italic">
                            "Trong không gian đượm màu ký ức, tiếng máy xay rầm rì hòa cùng hương thơm nồng nàn tạo nên một bản giao hưởng đánh thức mọi giác quan. Tại đây, cà phê là nghệ thuật, và bạn là tri kỷ."
                        </p>
                        <button className="inline-block px-8 py-3 bg-transparent border-2 border-[#C84B31] text-[#C84B31] font-bold text-lg rounded hover:bg-[#C84B31] hover:text-[#F5F1E8] transition-all duration-300">
                            Xem Thêm Về Chúng Tôi
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
