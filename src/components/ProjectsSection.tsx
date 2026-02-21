import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  tech: string[];
  description: string;
  fullDescription: string;
  categories: string[];
}

const PROJECTS: Project[] = [
  {
    title: "AI Brain Tumor Detection",
    tech: ["CNN", "Transfer Learning", "PyTorch"],
    description: "Medical image classification system to detect brain tumors using deep learning.",
    fullDescription:
      "A comprehensive deep learning system that classifies brain MRI images to detect tumors. Built with convolutional neural networks and transfer learning techniques using PyTorch, achieving high accuracy on medical imaging datasets. Features data augmentation, model evaluation metrics, and a user-friendly prediction interface.",
    categories: ["AI/ML"],
  },
  {
    title: "Student Performance Predictor",
    tech: ["Linear Regression", "Flask", "HTML", "CSS"],
    description: "Predicts student performance using academic data.",
    fullDescription:
      "An end-to-end machine learning application that predicts student academic performance based on various features. Uses linear regression for prediction with a Flask web interface. Includes data preprocessing, feature engineering, model training pipeline, and a clean web UI for inputting data and viewing predictions.",
    categories: ["AI/ML", "Web"],
  },
  {
    title: "Social Network Ads Prediction",
    tech: ["Logistic Regression", "Flask", "HTML", "CSS"],
    description: "Predicts user purchase behavior based on ad data.",
    fullDescription:
      "A classification system that predicts whether users will purchase a product based on social network advertisement data. Implements logistic regression with feature scaling, model evaluation, and a Flask-based web application for real-time predictions. Includes visualization of decision boundaries and classification reports.",
    categories: ["Data Science", "Web"],
  },
];

const FILTERS = ["All", "AI/ML", "Web", "Data Science"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, rotateY: 2, rotateX: 2 }}
                className="glass-card p-6 cursor-pointer hover:glow-border transition-shadow"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-1 text-xs" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={14} /> Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="gap-1 text-xs" onClick={(e) => e.stopPropagation()}>
                    <Github size={14} /> GitHub
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="glass max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedProject?.title}</DialogTitle>
              <DialogDescription>{selectedProject?.fullDescription}</DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProject?.tech.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <Button className="gap-2">
                <ExternalLink size={16} /> Live Demo
              </Button>
              <Button variant="outline" className="gap-2">
                <Github size={16} /> GitHub Repo
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
