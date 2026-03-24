
import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../constants';

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I choose a good salon in Kano?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for clear hygiene, skilled stylists for your service (cut, braids, nails, or ink), transparent booking, and reviews that mention consistency. NEVOO focuses on consultation-first WhatsApp booking and a premium unisex salon experience on Airport Road, Kano.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I expect at a luxury salon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Expect a calm environment, attentive staff, time for consultation, and attention to finish—whether that is a fade, braids, manicure, pedicure, or tattoo. At NEVOO we call this elite grooming: refined process, not rushed volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of professional grooming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional grooming improves confidence, maintains hair and skin health, and saves time versus DIY mistakes. Regular visits to a trusted hair salon or barbershop help you keep a signature look with less daily effort.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should you cut your hair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Short fades and tight styles often need a refresh every 2–3 weeks; longer styles may go 6–8 weeks. Your stylist can recommend a schedule based on growth, texture, and the look you want.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you maintain braids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep your scalp clean with gentle cleansing, moisturize lightly, sleep with a satin scarf or bonnet, and avoid excessive tension on edges. Book touch-ups or takedowns on time to protect natural hair.',
      },
    },
  ],
};

const SalonInsights: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div className="max-w-[800px] mx-auto px-6 py-10 md:py-20 animate-fade-in">
        <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">Salon guides</span>
        <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mt-4 mb-6">
          Hair, beauty &amp; grooming insights
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-14">
          Practical answers for people searching <strong className="text-white/85">hair care tips for healthy hair</strong>, <strong className="text-white/85">grooming tips for men</strong>, <strong className="text-white/85">self care routine for women</strong>, and <strong className="text-white/85">importance of personal grooming</strong>. NEVOO is a unisex salon and barbershop in Kano—use these guides, then{' '}
          <a href={WHATSAPP_URL} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            book with us
          </a>.
        </p>

        <article className="space-y-14 text-white/60 text-base md:text-lg leading-relaxed border-t border-white/10 pt-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white mb-4">Best hairstyles for men (2026 trends)</h2>
            <p>
              Clean fades, textured crops, and well-maintained waves remain strong in Nigeria. For a <strong className="text-white/80">haircut for men Kano</strong> that stays sharp, book a barber who maps your head shape and growth pattern—not just a quick clipper pass.
            </p>
          </section>
          <section>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white mb-4">Trending female hairstyles in Nigeria</h2>
            <p>
              Braids, sleek ponytails, and protective styles dominate social feeds. If you want a <strong className="text-white/80">female haircut salon Kano</strong> or braid install, bring reference photos and ask about tension, parting, and aftercare.
            </p>
          </section>
          <section>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white mb-4">How to maintain braids</h2>
            <p>
              See FAQ above—gentle cleansing, moisture, and protecting hair at night extend the life of knotless braids, cornrows, and extensions. Our <Link to="/services/s3b" className="text-primary hover:underline">Hair Braiding</Link> page links to booking.
            </p>
          </section>
          <section>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white mb-4">Hair treatment &amp; silk press in Kano</h2>
            <p>
              Heat styling and treatments vary by hair type. Message NEVOO on WhatsApp to ask about <strong className="text-white/80">hair treatment salon Kano</strong> options and <strong className="text-white/80">silk press Kano</strong> availability—we will confirm what our stylists can schedule.
            </p>
          </section>
          <section>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white mb-4">Bridal &amp; event styling</h2>
            <p>
              Planning <strong className="text-white/80">bridal makeup and hair Kano</strong>, <strong className="text-white/80">wedding hair stylist Kano</strong>, <strong className="text-white/80">birthday glam</strong>, or <strong className="text-white/80">photoshoot styling</strong>? Send your date, inspiration images, and party size on WhatsApp so we can advise timing and services.
            </p>
          </section>
          <section>
            <h2 className="text-2xl md:text-3xl font-black font-display text-white mb-4">Spa, massage &amp; facial services</h2>
            <p>
              NEVOO&apos;s core menu is hair, braids, nails, and tattoos with a luxury salon atmosphere. For <strong className="text-white/80">facial treatment Kano</strong>, <strong className="text-white/80">body massage Kano</strong>, or full <strong className="text-white/80">relaxation spa Kano</strong> requests, ask on WhatsApp—we will tell you what we can coordinate or recommend.
            </p>
          </section>
        </article>

        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-4">
          <Link to="/services" className="text-primary font-bold hover:underline">
            All services →
          </Link>
          <Link to="/luxury-grooming-kano" className="text-primary font-bold hover:underline">
            Luxury positioning →
          </Link>
          <Link to="/location-airport-road-kano" className="text-primary font-bold hover:underline">
            Airport Road salon →
          </Link>
        </div>
      </div>
    </>
  );
};

export default SalonInsights;
