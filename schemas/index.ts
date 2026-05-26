import { defineType, defineField } from "sanity";

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

export const schemaTypes = [siteSettings];
