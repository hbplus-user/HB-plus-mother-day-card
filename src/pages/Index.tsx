import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packs } from "@/components/Packs";
import { Story } from "@/components/Story";
import { Details } from "@/components/Details";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <Packs />
      <Story />
      <Details />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
