import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Trophy, Code, Swords } from "lucide-react";

const achievements = [
  {
    icon: Code,
    label: "LeetCode Problems",
    value: 100,
    suffix: "+",
  },
  {
    icon: Swords,
    label: "Codeforces Rating",
    value: 1000,
    suffix: "+",
  },
  {
    icon: Trophy,
    label: "Hackathons",
    value: 3,
    suffix: "+",
    note: "Goldman Sachs & more",
  },
];

function CounterCard({ icon: Icon, label, value, suffix, note }: (typeof achievements)[0]) {
  const { count, ref } = useAnimatedCounter(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card p-8 text-center hover:glow-border transition-shadow"
    >
      <Icon className="mx-auto mb-4 text-primary" size={36} />
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
        {count}
        {suffix}
      </div>
      <p className="font-medium text-sm">{label}</p>
      {note && <p className="text-xs text-muted-foreground mt-1">{note}</p>}
    </motion.div>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="gradient-text">Achievements</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <CounterCard key={a.label} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}
