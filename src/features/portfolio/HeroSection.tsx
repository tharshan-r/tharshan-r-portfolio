import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <NetworkBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* INTRO */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground mb-4"
          >
            Hi, I'm <span className="text-foreground font-medium">Tharshan</span> 👋
          </motion.p>

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-gradient">
              I build scalable frontend systems
            </span>

            <br />

            <span className="text-foreground text-2xl sm:text-3xl md:text-4xl font-medium mt-3 block">
              that power real-world applications at scale
            </span>
          </h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Frontend Engineer specializing in{" "}
            <span className="text-foreground font-medium">
              architecture, performance, and scalable UI systems
            </span>
            . Experienced in building production platforms serving{" "}
            <span className="text-primary font-semibold">60,000+ users</span>,
            with a focus on SSR, microfrontends, and system-driven design.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowDown size={16} />
            </a>

            <a
              href="/tharshan-r-portfolio/Tharshan_Resume.pdf"
              download="Tharshan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              <Download size={16} />
              Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              <Mail size={16} />
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;