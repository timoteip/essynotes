import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "essynotes",
  title: "essynotes — studio",
  projectId: "ilkwq2nn",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
