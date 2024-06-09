import { useInView } from "react-intersection-observer";

const AnimatedTurn = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`animatedTurn ${inView ? "turn-around" : ""}`}>
      {children}
    </div>
  );
};

export default AnimatedTurn;
