import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";

const EducationSection = () => {
  const { engineeringMode } = useEngineeringMode();

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">// education</p>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Education & Certifications
          </h2>

          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
            My academic foundation and continuous learning in frontend engineering, system design, and modern web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* EDUCATION CARD */}
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
                <h3 className="text-base font-semibold text-foreground">
                  Bachelor of Technology
                </h3>

                <p className="text-sm text-secondary font-mono">
                  Information Technology
                </p>

                <p className="text-sm text-muted-foreground mt-1">
                  Dr. N.G.P Institute of Technology
                </p>

                <p className="text-xs text-muted-foreground mt-1">
                  2019 – 2023
                </p>

                {/* DESIGN MODE CONTEXT */}
                {!engineeringMode && (
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Built a strong foundation in software engineering, data structures,
                    and system design principles that shape my approach to frontend
                    architecture and scalable application development.
                  </p>
                )}

                {/* ENGINEERING MODE */}
                <AnimatePresence>
                  {engineeringMode && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-muted-foreground">
                          CGPA
                        </span>
                        <span className="text-sm font-bold font-mono text-primary">
                          8.0 / 10
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Focused on core computer science fundamentals including data structures,
                        algorithms, and system-level thinking, forming the foundation for building
                        scalable frontend systems.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* CERTIFICATIONS CARD */}
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
                <h3 className="text-base font-semibold text-foreground">
                  Certifications
                </h3>

                <p className="text-xs text-muted-foreground mt-1">
                  Continuous learning focused on frontend development and web fundamentals
                </p>

                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Frontend Developer – HackerRank
                  </li>

                  <li className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Responsive Web Design – freeCodeCamp
                  </li>
                </ul>

                {/* ENGINEERING MODE EXTRA CONTEXT */}
                <AnimatePresence>
                  {engineeringMode && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs text-muted-foreground mt-3 leading-relaxed"
                    >
                      Reinforced core frontend concepts including semantic HTML, responsive layouts,
                      accessibility, and problem-solving fundamentals essential for building
                      production-ready UI systems.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;