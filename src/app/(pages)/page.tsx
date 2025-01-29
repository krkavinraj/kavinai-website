import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { PricingComp } from "@/components/pricing-comp";
import { UseCases } from "@/components/use-cases";
import { WhyUs } from "@/components/why-us";

// code
export default function Home() {
  return (
    <main className="dark:bg-gray-900">
      <Hero />
      {/* <SocialProof/> */}
      <UseCases />
      <div className="pain_points lg:mx-20">
      <PainPoints />
      </div>
      <WhyUs />
      <PricingComp />
      {/* <Testimonial /> */}
      {/* <FAQ /> */}
    </main>
  );
}
