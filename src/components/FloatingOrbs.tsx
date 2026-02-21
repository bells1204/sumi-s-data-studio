import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const orbs = [
  { size: 300, x: "10%", y: "20%", color: "var(--glow-primary)", delay: 0 },
  { size: 200, x: "70%", y: "60%", color: "var(--glow-accent)", delay: 2 },
  { size: 250, x: "80%", y: "10%", color: "var(--glow-neon)", delay: 4 },
  { size: 180, x: "20%", y: "70%", color: "var(--glow-neon)", delay: 1 },
  { size: 150, x: "50%", y: "40%", color: "var(--glow-primary)", delay: 3 },
];

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, hsl(${orb.color} / 0.6), transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
