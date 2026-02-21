import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "Deep Learning Certification",
    issuer: "Coursera",
    year: "2025",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 z-10 neon-glow" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 hover:glow-border transition-shadow">
                    <div className="flex items-start gap-3">
                      <Award className="text-primary shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
