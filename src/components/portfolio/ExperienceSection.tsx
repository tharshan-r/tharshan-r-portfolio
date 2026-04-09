import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

// const contributions = [
//   "Developed features for Amazon SmartBiz, a scalable e-commerce website builder platform.",
//   "Built modular React UI components within a micro-frontend architecture enabling independent feature development.",
//   "Led migration from React SPA to Next.js introducing server-side rendering and improving SEO and performance.",
//   "Integrated React Query and MobX for efficient data fetching and scalable state management.",
//   "Maintained over 90% unit test coverage using Jest and documented components using Storybook.",
//   "Delivered production systems used by over 60K users and integrated analytics for user behavior insights.",
//   "Developed a custom Zendesk React application and mentored engineers on frontend best practices.",
// ];

const contributions = [
  "Developed features for Amazon SmartBiz, a scalable e-commerce website builder platform serving 60K+ users.",
  "Built reusable, configuration-driven React components within a microfrontend architecture, enabling dynamic UI rendering and independent module development.",
  "Led migration from React SPA to Next.js with SSR, reducing FCP from ~7–12s to ~1–1.5s and improving SEO and load performance.",
  "Implemented efficient data fetching and state management using React Query and MobX, improving application scalability and responsiveness.",
  "Optimized frontend performance through code splitting, lazy loading, and bundle optimization, reducing overall load time to ~3–3.5s.",
  "Maintained 90%+ unit test coverage using Jest and improved developer experience through Storybook-driven component documentation.",
  "Instrumented analytics events using Google Analytics and Meta to track user behavior and enable data-driven product decisions.",
  "Resolved frontend security issues including XSS vulnerabilities and improved overall application reliability.",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Professional Journey</h2>
        </motion.div>

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
            <div>
              <h3 className="text-xl font-semibold text-foreground">Application Developer</h3>
              <p className="text-secondary font-mono text-sm">Divum Corporate Services</p>
              <p className="text-muted-foreground text-sm mt-1">2022 – Present</p>
            </div>
          </div>

          <ul className="space-y-3">
            {contributions.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm text-muted-foreground"
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
