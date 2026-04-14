import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tech: string[];
  engineering: {
    architecture: string;
    performance: string;
    stack: string[];
  };
  caseStudy: {
    problem: string;
    architecture: string;
    challenges: string;
    solutions: string;
    impact: string;
  };
}

const projects: Project[] = [
  {
    title: "Amazon SmartBiz",
    subtitle: "E-commerce Website Builder",
    description:
      "A configuration-driven platform enabling businesses to create and manage scalable online storefronts with dynamic layouts.",
    impact:
      "Serving 60K+ users with improved performance, SEO, and scalable frontend architecture",
    tech: ["React", "Next.js", "TypeScript", "Micro Frontends", "Tailwind CSS"],
    engineering: {
      architecture:
        "Implemented a microfrontend architecture using Module Federation to enable independent deployments and scalable UI systems.",
      performance:
        "Reduced First Contentful Paint from ~7–12s to ~1–1.5s by migrating to Next.js with SSR and optimizing bundle delivery.",
      stack: ["React", "Next.js", "TypeScript", "Module Federation", "React Query"],
    },
    caseStudy: {
      problem:
        "Businesses needed a scalable way to build customizable storefronts without increasing development complexity.",
      architecture:
        "Built a microfrontend-based system with Module Federation and Next.js SSR, supported by a configuration-driven UI layer.",
      challenges:
        "Maintaining UI consistency across modules, handling independent deployments, and optimizing performance at scale.",
      solutions:
        "Introduced shared component systems, configuration-driven rendering, and SSR with optimized code splitting.",
      impact:
        "Enabled scalable storefront creation for 60K+ users while significantly improving performance and SEO.",
    },
  },
  {
    title: "DigiGoal",
    subtitle: "Data Insights Platform",
    description:
      "A frontend platform designed to visualize complex datasets and enable faster business decision-making.",
    impact:
      "Reduced time-to-insight by 3x through optimized data handling and rendering",
    tech: ["React", "TypeScript", "Recharts", "REST APIs", "MobX"],
    engineering: {
      architecture:
        "Built a modular SPA with reusable visualization components and centralized state management.",
      performance:
        "Optimized rendering of large datasets using memoization and efficient state updates.",
      stack: ["React", "TypeScript", "MobX", "Recharts", "REST APIs"],
    },
    caseStudy: {
      problem:
        "Teams struggled to extract insights from large and complex datasets across multiple sources.",
      architecture:
        "Developed a React-based SPA using MobX for state management and modular chart components.",
      challenges:
        "Handling large datasets while maintaining smooth UI performance.",
      solutions:
        "Optimized data transformations, reduced unnecessary re-renders, and built reusable chart components.",
      impact:
        "Improved data accessibility and reduced analysis time by 3x with consistent UI performance.",
    },
  },
  {
    title: "Bosch ParkZeus",
    subtitle: "IoT Dashboard Platform",
    description:
      "A real-time dashboard for monitoring and managing smart parking systems using live sensor data.",
    impact:
      "Enabled monitoring of 500+ sensors with real-time updates and high reliability",
    tech: ["React", "TypeScript", "WebSockets", "SCSS"],
    engineering: {
      architecture:
        "Designed a real-time frontend system using WebSocket-based communication for continuous data updates.",
      performance:
        "Optimized UI rendering for live data streams to ensure responsive updates with minimal latency.",
      stack: ["React", "JavaScript", "WebSockets", "SCSS"],
    },
    caseStudy: {
      problem:
        "Monitoring large-scale IoT sensor data required a responsive frontend capable of handling continuous real-time updates.",
      architecture:
        "Built a React-based dashboard integrating WebSocket streams for real-time data handling.",
      challenges:
        "Managing continuous data flow while keeping UI responsive and stable.",
      solutions:
        "Implemented WebSocket reconnection logic and optimized rendering to avoid performance bottlenecks.",
      impact:
        "Enabled real-time monitoring of 500+ sensors with stable performance and low-latency updates.",
    },
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const { engineeringMode } = useEngineeringMode();

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group surface-card p-6 cursor-pointer transition-all duration-300 hover:glow-primary relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>

                <p className="text-sm text-secondary font-mono mb-2">
                  {project.subtitle}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <p className="text-xs text-primary mb-4">
                  {project.impact}
                </p>

                <AnimatePresence>
                  {engineeringMode && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 space-y-2 border-t border-border pt-3"
                    >
                      <div>
                        <p className="text-xs font-mono text-primary">
                          Architecture
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {project.engineering.architecture}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-mono text-primary">
                          Performance
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {project.engineering.performance}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
  {selected && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="surface-card p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        {/* HEADER */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              {selected.title}
            </h3>
            <p className="text-secondary font-mono text-sm">
              {selected.subtitle}
            </p>
          </div>

          <button
            onClick={() => setSelected(null)}
            className="text-muted-foreground hover:text-foreground p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* CASE STUDY CONTENT */}
        <div className="space-y-5">
          {[
            { title: "Problem", content: selected.caseStudy.problem },
            { title: "Architecture", content: selected.caseStudy.architecture },
            { title: "Challenges", content: selected.caseStudy.challenges },
            { title: "Solutions", content: selected.caseStudy.solutions },
            { title: "Impact", content: selected.caseStudy.impact },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-primary mb-1">
                {section.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-1.5 mt-6">
          {selected.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default ProjectsSection;