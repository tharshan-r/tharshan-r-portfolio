import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// const metrics = [
//   { value: 60, suffix: "K+", label: "Users Impacted" },
//   { value: 3, suffix: "+", label: "Years Experience" },
//   { value: 90, suffix: "%+", label: "Test Coverage" },
//   { value: 5, suffix: "+", label: "Production Systems" },
// ];

const metrics = [
  { value: 60, suffix: "K+", label: "Users Served" },
  { value: 3, suffix: "+", label: "Years of Engineering Experience" },
  { value: 90, suffix: "%+", label: "Code Coverage (Jest)" },
  { value: 5, suffix: "+", label: "Production-Scale Systems Built" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient tabular-nums">
      {count}{suffix}
    </span>
  );
};

const MetricsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="surface-card p-6 text-center hover:glow-primary transition-all duration-300"
            >
              <AnimatedCounter target={m.value} suffix={m.suffix} />
              <p className="text-muted-foreground text-sm mt-2">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
