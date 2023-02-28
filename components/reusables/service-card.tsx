import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

export default function ServiceCard({
  service,
  animationTrigger,
  index = 0,
}: any) {
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
    <animated.div className="w-full  px-2 mb-4" style={spring}>
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <div className="flex my-5 ">
          <Image
            // fill
            src={service?.serviceImage}
            alt="service icon"
            // width={50}
            height={40}
            className=""
          />
          <h3 className="text-lg font-medium text-gray-800 mb-4 ml-4">
            {service?.title}
          </h3>
        </div>
        <p className="text-gray-600">{service?.description}</p>
      </div>
    </animated.div>
  );
}
