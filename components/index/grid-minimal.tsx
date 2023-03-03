import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

export default function GridMinimal() {
  const [triggerPicture, setTriggerPicture] = useState(false);
  const pic = useSpring({
    from: { opacity: 0, x: 30 },
    to: triggerPicture && { opacity: 1, x: 0 },
    delay: 1500,
    config: {
      duration: 1000,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  //   const pic = useSpring({
  //     from: { opacity: 0, x: 30 },
  //     to: { opacity: 1, x: 0 },
  //     delay: 500,
  //     config: {
  //       duration: 1000,
  //       mass: 5,
  //       friction: 120,
  //       tension: 120,
  //     },
  //   });

  return (
    <Waypoint onEnter={() => setTriggerPicture(true)}>
      <div className="w-full h-[500px] lg:w-1/2 lg:h-full flex justify-center items-center ">
        <animated.div
          className=" grid grid-cols-2  items-stretch gap-4 h-[80%] w-[80%] ease-in "
          style={pic}
        >
          <div className="bg-slate-200 row-span-2  scale-90 ease-in-out transition-all">
            <div
              className="h-full bg-center bg-cover animate-infinite-opacity transition-all ease-in"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
              }}
            />
          </div>
          <div className="bg-slate-500 transition-all">
            <div
              className="bg-center bg-cover h-full animate-infinite-opacity animation-delay-6000"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1567564967039-a5839aa2d89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
              }}
            />
          </div>
          <div className="bg-slate-300 row-span-2 bg-center bg-cover scale-90  transition-all">
            <div
              className="bg-center bg-cover h-full animate-infinite-opacity animation-delay-5000"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg?auto=compress&cs=tinysrgb&w=800')",
              }}
            />
          </div>
          <div className="bg-slate-700 bg-cover bg-center scale-95  transition-all ">
            <div
              className="bg-center bg-cover h-full animate-infinite-opacity animation-delay-10000"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/8720186/pexels-photo-8720186.jpeg?auto=compress&cs=tinysrgb&w=800')",
              }}
            />
          </div>
        </animated.div>
      </div>
    </Waypoint>
  );
}
