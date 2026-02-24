
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-20 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeCtE_kNrUrwdsRZkd945Z6sMu031mgALOh5ZZFJz3jjut8gEhH-bkX8RJDNVgGgk7VAINKAgwZBVAVK_5SyqMSW-54XQj8-y_98ekRCwZ3UWT0kPjSQdhL4OjLN6yYv8LkrWfMdCYETW4sIlsqcZ4f_9UCQV86dowcrEy3HhSEu9Yq7mCCIBV0edN8sZOf1nv3c2PEVKUgdV5quU8dP6FpW9DSJlOo3jUlKnGhb4N7l9aNa4r7sHCNqjrvpJKTZHIdF6m-22n4yLr" 
            alt="Salon Story" 
            className="w-full h-full object-cover bw-filter"
          />
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Premium Unisex Salon</span>
            <h1 className="text-5xl md:text-7xl font-black font-display uppercase leading-tight tracking-tighter">
              Elevating Elegance Beyond Gender
            </h1>
          </div>
          
          <div className="space-y-6 text-white/70 text-lg leading-relaxed font-sans">
            <p>
              NEVOO is more than a salon; it is a sanctuary of style. Born from a vision of premium unisex grooming, we blend timeless black-and-white aesthetics with contemporary techniques to redefine your personal brand.
            </p>
            <p>
              Located in the heart of Kano State, we cater to the modern individual who values precision, luxury, and an unparalleled service experience.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:opacity-90">
              Our Vision
            </button>
            <button className="border border-primary text-primary px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-primary/5">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-20">
        {[
          { label: 'Founded', value: '2020' },
          { label: 'Happy Clients', value: '5,000+' },
          { label: 'Award Winning', value: '12' }
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left flex flex-col gap-2">
            <span className="text-primary font-black text-5xl font-display">{stat.value}</span>
            <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
