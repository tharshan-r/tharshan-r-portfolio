import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Globe, FileCode, Braces,
  LayoutGrid, Layers, Component, Zap,
  TestTube, BookOpen, ShieldCheck, Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";

interface Skill {
  name: string;
  icon: LucideIcon;
  capabilities: string[];
}

interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description: "Core technologies for building modern web applications",
    skills: [
      {
        name: "React",
        icon: Code2,
        capabilities: [
          "Hooks architecture",
          "Component composition",
          "State and props management",
          "Performance optimization (React.memo, useMemo, useCallback)",
          "Error boundaries",
        ],
      },
      {
        name: "Next.js",
        icon: Globe,
        capabilities: [
          "Server-Side Rendering (SSR)",
          "Incremental Static Regeneration (ISR)",
          "File-based routing",
          "API routes",
          "Middleware",
          "Image optimization",
        ],
      },
      {
        name: "TypeScript",
        icon: FileCode,
        capabilities: [
          "Type-safe component development",
          "Generics and utility types",
          "Strict type checking",
          "API response typing",
          "Reusable type definitions",
        ],
      },
      {
        name: "JavaScript",
        icon: Braces,
        capabilities: [
          "ES6+ modern JavaScript patterns",
          "Closures and scope management",
          "Async programming (Promises / async-await)",
          "Event loop understanding",
          "Functional programming concepts",
        ],
      },
    ],
  },
  {
    title: "Architecture",
    description: "Scalable patterns for complex systems",
    skills: [
      {
        name: "Micro Frontend Architecture",
        icon: LayoutGrid,
        capabilities: [
          "Webpack Module Federation",
          "Independent module deployments",
          "Shared dependency management",
          "Cross-module communication",
          "Scalable UI architecture",
        ],
      },
      {
        name: "State Management",
        icon: Layers,
        capabilities: [
          "MobX store architecture",
          "Global vs local state handling",
          "Server state management with React Query",
          "Derived state optimization",
          "State normalization",
        ],
      },
      {
        name: "Design Systems",
        icon: Component,
        capabilities: [
          "Reusable UI component architecture",
          "Design tokens and theming",
          "Component abstraction patterns",
          "Storybook documentation",
          "Consistent UI standards",
        ],
      },
      {
        name: "Performance Optimization",
        icon: Zap,
        capabilities: [
          "Code splitting",
          "Lazy loading",
          "Bundle size optimization",
          "Lighthouse performance tuning",
          "Memoization techniques",
        ],
      },
    ],
  },
  {
    title: "Engineering Quality",
    description: "Practices that ensure reliability and maintainability",
    skills: [
      {
        name: "Testing",
        icon: TestTube,
        capabilities: [
          "Unit testing with Jest",
          "Component testing with React Testing Library",
          "Mocking APIs",
          "Test coverage monitoring",
          "Snapshot testing",
        ],
      },
      {
        name: "Storybook",
        icon: BookOpen,
        capabilities: [
          "Component documentation",
          "UI isolation testing",
          "Visual regression validation",
          "Reusable component catalog",
        ],
      },
      {
        name: "Code Quality",
        icon: ShieldCheck,
        capabilities: [
          "ESLint + Prettier configuration",
          "Code review practices",
          "Static code analysis",
          "SonarQube quality checks",
        ],
      },
      {
        name: "Observability",
        icon: Activity,
        capabilities: [
          "Frontend performance monitoring",
          "Error tracking and debugging",
          "User analytics integration",
          "Runtime performance analysis",
        ],
      },
    ],
  },
];

const SkillCapabilities = ({ skill, delay }: { skill: Skill; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="space-y-1.5"
  >
    <span className="text-xs font-semibold font-mono text-foreground">{skill.name}</span>
    <ul className="space-y-1 ml-3">
      {skill.capabilities.map((cap) => (
        <li key={cap} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
          <span className="text-primary mt-0.5 shrink-0">›</span>
          <span>{cap}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillsSection = () => {
  const { engineeringMode } = useEngineeringMode();

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills & Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15 }}
              whileHover={{ y: -4 }}
              className="surface-card p-6 group transition-all duration-300 hover:glow-primary relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.06), hsl(var(--secondary) / 0.04))" }}
              />

              <div className="relative z-10">
                <h3 className="text-sm font-semibold text-secondary font-mono mb-1 group-hover:text-primary transition-colors duration-300">
                  {group.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-5">{group.description}</p>

                <AnimatePresence mode="wait">
                  {engineeringMode ? (
                    <motion.div
                      key="capabilities"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      {group.skills.map((skill, si) => (
                        <SkillCapabilities
                          key={skill.name}
                          skill={skill}
                          delay={gi * 0.1 + si * 0.07}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icons"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      {group.skills.map((skill, si) => {
                        const Icon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.15 + si * 0.07 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/40 border border-transparent hover:border-primary/20 hover:bg-muted/70 transition-all duration-200 cursor-default"
                          >
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Icon size={18} className="text-primary" />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
