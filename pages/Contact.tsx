
import React from 'react';
import { WHATSAPP_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-20 animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Our Location</span>
            <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter">Visit NEVOO</h1>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">No. 4 Airport Road</h3>
                <p className="text-white/50 text-lg">By Ahmadiyya Junction, Kano State, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary">
                <span className="material-symbols-outlined text-3xl">schedule</span>
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Monday - Friday</p>
                    <p className="text-lg font-medium">9:00 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Saturday</p>
                    <p className="text-lg font-medium">10:00 AM - 9:00 PM</p>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Sunday</p>
                    <p className="text-lg font-medium">12:00 PM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Public Holidays</p>
                    <p className="text-lg font-medium text-white/40">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-16 bg-[#25D366] text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl mt-8"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div 
            className="absolute inset-0 grayscale contrast-125 brightness-75 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCO762s7vksMDntaeYVPgCPvPIs16eQaMSeTg3Nbdi5B10CQHgODbqF0RpYW2FJqSDgtf2ezktZ6WUlFkoF2yOAOLMf0JZVVAsccx3lU3GXFLEphC5rx9zvBq2LViNcomOxkN1YosLH-oBx9Jhrm-jX11w1_Gb1EdCtSWAcUYiAaywTA1q7ZhN4iv0gu1OBY9SKTosu8Xx8KR76jG_LHYfWy8PUOFmE-JGH8ToY4lQ1HA1nWpX2XFOJqKHtVQ_UUnpr-CHn5rbzHJsm")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-transform">
              <span className="material-symbols-outlined">directions</span>
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
