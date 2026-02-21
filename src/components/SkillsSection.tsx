import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "C / C++", level: 75 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    title: "AI/ML & Data Science",
    skills: [
      { name: "NumPy / Pandas", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "TensorFlow / PyTorch", level: 75 },
      { name: "CNN / Deep Learning", level: 70 },
      { name: "Matplotlib", level: 80 },
    ],
  },
  {
    title: "Web & Tools",
    skills: [
      { name: "HTML / CSS", level: 80 },
      { name: "Flask", level: 70 },
      { name: "API Integration", level: 65 },
      { name: "Jupyter Notebook", level: 90 },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Data Cleaning", level: 85 },
      { name: "Data Preprocessing", level: 80 },
      { name: "DSA", level: 70 },
      { name: "Transfer Learning", level: 65 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className="glass-card p-6 hover:glow-border transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-5 gradient-text">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.15 + si * 0.08 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
