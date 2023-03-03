import Image from "next/image";
import AsianCountry from "../../assets/asian-country.jpg";
import AfricanCountry from "../../assets/african-country.jpg";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { useState } from "react";
import TiteDescription from "../reusables/title-description";
import GridMinimal from "./grid-minimal";

export default function FillerSection() {
  const [triggerText, setTriggerText] = useState(false);
  const spring = useSpring({
    from: { opacity: 0, x: -30 },
    to: triggerText && { opacity: 1, x: 0 },
    // delay: 1000,
    config: {
      duration: 1000,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  return (
    <div className="lg:py-0 snap-center lg:h-[100vh] bg-slate-300">
      <div className="flex flex-col md:flex-col lg:flex-row sm:flex-col h-full w-[95%]  mx-auto">
        <Waypoint onEnter={() => setTriggerText(true)}>
          <div className="flex justify-center items-center flex-col lg:w-1/2 w-full 2xl:px-5 p-10 text-slate-600">
            <animated.div style={spring} className="">
              <TiteDescription
                title="Learn with your preferred language"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere
                autem aliquam totam excepturi eius"
              />
            </animated.div>
          </div>
        </Waypoint>
        <GridMinimal />
      </div>
    </div>
  );
}
