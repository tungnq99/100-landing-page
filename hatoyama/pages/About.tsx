import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen p-4 flex justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-4 h-full">

        {/* Top Left - Menu / About Nav */}
        <div className="lg:col-span-1 lg:row-span-2 relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-dark-900 h-[300px] lg:h-auto group">
          <img
            src="https://images.unsplash.com/photo-1542528180-a1208c5169a5?q=80&w=1000&auto=format&fit=crop"
            alt="Interior"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-10 left-10">
            <h2 className="font-serif text-6xl text-gold-100">ABOUT</h2>
          </div>
        </div>

        {/* Top Middle - Text Block */}
        <div className="lg:col-span-1 lg:row-span-1 bg-dark-900 rounded-[2.5rem] border border-white/5 p-8 flex flex-col justify-center">
          <h3 className="font-serif text-2xl text-gold-100 mb-4 leading-tight">SUSHI ARTISTRY <br /> REDEFINED</h3>
          <p className="text-stone-400 text-xs leading-relaxed">
            Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.
          </p>
        </div>

        {/* Top Right - Image */}
        <div className="lg:col-span-1 lg:row-span-1 relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-dark-900 h-[200px] lg:h-auto group">
          <img
            src="https://images.unsplash.com/photo-1481833761820-055e98f149e8?q=80&w=1000&auto=format&fit=crop"
            alt="Woman Eating"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Middle Row - Stats */}
        <div className="lg:col-span-2 lg:row-span-1 grid grid-cols-3 gap-4">
          {/* Stat 1 */}
          <div className="bg-dark-900 rounded-[2rem] border border-white/5 p-6 flex flex-col items-center justify-center text-center">
            <div className="flex gap-1 text-gold-400 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <span className="font-serif text-lg text-gold-100 uppercase tracking-widest mb-1">Trip</span>
            <span className="font-serif text-lg text-gold-100 uppercase tracking-widest mb-1">Advisor</span>
            <span className="text-[10px] text-stone-500 uppercase">Best Sushi</span>
          </div>
          {/* Stat 2 */}
          <div className="bg-dark-900 rounded-[2rem] border border-white/5 p-6 flex flex-col items-center justify-center text-center">
            <div className="flex gap-1 text-gold-400 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <span className="font-serif text-lg text-gold-100 uppercase tracking-widest mb-1">Michelin</span>
            <span className="font-serif text-lg text-gold-100 uppercase tracking-widest mb-1">Guide</span>
            <span className="text-[10px] text-stone-500 uppercase">Quality Food</span>
          </div>
          {/* Stat 3 */}
          <div className="bg-dark-900 rounded-[2rem] border border-white/5 p-6 flex flex-col items-center justify-center text-center">
            <div className="flex gap-1 text-gold-400 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <span className="font-serif text-lg text-gold-100 uppercase tracking-widest mb-1">Start</span>
            <span className="font-serif text-lg text-gold-100 uppercase tracking-widest mb-1">Dining</span>
            <span className="text-[10px] text-stone-500 uppercase">Cool Vibe</span>
          </div>
        </div>

        {/* Bottom Row - Story */}
        <div className="lg:col-span-3 lg:row-span-1 grid grid-cols-1 lg:grid-cols-2 bg-dark-900 rounded-[2.5rem] border border-white/5 overflow-hidden">
          {/* Left Image */}
          <div className="relative h-[200px] lg:h-full group">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000&auto=format&fit=crop"
              alt="Chefs"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Right Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center relative">
            <div className="flex items-center justify-center lg:justify-start gap-4 text-stone-500 mb-6">
              <span className="h-[1px] w-8 bg-stone-700"></span>
              <span className="font-serif text-xl text-gold-100">OUR STORY</span>
              <span className="h-[1px] w-8 bg-stone-700"></span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-8 text-center lg:text-left">
              Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.
            </p>

            <div className="flex justify-center lg:justify-end gap-4">
              <button className="px-6 py-2 rounded-full border border-white/10 bg-white text-black text-xs font-bold uppercase hover:bg-gold-200 transition-colors">
                Use for FREE
              </button>
              <button className="px-6 py-2 rounded-full border border-white/10 bg-white text-black text-xs font-bold uppercase hover:bg-gold-200 transition-colors">
                More Templates
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;