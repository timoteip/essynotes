import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Shop from "@/components/Shop";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import { getVideos, getTools, getProducts } from "@/lib/data";

// Revalidate every 60 seconds (ISR) so Sanity edits appear within a minute
export const revalidate = 60;

export default async function HomePage() {
  // Parallel fetch from Sanity + Lemon Squeezy
  const [videos, tools, products] = await Promise.all([
    getVideos(),
    getTools(),
    getProducts(),
  ]);

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Portfolio videos={videos} />
      <Shop products={products} />
      <Tools tools={tools} />
      <Contact />
    </>
  );
}
