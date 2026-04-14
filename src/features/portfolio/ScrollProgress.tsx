import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[4px]">

      {/* Background track */}
      <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm" />

      {/* Progress bar */}
      <motion.div
        className="absolute inset-y-0 left-0 origin-left"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
        }}
      />

      {/* Glow layer */}
      <motion.div
        className="absolute inset-y-0 left-0 origin-left blur-md opacity-60"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
        }}
      />
    </div>
  );
};

export default ScrollProgress;