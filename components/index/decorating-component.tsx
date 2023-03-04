import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
export default function DecoratingComponent() {
  const [triggerPicture, setTriggerPicture] = useState(false);
  const pic = useSpring({
    from: { opacity: 0, x: -30 },
    to: triggerPicture && { opacity: 1, x: 0 },
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
            className={`absolute font-[Inter] w-[130px] h-[130px] md:h-[200px] md:w-[200px] rounded-md z-20 bg-slate-200 bg-center bg-cover top-[65%] left-[65%] transition-all flex flex-col justify-center items-center`}
          >
            <Image
              alt="icon earth"
              src={
                "https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Ficons%2Fearth-black.png "
              }
              width={40}
              height={40}
            />
            <p className="text-center text-slate-900 lg:text-2xl">
              More than <br />
              <span className=" lg:text-5xl">10</span>
              <br />
              languages!
            </p>
          </div>
          <div
            className="bg-cover bg-center absolute bg-black top-0 left-0 z-10 h-full w-full rounded-md"
            style={{
              backgroundImage:
                "url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fmobile.jpg')",
            }}
          ></div>
          <div
            className={`absolute w-[130px] h-[130px] rounded-md  md:h-[200px] md:w-[200px] bottom-[65%] right-[65%] bg-slate-400 bg-center bg-cover z-0 transition-all`}
          />
        </animated.div>
      </div>
    </Waypoint>
  );
}
