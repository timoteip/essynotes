"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div style={{ padding: "4rem", fontFamily: "sans-serif", color: "#666" }}>
        <h1>Sanity not configured yet</h1>
        <p>Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> to your <code>.env.local</code> to enable the studio.</p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
