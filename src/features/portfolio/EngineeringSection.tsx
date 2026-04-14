import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";

const insights = [
  {
    title: "Migrating React Application to Next.js",
    summary:
      "Migrated a client-side React application to Next.js, improving SEO and reducing initial load time significantly.",
    details:
      "Led the migration of a React SPA to Next.js by introducing server-side rendering and incremental static regeneration. Optimized routing, code splitting, and critical resource loading to improve SEO visibility and reduce initial page load time for production users.",
    structured: {
      problem:
        "The application relied entirely on client-side rendering, resulting in poor SEO visibility and slow initial page loads, especially for first-time users.",
      approach:
        "Migrated the application to Next.js, introducing server-side rendering for dynamic content and incremental static regeneration for key pages. Implemented automatic code splitting and optimized critical resource delivery.",
      impact:
        "Reduced First Contentful Paint from 7–12s to ~1–1.5s, improved SEO visibility, and delivered a faster, more consistent user experience across production environments.",
    },
    metrics: [
      { label: "FCP", value: "~1–1.5s", color: "text-primary" },
      { label: "SEO Visibility", value: "+40%", color: "text-secondary" },
      { label: "Load Time", value: "-60%", color: "text-primary" },
    ],
  },
  {
    title: "Micro-Frontend Architecture",
    summary:
      "Designed a micro-frontend architecture enabling independent deployments and scalable team workflows.",
    details:
      "Architected a micro-frontend system using Webpack Module Federation, allowing teams to own and deploy independent modules while sharing common dependencies and UI standards, improving scalability and release velocity.",
    structured: {
      problem:
        "A monolithic frontend created deployment bottlenecks where teams were tightly coupled, slowing down releases and increasing coordination overhead.",
      approach:
        "Designed a micro-frontend architecture using Module Federation, enabling independent module ownership while maintaining shared dependencies and consistent UI standards.",
      impact:
        "Reduced deployment conflicts by ~80%, improved team velocity, and enabled scalable development across multiple teams and features.",
    },
    metrics: [
      { label: "Deploy Conflicts", value: "-80%", color: "text-primary" },
      { label: "Team Velocity", value: "+45%", color: "text-secondary" },
      { label: "Scalability", value: "High", color: "text-primary" },
    ],
  },
  {
    title: "Performance Optimization",
    summary:
      "Optimized frontend performance for a production platform serving 60,000+ users.",
    details:
      "Improved application performance through lazy loading, bundle optimization, image optimization, and memoization techniques. Focused on reducing unnecessary re-renders and optimizing critical rendering paths to achieve high Lighthouse scores.",
    structured: {
      problem:
        "The platform experienced slower page loads and inconsistent performance under increasing user load.",
      approach:
        "Implemented lazy loading, optimized bundles, reduced re-renders using memoization techniques, and improved asset delivery strategies across the application.",
      impact:
        "Achieved Lighthouse scores of 95+, reduced load time from ~8–12s to ~3–3.5s, and ensured stable performance for 60,000+ users.",
    },
    metrics: [
      { label: "Lighthouse", value: "95+", color: "text-primary" },
      { label: "Load Time", value: "~3s", color: "text-secondary" },
      { label: "Users", value: "60K+", color: "text-primary" },
    ],
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const EngineeringSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { engineeringMode } = useEngineeringMode();

  return (
    <section id="systems" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// deep dives</p>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Engineering Thinking
          </h2>

          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            A deeper look into how I approach real-world frontend challenges — focusing on architecture, performance, and scalable system design.
          </p>
        </motion.div>

        <div className="space-y-4">
          {insights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="surface-card overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {item.summary}
                  </p>

                  {/* METRICS */}
                  <AnimatePresence>
                    {engineeringMode && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-wrap gap-2 mt-3"
                      >
                        {item.metrics.map((m) => (
                          <motion.div
                            key={m.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/80 border border-border"
                          >
                            <span className="text-[10px] text-muted-foreground font-mono">
                              {m.label}
                            </span>
                            <span
                              className={`text-xs font-bold font-mono ${m.color}`}
                            >
                              {m.value}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={18} className="text-muted-foreground" />
                </motion.div>
              </button>

              {/* EXPANDED */}
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-border pt-4">
                      <AnimatePresence mode="wait">
                        {engineeringMode ? (
                          <motion.div
                            key="structured"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4"
                          >
                            {[
                              { label: "🧩 Problem", content: item.structured.problem },
                              { label: "⚙️ Approach", content: item.structured.approach },
                              { label: "🚀 Impact", content: item.structured.impact },
                            ].map((sub, si) => (
                              <motion.div
                                key={sub.label}
                                custom={si}
                                initial="hidden"
                                animate="visible"
                                variants={contentVariants}
                              >
                                <h4 className="text-xs font-semibold font-mono text-primary mb-1">
                                  {sub.label}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {sub.content}
                                </p>
                              </motion.div>
                            ))}
                          </motion.div>
                        ) : (
                          <motion.p
                            key="paragraph"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            {item.details}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;