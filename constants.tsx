
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
    seoExpanded: 'Looking for a braiding salon in Kano or professional hair styling near you? NEVOO delivers precision plaiting for men and women. Ask our team about knotless braids, Ghana weaving, bridal hairstyles, and wig installation when you book.',
    popularity: 88,
    icon: 'waves',
    image: '/images/BRAIDING%204.jpeg'
  },
  {
    id: 's2',
    name: 'Signature Dreadlocks',
    category: 'UNISEX HAIRCUT, BRAIDING & STYLING',
    description: 'Maintenance and restoration for a timeless look.',
    seoExpanded: 'Expert dreadlocks styling and maintenance in Kano. Our professional hairstylists focus on healthy locs, neat retwists, and a polished finish—ideal if you searched for dreadlocks styling Kano or a trusted hair salon Kano.',
    popularity: 92,
    icon: 'texture',
    image: '/images/BRAIDING%203.png'
  },
  {
    id: 's3',
    name: 'The Gentleman\'s Cut',
    category: 'UNISEX HAIRCUT, BRAIDING & STYLING',
    description: 'Precision fade with hot towel finish. Styling for men and women.',
    seoExpanded: 'Haircut for men in Kano, female haircut salon options, and sharp barbing salon finishes—all in one premium barber shop. Perfect for searches like best salon in Kano Nigeria, hair salon Kano, or grooming salon near me when you want a luxury cut.',
    popularity: 98,
    icon: 'content_cut',
    image: '/images/hair%204.jpeg'
  },
  {
    id: 's3b',
    name: 'Hair Braiding',
    category: 'UNISEX HAIRCUT, BRAIDING & STYLING',
    description: 'Hair braiding for both male and female clients. Expert braiding for all hair types.',
    seoExpanded: 'NEVOO is a leading unisex beauty salon in Nigeria for braids and protective styles. From box braids to cornrows, we are the braiding salon Kano clients trust. Message us for knotless braids, Ghana weaving, bridal hair, or photoshoot styling.',
    popularity: 90,
    icon: 'waves',
    image: '/images/BRAIDING%201.jpeg'
  },
  {
    id: 's4',
    name: 'Sculpted Manicure',
    category: 'Manicure and Pedicure',
    description: 'Minimalist nail architecture and care for fingernails. For men and women.',
    seoExpanded: 'Visit our nail salon in Kano for manicure and pedicure with a luxury spa-and-salon feel. Ask about gel nails, acrylic nails, and nail art. If you searched nail technician near me or beauty salon in Kano, book a session with NEVOO.',
    popularity: 75,
    icon: 'spa',
    image: '/images/nails%201.jpeg'
  },
  {
    id: 's5',
    name: 'Luxury Pedicure',
    category: 'Manicure and Pedicure',
    description: 'Feet and toenail care. Deep hydration and relaxation therapy. For men and women.',
    seoExpanded: 'Relaxation-focused pedicure in Kano—ideal if you want spa in Kano Nigeria energy with real nail care. Pair with our manicure for a full beauty salon in Kano experience. WhatsApp us for bridal prep or birthday glam add-ons.',
    popularity: 82,
    icon: 'footprint',
    image: '/images/nails%202.jpeg'
  },
  {
    id: 's6',
    name: 'Custom Tattooing',
    category: 'Tattooing',
    description: 'Professional tattoo artistry. Consultations and custom designs for men and women.',
    seoExpanded: 'Tattoo studio Kano clients choose for clean work and consultation-first service. Searching best tattoo artist Kano or body art studio Nigeria? Book through NEVOO for custom ink, cover-ups, and design guidance from our artists.',
    popularity: 85,
    icon: 'brush',
    image: '/images/tattoo%201.jpeg'
  },
  {
    id: 's7',
    name: 'ASMR Massages',
    category: 'WELLNESS, SPA & AESTHETICS',
    description: 'Sensory-focused massage for deep relaxation. Calming touch and rhythm for male and female clients.',
    seoExpanded: 'Full-body massage in Kano with an ASMR-inspired, relaxation-first approach. Ideal if you searched spa in Kano Nigeria, body massage Kano, or relaxation spa Kano—book a session for stress relief and premium care.',
    popularity: 86,
    icon: 'self_improvement',
    image: '/images/ASMR%20MASSAGE%20.jpeg'
  },
  {
    id: 's8',
    name: 'Facials',
    category: 'WELLNESS, SPA & AESTHETICS',
    description: 'Skin-focused facial treatments tailored to your skin type. Unisex; men and women welcome.',
    seoExpanded: 'Facial treatment Kano clients trust for a clear, refreshed complexion. As part of our luxury spa experience Kano menu, we combine consultation with gentle, effective protocols.',
    popularity: 84,
    icon: 'face_3',
    image: '/images/Facials%20Spa.jpeg'
  },
  {
    id: 's9',
    name: 'Body Scrub',
    category: 'WELLNESS, SPA & AESTHETICS',
    description: 'Exfoliation and renewal for smooth, healthy-looking skin. Available for all genders.',
    seoExpanded: 'Body scrub services for glow and even texture—pair with our massage or facial for a full spa and salon Kano day. Unisex; ask about add-ons on WhatsApp.',
    popularity: 80,
    icon: 'shower',
    image: '/images/Body%20scrub.jpeg'
  },
  {
    id: 's10',
    name: 'Body Waxing',
    category: 'WELLNESS, SPA & AESTHETICS',
    description: 'Professional waxing for face and body. Discreet, hygienic, and comfortable for men and women.',
    seoExpanded: 'Body waxing in Kano with attention to comfort and aftercare. Beauty salon in Kano standards for hair removal; message us for areas and prep.',
    popularity: 83,
    icon: 'content_cut',
    image: '/images/Body%20waxing%20.jpeg'
  },
  {
    id: 's11',
    name: 'Teeth Whitening',
    category: 'WELLNESS, SPA & AESTHETICS',
    description: 'Brighter smile treatments with care for sensitivity. For male and female clients.',
    seoExpanded: 'Teeth whitening as part of NEVOO grooming—ideal before events or photoshoots. Book alongside facial or body services for a full refresh.',
    popularity: 81,
    icon: 'dentistry',
    image: '/images/Premium%20teeth%20whitening.jpeg'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Hairstyle: Box Braids', description: 'Neat box braids with blonde and dark blend.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/BRAIDING%201.jpeg' },
  { id: 'g2', title: 'Hairstyle: Cornrows & Ponytail', description: 'Cornrows with voluminous ponytail extension.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/BRAIDING%202.png' },
  { id: 'g3', title: 'Hairstyle: Golden Braids', description: 'Cornrows with golden-blonde curly extensions.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/BRAIDING%203.png' },
  { id: 'g4', title: 'Hairstyle: Braiding in Progress', description: 'Expert braiding in progress at NEVOO.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/BRAIDING%204.jpeg' },
  { id: 'g5', title: 'Hairstyle: Braids & Fade', description: 'Sharp braided style with clean fade and beard grooming.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%204.jpeg' },
  { id: 'g6', title: 'Haircut: 360 Waves & Beard', description: 'Defined waves with meticulous beard sculpting.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%205.jpeg' },
  { id: 'g7', title: 'Haircut: Modern Fade', description: 'Clean fade with textured waves.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%206.jpeg' },
  { id: 'g8', title: 'Haircut: Textured Curls & Fade', description: 'Golden curls with crisp low fade.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%207.jpeg' },
  { id: 'g9', title: 'Hairstyle: Braids & Clean Fade', description: 'Fresh braids with sharp lineup.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%208.jpeg' },
  { id: 'g10', title: 'Haircut: Natural Curls & Fade', description: 'Tight coils with clean low fade and crisp line-up.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/hair%20one.jpg' },
  { id: 'g11', title: 'Haircut: Precision Cut', description: 'Hair cutting and grooming at NEVOO.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/2025-06-25%20(1).jpg%20(1).webp' },
  { id: 'g12', title: 'Haircut: Grooming Session', description: 'Precision styling in our salon.', category: 'UNISEX HAIRCUT, BRAIDING & STYLING', imageUrl: '/images/2025-06-25%20(1).jpg.webp' },
  { id: 'g13', title: 'Nail: French Tip Manicure', description: 'Classic black-tip French manicure on nude base.', category: 'Manicure and Pedicure', imageUrl: '/images/nails%201.jpeg' },
  { id: 'g14', title: 'Nail: Blue Ombre Design', description: 'Vibrant blue French tips with V-design.', category: 'Manicure and Pedicure', imageUrl: '/images/nails%202.jpeg' },
  { id: 'g15', title: 'Nail: Flame Nail Art', description: 'Red flame design with stiletto nails.', category: 'Manicure and Pedicure', imageUrl: '/images/nails%203.png' },
  { id: 'g16', title: 'Tattoo: Bow & Arrow', description: 'Clean black outline bow and arrow design.', category: 'Tattooing', imageUrl: '/images/tattoo%201.jpeg' },
  { id: 'g17', title: 'Tattoo: Geometric Design', description: 'Stylized cross or abstract ink work.', category: 'Tattooing', imageUrl: '/images/tattoo%202.jpeg' },
  { id: 'g18', title: 'Tattoo: Custom Artistry', description: 'Professional tattoo artistry.', category: 'Tattooing', imageUrl: '/images/tattoo%203.jpeg' },
  { id: 'g19', title: 'NEVOO Salon', description: 'Our premium unisex salon space.', category: 'Atmosphere', imageUrl: '/images/shop.webp' },
  { id: 'g20', title: 'NEVOO Brand', description: 'Unisex salon craftsmanship.', category: 'Atmosphere', imageUrl: '/images/nevo%20logo.jpeg' },
];