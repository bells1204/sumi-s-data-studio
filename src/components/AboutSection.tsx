import { motion } from "framer-motion";
import { Brain, Database, Code, BarChart3 } from "lucide-react";

const focusAreas = [
  { icon: Brain, label: "AI / ML" },
  { icon: Database, label: "Data Science" },
  { icon: Code, label: "DSA" },
  { icon: BarChart3, label: "Analytics" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Passionate about <span className="text-primary font-semibold">AI/ML</span>,{" "}
            <span className="text-accent font-semibold">Data Science</span>,{" "}
            <span className="text-neon font-semibold">DSA</span>, and Basic Mathematics.
            Focused on building intelligent systems using machine learning and deep learning
            to solve real-world problems.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-4 text-center hover:glow-border transition-shadow cursor-default"
              >
                <area.icon className="mx-auto mb-2 text-primary" size={28} />
                <span className="text-sm font-medium">{area.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
