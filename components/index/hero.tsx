import { useSpring, animated } from "@react-spring/web";
import { TypeAnimation } from "react-type-animation";
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
    <div className="lg:bg-cover lg:bg-center lg:bg-fixed snap-center  bg-transparent lg:bg-[url('https://polydioms.fra1.cdn.digitaloceanspaces.com/assets%2Fhero.jpg')]">
      <div
        className={`hero min-h-screen hero-responsive bg-gradient-to-r from-[#2b2d42] flex lg:backdrop-blur-[5px] bg-transparent`}
      >
        <animated.div
          className="lg:w-[45%] lg:h-[100vh] flex justify-center items-start flex-col p-20 lg:bg-slate-900  ease-in-out bg-transparent"
          style={curtain}
        >
          <animated.h1
            style={spring}
            className=" bg-transparent mb-5 text-4xl md:text-6xl lg:w-full font-bold text-white font-['PlayfairDisplay'] font-cursive relative font-DancingScript  font-cursive hero-title"
          >
            <span>Language Barrier</span> <br />
            <span className="font-[Dancing Script]">
              Shall not <br /> Hinder <br />{" "}
              <span className="animated-text">Your Success</span>
            </span>
          </animated.h1>
          <animated.span
            className="text-gray-300 mb-5 font-[Inter]"
            style={spring}
          >
            Find inspiration and actionable tips to overcome language barriers
            and achieve your goals today.
          </animated.span>
          <animated.a
            className="btn ease-linear bg-teal-500 hover:bg-slate-600 glass"
            style={delayed}
          >
            Explore our services
          </animated.a>
        </animated.div>
        <div className="lg:w-1/2 h-[100vh] bg-transparent"></div>
      </div>
    </div>
  );
}
