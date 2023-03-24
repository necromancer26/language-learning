import Image from "next/image";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";

export default function ServiceCard({ service, index = 0 }: any) {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const spring = useSpring({
    from: { opacity: 0, y: 100 },
    to: animationTrigger && { opacity: 1, y: 0 },
    config: {
      duration: 500,
      mass: 5,
      friction: 120,
      tension: 120,
    },
    delay: 200 * index,
  });
  return (
    <Waypoint onEnter={() => setAnimationTrigger(true)} key={index}>
      <div>
        <animated.div className="w-full mb-4" style={spring}>
          <div className="bg-slate-50 py-6 px-4 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div className="flex my-5 ">
              <Image
                // fill
                src={service?.serviceImage}
                alt="service icon"
                // width={50}
                height={40}
                className=""
              />
              <h3 className="text-lg font-medium text-slate-900 mb-4 ml-4">
                {service?.title}
              </h3>
            </div>
            <p className="text-slate-500 text-sm">{service?.description}</p>
          </div>
        </animated.div>
      </div>
    </Waypoint>
  );
}
