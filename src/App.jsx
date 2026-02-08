// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// --- IMPORT YOUR PAGES ---
import Home from './Home';
import About from './About';
import Products from './Products';
import Training from './Training';
import Contact from './Contact';
import Donate from './Donate'; // <--- NEW IMPORT

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact helper
  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  const isActive = (path) => location.pathname === path;
  const linkBaseClass = "text-sm font-bold uppercase tracking-wide transition-colors";
  const activeClass = "text-[#0284c7]";
  const inactiveClass = "text-slate-600 hover:text-[#0284c7]";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img src="/TOH_LOGO-03.png" alt="Threads of Tumaini" className="h-14 w-auto drop-shadow-sm" />
          <div className="hidden md:block leading-tight">
            <span className="block font-serif font-bold text-xl text-[#0c4a6e]">Threads of Tumaini</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`${linkBaseClass} ${isActive('/') ? activeClass : inactiveClass}`}>Home</Link>
          <Link to="/about" className={`${linkBaseClass} ${isActive('/about') ? activeClass : inactiveClass}`}>About</Link>
          <Link to="/products" className={`${linkBaseClass} ${isActive('/products') ? activeClass : inactiveClass}`}>Products</Link>
          <Link to="/training" className={`${linkBaseClass} ${isActive('/training') ? activeClass : inactiveClass}`}>Training</Link>

          <div className="flex items-center gap-3 ml-4">
            <button onClick={handleContactClick} className="px-6 py-2.5 rounded-full border-2 border-[#0284c7] text-[#0284c7] font-bold text-sm hover:bg-[#e0f2fe] transition-colors">
              Contact
            </button>
            
            {/* UPDATED DONATE BUTTON */}
            <Link to="/donate" className="bg-[#0284c7] text-white px-7 py-3 rounded-full font-bold shadow-lg hover:bg-[#0c4a6e] transition-all text-sm uppercase transform hover:-translate-y-0.5">
              Donate
            </Link>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#0c4a6e] p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-2 md:hidden">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-bold bg-slate-50 rounded-lg text-slate-700 hover:text-[#0284c7]">Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-bold bg-slate-50 rounded-lg text-slate-700 hover:text-[#0284c7]">About</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-bold bg-slate-50 rounded-lg text-slate-700 hover:text-[#0284c7]">Products</Link>
          <Link to="/training" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-bold bg-slate-50 rounded-lg text-slate-700 hover:text-[#0284c7]">Training</Link>
          <button onClick={handleContactClick} className="block w-full text-left px-4 py-3 font-bold bg-slate-50 rounded-lg text-slate-700 hover:text-[#0284c7]">Contact</button>
          <div className="pt-2 mt-2 border-t border-slate-100">
             {/* UPDATED MOBILE DONATE BUTTON */}
             <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#0284c7] text-white py-3 rounded-xl font-bold shadow-md">
               Donate Now
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// FOOTER
const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
      <Link to="/">
        <img src="/TOH_LOGO-03.png" alt="Logo" className="h-10 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
      </Link>
      <div className="flex gap-6 text-sm font-bold text-slate-500">
        <a href="#" className="hover:text-[#0284c7] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#0284c7] transition-colors">Terms of Service</a>
      </div>
      <p className="text-slate-400 text-sm">© 2026 Threads of Tumaini. Built with dignity.</p>
    </div>
  </footer>
);

// MAIN APP
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-600 selection:bg-[#0284c7] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} /> {/* <--- NEW ROUTE */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;