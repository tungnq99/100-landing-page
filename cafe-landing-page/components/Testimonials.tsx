"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Review {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Minh Quân",
        role: "Art Director",
        content: "Không gian ở đây mang lại cảm giác hoài niệm khó tả. Cà phê rang mộc giữ được vị chua thanh tinh tế, hậu vị ngọt sâu. Một nơi tuyệt vời để trốn khỏi sự ồn ào của phố thị.",
        rating: 5,
    },
    {
        id: 2,
        name: "Lan Anh",
        role: "Writer",
        content: "Góc quán quen thuộc mỗi cuối tuần của mình. Cold Brew ủ lạnh 24h thực sự là một trải nghiệm khác biệt, mượt mà và thơm nồng nàn hương hoa quả.",
        rating: 5,
    },
    {
        id: 3,
        name: "Tuấn Hưng",
        role: "Barista",
        content: "Là một người trong nghề, mình đánh giá cao sự chỉn chu từ khâu chọn hạt đến kỹ thuật pha chế pour-over ở đây. Máy rang Probat cổ điển không chỉ để trưng bày mà thực sự tạo nên chất lượng.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-cafe-brown text-[#F5F1E8] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#C84B31] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#EADBC8] rounded-full mix-blend-overlay filter blur-[100px] opacity-10" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block p-4 rounded-full border border-[#C84B31] mb-6"
                    >
                        <Quote size={32} className="text-[#C84B31]" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display text-[#EADBC8] mb-4"
                    >
                        Tri Kỷ Nói Về Hãng
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#2C1810]/50 backdrop-blur-sm border border-[#EADBC8]/10 p-8 rounded-xl relative group hover:border-[#C84B31]/50 transition-colors duration-300"
                        >
                            <div className="flex gap-1 mb-4 text-[#C84B31]">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-[#F5F1E8]/90 font-body mb-6 italic leading-relaxed">
                                "{review.content}"
                            </p>
                            <div className="flex items-center gap-4 border-t border-[#EADBC8]/10 pt-4">
                                <div className="w-10 h-10 rounded-full bg-[#EADBC8] flex items-center justify-center text-cafe-brown font-bold text-xl font-display">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#EADBC8]">{review.name}</h4>
                                    <span className="text-sm text-[#EADBC8]/60">{review.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
