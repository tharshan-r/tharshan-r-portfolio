import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";

const EducationSection = () => {
  const { engineeringMode } = useEngineeringMode();

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Education & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Bachelor of Technology</h3>
                <p className="text-sm text-secondary font-mono">Information Technology</p>
                <p className="text-sm text-muted-foreground mt-1">Dr. N.G.P Institute of Technology</p>
                <p className="text-xs text-muted-foreground mt-1">2019 – 2023</p>
                <AnimatePresence>
                  {engineeringMode && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-2 flex items-center gap-2"
                    >
                      <span className="text-xs font-mono text-muted-foreground">CGPA</span>
                      <span className="text-sm font-bold font-mono text-primary">8.0 / 10</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="surface-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Award size={18} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Certifications</h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Frontend Developer – HackerRank
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Responsive Web Design – freeCodeCamp
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
