import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";

const insights = [
  {
    title: "Migrating React Application to Next.js",
    summary: "Improved SEO visibility and reduced initial page load time by introducing server-side rendering.",
    details:
      "Migrated the application to Next.js, introducing server-side rendering for dynamic content and incremental static regeneration for product pages. Implemented automatic code splitting and optimized critical CSS delivery, resulting in improved search engine visibility and significantly reduced initial page load time.",
    structured: {
      problem: "The React SPA relied entirely on client-side rendering, leading to poor SEO visibility and slower initial page loads.",
      approach: "Migrated the application to Next.js, introducing server-side rendering for dynamic content and incremental static regeneration for product pages. Implemented automatic code splitting and optimized critical CSS delivery.",
      impact: "Improved search engine visibility and significantly reduced initial page load time while maintaining scalability.",
    },
    metrics: [
      { label: "SEO Improvement", value: "+40%", color: "text-primary" },
      { label: "Load Time Reduction", value: "2x faster", color: "text-secondary" },
      { label: "Bundle Size", value: "-60%", color: "text-primary" },
    ],
  },
  {
    title: "Micro-Frontend Architecture",
    summary: "Implemented module federation enabling independent deployments and scalable frontend development.",
    details:
      "Designed a micro-frontend architecture using Webpack Module Federation. Each team owned independent modules while sharing common UI components and design standards, enabling independent deployments and improved development velocity.",
    structured: {
      problem: "A monolithic frontend created deployment bottlenecks where teams blocked each other during releases.",
      approach: "Designed a micro-frontend architecture using Webpack Module Federation. Each team owned independent modules while sharing common UI components and design standards.",
      impact: "Enabled independent deployments, reduced release coordination overhead, and improved development velocity across teams.",
    },
    metrics: [
      { label: "Deploy Conflicts", value: "-80%", color: "text-primary" },
      { label: "Team Velocity", value: "+45%", color: "text-secondary" },
      { label: "Test Coverage", value: "90%+", color: "text-primary" },
    ],
  },
  {
    title: "Performance Optimization",
    summary: "Optimized performance for a high-traffic platform serving thousands of users.",
    details:
      "Implemented lazy loading, image optimization, bundle analysis, and critical CSS extraction. Used memoization techniques such as React.memo, useMemo, and useCallback to reduce unnecessary re-renders, achieving consistently high Lighthouse scores.",
    structured: {
      problem: "The platform experienced slower page loads and lower Lighthouse scores under heavier traffic.",
      approach: "Implemented lazy loading, image optimization, bundle analysis, and critical CSS extraction. Used memoization techniques such as React.memo, useMemo, and useCallback to reduce unnecessary re-renders.",
      impact: "Achieved consistently high Lighthouse scores and improved page responsiveness across the platform.",
    },
    metrics: [
      { label: "Lighthouse Score", value: "95+", color: "text-primary" },
      { label: "FCP", value: "<1s", color: "text-secondary" },
      { label: "Concurrent Users", value: "60K+", color: "text-primary" },
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// deep dives</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Engineering Thinking</h2>
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
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.summary}</p>

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
                            <span className="text-[10px] text-muted-foreground font-mono">{m.label}</span>
                            <span className={`text-xs font-bold font-mono ${m.color}`}>{m.value}</span>
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

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
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
                            transition={{ duration: 0.2 }}
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
                                <h4 className="text-xs font-semibold font-mono text-primary mb-1">{sub.label}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{sub.content}</p>
                              </motion.div>
                            ))}
                          </motion.div>
                        ) : (
                          <motion.p
                            key="paragraph"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
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
