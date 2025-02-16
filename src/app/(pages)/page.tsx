import { DemoVideo } from "@/components/demo-video";
import FAQ from "@/components/faq";
import { FeaturesSection } from "@/components/feature-section";
import { Introduce } from "@/components/introduce";
import { PainPoints } from "@/components/pain-points";
import { PricingComp } from "@/components/pricing-comp";
import { UseCases } from "@/components/use-cases";
import { Waitlist } from "@/components/waitlist";
import { WhyUs } from "@/components/why-us";

// code
export default function Home() {
  return (
    <main className="dark:bg-gray-900">
      <Introduce />
      <FeaturesSection />
      {/* <SocialProof/> */}
      <div className="bg-gray-900 mt-5">
        <DemoVideo />
      </div>
      <div className="use_cases lg:mt-0 bg-gray-900">
        <UseCases />
      </div>
      <div className="pain_points pt-20 md:mx-10 mx-5">
        <PainPoints />
      </div>
      <WhyUs />
      <Waitlist />
      <FAQ />
      <PricingComp />
      {/* <Testimonial /> */}
    </main>
  );
}