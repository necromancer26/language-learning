import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

export default function PricingCard({
  index,
  course,
  selectedIndex,
  setSelectedIndex,
}: any) {
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const spring = useSpring({
    from: { opacity: 0, y: 100 },
    to: animationTrigger && { opacity: 1, y: 0 },
    config: {
      duration: 300,
      mass: 5,
      friction: 120,
      tension: 120,
    },
    delay: 200 * index,
  });
  return (
    <Waypoint onEnter={() => setAnimationTrigger(true)} key={index}>
      <div>
        <animated.div
          key={course.title}
          className={`bg-slate-100 py-8 px-4 shadow-lg transition-all min-h-[300px] ${
            selectedIndex === index ? "border-l-4 border-teal-500" : ""
          } hover:shadow-xl transform hover:-translate-y-1 cursor-pointer ease-linear`}
          onClick={() => setSelectedIndex(index)}
          style={spring}
        >
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            {course.title}
          </h3>
          <h2 className="text-5xl lg:text-4xl md:text-3xl font-medium text-gray-800 mb-4">
            {course.price}
          </h2>
          <ul className="list-disc list-inside">
            {course?.features?.map((feature: string) => (
              <li key={feature} className="mb-2 text-sm ">
                {feature}
              </li>
            ))}
          </ul>
        </animated.div>
      </div>
    </Waypoint>
  );
}
