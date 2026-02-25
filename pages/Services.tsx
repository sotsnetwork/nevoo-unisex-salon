
import React, { useState, useMemo } from 'react';
import { SERVICES, WHATSAPP_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => Array.from(new Set(SERVICES.map(s => s.category))), []);

  const handleServiceSelect = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const categoryImages: Record<string, string> = {
    'Hair Cut and Grooming': '/images/hair%202.jpg',
    'Manicure': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop',
    'Pedicure': 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2070&auto=format&fit=crop',
    'Tattooing': 'https://images.unsplash.com/photo-1569516449772-20702452ee28?q=80&w=2070&auto=format&fit=crop',
  };

  const processedServices = useMemo(() => {
    if (!selectedCategory) return [];

    const filtered = SERVICES.filter(s => s.category === selectedCategory);

    return [...filtered].sort((a, b) => b.popularity - a.popularity);
  }, [selectedCategory]);

  if (!selectedCategory) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-20 animate-fade-in flex flex-col items-center">
        <div className="text-center max-w-2xl mb-16">
          <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Step 1: Choose Experience</span>
          <h1 className="text-4xl md:text-7xl font-black font-display uppercase tracking-tighter mb-4">The NEVOO Menu</h1>
          <p className="text-white/50 text-lg">Hair & grooming, braiding, manicure & pedicure, tattooing, and styling for men and women. Select a category to explore our unisex salon services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10 transition-all hover:border-primary/50"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bw-filter transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url("${categoryImages[cat] || 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop'}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent flex flex-col justify-end p-8 text-left">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Category</span>
                <h3 className="text-3xl font-black font-display uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{cat}</h3>
                <p className="text-white/40 text-sm mb-6 max-w-xs line-clamp-2">
                  Explore our signature {cat.toLowerCase()} treatments designed for precision and luxury.
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                  <span>View Services</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto px-6 py-10 md:py-20 animate-fade-in">
      <button 
        onClick={() => setSelectedCategory(null)}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
      >
        <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
        <span className="text-xs font-bold uppercase tracking-widest">Back to Categories</span>
      </button>

      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-2">{selectedCategory}</h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>
      </div>

      <div className="space-y-6">
        {processedServices.length > 0 ? (
          processedServices.map(service => (
            <div 
              key={service.id}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-white/5 text-primary">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{service.name}</h3>
                    {service.popularity > 90 && (
                      <span className="bg-accent/10 text-accent text-[8px] font-black uppercase px-2 py-0.5 rounded border border-accent/20">Popular</span>
                    )}
                  </div>
                  <p className="text-white/40 text-sm max-w-md leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end md:items-center gap-6">
                <button 
                  onClick={() => handleServiceSelect(service.id)}
                  className="bg-primary text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center flex flex-col items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-white/10">search_off</span>
            <p className="text-white/30 font-serif italic text-lg">No services in this category.</p>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="text-primary text-xs font-bold uppercase tracking-widest hover:underline"
            >
              Back to Categories
            </button>
          </div>
        )}
      </div>

      <div className="mt-20 p-10 rounded-3xl bg-primary/5 border border-white/10 text-center">
        <h4 className="text-xl font-bold mb-4 font-serif italic">Don't see exactly what you need?</h4>
        <p className="text-white/50 text-sm mb-8">Our expert stylists are available for custom consultations and tailored packages.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
          <span className="material-symbols-outlined">chat</span>
          WhatsApp Consultation
        </a>
      </div>
    </div>
  );
};

export default Services;