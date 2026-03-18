
import { Service, GalleryItem } from './types';

/** Business WhatsApp number with country code (no + or spaces). E.g. 2348012345678 for Nigeria */
export const WHATSAPP_PHONE = '2348144381416';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Classic Plaiting',
    category: 'UNISEX HAIRCUT, BRAIDING & STYLING',
    description: 'Intricate patterns and styles crafted with precision. Hair braiding for all.',
    popularity: 88,
    icon: 'waves',
    image: '/images/BRAIDING%204.jpeg'
  },
  {
    id: 's2',
    name: 'Signature Dreadlocks',
    category: 'UNISEX HAIRCUT, BRAIDING & STYLING',
    description: 'Maintenance and restoration for a timeless look.',
    popularity: 92,
    icon: 'texture',
    image: '/images/BRAIDING%203.png'
  },
  {
    id: 's3',
    name: 'The Gentleman\'s Cut',
    category: 'UNISEX HAIRCUT, BRAIDING & STYLING',
    description: 'Precision fade with hot towel finish. Styling for men and women.',
    popularity: 98,
    icon: 'content_cut',
    image: '/images/hair%204.jpeg'
  },
  {
    id: 's3b',
    name: 'Hair Braiding',
    category: 'UNISEX HAIRCUT, BRAIDING & STYLING',
    description: 'Hair braiding for both male and female clients. Expert braiding for all hair types.',
    popularity: 90,
    icon: 'waves',
    image: '/images/BRAIDING%201.jpeg'
  },
  {
    id: 's4',
    name: 'Sculpted Manicure',
    category: 'Manicure and Pedicure',
    description: 'Minimalist nail architecture and care for fingernails. For men and women.',
    popularity: 75,
    icon: 'spa',
    image: '/images/nails%201.jpeg'
  },
  {
    id: 's5',
    name: 'Luxury Pedicure',
    category: 'Manicure and Pedicure',
    description: 'Feet and toenail care. Deep hydration and relaxation therapy. For men and women.',
    popularity: 82,
    icon: 'footprint',
    image: '/images/nails%202.jpeg'
  },
  {
    id: 's6',
    name: 'Custom Tattooing',
    category: 'Tattooing',
    description: 'Professional tattoo artistry. Consultations and custom designs for men and women.',
    popularity: 85,
    icon: 'brush',
    image: '/images/tattoo%201.jpeg'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Hairstyle: Box Braids', description: 'Neat box braids with blonde and dark blend.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/BRAIDING%201.jpeg' },
  { id: 'g2', title: 'Hairstyle: Cornrows & Ponytail', description: 'Cornrows with voluminous ponytail extension.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/BRAIDING%202.png' },
  { id: 'g3', title: 'Hairstyle: Golden Braids', description: 'Cornrows with golden-blonde curly extensions.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/BRAIDING%203.png' },
  { id: 'g4', title: 'Hairstyle: Braiding in Progress', description: 'Expert braiding in progress at NEVO.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/BRAIDING%204.jpeg' },
  { id: 'g5', title: 'Hairstyle: Braids & Fade', description: 'Sharp braided style with clean fade and beard grooming.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%204.jpeg' },
  { id: 'g6', title: 'Haircut: 360 Waves & Beard', description: 'Defined waves with meticulous beard sculpting.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%205.jpeg' },
  { id: 'g7', title: 'Haircut: Modern Fade', description: 'Clean fade with textured waves.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%206.jpeg' },
  { id: 'g8', title: 'Haircut: Textured Curls & Fade', description: 'Golden curls with crisp low fade.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%207.jpeg' },
  { id: 'g9', title: 'Hairstyle: Braids & Clean Fade', description: 'Fresh braids with sharp lineup.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%208.jpeg' },
  { id: 'g10', title: 'Haircut: Natural Curls & Fade', description: 'Tight coils with clean low fade and crisp line-up.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%20one.jpg' },
  { id: 'g11', title: 'Haircut: Precision Cut', description: 'Hair cutting and grooming at NEVO.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/2025-06-25%20(1).jpg%20(1).webp' },
  { id: 'g12', title: 'Haircut: Grooming Session', description: 'Precision styling in our salon.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/2025-06-25%20(1).jpg.webp' },
  { id: 'g13', title: 'Nail: French Tip Manicure', description: 'Classic black-tip French manicure on nude base.', category: 'Manicure and Pedicure', imageUrl: '/images/nails%201.jpeg' },
  { id: 'g14', title: 'Nail: Blue Ombre Design', description: 'Vibrant blue French tips with V-design.', category: 'Manicure and Pedicure', imageUrl: '/images/nails%202.jpeg' },
  { id: 'g15', title: 'Nail: Flame Nail Art', description: 'Red flame design with stiletto nails.', category: 'Manicure and Pedicure', imageUrl: '/images/nails%203.png' },
  { id: 'g16', title: 'Tattoo: Bow & Arrow', description: 'Clean black outline bow and arrow design.', category: 'Tattooing', imageUrl: '/images/tattoo%201.jpeg' },
  { id: 'g17', title: 'Tattoo: Geometric Design', description: 'Stylized cross or abstract ink work.', category: 'Tattooing', imageUrl: '/images/tattoo%202.jpeg' },
  { id: 'g18', title: 'Tattoo: Custom Artistry', description: 'Professional tattoo artistry.', category: 'Tattooing', imageUrl: '/images/tattoo%203.jpeg' },
  { id: 'g19', title: 'NEVO Salon', description: 'Our premium unisex salon space.', category: 'Atmosphere', imageUrl: '/images/shop.webp' },
  { id: 'g20', title: 'NEVO Brand', description: 'Unisex salon craftsmanship.', category: 'Atmosphere', imageUrl: '/images/nevo%20logo.jpeg' },
];