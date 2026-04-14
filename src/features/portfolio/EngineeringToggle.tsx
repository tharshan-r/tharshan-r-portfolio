import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, X } from "lucide-react";
import { useEngineeringMode } from "@/hooks/use-engineering-mode";

const EngineeringToggle = () => {
  const { engineeringMode, toggleEngineeringMode } = useEngineeringMode();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const dismissTooltip = () => {
    setShowTooltip(false);
  };

  const handleToggle = () => {
    toggleEngineeringMode();
    if (showTooltip) dismissTooltip();
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-mono transition-all duration-300 hover:border-primary/50 group"
        aria-label="Toggle engineering mode"
      >
        <motion.div
          initial={false}
          animate={{}}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {engineeringMode ? (
            <Code2 size={14} className="text-primary" />
          ) : (
            <Palette size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          )}
        </motion.div>

        <div className="relative overflow-hidden h-4 w-[52px]">
          <motion.span
            initial={false}
            animate={{ y: engineeringMode ? 0 : -16 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute inset-x-0 text-primary font-semibold"
          >
            ENG
          </motion.span>

          <motion.span
            initial={false}
            animate={{ y: engineeringMode ? 16 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute inset-x-0 text-muted-foreground group-hover:text-foreground transition-colors"
          >
            Design
          </motion.span>
        </div>

        <motion.div
          initial={false}
          animate={{
            scale: engineeringMode ? 1 : 0,
            opacity: engineeringMode ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="w-1.5 h-1.5 rounded-full bg-primary"
        />
      </button>

      {/* TOOLTIP */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute top-full right-0 mt-3 w-64 z-50"
          >
            {/* Arrow */}
            <div className="absolute -top-1.5 right-6 w-3 h-3 rotate-45 bg-muted border-l border-t border-border" />

            <div className="relative rounded-lg border border-border bg-muted/95 backdrop-blur-xl p-3 shadow-lg">
              <button
                onClick={dismissTooltip}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={12} />
              </button>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <Code2 size={12} className="text-primary" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">
                    Explore Engineering Mode
                  </p>

                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    Switch to{" "}
                    <span className="text-primary font-medium">
                      Engineering Mode
                    </span>{" "}
                    to see how systems are designed — including architecture,
                    performance decisions, and real-world tradeoffs.
                  </p>
                </div>
              </div>

              {/* subtle indicator */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-2 flex items-center gap-1.5 text-[10px] text-primary/70 font-mono"
              >
                <span className="w-1 h-1 rounded-full bg-primary" />
                Toggle to explore
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EngineeringToggle;