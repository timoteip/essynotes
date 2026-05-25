import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Shop from "@/components/Shop";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import { getProducts, getSiteSettings } from "@/lib/data";

// Revalidate every 60 seconds (ISR) so Sanity edits appear within a minute
export const revalidate = 60;

export default async function HomePage() {
  // Parallel fetch from Sanity + Lemon Squeezy
  const [products, settings] = await Promise.all([
    getProducts(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero followerCounts={settings.followerCounts} />
      <Marquee />
      <About bio={settings.bioShort} />
      <Shop products={products} />
      <Tools />
      <Contact />
    </>
  );
}
