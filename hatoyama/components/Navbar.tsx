import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navClasses = ({ isActive }: { isActive: boolean }) =>
    `text-xs tracking-widest uppercase font-medium transition-colors duration-300 ${isActive ? 'text-gold-300' : 'text-stone-400 hover:text-white'
    }`;

  return (
    <div className="fixed top-10 left-10 right-0 z-50 flex justify-start">
      <nav className="bg-dark-900/80 mr-auto backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="flex items-center gap-3">
          <NavLink to="/">
            <span className="font-serif text-2xl tracking-tight text-white">HATOYAMA</span>
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 pl-4 border-l border-white/10 h-6">
          <NavLink to="/" className={navClasses}>Home</NavLink>
          <NavLink to="/menu" className={navClasses}>Menu</NavLink>
          <NavLink to="/about" className={navClasses}>About</NavLink>
        </div>

        <div className="hidden md:block pl-4 border-l border-white/10">
          <NavLink to="/reservation" className={`px-4 py-2 rounded-full border border-white/20 bg-white/5 text-[10px] uppercase tracking-widest hover:bg-gold-500 hover:border-gold-500 hover:text-black transition-all duration-300 ${location.pathname === '/reservation' ? 'bg-gold-500 text-black border-gold-500' : ''}`}>
            Book a Table
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 bg-dark-900 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 w-64 shadow-xl">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={navClasses}>Home</NavLink>
          <NavLink to="/menu" onClick={() => setIsOpen(false)} className={navClasses}>Menu</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={navClasses}>About</NavLink>
          <NavLink to="/reservation" onClick={() => setIsOpen(false)} className={navClasses}>Book a Table</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;