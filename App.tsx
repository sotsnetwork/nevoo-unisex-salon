
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
    <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4">
      <div className="flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/images/nevo%20logo.jpeg" alt="NEVOO" className="h-10 w-auto object-contain" />
          <h2 className="text-xl font-black tracking-tighter uppercase font-display">NEVOO</h2>
        </Link>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {links.map(link => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-primary ${location.pathname.startsWith(link.path) && link.path !== '/' || (link.path === '/' && location.pathname === '/') ? 'text-primary' : 'text-white/70'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center flex-shrink-0">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all">
            Book Now
          </a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
        <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
      </button>

      </div>

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
          <img src="/images/nevo%20logo.jpeg" alt="NEVOO" className="h-10 w-auto object-contain" />
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
          <Link to="/contact" className="hover:text-primary transition-colors">Visit Us</Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center md:items-start">
        <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Follow us on:</h3>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/nevoounisexsalon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/share/1E2NjwvPFw/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/20 text-[10px] uppercase tracking-widest">
      © 2024 NEVOO Unisex Salon. Crafted for Excellence in Kano State.
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
