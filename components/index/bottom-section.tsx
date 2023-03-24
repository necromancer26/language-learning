import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
const FillerSectionAI = () => {
  const [trigger, setTrigger] = useState(false);
  const spring = useSpring({
    from: { opacity: 0, x: 30 },
    to: trigger && { opacity: 1, x: 0 },
    config: {
      duration: 1000,
      // mass: 5,
      // friction: 120,
      // tension: 120,
    },
  });
  return (
    <section className="bg-slate-300 flex">
      <div className="container text-start lg:w-1/3 my-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {"Never too late to start learning"}
        </h2>
        <p className="text-slate-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        </p>
        <Link href={"/sign-up"}>
          <button className="bg-slate-900 btn text-white px-6 py-3 hover:bg-slate-700">
            Create an account
          </button>
        </Link>
      </div>
      <div className="lg:w-2/3">
        <Waypoint onEnter={() => setTrigger(true)}>
          <animated.div
            style={spring}
            className="w-full h-full bg-bottom bg-cover bg-[url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fdesk-workspace.avif')]"
          >
            <div className="bg-gradient-to-r from-slate-300 flex  bg-transparent h-full" />
          </animated.div>
        </Waypoint>
      </div>
    </section>
  );
};

export default FillerSectionAI;
