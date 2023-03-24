import Learning from "../../public/assets/learning.svg";
import Workshop from "../../public/assets/workshop.svg";
import Translation from "../../public/assets/translate.svg";
import ServiceCard from "../reusables/service-card";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";

export default function Services() {
  const [trigger, setTrigger] = useState(false);
  const opacityAnimation = useSpring({
    from: { opacity: 0 },
    to: trigger && { opacity: 1 },
    // delay: 1000,
    // config: {
    //   duration: 1000,
    //   mass: 5,
    //   friction: 120,
    //   tension: 120,
    // },
  });
  const delayedAnimation = {
    from: { opacity: 0 },
    to: trigger && { opacity: 1 },
    delay: 500,
    config: {
      duration: 1000,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  };
  const services = [
    {
      serviceImage: Learning,
      title: "Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus at facilisis commodo, quam velit blandit velit, vel tincidunt libero enim a ante.",
    },
    {
      serviceImage: Translation,
      title: "Translation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus at facilisis commodo, quam velit blandit velit, vel tincidunt libero enim a ante.",
    },
    {
      serviceImage: Workshop,
      title: "Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lacus at facilisis commodo, quam velit blandit velit, vel tincidunt libero enim a ante.",
    },
  ];
  return (
    <section className="bg-slate-100 py-12 flex justify-center items-center lg:h-[60vh]">
      <div className="flex flex-col  mx-auto px-8 md:px-20 justify-center items-center ">
        <Waypoint onEnter={() => setTrigger(true)}>
          <div className="border-solid w-full flex items-center justify-center flex-col">
            <animated.h2
              className="text-3xl font-bold text-gray-800 mb-6 w-full md:text-center "
              style={opacityAnimation}
            >
              What we offer!
            </animated.h2>
            <animated.p
              className="text-gray-600 mb-8 md:text-center w-full"
              style={useSpring(delayedAnimation)}
            >
              Here are the services we deliver and more
            </animated.p>
          </div>
        </Waypoint>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
