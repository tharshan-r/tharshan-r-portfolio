import { motion, AnimatePresence } from "framer-motion";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";

const layers = [
  {
    label: "User Interface",
    description: "Reusable React components, responsive layouts, and accessibility best practices.",
    engLabels: ["Component Library", "Accessibility (A11y)", "Responsive Design"],
  },
  {
    label: "Next.js Gateway",
    description: "Handles routing, server-side rendering, API routes, and middleware for request processing.",
    engLabels: ["SSR", "ISR", "API Routes", "Middleware"],
  },
  {
    label: "Micro-Frontend Modules",
    description: "Independently deployable frontend modules using Webpack Module Federation, enabling teams to develop and release features independently.",
    engLabels: ["Module Federation", "Code Splitting", "Lazy Loading"],
  },
  {
    label: "Shared Component Library",
    description: "Centralized design system and reusable UI components documented and tested using Storybook.",
    engLabels: ["Design System", "Storybook", "Design Tokens"],
  },
  {
    label: "Backend APIs",
    description: "RESTful services providing application data, authentication, and caching mechanisms for performance.",
    engLabels: ["REST APIs", "Caching Layer", "Rate Limiting", "Authentication"],
  },
];

const ArchitectureSection = () => {
  const { engineeringMode } = useEngineeringMode();

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// architecture</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Frontend System Architecture</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            High-level frontend architecture patterns used to build scalable web applications.
            Some details are generalized to respect client confidentiality.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-6">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="w-3 h-3 rounded-full bg-primary glow-primary"
                  />
                </div>

                <div className={`flex ${i % 2 === 0 ? "justify-start pr-[55%]" : "justify-end pl-[55%]"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="surface-card p-4 group hover:glow-primary transition-all duration-300 w-full"
                  >
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {layer.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{layer.description}</p>

                    <AnimatePresence>
                      {engineeringMode && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex flex-wrap gap-1 mt-2"
                        >
                          {layer.engLabels.map((tag) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono border border-primary/20"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
