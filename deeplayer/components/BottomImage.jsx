'use client';
import Image from 'next/image';

export default function BottomImage() {
    return (
        <section className="relative w-full flex justify-end pb-0 overflow-hidden h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
            {/* Placeholder for person working */}
            <div className="relative w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-700">
                {/* Using a placeholder since user didn't provide specific image asset yet, or I can use an abstract one */}
                <div className="w-full h-full bg-gray-100 rounded-tl-[100px] shadow-2xl border-l border-t border-white overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        [Person Working Image Placeholder]
                    </div>
                    {/* 
                  To actually show something nice, let's use a colored div with pattern 
                */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-90"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-20 left-10 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-xl border border-white max-w-[200px] z-20">
                    <div className="h-2 w-12 bg-primary-green rounded-full mb-2"></div>
                    <p className="text-xs text-text-jungle font-medium">Empowering developers globally.</p>
                </div>
            </div>
        </section>
    );
}
