import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const contributions = [
  "Led frontend development for Amazon SmartBiz, a scalable e-commerce website builder platform serving 60,000+ users.",

  "Designed and built reusable, configuration-driven UI systems using React, enabling dynamic layouts and scalable feature development across multiple storefronts.",

  "Architected microfrontend-based modules using Module Federation, enabling independent deployments and improving team scalability and release efficiency.",

  "Led migration from React SPA to Next.js with SSR and ISR, reducing First Contentful Paint from ~7–12s to ~1–1.5s and significantly improving SEO and initial load performance.",

  "Optimized application performance through code splitting, lazy loading, and bundle optimization, reducing overall load time from ~8–12s to ~3–3.5s.",

  "Implemented scalable data fetching and state management using React Query and MobX, improving responsiveness and handling complex state across modules.",

  "Maintained 90%+ unit test coverage using Jest and improved developer experience through Storybook-driven component documentation and reusable UI standards.",

  "Integrated analytics (Google Analytics, Meta) to track key user interactions, enabling data-driven product decisions and performance monitoring.",

  "Resolved critical frontend security issues including XSS vulnerabilities and improved overall application reliability and robustness.",

  "Led module-level ownership, contributed to low-level design discussions, and mentored engineers on frontend best practices and scalable architecture patterns.",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center"
        >
          <p className="text-primary font-mono text-sm mb-2">// experience</p>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Professional Journey
          </h2>

          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            Building and scaling production-grade frontend systems with a focus on performance, architecture, and real-world impact.
          </p>
        </motion.div>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-card p-6 sm:p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase size={18} className="text-primary" />
            </div>

            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold text-foreground">
                Application Developer
              </h3>

              <p className="text-secondary font-mono text-sm">
                Divum Corporate Services
              </p>

              <p className="text-muted-foreground text-sm mt-1">
                2022 – Present
              </p>

              <p className="text-xs text-muted-foreground mt-2 max-w-md leading-relaxed text-justify">
                Worked on Amazon SmartBiz, a large-scale e-commerce platform,
                focusing on frontend architecture, performance optimization,
                and building scalable UI systems for real-world production use.
              </p>
            </div>
          </div>

          {/* CONTRIBUTIONS */}
          <ul className="space-y-3">
            {contributions.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed text-justify"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;