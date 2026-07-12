import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Shop from "@/components/Shop";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import { getLinks, getProducts, getSiteSettings } from "@/lib/data";

// Revalidate every 60 seconds (ISR) so Sanity edits appear within a minute
export const revalidate = 60;

export default async function HomePage() {
  // Parallel fetch from Sanity + Lemon Squeezy
  const [products, settings, links] = await Promise.all([
    getProducts(),
    getSiteSettings(),
    getLinks(),
  ]);

  return (
    <>
      <Hero followerCounts={settings.followerCounts} />
      <Marquee />
      <About />
      <Shop products={products} />
      <Tools links={links} />
      <Contact />
    </>
  );
}
