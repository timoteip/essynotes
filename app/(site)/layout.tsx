import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Announce from "@/components/Announce";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Announce />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
