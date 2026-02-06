import React from 'react';

const Reservation: React.FC = () => {
    return (
        <div className="w-full min-h-screen p-4 flex items-center justify-center">
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 h-full lg:h-[85vh]">

                {/* Left Image Block */}
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 h-[400px] lg:h-full group">
                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                        alt="Wine Glass"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-12 left-10">
                        <h2 className="font-serif text-6xl lg:text-7xl text-gold-100 leading-tight">
                            BOOK <br />
                            A TABLE
                        </h2>
                    </div>
                </div>

                {/* Right Form Block */}
                <div className="bg-dark-900 rounded-[2.5rem] border border-white/5 p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">

                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                        <svg width="200" height="200" viewBox="0 0 100 100" className="stroke-gold-100 fill-none">
                            <circle cx="50" cy="50" r="40" strokeWidth="1" />
                            <path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="0.5" />
                        </svg>
                    </div>

                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 text-stone-500 mb-4">
                            <span className="h-[1px] w-8 bg-stone-700"></span>
                            <span className="uppercase tracking-widest text-xs">Reservation</span>
                            <span className="h-[1px] w-8 bg-stone-700"></span>
                        </div>
                        <p className="text-stone-400 text-sm max-w-md mx-auto">
                            Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold ml-2">Name</label>
                                <input type="text" placeholder="Jane Smith" className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-gold-100 placeholder-stone-600 focus:outline-none focus:border-gold-500 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold ml-2">Email</label>
                                <input type="email" placeholder="example@qitchen.com" className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-gold-100 placeholder-stone-600 focus:outline-none focus:border-gold-500 transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold ml-2">Phone Number</label>
                                <input type="tel" placeholder="+1 234 567 890" className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-gold-100 placeholder-stone-600 focus:outline-none focus:border-gold-500 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold ml-2">People</label>
                                <select className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-gold-100 focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer">
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5+ People</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold ml-2">Date</label>
                                <input type="date" className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-gold-100 placeholder-stone-600 focus:outline-none focus:border-gold-500 transition-colors [color-scheme:dark]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold ml-2">Time</label>
                                <input type="time" className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-gold-100 placeholder-stone-600 focus:outline-none focus:border-gold-500 transition-colors [color-scheme:dark]" />
                            </div>
                        </div>

                        <button type="button" className="w-full bg-gold-200 text-dark-950 font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors mt-4">
                            Make Reservation
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Reservation;