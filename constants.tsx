
import { Service, GalleryItem } from './types';

/** Business WhatsApp number with country code (no + or spaces). E.g. 2348012345678 for Nigeria */
export const WHATSAPP_PHONE = '2348103041190';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Classic Plaiting',
    category: 'Hair & Grooming',
    description: 'Intricate patterns and styles crafted with precision. Hair braiding for all.',
    price: 'From $120',
    priceValue: 120,
    popularity: 88,
    icon: 'waves',
    image: '/images/hair%203.jpg'
  },
  {
    id: 's2',
    name: 'Signature Dreadlocks',
    category: 'Hair & Grooming',
    description: 'Maintenance and restoration for a timeless look.',
    price: 'From $200',
    priceValue: 200,
    popularity: 92,
    icon: 'texture',
  },
  {
    id: 's3',
    name: 'The Gentleman\'s Cut',
    category: 'Hair & Grooming',
    description: 'Precision fade with hot towel finish. Styling for men and women.',
    price: 'From $85',
    priceValue: 85,
    popularity: 98,
    icon: 'content_cut',
  },
  {
    id: 's3b',
    name: 'Hair Braiding',
    category: 'Hair & Grooming',
    description: 'Expert braiding for all hair types. Styles for men and women.',
    price: 'From $100',
    priceValue: 100,
    popularity: 90,
    icon: 'waves',
  },
  {
    id: 's4',
    name: 'Sculpted Manicure',
    category: 'Manicure',
    description: 'Minimalist nail architecture and care for fingernails. For men and women.',
    price: 'From $65',
    priceValue: 65,
    popularity: 75,
    icon: 'spa',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 's5',
    name: 'Luxury Pedicure',
    category: 'Pedicure',
    description: 'Feet and toenail care. Deep hydration and relaxation therapy. For men and women.',
    price: 'From $90',
    priceValue: 90,
    popularity: 82,
    icon: 'footprint',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 's6',
    name: 'Custom Tattooing',
    category: 'Tattooing',
    description: 'Professional tattoo artistry. Consultations and custom designs for men and women.',
    price: 'From $150',
    priceValue: 150,
    popularity: 85,
    icon: 'brush',
    image: 'https://images.unsplash.com/photo-1569516449772-20702452ee28?q=80&w=2070&auto=format&fit=crop'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Braids & Precision Fade',
    description: 'Sharp braided style with clean fade and beard grooming.',
    category: 'Hair & Grooming',
    imageUrl: '/images/hair%203.jpg'
  },
  {
    id: 'g2',
    title: '360 Waves & Beard Design',
    description: 'Defined waves with geometric design and meticulous beard sculpting.',
    category: 'Hair & Grooming',
    imageUrl: '/images/hair%202.jpg'
  },
  {
    id: 'g3',
    title: 'Natural Curls & Low Fade',
    description: 'Tight coils with a clean low fade and crisp line-up.',
    category: 'Hair & Grooming',
    imageUrl: '/images/hair%20one.jpg'
  },
  {
    id: 'g4',
    title: 'Minimalist Nails',
    description: 'Sleek, sophisticated nail art.',
    category: 'Nails',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'g5',
    title: 'Salon Tools',
    description: 'The tools of our craft.',
    category: 'Atmosphere',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'g6',
    title: 'Custom Ink',
    description: 'Professional tattoo artistry and bespoke designs.',
    category: 'Tattooing',
    imageUrl: 'https://images.unsplash.com/photo-1569516449772-20702452ee28?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'g7',
    title: 'Tattoo Artistry',
    description: 'Bold lines and detailed work from our master artists.',
    category: 'Tattooing',
    imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2070&auto=format&fit=crop'
  }
];