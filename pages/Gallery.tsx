import React from 'react';
import { GALLERY, WHATSAPP_URL } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-20 animate-fade-in flex flex-col items-center">
      <div className="text-center max-w-2xl mb-16">
        <h1 className="text-4xl md:text-7xl font-black font-display uppercase tracking-tighter mb-4">Our Craft Gallery</h1>
        <p className="text-white/50 font-medium text-lg italic">A visual testament to precision, style, and the art of luxury grooming.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full">
        {GALLERY.map(item => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5]">
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover bw-filter"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary text-[10px] uppercase font-bold tracking-[0.3em] mb-2">{item.category}</span>
              <h3 className="text-xl font-bold font-serif">{item.title}</h3>
              <p className="text-white/70 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 w-full bg-primary/5 border border-white/10 rounded-3xl p-12 text-center flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-black font-display uppercase">Ready to elevate your style?</h2>
        <p className="text-white/60 max-w-2xl">Connect with our stylists instantly via WhatsApp for effortless booking and personalized consultations.</p>
        <div className="flex gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-3">
            <span className="material-symbols-outlined">chat</span>
            Book on WhatsApp
          </a>
          <button className="bg-transparent border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
            View Price List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
