
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
                A premium unisex salon in Kano State. Hair & grooming, braiding, manicure & pedicure, tattooing, and styling for men and women.
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
      <section className="w-full max-w-[1200px] px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: 'content_cut', title: 'Hair Cut and Grooming', desc: 'Precision cuts, braiding, and styling for men and women.' },
          { icon: 'spa', title: 'Manicure & Pedicure', desc: 'Fingernail care and feet/toenail treatments for everyone.' },
          { icon: 'brush', title: 'Tattooing', desc: 'Professional tattoo artistry and custom designs.' }
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
