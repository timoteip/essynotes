import { defineType, defineField } from "sanity";

const video = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "index", type: "number", description: "Display number (n°. 1, n°. 2…)" }),
    defineField({ name: "url", type: "url", title: "Link to video", validation: (r) => r.required() }),
    defineField({
      name: "platform",
      type: "string",
      options: { list: ["tiktok", "instagram", "youtube"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "plays", type: "string", description: 'e.g. "5.9M plays"' }),
    defineField({ name: "timeAgo", type: "string", description: 'e.g. "3 days"' }),
    defineField({ name: "pinned", type: "boolean", initialValue: false }),
    defineField({ name: "thumbnail", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", type: "datetime" }),
  ],
  preview: {
    select: { title: "title", subtitle: "platform", media: "thumbnail" },
  },
});

const tool = defineType({
  name: "tool",
  title: "Tool (Affiliate Link)",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "category", type: "string", description: 'e.g. "Fountain Pen"' }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "url", type: "url", title: "Affiliate URL" }),
    defineField({ name: "symbol", type: "string", description: "Unicode symbol: ✍ ✦ ❦ ❧ ✧ ✒ ✎ ❈" }),
    defineField({ name: "ctaLabel", type: "string", description: 'Default: "Shop on Amazon"' }),
    defineField({ name: "order", type: "number", description: "Display order" }),
  ],
});

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "announceBar", type: "string", description: "Text at top of site" }),
    defineField({ name: "bioShort", type: "text" }),
    defineField({ name: "followerCounts", type: "object", fields: [
      { name: "tiktok", type: "string" },
      { name: "instagram", type: "string" },
      { name: "youtube", type: "string" },
    ] }),
  ],
});

export const schemaTypes = [video, tool, siteSettings];
