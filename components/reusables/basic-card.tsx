import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

export default function BasicCard({course}:any) {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const spring = useSpring({
    from: { opacity: 0, y: 100 },
    to: animationTrigger && { opacity: 1, y: 0 },
    config: {
      duration: 1000,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Waypoint onEnter={() => setAnimationTrigger(true)}>
      <animated.div
        className={
          "card card-compact w-96 bg-base-100 shadow-xl rounded-none lg:my-0 my-5 ease-linear "
        }
        style={spring}
      >
        <figure>
          <img src={course?.image} alt="Courses"  className=" bg-cover bg-center" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.language}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary rounded-none">Start learning</button>
          </div>
        </div>
      </animated.div>
    </Waypoint>
  );
}
