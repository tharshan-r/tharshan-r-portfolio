import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Globe, FileCode, Braces,
  LayoutGrid, Layers, Component, Zap,
  TestTube, BookOpen, ShieldCheck, Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";
// import { DesignModeSkillSection } from "@/features/portfolio/SkillsGalaxy";
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
    description: "Building scalable, production-grade web applications",
    skills: [
      {
        name: "React",
        icon: Code2,
        capabilities: [
          "Component-driven architecture for scalable UI systems",
          "Custom hooks for reusable business logic",
          "Optimized rendering using memoization techniques",
          "Error boundaries and resilience patterns",
          "Handling complex state flows in large applications",
        ],
      },
      {
        name: "Next.js",
        icon: Globe,
        capabilities: [
          "Server-Side Rendering (SSR) for performance and SEO",
          "Incremental Static Regeneration (ISR) for scalable pages",
          "File-based routing and middleware usage",
          "API routes for backend integration",
          "Image optimization and performance tuning",
        ],
      },
      {
        name: "TypeScript",
        icon: FileCode,
        capabilities: [
          "Type-safe application architecture",
          "Advanced types (generics, utility types)",
          "Strict type enforcement in large codebases",
          "API contract typing for reliability",
          "Reusable and scalable type systems",
        ],
      },
      {
        name: "JavaScript",
        icon: Braces,
        capabilities: [
          "Deep understanding of closures and execution context",
          "Asynchronous programming (Promises, async/await)",
          "Event loop and non-blocking behavior",
          "Functional programming patterns",
          "Modern ES6+ features in production systems",
        ],
      },
    ],
  },
  {
    title: "Architecture",
    description: "Designing scalable frontend systems and patterns",
    skills: [
      {
        name: "Micro Frontend Architecture",
        icon: LayoutGrid,
        capabilities: [
          "Webpack Module Federation for modular systems",
          "Independent deployments across teams",
          "Shared dependency management strategies",
          "Cross-module communication patterns",
          "Scalable UI architecture for large applications",
        ],
      },
      {
        name: "State Management",
        icon: Layers,
        capabilities: [
          "MobX store design for scalable state handling",
          "Separation of server state and UI state",
          "React Query for async data management",
          "Derived state optimization techniques",
          "State normalization for large datasets",
        ],
      },
      {
        name: "Design Systems",
        icon: Component,
        capabilities: [
          "Reusable component architecture",
          "Design tokens and theming strategies",
          "Consistent UI patterns across applications",
          "Storybook-based documentation",
          "Scalable component abstraction",
        ],
      },
      {
        name: "Performance Optimization",
        icon: Zap,
        capabilities: [
          "Code splitting and lazy loading strategies",
          "Bundle size optimization",
          "Core Web Vitals improvement",
          "SSR-based performance tuning",
          "Memoization and rendering optimization",
        ],
      },
    ],
  },
  {
    title: "Engineering Quality",
    description: "Ensuring reliability, maintainability, and scalability",
    skills: [
      {
        name: "Testing",
        icon: TestTube,
        capabilities: [
          "Unit testing using Jest",
          "Component testing with React Testing Library",
          "Mocking APIs and external services",
          "Maintaining high test coverage (90%+)",
          "Regression prevention strategies",
        ],
      },
      {
        name: "Storybook",
        icon: BookOpen,
        capabilities: [
          "Component documentation and isolation",
          "Visual testing of UI components",
          "Reusable component cataloging",
          "Improving developer collaboration",
        ],
      },
      {
        name: "Code Quality",
        icon: ShieldCheck,
        capabilities: [
          "ESLint and Prettier standardization",
          "Code review best practices",
          "Static code analysis",
          "Maintaining clean and scalable codebases",
        ],
      },
      {
        name: "Observability",
        icon: Activity,
        capabilities: [
          "Frontend performance monitoring",
          "Error tracking and debugging workflows",
          "User behavior analytics integration",
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
                    // <DesignModeSkillSection group={group}/>
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
