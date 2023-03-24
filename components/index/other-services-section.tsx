import DecoratingComponent from "./decorating-component";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { useState } from "react";
import TiteDescription from "../reusables/title-description";
export default function OtherServicesSection() {
  return (
    <div className="snap-center z-10 w-full bg-slate-900 pt-12">
      <div className="min-h-[800px] mx-auto px-8 flex flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex justify-center items-center lg:w-1/2 w-full h-[450px] md:h-[700px]">
          <DecoratingComponent />
        </div>
        <div className="flex justify-center items-center flex-col lg:w-1/2 w-full text-slate-200">
          <div className="">
            <TiteDescription
              title="Do more with Polydioms!"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere
                autem aliquam totam excepturi eius sapiente quisquam consectetur
                numquam. Rerum, veniam! "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
