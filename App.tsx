
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingSuccess from './pages/BookingSuccess';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import FloatingContactButton from './components/FloatingContactButton';
import { WHATSAPP_URL } from './constants';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <span className="material-symbols-outlined text-3xl text-primary">diamond</span>
        <h2 className="text-xl font-black tracking-tighter uppercase font-display">NEVOO</h2>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {links.map(link => (
          <Link 
            key={link.path}
            to={link.path}
            className={`text-sm font-semibold transition-colors hover:text-primary ${location.pathname.startsWith(link.path) && link.path !== '/' || (link.path === '/' && location.pathname === '/') ? 'text-primary' : 'text-white/70'}`}
          >
            {link.name}
          </Link>
        ))}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all">
          Book Now
        </a>
      </nav>

      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white"
      >
        <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background-dark z-[101] flex flex-col items-center justify-center animate-fade-in">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 bg-white text-black rounded-full"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex flex-col items-center gap-8">
            {links.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-light tracking-[0.2em] uppercase transition-all hover:opacity-50"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-sm text-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="w-full border-t border-white/10 bg-background-dark py-12 px-6">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl">diamond</span>
          <h2 className="text-xl font-black tracking-tighter uppercase font-display">NEVOO</h2>
        </div>
        <p className="text-white/40 text-sm max-w-xs">
          Luxury grooming for the modern individual. Redefining the salon experience in Kano with timeless elegance.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Quick Links</h3>
        <div className="flex flex-col gap-2 text-sm text-white/60">
          <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
          <Link to="/gallery" className="hover:text-primary transition-colors">Style Portfolio</Link>
          <Link to="/about" className="hover:text-primary transition-colors">Our Story</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Visit Us</Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center md:items-start">
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Follow Our Craft</h3>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary transition-all">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary transition-all">
            <span className="material-symbols-outlined">photo_camera</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary transition-all">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/20 text-[10px] uppercase tracking-widest">
      © 2024 NEVOO Luxury Collective. Crafted for Excellence in Kano State.
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactButton />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
