import React, { useState, useRef } from 'react';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeSection, setActiveSection] = useState('maki');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const makiItems: MenuItem[] = [
    { id: '1', name: 'Spicy Tuna Maki', description: 'Fresh tuna, spicy mayo, cucumber, sesame seeds.', price: 16, category: 'maki', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200' },
    { id: '2', name: 'Mango Maki', description: 'Fresh mango, avocado, cucumber, wrapped in soy paper.', price: 14, category: 'maki', image: 'https://images.unsplash.com/photo-1617196019294-dcce4788cd63?q=80&w=200' },
    { id: '3', name: 'Salmon Maki', description: 'Atlantic salmon, avocado, cream cheese.', price: 15, category: 'maki', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=200' },
    { id: '4', name: 'Tuna Maki', description: 'Fresh tuna, wasabi, pickled ginger.', price: 15, category: 'maki', image: 'https://images.unsplash.com/photo-1559410545-021204c3a595?q=80&w=200' },
  ];

  const uramakiItems: MenuItem[] = [
    { id: '5', name: 'Volcano Delight', description: 'Crab meat, avocado, topped with spicy tuna and flakes.', price: 22, category: 'uramaki', image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=200' },
    { id: '6', name: 'Rainbow Fusion', description: 'California roll topped with assorted fresh fish.', price: 24, category: 'uramaki', image: 'https://images.unsplash.com/photo-1558985250-27a406d64cb3?q=80&w=200' },
    { id: '7', name: 'Dragon Elegance', description: 'Eel and cucumber topped with avocado slices.', price: 23, category: 'uramaki', image: 'https://images.unsplash.com/photo-1583556535260-8438258d4a97?q=80&w=200' },
    { id: '8', name: 'Sunset Serenity', description: 'Tempura shrimp, avocado, spicy mayo, eel sauce.', price: 22, category: 'uramaki', isNew: true, image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=200' },
    { id: '9', name: 'Ocean Breeze', description: 'Scallops, lemon zest, cucumber, yuzu sauce.', price: 20, category: 'uramaki', image: 'https://images.unsplash.com/photo-1617196019294-dcce4788cd63?q=80&w=200' },
  ];

  const specialItems: MenuItem[] = [
    { id: '10', name: 'Chef\'s Sashimi Selection', description: '12 pieces of the finest seasonal fish.', price: 35, category: 'special', image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=200' },
    { id: '11', name: 'Wagyu Beef Roll', description: 'Seared wagyu, truffle oil, asparagus.', price: 28, category: 'special', isNew: true, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=200' },
    { id: '12', name: 'Lobster Tempura', description: 'Whole lobster tail tempura with spicy ponzu.', price: 32, category: 'special', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=200' },
  ];

  const sections = [
    { id: 'maki', label: 'Maki Rolls', items: makiItems },
    { id: 'uramaki', label: 'Uramaki', items: uramakiItems },
    { id: 'special', label: 'Specials', items: specialItems },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element && scrollContainerRef.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderItem = (item: MenuItem) => (
    <div key={item.id} className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5 border ${item.isNew ? 'border-dashed border-blue-400 bg-blue-900/10' : 'border-transparent'}`}>
      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-serif text-gold-100 text-lg">{item.name}</h4>
          <span className="font-sans text-white font-medium">${item.price}</span>
        </div>
        <p className="text-xs text-stone-400 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen p-4 pt-24 md:p-8 flex justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 h-[85vh]">

        {/* Left Sticky Hero */}
        <div className="lg:col-span-1 h-[300px] lg:h-full relative rounded-[2.5rem] overflow-hidden border border-white/5 group">
          <img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000&auto=format&fit=crop"
            alt="Hand holding sushi"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="absolute bottom-12 left-10">
            <h2 className="font-serif text-7xl text-gold-100">MENU</h2>
          </div>
        </div>

        {/* Right Menu Area with Sidebar */}
        <div className="lg:col-span-2 bg-dark-900 rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col md:flex-row">

          {/* Sidebar Navigation */}
          <div className="hidden md:flex flex-col w-48 py-10 border-r border-white/5 h-full bg-dark-900/50 backdrop-blur-sm">
            <div className="px-6 mb-6">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Sections</span>
            </div>
            <div className="flex flex-col">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left px-6 py-4 text-[10px] uppercase tracking-widest font-bold transition-all border-r-2 ${activeSection === section.id ? 'text-gold-200 bg-white/5 border-gold-200' : 'text-stone-400 hover:text-stone-200 hover:bg-white/5 border-transparent'}`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable List */}
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-8 lg:p-12 no-scrollbar scroll-smooth relative">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className={index !== sections.length - 1 ? "mb-16" : "mb-8"}>
                <div className="flex items-center gap-4 mb-8 sticky top-0 bg-dark-900/95 backdrop-blur-md py-4 z-10 -mx-2 px-2">
                  <span className="h-[1px] w-8 bg-gold-500/50"></span>
                  <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold-200">{section.label}</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {section.items.map(renderItem)}
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div className="text-center py-8 text-stone-500 text-xs tracking-wider uppercase border-t border-white/5 mt-8">
              12% Service Charge included
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;