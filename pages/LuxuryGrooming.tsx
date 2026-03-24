
import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../constants';

const LuxuryGrooming: React.FC = () => {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-10 md:py-20 animate-fade-in">
      <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Elite Grooming Refined</span>
      <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mt-4 mb-6">
        Luxury grooming &amp; premium salon services in Kano
      </h1>
      <p className="text-white/60 text-lg leading-relaxed mb-10">
        NEVOO is built for clients who want a <strong className="text-white/90">luxury grooming experience</strong>, <strong className="text-white/90">premium salon services</strong>, and a <strong className="text-white/90">modern grooming lifestyle</strong>. Our team delivers <strong className="text-white/90">elite barbering Kano</strong> standards alongside braids, nails, and tattoo artistry—think high-end beauty salon atmosphere with unisex access for every guest.
      </p>
      <div className="space-y-8 text-white/55 text-base md:text-lg leading-relaxed border-t border-white/10 pt-10">
        <p>
          <strong className="text-white/80">Executive grooming services</strong> mean predictable quality: consultation-first booking, skilled stylists, and a calm space. Whether you need a sharp fade, event-ready braids, or a full nail reset, we align with searches like <em>best salon in Kano Nigeria</em>, <em>premium barber shop Kano</em>, and <em>unisex salon in Kano</em>.
        </p>
        <p>
          Pair this page with our <Link to="/services" className="text-primary hover:underline">service menu</Link>, <Link to="/location-airport-road-kano" className="text-primary hover:underline">Airport Road location</Link>, and <Link to="/salon-guides" className="text-primary hover:underline">salon guides</Link> to see how NEVOO maps real services to real keywords—not hype, just craft.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-12">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold">
          Book luxury session
        </a>
        <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5">
          About NEVOO
        </Link>
      </div>
    </div>
  );
};

export default LuxuryGrooming;
