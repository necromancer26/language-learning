import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import FillerSection from "./filler-section";
import OtherServicesSection from "./other-services-section";
import ServicesSection from "./services-section";
import Hero from "./hero";
import Footer from "../reusables/footer";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function ParallaxComponent() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      {/* main component */}
      <Parallax ref={parallax} pages={4} style={{ background: "#253237" }}>
        <ParallaxLayer
          offset={0}
          speed={0}
          onClick={() => parallax.current.scrollTo(1)}
        >
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <FillerSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          style={{ background: "blue" }}
          onClick={() => parallax.current.scrollTo(3)}
        >
          <OtherServicesSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          onClick={() => parallax.current.scrollTo(4)}
        >
          <ServicesSection />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={4} speed={1.5}>
          <Footer />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
