import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "../components/index/hero";
import ServicesSection from "../components/index/services-section";
import OtherServicesSection from "../components/index/other-services-section";
import FillerSection from "../components/index/filler-section";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default function Home() {
  return (
    <>
      <Head>
        <title>Polydioms</title>
        <meta name="description" content="Polydioms, language services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FillerSection />
      <OtherServicesSection />
      <ServicesSection />
    </>
  );
}
