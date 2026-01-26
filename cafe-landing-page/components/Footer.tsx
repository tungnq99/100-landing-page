export default function Footer() {
    return (
        <footer className="bg-cafe-brown text-[#EADBC8] py-20 border-t-4 border-[#C84B31]">
            <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                <div>
                    <h3 className="text-3xl font-display font-bold mb-8 text-[#F5F1E8]">Vintage Coffee</h3>
                    <p className="text-base leading-relaxed opacity-70 mb-8 font-body">
                        Nơi lưu giữ những giá trị nguyên bản của cà phê Việt. Một chốn đi về cho những tâm hồn đồng điệu giữa lòng thành phố.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        {/* Social Placeholders */}
                        <div className="w-10 h-10 rounded-full border border-[#EADBC8]/20 flex items-center justify-center hover:bg-[#C84B31] hover:border-[#C84B31] transition-all cursor-pointer">F</div>
                        <div className="w-10 h-10 rounded-full border border-[#EADBC8]/20 flex items-center justify-center hover:bg-[#C84B31] hover:border-[#C84B31] transition-all cursor-pointer">I</div>
                        <div className="w-10 h-10 rounded-full border border-[#EADBC8]/20 flex items-center justify-center hover:bg-[#C84B31] hover:border-[#C84B31] transition-all cursor-pointer">T</div>
                    </div>
                </div>

                <div className="md:pl-12">
                    <h4 className="font-bold text-[#F5F1E8] mb-8 uppercase tracking-[0.2em] text-xs">Liên Hệ</h4>
                    <ul className="space-y-6 opacity-80 font-body">
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-[#C84B31]">📍</span> 45 P. Hàng Bạc, Hoàn Kiếm, Hà Nội
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-[#C84B31]">📧</span> vintagecoffee@gmail.com
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="text-[#C84B31]">📞</span> 0987 654 321
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-[#F5F1E8] mb-8 uppercase tracking-[0.2em] text-xs">Giờ Mở Cửa</h4>
                    <ul className="space-y-4 opacity-80 font-body">
                        <li className="flex justify-between border-b border-[#EADBC8]/10 pb-2">
                            <span>Thứ 2 - Thứ 6</span>
                            <span>07:00 - 22:00</span>
                        </li>
                        <li className="flex justify-between border-b border-[#EADBC8]/10 pb-2">
                            <span>Thứ 7 - Chủ Nhật</span>
                            <span>08:00 - 23:00</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-20 pt-8 border-t border-[#EADBC8]/10 opacity-40 text-xs tracking-widest uppercase">
                &copy; 2026 Vintage Coffee. All rights reserved. Design by AntiGravity.
            </div>
        </footer>
    );
}
