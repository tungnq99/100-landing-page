import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full h-full p-4 lg:h-screen lg:p-6 box-border flex flex-col lg:pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full w-full">

        {/* Main Hero Block - Spans 2 cols on desktop */}
        <div className="lg:col-span-2 relative group rounded-[2.5rem] overflow-hidden border border-white/5 bg-dark-900 min-h-[500px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2500&auto=format&fit=crop"
            alt="Sushi Bowl"
            className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16">
            <h1 className="font-serif text-5xl lg:text-8xl text-gold-100 leading-[0.9]">
              SUSHI <br />
              <span className="italic">SENSATION</span>
            </h1>
          </div>
        </div>

        {/* Right Column Grid */}
        <div className="grid grid-rows-3 md:grid-cols-3 lg:grid-rows-3 lg:grid-cols-1 gap-4 h-full">

          {/* Menu Link */}
          <Link to="/menu" className="relative group rounded-[2.5rem] overflow-hidden border border-white/5 bg-dark-900 min-h-[200px]">
            <img
              src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1000&auto=format&fit=crop"
              alt="Chef Plating"
              className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group-hover:bg-gold-500 group-hover:text-black transition-all">
              <span className="text-xs uppercase tracking-widest font-medium">Menu</span>
              <ArrowRight size={14} />
            </div>
          </Link>

          {/* Reservation Link */}
          <Link to="/reservation" className="relative group rounded-[2.5rem] overflow-hidden border border-white/5 bg-dark-900 min-h-[200px]">
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop"
              alt="Dining Atmosphere"
              className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group-hover:bg-gold-500 group-hover:text-black transition-all">
              <span className="text-xs uppercase tracking-widest font-medium">Reservation</span>
              <ArrowRight size={14} />
            </div>
          </Link>

          {/* About Link */}
          <Link to="/about" className="relative group rounded-[2.5rem] overflow-hidden border border-white/5 bg-dark-900 min-h-[200px]">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"
              alt="Restaurant Interior"
              className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group-hover:bg-gold-500 group-hover:text-black transition-all">
              <span className="text-xs uppercase tracking-widest font-medium">Our Restaurant</span>
              <ArrowRight size={14} />
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;