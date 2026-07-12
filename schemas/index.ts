import { defineType, defineField } from "sanity";

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "followerCounts", type: "object", fields: [
      { name: "tiktok", type: "string" },
      { name: "instagram", type: "string" },
      { name: "youtube", type: "string" },
    ] }),
  ],
  preview: {
    prepare() {
      return { title: "Instagram, TikTok, YouTube follower counts" };
    },
  },
});

const link = defineType({
  name: "link",
  title: "Links",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "category", title: "Category (e.g. Pens, Notebooks)", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "href", title: "URL", type: "url" }),
    defineField({ name: "cta", title: "Button Label (e.g. Shop on Amazon)", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "order", title: "Order (lower = first)", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});

export const schemaTypes = [link, siteSettings];
