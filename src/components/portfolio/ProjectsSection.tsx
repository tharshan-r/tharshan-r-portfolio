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

// const projects: Project[] = [
//   {
//     title: "Amazon SmartBiz",
//     subtitle: "E-commerce Website Builder",
//     description: "A comprehensive platform enabling businesses to create and manage their online stores with drag-and-drop functionality.",
//     impact: "Serving 60K+ users with a scalable micro-frontend architecture",
//     tech: ["React", "Next.js", "TypeScript", "Micro Frontends", "Tailwind CSS"],
//     engineering: {
//       architecture: "Micro-frontend architecture using Module Federation enabling independent module development and scalable UI systems.",
//       performance: "Improved SEO and load performance by migrating the application to Next.js with SSR and ISR.",
//       stack: ["React", "Next.js", "TypeScript", "Micro-Frontends", "Tailwind", "React Query"],
//     },
//     caseStudy: {
//       problem: "Businesses needed an intuitive, scalable platform to build e-commerce websites without technical expertise.",
//       architecture: "Micro-frontend architecture with module federation, shared component library, Next.js for SSR, React Query for data management.",
//       challenges: "Handling independent deployments across teams, maintaining consistent UI, optimizing performance at scale.",
//       solutions: "Implemented module federation for independent micro-frontends, built a shared design system, used server-side rendering for SEO, and optimized bundle sizes.",
//       impact: "Platform now serves 60K+ users with sub-second page loads, 40% improvement in SEO rankings, and 90%+ test coverage.",
//     },
//   },
//   {
//     title: "DigiGoal",
//     subtitle: "Data Insights Platform",
//     description: "A data visualization and insights platform providing actionable analytics for business decision-making.",
//     impact: "Improved data accessibility and decision-making speed by 3x",
//     tech: ["React", "TypeScript", "Recharts", "REST APIs", "MobX"],
//     engineering: {
//       architecture: "Single Page Application with modular visualization components and shared data transformation layer.",
//       performance: "Optimized rendering of large datasets using memoization and efficient state management.",
//       stack: ["React", "TypeScript", "MobX", "Recharts", "REST APIs"],
//     },
//     caseStudy: {
//       problem: "Teams struggled to extract meaningful insights from raw data across multiple data sources.",
//       architecture: "React-based SPA with MobX state management, modular chart components, and REST API integration layer.",
//       challenges: "Complex data transformations, real-time updates, cross-browser chart rendering performance.",
//       solutions: "Built reusable chart components, implemented efficient data transformation pipelines, used web workers for heavy computations.",
//       impact: "Reduced time-to-insight by 3x, handling 10K+ data points with smooth rendering performance.",
//     },
//   },
//   {
//     title: "Bosch ParkZeus",
//     subtitle: "IoT Dashboard Platform",
//     description: "An IoT-powered smart parking management dashboard with real-time sensor data visualization.",
//     impact: "Real-time monitoring of 500+ parking sensors",
//     tech: ["React", "TypeScript", "WebSockets", "D3.js", "Tailwind CSS"],
//     engineering: {
//       architecture: "Event-driven architecture using WebSocket streams for real-time updates and resilient reconnection handling.",
//       performance: "Optimized real-time data rendering with efficient UI updates and caching strategies.",
//       stack: ["React", "JavaScript", "WebSockets", "Python", "SCSS"],
//     },
//     caseStudy: {
//       problem: "Managing and monitoring hundreds of IoT parking sensors required a real-time, responsive dashboard.",
//       architecture: "React dashboard with WebSocket connections for real-time data, D3.js for custom visualizations, modular widget system.",
//       challenges: "Real-time data streaming at scale, responsive dashboard layouts, offline resilience.",
//       solutions: "Implemented WebSocket-based data streaming with reconnection logic, built a responsive widget grid system, added offline caching.",
//       impact: "Dashboard monitors 500+ sensors in real-time with 99.9% uptime and sub-200ms update latency.",
//     },
//   },
// ];

const projects: Project[] = [
  {
    title: "Amazon SmartBiz",
    subtitle: "E-commerce Website Builder",
    description:
      "A scalable, configuration-driven platform enabling businesses to create and manage online storefronts with dynamic layouts and theming.",
    impact:
      "Powering 60K+ users with a microfrontend architecture and optimized SSR-based performance",
    tech: ["React", "Next.js", "TypeScript", "Micro Frontends", "Tailwind CSS"],
    engineering: {
      architecture:
        "Designed a microfrontend architecture using Module Federation, enabling independent module development and scalable, configuration-driven UI systems.",
      performance:
        "Improved FCP from ~7–12s to ~1–1.5s by migrating to Next.js with SSR, along with bundle optimization and lazy loading strategies.",
      stack: ["React", "Next.js", "TypeScript", "Micro-Frontends", "Tailwind", "React Query"],
    },
    caseStudy: {
      problem:
        "Businesses required a scalable platform to build customizable e-commerce storefronts without increasing development complexity.",
      architecture:
        "Implemented microfrontend architecture with Module Federation, combined with a configuration-driven UI system and Next.js SSR for performance and SEO.",
      challenges:
        "Ensuring consistent UI across modules, handling independent deployments, and optimizing performance at scale.",
      solutions:
        "Built a shared design system, introduced JSON-driven UI configuration for dynamic layouts, and leveraged SSR with code splitting to optimize rendering performance.",
      impact:
        "Enabled scalable storefront creation for 60K+ users, reduced FCP to ~1.5s, and significantly improved SEO and load performance.",
    },
  },
  {
    title: "DigiGoal",
    subtitle: "Data Insights Platform",
    description:
      "A modular data visualization platform designed to transform complex datasets into actionable business insights.",
    impact:
      "Reduced time-to-insight by 3x through efficient data processing and optimized rendering",
    tech: ["React", "TypeScript", "Recharts", "REST APIs", "MobX"],
    engineering: {
      architecture:
        "Built a modular SPA architecture with reusable visualization components and a centralized data transformation layer.",
      performance:
        "Optimized large dataset rendering using memoization and efficient state management, ensuring smooth UI performance.",
      stack: ["React", "TypeScript", "MobX", "Recharts", "REST APIs"],
    },
    caseStudy: {
      problem:
        "Teams struggled to extract meaningful insights from large and complex datasets across multiple sources.",
      architecture:
        "Developed a React-based SPA with MobX for state management and modular chart components for reusable visualizations.",
      challenges:
        "Handling large data volumes, ensuring smooth rendering, and maintaining performance across browsers.",
      solutions:
        "Implemented reusable chart components, optimized data transformation pipelines, and improved rendering efficiency using memoization.",
      impact:
        "Improved data accessibility and reduced analysis time by 3x while maintaining smooth rendering for large datasets.",
    },
  },
  {
    title: "Bosch ParkZeus",
    subtitle: "IoT Dashboard Platform",
    description:
      "A real-time IoT dashboard for monitoring and managing smart parking systems using live sensor data.",
    impact:
      "Enabled real-time monitoring of 500+ sensors with high reliability and low latency",
    tech: ["React", "TypeScript", "WebSockets", "D3.js", "Tailwind CSS"],
    engineering: {
      architecture:
        "Designed an event-driven architecture using WebSocket streams for real-time data handling with resilient reconnection strategies.",
      performance:
        "Optimized real-time UI updates with efficient rendering and state management, ensuring low-latency data visualization.",
      stack: ["React", "JavaScript", "WebSockets", "Python", "SCSS"],
    },
    caseStudy: {
      problem:
        "Monitoring large-scale IoT sensor data required a responsive, real-time dashboard with minimal latency.",
      architecture:
        "Implemented a React-based dashboard with WebSocket integration and modular visualization components.",
      challenges:
        "Handling continuous data streams, ensuring UI responsiveness, and maintaining connection stability.",
      solutions:
        "Built WebSocket-based streaming with reconnection logic, optimized rendering updates, and introduced caching strategies.",
      impact:
        "Achieved real-time monitoring of 500+ sensors with sub-200ms latency and high system reliability.",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Selected Work</h2>
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(108,123,255,0.08), rgba(45,212,191,0.05))" }} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-secondary font-mono mb-2">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <p className="text-xs text-primary mb-4">{project.impact}</p>

                {/* Engineering mode details */}
                <AnimatePresence>
                  {engineeringMode && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 space-y-2 border-t border-border pt-3"
                    >
                      <div>
                        <p className="text-xs font-mono text-primary mb-0.5">Architecture</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{project.engineering.architecture}</p>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-primary mb-0.5">Performance</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{project.engineering.performance}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.engineering.stack.map((s) => (
                          <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono">{s}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={`flex flex-wrap gap-1.5 transition-opacity duration-300 ${engineeringMode ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
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
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selected.title}</h3>
                  <p className="text-secondary font-mono text-sm">{selected.subtitle}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground p-1">
                  <X size={20} />
                </button>
              </div>
              {[
                { title: "Problem", content: selected.caseStudy.problem },
                { title: "Architecture", content: selected.caseStudy.architecture },
                { title: "Challenges", content: selected.caseStudy.challenges },
                { title: "Solutions", content: selected.caseStudy.solutions },
                { title: "Impact", content: selected.caseStudy.impact },
              ].map((section) => (
                <div key={section.title} className="mb-5">
                  <h4 className="text-sm font-semibold text-primary mb-1">{section.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {selected.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{t}</span>
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
