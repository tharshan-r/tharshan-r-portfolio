import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    value: 60,
    suffix: "K+",
    label: "Users Impacted",
    sub: "Production systems at scale",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years Experience",
    sub: "Frontend engineering",
  },
  {
    value: 90,
    suffix: "%+",
    label: "Test Coverage",
    sub: "Jest + RTL",
  },
  {
    value: 5,
    suffix: "+",
    label: "Systems Built",
    sub: "Scalable production apps",
  },
];

const AnimatedCounter = ({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // smooth easing
      const eased = 1 - Math.pow(1 - progress, 3);

      start = Math.floor(eased * target);
      setCount(start);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl font-bold text-gradient tabular-nums"
    >
      {count}
      {suffix}
    </span>
  );
};

const MetricsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2">// impact</p>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Engineering Impact
          </h2>

          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            Measurable contributions across performance, scalability, and production systems.
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="surface-card p-6 text-center transition-all duration-300 hover:glow-primary hover:border-primary/40"
            >
              {/* NUMBER */}
              <AnimatedCounter target={m.value} suffix={m.suffix} />

              {/* LABEL */}
              <p className="text-foreground text-sm font-medium mt-3">
                {m.label}
              </p>

              {/* SUBTEXT */}
              <p className="text-xs text-muted-foreground mt-1">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;