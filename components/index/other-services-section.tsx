import DecoratingComponent from "./decorating-component";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { useState } from "react";
import TiteDescription from "../reusables/title-description";
export default function OtherServicesSection() {
  const [trigger, setTrigger] = useState(false);
  const spring = useSpring({
    from: { opacity: 0, x: 30 },
    to: trigger && { opacity: 1, x: 0 },
    delay: 500,
    config: {
      duration: 1000,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  return (
    <div
      className="lg:h-[100vh] bg-center bg-cover bg-fixed bg-green-500"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1543165796-5426273eaab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
      }}
    >
      <div className="bg-slate-50 h-full flex flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row">
        {/* <div className="flex flex-col justify-around items-center h-full lg:flex-row">
          <GlassyCard />
          <GlassyCard />
        </div> */}
        <div className="flex justify-center items-center lg:w-1/2 w-full h-[700px]">
          <DecoratingComponent />
        </div>
        <Waypoint onEnter={() => setTrigger(true)}>
          {trigger && (
            <animated.div
              style={spring}
              className="flex justify-center items-center flex-col lg:w-1/2 w-full lg:px-5 xl:px-5 2xl:px-5 p-10"
            >
              <TiteDescription
                title="   Do more with Polydioms!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere
                autem aliquam totam excepturi eius sapiente quisquam consectetur
                numquam. Rerum, veniam! Provident commodi magnam veritatis nesciunt
                cumque, alias obcaecati quis! Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit. Hic dolor ut alias qui doloribus impedit
                modi id tenetur quia non! Repudiandae sint minus ut accusamus odio
                sapiente recusandae pariatur perspiciatis?"
              />
            </animated.div>
          )}
        </Waypoint>
      </div>
    </div>
  );
}
