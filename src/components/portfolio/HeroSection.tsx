import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground mb-4"
          >
            Hi, I'm Tharshan 👋
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-gradient">Frontend Engineer</span>
            <br />
            <span className="text-foreground text-2xl sm:text-3xl md:text-4xl font-medium mt-2 block">
              building scalable, high-performance UI systems
              <br className="hidden sm:block" /> and modern frontend architectures.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10"
          >
            I design and build configuration-driven frontend systems, optimize performance using SSR, and develop scalable architectures powering applications used by 60,000+ users.
          </motion.p>

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
              Explore My Work
              <ArrowDown size={16} />
            </a>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Tharshan_Resume.pdf';
                link.download = 'Tharshan_Resume.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              <Download size={16} />
              Download Resume
            </button>
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
