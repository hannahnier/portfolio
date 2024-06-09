import { useInView } from "react-intersection-observer";

const Animated = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`animated ${inView ? "slide-in" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default Animated;
