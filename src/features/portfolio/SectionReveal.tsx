import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const getInitial = (direction: string) => {
  switch (direction) {
    case "down":
      return { opacity: 0, y: -40 };
    case "left":
      return { opacity: 0, x: 40 };
    case "right":
      return { opacity: 0, x: -40 };
    default:
      return { opacity: 0, y: 40 };
  }
};

const SectionReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: SectionRevealProps) => {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1], // smoother than easeOut
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;