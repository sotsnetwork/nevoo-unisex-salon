
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SERVICES, WHATSAPP_PHONE } from '../constants';

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reviewSort, setReviewSort] = useState<'recent' | 'highest'>('recent');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  // Salon contact info - uses shared constant 

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock reviews data with verified status and refined details
  const allReviews = useMemo(() => [
    {
      id: 1,
      user: "Chidi K.",
      rating: 5,
      date: "2024-05-18",
      displayDate: "2 days ago",
      comment: "Absolutely the best service I've had in Kano. The attention to detail is unmatched. NEVOO truly understands luxury grooming for the modern gentleman.",
      avatar: "https://i.pravatar.cc/150?u=chidi",
      verified: true
    },
    {
      id: 2,
      user: "Amina J.",
      rating: 5,
      date: "2024-05-12",
      displayDate: "1 week ago",
      comment: "A serene environment and professional staff. My go-to place for grooming now. Highly recommend the precision they offer. The plaiting is art.",
      avatar: "https://i.pravatar.cc/150?u=amina",
      verified: true
    },
    {
      id: 3,
      user: "Tunde E.",
      rating: 4,
      date: "2024-05-05",
      displayDate: "2 weeks ago",
      comment: "Great experience overall. The wait time was minimal and the result was perfect. The atmosphere is very exclusive and private.",
      avatar: "https://i.pravatar.cc/150?u=tunde",
      verified: true
    },
    {
      id: 4,
      user: "Fatima S.",
      rating: 5,
      date: "2024-04-28",
      displayDate: "3 weeks ago",
      comment: "Finally a salon that understands high-end service in Kano. The luxury pedicure felt like a vacation. Worth every penny.",
      avatar: "https://i.pravatar.cc/150?u=fatima",
      verified: true
    }
  ], []);

  const sortedReviews = useMemo(() => {
    return [...allReviews].sort((a, b) => {
      if (reviewSort === 'highest') return b.rating - a.rating;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [allReviews, reviewSort]);

  const relatedServices = useMemo(() => {
    if (!service) return [];
    return SERVICES.filter(s => s.category === service.category && s.id !== service.id).slice(0, 3);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary font-bold uppercase tracking-widest text-xs hover:underline">
          Return to Services
        </Link>
      </div>
    );
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleProceedToWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello NEVOO Concierge,\n\nI would like to book the "${service.name}" service (${service.price}).\n\nPlease let me know your available slots for this week.\n\nThank you.\n(Ref: ${service.id})`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, '_blank');
    navigate('/booking-success');
  };

  const renderStars = (count: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`material-symbols-outlined text-sm ${i < count ? 'text-primary fill-1' : 'text-white/10'}`}>
            star
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-20 animate-fade-in relative">
      <button 
        onClick={() => navigate('/services')}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
      >
        <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
        <span className="text-xs font-bold uppercase tracking-widest">All Services</span>
      </button>

      <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
        {/* Visual Component */}
        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
          <img 
            src={service.image || "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop"} 
            alt={service.name}
            className="w-full h-full object-cover bw-filter transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent opacity-60"></div>
          
          <button 
            onClick={handleProceedToWhatsApp}
            className="absolute top-8 right-8 bg-accent text-background-dark p-4 rounded-full shadow-[0_0_20px_rgba(19,236,73,0.4)] hover:scale-110 transition-all active:scale-95 group/wa"
            title="Book via WhatsApp"
          >
            <span className="material-symbols-outlined text-3xl font-bold">chat</span>
          </button>

          <div className="absolute bottom-8 left-8 flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <div>
               <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-1">Signature Choice</p>
               <p className="text-white text-lg font-bold font-serif italic">NEVOO Craftsmanship</p>
            </div>
          </div>
        </div>

        {/* Info Component */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">{service.category}</span>
            <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter leading-none">
              {service.name}
            </h1>
            <div className="h-1 w-24 bg-primary"></div>
          </div>

          <div className="space-y-6 text-white/60 text-lg leading-relaxed">
            <p className="font-medium text-white/80">{service.description}</p>
            <p>
              Experience the pinnacle of grooming at NEVOO. Our {service.name.toLowerCase()} service is meticulously designed to cater to your specific aesthetic goals while providing a moment of pure relaxation.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Investment</p>
                <p className="text-3xl font-black font-display text-white">{service.price}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Duration</p>
                <p className="text-3xl font-black font-display text-white">45-90 min</p>
              </div>
            </div>
          </div>

          {/* New WhatsApp Integration Area */}
          <div className="p-10 rounded-[2rem] bg-accent/5 border border-accent/20 flex flex-col gap-6 relative overflow-hidden group/card">
            <div className="absolute -right-10 -top-10 opacity-5 transition-transform duration-700 group-hover/card:scale-125">
              <span className="material-symbols-outlined text-[180px] text-accent">chat_bubble</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-white text-2xl font-black font-display uppercase tracking-tight mb-2">Instant Concierge</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
                The fastest way to secure your appointment. Our stylists are online and ready to assist you now.
              </p>
              
              <button 
                onClick={handleProceedToWhatsApp}
                className="w-full h-16 bg-accent text-background-dark font-black uppercase tracking-widest text-sm rounded-2xl flex items-center justify-center gap-4 hover:bg-white transition-all shadow-[0_10px_40px_rgba(19,236,73,0.2)]"
              >
                <span className="material-symbols-outlined text-2xl font-bold">send</span>
                Start WhatsApp Chat
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => {
              setIsModalOpen(true);
              setIsSubmitted(false);
            }}
            className="w-full h-14 border border-white/10 text-white/40 font-bold uppercase tracking-widest text-[10px] rounded-2xl flex items-center justify-center gap-3 hover:text-white hover:bg-white/5 transition-all"
          >
            Request via Online Form instead
            <span className="material-symbols-outlined text-sm">assignment</span>
          </button>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background-dark bg-slate-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i + service.id}`} alt="client" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <p className="text-xs text-white/50 leading-snug">
              Join <span className="text-white font-bold">120+ clients</span> who recently experienced our {service.name.toLowerCase()} this month.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Reviews Section */}
      <div className="mb-32 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Review Summary & Stats */}
          <div className="w-full md:w-1/3 flex flex-col gap-8 sticky top-32">
            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 flex flex-col items-center text-center">
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Client Satisfaction</span>
              <div className="text-7xl font-black font-display mb-2">4.9</div>
              {renderStars(5)}
              <p className="text-white/40 text-xs mt-4 uppercase tracking-widest">Based on 86 verified visits</p>
              
              <div className="w-full mt-10 space-y-3">
                {[
                  { star: 5, perc: 92 },
                  { star: 4, perc: 6 },
                  { star: 3, perc: 2 },
                ].map(row => (
                  <div key={row.star} className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-white/40 w-4">{row.star}</span>
                    <div className="flex-grow h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${row.perc}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-white/40 w-8">{row.perc}%</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 text-xs font-bold border border-white/10 hover:border-white/30 px-6 py-4 rounded-xl transition-all uppercase tracking-widest">
                Share Your Experience
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-primary/5 border border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">The NEVOO Standard</h4>
              <p className="text-xs text-white/50 leading-relaxed italic">
                "We believe every visit should be a masterpiece. Our reviews reflect our commitment to precision and the art of modern grooming."
              </p>
            </div>
          </div>

          {/* Review List */}
          <div className="w-full md:w-2/3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 border-b border-white/5 pb-8 gap-6">
              <h2 className="text-2xl font-black font-display uppercase tracking-tight">Recent Testimonials</h2>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Sort Reviews By</span>
                <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/5">
                  <button 
                    onClick={() => setReviewSort('recent')}
                    className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${reviewSort === 'recent' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                  >
                    Most Recent
                  </button>
                  <button 
                    onClick={() => setReviewSort('highest')}
                    className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${reviewSort === 'highest' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                  >
                    Highest Rated
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {sortedReviews.map((review) => (
                <div key={review.id} className="group flex flex-col gap-6 animate-fade-in">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <img src={review.avatar} alt={review.user} className="w-14 h-14 rounded-full grayscale border border-white/10 group-hover:grayscale-0 transition-all duration-500" />
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-accent text-background-dark p-0.5 rounded-full border-2 border-background-dark">
                            <span className="material-symbols-outlined text-[10px] font-bold">verified</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="font-bold text-base">{review.user}</h4>
                          {review.verified && <span className="text-[8px] font-black uppercase tracking-widest text-accent/60">Verified</span>}
                        </div>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">{review.displayDate}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {renderStars(review.rating)}
                      <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Service Verified</span>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-6 -top-2 text-4xl text-primary/10 font-serif">"</span>
                    <p className="text-white/70 text-lg leading-relaxed italic font-serif pl-2">
                      {review.comment}
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/5 group-last:hidden"></div>
                </div>
              ))}
            </div>

            <button className="w-full mt-16 py-4 border border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white hover:border-white/20 transition-all rounded-xl">
              Load More Testimonials
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-[120] p-4 bg-background-dark/80 backdrop-blur-xl border-t border-white/10 transition-transform duration-500 md:hidden ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <button 
          onClick={handleProceedToWhatsApp}
          className="w-full h-16 bg-accent text-background-dark font-black uppercase tracking-widest text-sm rounded-2xl flex items-center justify-center gap-3 shadow-[0_-10px_30px_rgba(19,236,73,0.2)]"
        >
          <span className="material-symbols-outlined">chat</span>
          WhatsApp Booking
        </button>
      </div>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <div className="border-t border-white/10 pt-20 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-2 block">Discovery</span>
              <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter">Related Experiences</h2>
            </div>
            <Link to="/services" className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:text-primary hover:border-primary transition-all">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((related) => (
              <Link 
                key={related.id} 
                to={`/services/${related.id}`}
                className="group flex flex-col gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
                  <img 
                    src={related.image || "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop"} 
                    alt={related.name}
                    className="w-full h-full object-cover bw-filter group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 p-2 rounded-lg bg-background-dark/80 backdrop-blur-md border border-white/10 text-primary">
                    <span className="material-symbols-outlined text-sm">{related.icon}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{related.name}</h3>
                  <p className="text-white/40 text-sm line-clamp-2 mb-4">{related.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-serif font-bold text-white/80">{related.price}</span>
                    <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Booking Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-background-dark/95 backdrop-blur-lg animate-fade-in">
          <div className="w-full max-w-lg bg-background-dark border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
            <div className="p-10 border-b border-white/5 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">
                  {isSubmitted ? 'Request Sent' : 'Finalize Request'}
                </span>
                <h3 className="text-3xl font-black font-display uppercase tracking-tighter">
                  {isSubmitted ? 'See You Soon' : 'Your Appointment'}
                </h3>
                <p className="text-white/40 text-sm font-medium italic">{service.name} • {service.price}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {isSubmitted ? (
              <div className="p-10 flex flex-col items-center text-center animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-4xl text-primary animate-pulse">done_all</span>
                </div>
                <h4 className="text-xl font-bold mb-4 font-serif">Request successfully received.</h4>
                <p className="text-white/50 text-sm mb-10 leading-relaxed">
                  Your interest in NEVOO is appreciated. We've queued your request. To finalize details and secure your time slot, please proceed to our official WhatsApp channel.
                </p>
                <button 
                  onClick={handleProceedToWhatsApp}
                  className="w-full h-16 bg-white text-background-dark font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-primary hover:text-white transition-all transform active:scale-95 shadow-xl flex items-center justify-center gap-3"
                >
                  Proceed to WhatsApp
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="p-10 space-y-8 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter name..."
                      className="bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/10"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">WhatsApp / Phone</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+234..."
                      className="bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/10"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Select Date</label>
                    <input 
                      required
                      type="date" 
                      className="bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-primary transition-colors text-white [color-scheme:dark]"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Preferred Time</label>
                    <input 
                      required
                      type="time" 
                      className="bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-primary transition-colors text-white [color-scheme:dark]"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="w-full h-16 bg-white text-background-dark font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-primary hover:text-white transition-all transform active:scale-95 shadow-xl flex items-center justify-center gap-3"
                  >
                    Request Booking
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                  <p className="text-center text-[10px] text-white/20 mt-6 uppercase tracking-[0.3em]">
                    Secure verification via WhatsApp required next
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
