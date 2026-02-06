export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'maki' | 'uramaki' | 'special';
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ReviewStats {
  source: string;
  rating: number;
  label: string;
}
