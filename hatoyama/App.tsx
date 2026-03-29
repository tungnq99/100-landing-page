import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import About from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-dark-950 min-h-screen text-stone-200 font-sans selection:bg-gold-500 selection:text-black">
        <ScrollToTop />
        <Navbar />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        
        {/* Background ambient light effects */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      </div>
    </HashRouter>
  );
};

export default App;