import { ChatMessage } from './types';

const SALON_INFO = `NEVOO is a premium unisex salon in Kano, Nigeria.
Services include:
- Hair & Grooming: Cuts, braiding, styling ($85–$200+)
- Manicure & Pedicure ($65–$90+)
- Tattooing (from $150+)`;

const SERVICE_RESPONSES: Record<string, string> = {
  cut: "Our Precision Barbing and Gentleman's Cut starts from $85. Expert stylists tailor every cut to your face shape and style. Styling for men and women. Would you like to book?",
  barbing: "We offer premium barbing services starting from $85. Each cut includes a hot towel finish. Services for both male and female clients.",
  braid: "Hair braiding starts from $100. Expert braiding for all hair types. Men and women welcome.",
  plaiting: "Classic Plaiting starts from $120. Our stylists create intricate patterns with precision. Perfect for special occasions or everyday elegance.",
  dreadlock: "Signature Dreadlocks maintenance and styling start from $200. We specialize in restoration and timeless looks.",
  tattoo: "Custom tattooing starts from $150. Professional tattoo artistry and custom designs for men and women. Book a consultation to discuss your design.",
  nail: "We offer Manicures (fingernails) from $65 and Pedicures (feet and toenails) from $90. Which interests you?",
  manicure: "Sculpted Manicures start from $65—fingernail care with minimalist nail architecture. For men and women.",
  pedicure: "Luxury Pedicures from $90—feet and toenail care with deep hydration and relaxation therapy. Available for all clients.",
  price: "Our services range from $65 (manicures) to $200+ (signature dreadlocks). Most cuts start at $85. I can help you find the right service for your budget.",
  book: "You can book via our Services page or contact us directly on WhatsApp. Would you like me to guide you to our booking options?",
  location: "NEVOO is located at No. 4 Airport Road, by Ahmadiyya Junction, Kano State, Nigeria. We're open Mon–Fri 9AM–8PM, Sat 10AM–9PM, Sun 12PM–6PM.",
  hours: "Mon–Fri: 9AM–8PM | Sat: 10AM–9PM | Sun: 12PM–6PM. Public holidays: Closed.",
  hello: "Welcome to NEVOO. How can I help you choose a look or service today?",
  help: "I can help you explore our services, pricing, booking, or location. What would you like to know?",
  thanks: "You're welcome. Enjoy your visit to NEVOO—we look forward to seeing you.",
};

function getConciergeResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase().trim();

  for (const [key, response] of Object.entries(SERVICE_RESPONSES)) {
    if (lower.includes(key) || lower === key) {
      return response;
    }
  }

  if (lower.length < 3) {
    return "Could you tell me more about what you're looking for? I can help with services, pricing, or booking.";
  }

  return "Thank you for your message. For the best assistance with bookings and custom requests, please reach out to us directly on WhatsApp. Our team will be glad to help you find the perfect service.";
}

export const getConciergeResponseAsync = async (history: ChatMessage[]): Promise<string> => {
  const lastMessage = history[history.length - 1];
  if (!lastMessage || lastMessage.role !== 'user') {
    return "How can I help you today?";
  }
  return getConciergeResponse(lastMessage.text);
};
