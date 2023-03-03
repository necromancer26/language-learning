import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
export default function DecoratingComponent() {
  const [triggerPicture, setTriggerPicture] = useState(false);
  const pic = useSpring({
    from: { opacity: 0, x: -30 },
    to: triggerPicture && { opacity: 1, x: 0 },
    delay: 1500,
    config: {
      duration: 1000,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  return (
    <Waypoint onEnter={() => setTriggerPicture(true)}>
      <div>
        <animated.div
          className="relative display h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
          style={pic}
        >
          <div
            className={`absolute w-[130px] h-[130px] md:h-[200px] md:w-[200px] bg-slate-600 bg-center bg-cover z-0 top-[65%] left-[65%] transition-all `}
          />
          <div
            className="bg-cover bg-center absolute bg-black top-0 left-0 z-10 h-full w-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
            }}
          ></div>
          <div
            className={`absolute w-[130px] h-[130px]  md:h-[200px] md:w-[200px] bottom-[65%] right-[65%] bg-slate-400 bg-center bg-cover z-0 transition-all`}
          />
        </animated.div>
      </div>
    </Waypoint>
  );
}
