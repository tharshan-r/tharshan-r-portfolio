import { motion, AnimatePresence } from "framer-motion";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";
import { MapPin, Briefcase, Code2, Cpu, Wrench, Server } from "lucide-react";

// const engFocusAreas = [
//   {
//     icon: Code2,
//     title: "Frontend Architecture",
//     description: "Designing scalable frontend architectures using React and modular patterns such as micro-frontends to support independent development and maintainable UI systems.",
//   },
//   {
//     icon: Cpu,
//     title: "Performance Engineering",
//     description: "Improving application performance through server-side rendering, code splitting, lazy loading, and bundle optimization to deliver fast and responsive user experiences.",
//   },
//   {
//     icon: Wrench,
//     title: "Developer Experience",
//     description: "Enhancing development workflows through reusable component libraries, Storybook documentation, strong testing practices, and well-structured codebases.",
//   },
//   {
//     icon: Server,
//     title: "Production Systems",
//     description: "Building and maintaining reliable web applications used by thousands of users with a focus on scalability, maintainability, and long-term system stability.",
//   },
// ];


const engFocusAreas = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "Designing scalable frontend systems using modular architectures, including micro-frontends and configuration-driven UI patterns for flexible and maintainable development.",
  },
  {
    icon: Cpu,
    title: "Performance Engineering",
    description:
      "Improving application performance using SSR, code splitting, lazy loading, and bundle optimization, achieving significant improvements in FCP, LCP, and overall load time.",
  },
  {
    icon: Wrench,
    title: "Developer Experience",
    description:
      "Building reusable component systems, Storybook-driven documentation, and structured codebases to improve development efficiency and maintainability.",
  },
  {
    icon: Server,
    title: "Production Systems",
    description:
      "Developing and maintaining large-scale applications serving thousands of users, focusing on scalability, reliability, and long-term system evolution.",
  },
];

const AboutSection = () => {
  const { engineeringMode } = useEngineeringMode();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// about</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Me</h2>
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
                ? "A technical overview of my engineering focus and the systems I work with."
                : "Frontend engineer focused on scalable UI systems and modern web architecture."}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="wait">
          {engineeringMode ? (
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
                    <area.icon size={18} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-mono font-semibold text-foreground text-sm mb-1.5">{area.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="design-about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="surface-card p-6 sm:p-8 space-y-5"
            >
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
              {/* 
              <p className="text-muted-foreground leading-relaxed">
                Who enjoys building scalable web applications that balance performance, maintainability, and great user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the past few years, I've worked on production web applications used by thousands of users, designing modular UI architectures and improving application performance using technologies like React, Next.js, and TypeScript.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving complex UI problems, building reusable component systems, and crafting interfaces that feel fast, intuitive, and reliable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I like exploring new frontend technologies, learning about system design, and continuously improving my engineering skills.
              </p> */}
              <p className="text-muted-foreground leading-relaxed">
                I build scalable, high-performance web applications with a strong focus on architecture, performance, and maintainability.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With 3+ years of experience, I’ve worked on production systems serving 60,000+ users, designing modular frontend architectures and implementing configuration-driven UI systems using React, Next.js, and TypeScript.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My work focuses on solving complex frontend challenges—optimizing rendering performance, building reusable component systems, and enabling scalable UI development through clean and extensible architectures.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I continuously explore system design and modern frontend patterns to build applications that are fast, reliable, and easy to evolve over time.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
