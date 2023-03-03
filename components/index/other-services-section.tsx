import DecoratingComponent from "./decorating-component";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { useState } from "react";
import TiteDescription from "../reusables/title-description";
export default function OtherServicesSection() {
  const [trigger, setTrigger] = useState(false);
  const spring = useSpring({
    from: { opacity: 0, x: 30 },
    to: trigger && { opacity: 1, x: 0 },
    config: {
      duration: 1000,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  return (
    <div className="snap-center z-10 w-full bg-slate-900">
      <div className=" h-full mx-auto w-[95%] flex flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex justify-center items-center lg:w-1/2 w-full h-[700px]">
          <DecoratingComponent />
        </div>
        <Waypoint onEnter={() => setTrigger(true)}>
          <div className="flex justify-center items-center flex-col lg:w-1/2 w-full lg:px-5 xl:px-5 2xl:px-5 p-10 text-slate-200">
            <animated.div style={spring} className="">
              <TiteDescription
                title="Do more with Polydioms!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere
                autem aliquam totam excepturi eius sapiente quisquam consectetur
                numquam. Rerum, veniam! "
              />
            </animated.div>
          </div>
        </Waypoint>
      </div>
    </div>
  );
}
