
import React from 'react';
import { Link } from 'react-router-dom';

const BookingSuccess: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-12">
        <span className="material-symbols-outlined text-5xl text-accent animate-pulse">check</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight text-center mb-6">
        Appointment <br/>Requested
      </h1>
      
      <p className="text-white/60 text-lg max-w-lg text-center leading-relaxed mb-12">
        We have received your request. You will be redirected to WhatsApp to finalize your booking with our concierge.
      </p>

      <div className="flex flex-col items-center gap-6">
        <button className="bg-white text-black px-12 py-5 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
          Continue to WhatsApp
        </button>
        <Link to="/" className="text-white/30 text-xs font-bold uppercase tracking-[0.5em] hover:text-white transition-colors">
          Elegance in Every Detail
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
