"use client";

import Image from "next/image";
import vintage_map from "@/public/vintage_map.png";

export default function Contact() {
    return (
        <section className="py-24 bg-[#fffaf5] relative">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Form Side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display text-cafe-brown mb-4">Ghé Thăm</h2>
                        <p className="text-cafe-brown/70 mb-10 font-body text-lg">
                            Hãy để lại thông tin để chúng tôi chuẩn bị cho bạn một chỗ ngồi tuyệt vời nhất.
                        </p>

                        <form className="space-y-8 bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-cafe-brown/10 relative">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#C84B31] -mt-2 -mr-2" />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#C84B31] -mb-2 -ml-2" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-bold text-cafe-brown mb-2 uppercase tracking-widest">Họ Tên</label>
                                    <input type="text" className="w-full bg-[#fffcf8] border-b-2 border-cafe-brown/20 p-3 focus:outline-none focus:border-[#C84B31] transition-colors font-display text-xl" placeholder="Nguyễn Văn A" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-cafe-brown mb-2 uppercase tracking-widest">Số Điện Thoại</label>
                                    <input type="tel" className="w-full bg-[#fffcf8] border-b-2 border-cafe-brown/20 p-3 focus:outline-none focus:border-[#C84B31] transition-colors font-display text-xl" placeholder="09xxxxxxx" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-bold text-cafe-brown mb-2 uppercase tracking-widest">Ngày Giờ</label>
                                    <input type="datetime-local" className="w-full bg-[#fffcf8] border-b-2 border-cafe-brown/20 p-3 focus:outline-none focus:border-[#C84B31] transition-colors font-body" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-cafe-brown mb-2 uppercase tracking-widest">Số Người</label>
                                    <select className="w-full bg-[#fffcf8] border-b-2 border-cafe-brown/20 p-3 focus:outline-none focus:border-[#C84B31] transition-colors font-display text-xl">
                                        <option>2 Người</option>
                                        <option>4 Người</option>
                                        <option>6+ Người</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-cafe-brown mb-2 uppercase tracking-widest">Ghi Chú</label>
                                <textarea rows={3} className="w-full bg-[#fffcf8] border-b-2 border-cafe-brown/20 p-3 focus:outline-none focus:border-[#C84B31] transition-colors resize-none font-body text-lg" placeholder="Lời nhắn..." />
                            </div>

                            <button type="submit" className="w-full bg-cafe-brown text-[#F5F1E8] font-bold py-5 rounded-sm hover:bg-[#C84B31] transition-colors tracking-[0.2em] uppercase text-sm mt-4 hover:cursor-pointer shadow-lg hover:shadow-xl">
                                Xác Nhận Đặt Bàn
                            </button>
                        </form>
                    </div>

                    {/* Map Side */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] bg-[#EADBC8] p-4 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
                        <div className="relative h-full w-full border border-cafe-brown/20">
                            <Image
                                src={vintage_map}
                                alt="Bản đồ quán cafe"
                                fill
                                className="object-cover sepia-[0.3] contrast-125 saturate-50 p-2 border-2 border-cafe-brown/10 bg-white"
                            />
                            <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
