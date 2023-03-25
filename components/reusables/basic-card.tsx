import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

export default function BasicCard({ course, idx }: any) {
  const [showText, setShowText] = useState(true);
  const [zoom, setZoom] = useState(false);
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
      <div>
        <animated.div
          className={
            "card card-compact max-h-[400px] w-80 sm:w-80 xmd:w-80 lg:w-96 bg-base-100 shadow-sm rounded-md lg:my-0 my-5 ease-linear hover:shadow-2xl cursor-pointer transition-shadow"
          }
          onMouseEnter={() => setZoom(true)}
          onMouseLeave={() => setZoom(false)}
          style={spring}
        >
          <figure>
            <picture>
              <img
                src={course?.image}
                alt="Courses"
                className={`bg-cover bg-center ${
                  zoom && "scale-105"
                } transition-transform duration-[1s] ease-in-out cursor-pointer max-h-[50%]`}
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
              {" "}
              <Link
                href={`/schedule/${course?.language.toLowerCase()}`}
                className={`btn bg-slate-900 rounded-2xl border-none hover:bg-slate-700 ${
                  zoom && "bg-slate-700"
                }`}
              >
                Start learning
              </Link>
            </div>
            <h1>{course.isOnline}</h1>
          </div>
        </animated.div>
      </div>
    </Waypoint>
  );
}
