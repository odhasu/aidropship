import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { CtaButton } from "@/components/CtaButton";
import ApplySection from "@/components/ApplySection";
import { InterviewsSection } from "@/components/InterviewsSection";
import { ProofSection } from "@/components/ProofSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-[984px] mx-auto px-6">
        <HeroSection />
        <CtaButton href="#apply" text="Apply Now" />
        <ApplySection />
        <InterviewsSection />
        <CtaButton href="#apply" text="Apply Now" />
        <ProofSection />
        <CtaButton href="#apply" text="Apply Now" />
      </main>
      <Footer />
    </>
  );
}
