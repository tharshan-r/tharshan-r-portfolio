import { motion, AnimatePresence } from "framer-motion";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";
import { MapPin, Briefcase, Code2, Cpu, Wrench, Server } from "lucide-react";

const engFocusAreas = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "Designing modular, scalable frontend systems using microfrontend architecture and configuration-driven UI patterns, enabling independent deployments and long-term maintainability.",
  },
  {
    icon: Cpu,
    title: "Performance Engineering",
    description:
      "Optimizing application performance through SSR, code splitting, lazy loading, and bundle optimization, reducing FCP from 7–12s to ~1s and achieving sub-2s LCP in production systems.",
  },
  {
    icon: Wrench,
    title: "Developer Experience",
    description:
      "Building reusable component systems, improving documentation with Storybook, and establishing structured code practices to enhance development speed and code quality across teams.",
  },
  {
    icon: Server,
    title: "Production Systems",
    description:
      "Developing and maintaining large-scale applications serving 60,000+ users, focusing on reliability, scalability, and continuous system evolution in real-world production environments.",
  },
];

const AboutSection = () => {
  const { engineeringMode } = useEngineeringMode();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// about</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About Me
          </h2>

          <AnimatePresence mode="wait">
            <motion.p
              key={engineeringMode ? "eng-sub" : "design-sub"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground mt-2 max-w-2xl"
            >
              {engineeringMode
                ? "A breakdown of how I design, optimize, and scale frontend systems in production."
                : "Frontend engineer specializing in scalable architecture, performance, and production-grade web systems."}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="wait">
          {engineeringMode ? (
            /* ================= ENGINEERING MODE ================= */
            <motion.div
              key="eng-about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {engFocusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="surface-card p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <area.icon
                      size={18}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <div>
                      <h3 className="font-mono font-semibold text-foreground text-sm mb-1.5">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* ================= DESIGN MODE ================= */
            <motion.div
              key="design-about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="surface-card p-6 sm:p-8 space-y-5"
            >
              {/* TAGS */}
              <div className="flex flex-wrap gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Frontend Engineer
                </span>

                <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border">
                  <MapPin size={12} /> Bengaluru, India
                </span>

                <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border">
                  <Briefcase size={12} /> 3+ Years Experience
                </span>
              </div>

              {/* CONTENT */}
              <p className="text-muted-foreground leading-relaxed">
                I build scalable, high-performance web applications with a strong focus on architecture, performance, and long-term maintainability.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With 3+ years of experience, I’ve worked on production systems serving 60,000+ users, designing modular frontend architectures and building configuration-driven UI systems using React, Next.js, and TypeScript.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My work focuses on solving complex frontend challenges—optimizing rendering performance, improving load times from 8–12s to ~3s, and building reusable component systems that scale across multiple products and teams.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I approach frontend development as a system—balancing performance, developer experience, and scalability to build applications that are fast, reliable, and easy to evolve over time.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;