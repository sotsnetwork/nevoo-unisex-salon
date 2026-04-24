
import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-6 py-10 md:py-20 animate-fade-in">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
          <div 
            className="flex min-h-[600px] flex-col gap-6 bg-cover bg-center items-start justify-center px-8 md:px-20 py-20 relative transition-transform duration-700 hover:scale-105"
            style={{ 
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%), url("/images/shop.webp")' 
            }}
          >
            <div className="max-w-2xl flex flex-col gap-4 relative z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                Premium Experience
              </div>
              <h1 className="text-white text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter uppercase font-display">
                Elite Grooming <br/>Refined
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-medium max-w-lg leading-relaxed font-sans">
                Your premium barbershop and unisex salon in Kano. Hair &amp; grooming, braids, nails, tattoos, plus wellness—ASMR massage, facials, body scrub, waxing, and teeth whitening for men and women.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg h-14 px-8 bg-white text-black hover:bg-slate-100 transition-all text-base font-extrabold tracking-wide">
                  <span className="material-symbols-outlined">chat</span>
                  <span>Book via WhatsApp</span>
                </a>
                <Link 
                  to="/services" 
                  className="flex min-w-[200px] items-center justify-center gap-2 rounded-lg h-14 px-8 border border-white/30 bg-transparent text-white hover:bg-white/10 transition-all text-base font-bold"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Teasers */}
      <section className="w-full max-w-[1200px] px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: 'content_cut', title: 'UNISEX HAIRCUT, BRAIDING & STYLING', desc: 'Precision cuts, braiding, and styling for men and women.' },
          { icon: 'spa', title: 'Manicure & Pedicure', desc: 'Fingernail care and feet/toenail treatments for everyone.' },
          { icon: 'brush', title: 'Tattooing', desc: 'Professional tattoo artistry and custom designs.' },
          { icon: 'self_improvement', title: 'WELLNESS, SPA & AESTHETICS', desc: 'ASMR massage, facials, body scrub, waxing, and teeth whitening—unisex care.' }
        ].map((feature, idx) => (
          <div 
            key={idx}
            className="flex flex-col gap-4 p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-2"
          >
            <span className="material-symbols-outlined text-primary text-4xl transition-transform group-hover:scale-110">{feature.icon}</span>
            <h3 className="text-xl font-bold font-serif">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Keyword-rich discoverability (visible, crawlable) */}
      <section className="w-full max-w-[1200px] px-6 pb-16" aria-labelledby="seo-intro-heading">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <h2 id="seo-intro-heading" className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white mb-6">
            Unisex salon in Kano &amp; premium barbershop
          </h2>
          <div className="space-y-4 text-white/55 text-sm md:text-base leading-relaxed max-w-3xl">
            <p>
              NEVOO is the <strong className="text-white/85">best salon in Kano Nigeria</strong> for clients who want one address for <strong className="text-white/85">hair salon Kano</strong>, <strong className="text-white/85">barbing salon Kano</strong>, <strong className="text-white/85">beauty salon in Kano</strong>, and <strong className="text-white/85">unisex beauty salon Nigeria</strong> level service. We combine <strong className="text-white/85">luxury salon in Kano</strong> atmosphere with <strong className="text-white/85">spa and salon</strong> nail care—ideal when you search <strong className="text-white/85">grooming salon near me</strong> and want Airport Road convenience.
            </p>
            <p>
              Explore <Link to="/services" className="text-primary font-semibold hover:underline">service pages</Link> for haircuts, braiding, manicure &amp; pedicure, tattoos, and <Link to="/services" className="text-primary font-semibold hover:underline">wellness &amp; spa</Link> (massage, facials, scrub, waxing, teeth whitening); read <Link to="/salon-guides" className="text-primary font-semibold hover:underline">salon guides</Link>; see our <Link to="/location-airport-road-kano" className="text-primary font-semibold hover:underline">Airport Road location</Link>; or learn about <Link to="/luxury-grooming-kano" className="text-primary font-semibold hover:underline">luxury grooming at NEVOO</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="w-full bg-primary/10 py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tight">Ready to redefine your style?</h2>
          <p className="text-white/60 text-lg max-w-xl">
            Join the collective of elite grooming enthusiasts. Experience a blend of artistry and precision.
          </p>
          <Link to="/services" className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
            Explore Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
