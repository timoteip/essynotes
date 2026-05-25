export type Video = {
  _id: string;
  index: number;
  title: string;
  url: string;
  platform: "tiktok" | "instagram" | "youtube";
  plays: string;
  timeAgo: string;
  pinned?: boolean;
  thumbnailUrl?: string;
};

export type Tool = {
  _id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  symbol?: string;
  ctaLabel?: string;
};

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
