import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const curtain = useSpring({
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    config: {
      duration: 500,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 500,
      mass: 5,
      friction: 120,
      tension: 120,
    },
    delay: 500,
  });
  const delayed = useSpring({
    delay: 600,
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
  });
  // lg:bg-[url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fhero.jpg')]
  return (
    <div className="bg-cover bg-center lg:bg-fixed snap-center  bg-[url('/assets/hero-min.jpg')]">
      <div
        className={`hero min-h-[100vh] bg-gradient-to-r from-[#2b2d42] flex backdrop-blur-[5px]`}
      >
        <animated.div
          className="w-fulls lg:w-[45%] lg:h-[100vh] flex justify-center text-center md:items-start flex-col px-8 md:p-20 lg:bg-slate-900  ease-in-out bg-transparent relative"
          style={curtain}
        >
          {/* <h1 className="clipped-text text-[200px] font-bold absolute text-slate-900 bottom-[25%] left-[20%]">Polydioms</h1> */}

          <animated.h1
            style={spring}
            className=" bg-transparent mb-5 text-4xl md:text-5xl flex flex-col gap-4 text-center md:items-start lg:w-full font-bold text-white font-['Inter'] font-cursive relative font-DancingScript font-cursive hero-title"
          >
            <span className="text-center md:text-start">
              Language Barrier Shall Not Hinder{" "}
            </span>
            <span className="animated-text font-[Satisfy] p-0 bg-gray-400 h-auto text-5xl font-bold">
              Your Success
            </span>
          </animated.h1>

          <animated.span
            className="text-gray-300 mb-5 font-[Inter] z-10 text-lg text-center md:text-start"
            style={spring}
          >
            Find inspiration and actionable tips to overcome language barriers
            and achieve your goals today.
          </animated.span>
          <Link href={"/about-us"} className=" flex justify-center items-center lg:justify-start w-full" >
            <animated.button
              className="ease-linear animated-button cursor-pointer z-10 rounded-xl"
              style={delayed}
            >
              Explore our services
            </animated.button>
          </Link>
        </animated.div>
        <div className="lg:w-1/2 h-[100vh] bg-transparent"></div>
      </div>
    </div>
  );
}
