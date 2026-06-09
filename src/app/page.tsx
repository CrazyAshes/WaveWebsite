import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { DepthGauge } from "@/components/ui/DepthGauge";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AmbientParticles } from "@/components/ui/AmbientParticles";
import { Applications } from "@/components/sections/Applications";
import { Documents } from "@/components/sections/Documents";
import { Capabilities } from "@/components/sections/Capabilities";
import { Hero } from "@/components/sections/Hero";
import { ImpactData } from "@/components/sections/ImpactData";
import { Mission } from "@/components/sections/Mission";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Team } from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <DepthGauge />
      <AmbientParticles />
      <main className="bg-[#020711]">
        <Hero />
        <ProductShowcase />
        <Mission />
        <Capabilities />
        <ImpactData />
        <Applications />
        <Documents />
        <Team />
      </main>
      <Footer />
    </>
  );
}
