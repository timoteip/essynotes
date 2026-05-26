import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://essynotes.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: new Date("2025-04-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date("2025-04-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refunds`, lastModified: new Date("2025-04-01"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
