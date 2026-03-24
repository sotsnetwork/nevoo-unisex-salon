
export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  /** Extra crawlable copy mapping service pages to search keywords (shown on service detail). */
  seoExpanded?: string;
  price?: string;
  priceValue?: number;
  popularity: number;
  icon: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}