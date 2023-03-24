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
  return (
    <div className="lg:py-0 snap-center lg:h-[100vh] bg-slate-100">
      <div className="flex flex-col md:flex-col lg:flex-row sm:flex-col h-full w-[90%]  mx-auto">
          <div className="flex justify-center md:items-center flex-col lg:w-1/2 w-full text-slate-600">
              <TiteDescription
                title="Learn with your preferred language"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere
                autem aliquam totam excepturi eius"
              />
          </div>
        <GridMinimal />
      </div>
    </div>
  );
}
