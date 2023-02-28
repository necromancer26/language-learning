import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

export default function BasicCard({ course, idx }: any) {
  const [showText, setShowText] = useState(true);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const spring = useSpring({
    from: { opacity: 0, y: 100 },
    to: animationTrigger && { opacity: 1, y: 0 },
    config: {
      duration: 500,
      mass: 5,
      friction: 120,
      tension: 120,
    },
    // delay:50*idx
  });
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Waypoint onEnter={() => setAnimationTrigger(true)} key={idx}>
      <animated.div
        className={
          "card card-compact w-80 sm:w-80 xmd:w-80 lg:w-96 bg-base-100 shadow-xl rounded-none lg:my-0 my-5 ease-linear "
        }
        style={spring}
      >
        <figure>
          <picture>
            <img
              src={course?.image}
              alt="Courses"
              className=" bg-cover bg-center"
              width={800}
              height={500}
            />
          </picture>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.language}</h2>
          <p
            className={`${showText && "truncate"} hover:cursor-pointer`}
            onClick={() => setShowText(!showText)}
          >
            {course?.description}
          </p>
          <div className="card-actions justify-end">
            <Link href="schedule">
              {" "}
              <button className="btn btn-primary rounded-none">
                Start learning
              </button>
            </Link>
          </div>
        </div>
      </animated.div>
    </Waypoint>
  );
}
