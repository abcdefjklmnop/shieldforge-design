import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  TrustSection,
  ServicesSection,
  PentestSection,
  PricingSection,
  SolutionsSection,
  ContributorsSection,
  FAQSection,
  AboutSection,
  ContactSection,
  Footer,
} from "@/components/sections/AllSections";

export default function Home() {
  return (
    <>
      <Nav />
      <aside role="note" style={{position:"relative",zIndex:60,padding:"16px 5%",background:"#16334a",color:"white"}}>Portfolio concept by Karos Mokrian. Services, prices and report figures are illustrative. No real security scan or message submission.</aside>
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <PentestSection />
        <PricingSection />
        <SolutionsSection />
        <ContributorsSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
