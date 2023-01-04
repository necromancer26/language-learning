import { useSpring, animated } from "@react-spring/web";
export default function Hero() {
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 300,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  const delayed = useSpring({
    // from: { opacity: 0, y: 20 },
    delay: 300,
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
    // config: {
    //   duration: 500,
    //   mass: 5,
    //   tension: 280,
    //   friction: 60,
    // },
  });
  return (
    <div
      className="bg-cover bg-center lg:bg-fixed"
      style={{
        backgroundImage:
          "url('https://polydioms.com/wp-content/uploads/2022/12/pexels-nothing-ahead-4440720-scaled.jpg')",
      }}
    >
      <div className="hero min-h-screen bg-gradient-to-r from-[#2b2d42] flex backdrop-blur-[5px]">
        {/* bg-gradient-to-r from-[#03045e] */}
        <div className="lg:w-1/2 h-[100vh] flex justify-center items-start flex-col p-20 ease-linear">
          <animated.h1
            style={spring}
            className="mb-5 lg:text-5xl text-4xl font-bold text-white font-[playfairdisplay]"
          >
            LANGUAGE BARRIER <br />
            <span className="font-[spectral]">
              SHALL NOT <br /> HINDER <br /> YOUR SUCCESS
            </span>
          </animated.h1>
          <animated.span className="text-gray-300 mb-5" style={spring}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex harum
            delectus, velit eligendi similique eius cum temporibus voluptatum
            officia minima eos aperiam amet iste atque mollitia animi ipsa quam
            earum?
          </animated.span>
          <animated.a className="btn ease-linear" style={delayed}>
            Explore our services
          </animated.a>
        </div>
        <div className="w-1/2 h-[100vh]"></div>
      </div>
    </div>
  );
}
