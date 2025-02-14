import FAQ from "@/components/faq";
import { FeaturesSection } from "@/components/feature-section";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { PricingComp } from "@/components/pricing-comp";
import { UseCases } from "@/components/use-cases";
import { Waitlist } from "@/components/waitlist";
import { WhyUs } from "@/components/why-us";

// code
export default function Home() {
  return (
    <main className="dark:bg-gray-900">
      <Hero />
      {/* <SocialProof/> */}
      <div className="use_cases lg:mt-24">
        <UseCases />
      </div>
      <div className="pain_points lg:mx-20">
        <PainPoints />
      </div>
      <WhyUs />
      <Waitlist />
      <FeaturesSection />
      <FAQ />
      <PricingComp />
      {/* <Testimonial /> */}
    </main>
  );
}