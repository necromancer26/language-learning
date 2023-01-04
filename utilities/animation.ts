import { useSpring } from "@react-spring/web";
export const slowElegantAnimation = useSpring({
  from: { opacity: 0, y: 100 },
  to: { opacity: 1, y: 0 },
  config: {
    duration: 1500,
    mass: 5,
    friction: 120,
    tension: 120,
  },
});
