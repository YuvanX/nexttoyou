import { ExploreSection } from "@/components/explore-section";
import { HeroSection } from "@/components/hero-section";
import FAQsTwo from "@/components/faq";
import { TestimonialSection } from "@/components/testimonials-section";
import { TopBar } from "@/components/ui/topbar";

export default async function Home() {
  
  return (
    <div>
      <TopBar/>
      <HeroSection />
      <ExploreSection />
      <TestimonialSection/>
      <FAQsTwo />
    </div>
  );
}


