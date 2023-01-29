import { Inter } from "@next/font/google";
import Hero from "../components/index/hero";
import ServicesSection from "../components/index/services-section";
import OtherServicesSection from "../components/index/other-services-section";
import FillerSection from "../components/index/filler-section";
import Values from "../components/index/values";
import Footer from "../components/reusables/footer";
import Testimonials from "../components/index/testimonials";
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
      <ServicesSection />
      <Values />
      <Testimonials />
    </>
  );
}
