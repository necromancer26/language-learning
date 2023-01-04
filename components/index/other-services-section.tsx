import DecoratingComponent from "./decorating-component";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

export default function OtherServicesSection() {
  const [trigger, setTrigger] = useState(false);
  const spring = useSpring({
    from: { opacity: 0, y: 100 },
    to: trigger && { opacity: 1, y: 0 },
    config: {
      duration: 1000,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  return (
    <div
      className="lg:h-[100vh] bg-center bg-cover bg-fixed bg-green-500"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
      }}
    >
      <div className="bg-slate-50 h-full flex flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row">
        {/* <div className="flex flex-col justify-around items-center h-full lg:flex-row">
          <GlassyCard />
          <GlassyCard />
        </div> */}
        <div className="flex justify-center items-center lg:w-1/2 w-full h-[700px]">
          <DecoratingComponent />
        </div>
        <Waypoint onEnter={() => setTrigger(true)}>
          {trigger && (
            <animated.div
              className="flex justify-center items-center flex-col lg:w-1/2 w-full lg:px-5 xl:px-5 2xl:px-5"
              style={spring}
            >
              <h1 className="mb-5 text-5xl font-bold text-gray-600 font-[spectral]">
                Do more with Polydioms!
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                minima eligendi animi ex magnam corrupti. Nobis, voluptate!
                Veritatis, officia autem optio in iste sint sequi perspiciatis
                eos velit, culpa expedita?
              </span>
            </animated.div>
          )}
        </Waypoint>
      </div>
    </div>
  );
}
