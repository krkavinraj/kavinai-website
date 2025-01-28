import { Hero } from "@/components/hero";
import { PricingComp } from "@/components/pricing-comp";
import { UseCases } from "@/components/use-cases";
import { WhyUs } from "@/components/why-us";


export default function Home() {
  return (
    <main className="dark:bg-gray-900">
      <Hero />
      {/* <SocialProof/> */}
      <UseCases />
      {/* <PainPoints /> */}
      <WhyUs />
      <PricingComp />
      {/* <Testimonial /> */}
      {/* <FAQ /> */}
    </main>
  );
}
