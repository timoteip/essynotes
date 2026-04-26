import { createClient, type SanityClient } from "next-sanity";

export const sanityClient: SanityClient | null =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    ? createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
        useCdn: true,
        token: process.env.SANITY_API_READ_TOKEN,
      })
    : null;
