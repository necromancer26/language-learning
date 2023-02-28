import { Inter } from "@next/font/google";
import Hero from "../components/index/hero";
// import ServicesSection from "../components/index/services-section";
import OtherServicesSection from "../components/index/other-services-section";
import FillerSection from "../components/index/filler-section";
// import Values from "../components/index/values";
import TestimonialsContainer from "../components/index/testimonials-container";
import FillerSectionAI from "../components/index/ai-filler-section";
import Services from "../components/index/services";
import AnimatedPricing from "../components/reusables/pricing";
import Faqs from "../components/index/faqs";

// import ParallaxComponent from "../components/index/parallax-effect";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default function Home() {
  return (
    <>
      <Hero />
      <FillerSection />
      <OtherServicesSection />
      {/* <ServicesSection /> */}
      {/* <Values /> */}
      <AnimatedPricing />
      <FillerSectionAI />
      <Services />
      <TestimonialsContainer />
      <Faqs />
    </>
  );
}
