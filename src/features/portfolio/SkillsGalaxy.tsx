import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  capabilities: string[];
}

interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export const DesignModeSkillSection = ({
  group,
}: {
  group: SkillGroup;
}) => {
  return (
    <div className="space-y-4">

      {/* 🔹 Skills Grid */}
      <div className="grid grid-cols-2 gap-3">
        {group.skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative p-4 rounded-xl bg-muted/40 border border-white/10 
                         hover:border-primary/30 hover:bg-muted/70 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Icon size={18} className="text-primary" />
              </div>

              {/* Name */}
              <p className="text-xs font-medium text-foreground">
                {skill.name}
              </p>

              {/* Hover Capabilities Preview */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                              transition-all duration-300 bg-background/95 backdrop-blur-md 
                              rounded-xl p-3 flex flex-col justify-center">
                <p className="text-[10px] text-primary mb-1 font-semibold">
                  Key Focus
                </p>

                <ul className="text-[10px] text-muted-foreground space-y-1">
                  {skill.capabilities.slice(0, 3).map((cap) => (
                    <li key={cap}>• {cap}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};