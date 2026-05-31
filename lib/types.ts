export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  priceDollars: number;
  priceCents: number;
  checkoutUrl: string;
  badge?: string;
  thumbnailUrl?: string;
  images?: string[];
};

export type SiteLink = {
  _id: string;
  name: string;
  category: string;
  description: string;
  href: string;
  cta: string;
  logoUrl?: string;
};

export type SiteSettings = {
  announceBar?: string;
  bioShort?: string;
  followerCounts?: {
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };
};
