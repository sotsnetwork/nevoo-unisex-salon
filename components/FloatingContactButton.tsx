
import React from 'react';
import { Link } from 'react-router-dom';

const FloatingContactButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-8 z-[150]">
      <Link 
        to="/contact"
        className="flex items-center justify-center rounded-full h-16 w-16 bg-white text-background-dark shadow-2xl hover:scale-110 active:scale-95 transition-all group border border-white/20"
        aria-label="Contact Us"
      >
        <span className="material-symbols-outlined text-3xl font-medium group-hover:rotate-12 transition-transform">
          location_on
        </span>
        <span className="absolute left-full ml-4 px-4 py-2 bg-background-dark/90 backdrop-blur-md border border-white/10 rounded-lg text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
          Visit Us
        </span>
      </Link>
    </div>
  );
};

export default FloatingContactButton;
