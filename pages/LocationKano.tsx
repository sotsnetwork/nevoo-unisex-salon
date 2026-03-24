
import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../constants';

const LocationKano: React.FC = () => {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-10 md:py-20 animate-fade-in">
      <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Local SEO</span>
      <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mt-4 mb-6">
        Unisex salon near Airport Road, Kano
      </h1>
      <p className="text-white/60 text-lg leading-relaxed mb-10">
        NEVOO Unisex Salon is at <strong className="text-white/90">No. 4 Airport Road, by Ahmadiyya Junction, Kano State, Nigeria</strong>. If you searched for a salon near Airport Road Kano, best salon near me Kano, unisex salon near me, barber shop near me, beauty spa near me Kano, or hairdresser near me Kano—you have found a premium hair salon, barbershop, and nail studio in one place.
      </p>
      <div className="space-y-8 text-white/55 text-base md:text-lg leading-relaxed border-t border-white/10 pt-10">
        <p>
          We welcome clients looking for a <strong className="text-white/80">luxury salon in Kano</strong>, <strong className="text-white/80">spa and salon</strong> nail experiences, and <strong className="text-white/80">grooming salon near me</strong> results without compromising on hygiene or craft. Book via WhatsApp to check same-day availability.
        </p>
        <p>
          NEVOO is also known as <strong className="text-white/80">nevoo unisex salon</strong>, <strong className="text-white/80">nevoo salon Kano</strong>, and <strong className="text-white/80">nevoo grooming services</strong>—our official site is{' '}
          <a href="https://nevoounisexsalon.com/" className="text-primary hover:underline">nevoounisexsalon.com</a>.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-12">
        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold">
          Directions &amp; hours
        </Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5">
          WhatsApp NEVOO
        </a>
        <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-primary/40 text-primary font-bold hover:bg-primary/10">
          View services
        </Link>
      </div>
    </div>
  );
};

export default LocationKano;
