import { useSprings, animated, useSpring } from "@react-spring/web";

export default function MyComponent() {
  const [springs, api] = useSprings(
    10,
    (idx) => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
      config: () => ({ duration: idx * 100 }),
    }),
    []
  );

  return (
    <div>
      {springs.map((spring, idx) => (
        <animated.div key={idx} style={spring}>
          Hello World
        </animated.div>
      ))}
    </div>
  );
}
