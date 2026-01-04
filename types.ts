
export type SectionId = 'home' | 'about' | 'exhibitions' | 'services' | 'artists' | 'contact' | 'privacy' | 'terms' | 'admin' | 'about-page';

export type ViewMode = 'main' | 'privacy' | 'terms' | 'admin' | 'about-page';

export interface Inquiry {
  id: string;
  name: string;
  contact: string;
  services: string[];
  timestamp: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  description: string;
  status: 'available' | 'sold' | 'private';
}

export interface Exhibition {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  status: 'current' | 'upcoming' | 'past';
  image: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  steps: string[];
  image: string;
  icon: string;
}
