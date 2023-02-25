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
  return (
    <div
      className="bg-cover bg-center lg:bg-fixed snap-center"
      style={{
        backgroundImage: "url('/assets/hero.jpg')",
      }}
    >
      <div className={`hero min-h-screen bg-gradient-to-r from-[#2b2d42] flex backdrop-blur-[5px]`}>
        <animated.div
          className="lg:w-[45%] lg:h-[100vh] flex justify-center items-start flex-col p-20 lg:bg-slate-900  ease-in-out"
          style={curtain}
        >
          <animated.h1
            style={spring}
            className="mb-5 text-4xl lg:text-5xl lg:w-full md:text-4xl font-bold text-white font-[spectral] relative "
          >
            <span>LANGUAGE BARRIER</span> <br />
            <span className="font-[spectral]">
              SHALL NOT <br /> HINDER <br /> YOUR SUCCESS
            </span>
            {/* <TypeAnimation
              sequence={[
                "LANGUAGE BARRIER", // Types 'One'
                3000, // Waits 1s
                "SHALL NOT HINDER YOUR SUCCESS!", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                // () => {
                //   console.log("Done typing!"); // Place optional callbacks anywhere in the array
                // },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1.1em" }}
              speed={99}
            /> */}
          </animated.h1>
          <animated.span className="text-gray-300 mb-5  " style={spring}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex harum
            delectus, velit eligendi similique eius cum temporibus voluptatum
            officia minima eos aperiam amet iste atque mollitia animi ipsa quam
            earum?
          </animated.span>
          <animated.a
            className="btn ease-linear bg-teal-500 hover:bg-slate-600 glass"
            style={delayed}
          >
            Explore our services
          </animated.a>
        </animated.div>
        <div className="w-1/2 h-[100vh]"></div>
      </div>
    </div>
  );
}
