import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Github, Linkedin, Mail as MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Invalid email address", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thank you for reaching out." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium mb-1 block">Name</label>
            <Input
              id="contact-name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm font-medium mb-1 block">Email</label>
            <Input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="text-sm font-medium mb-1 block">Message</label>
            <Textarea
              id="contact-message"
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
            />
          </div>
          <Button type="submit" size="lg" className="w-full gap-2">
            <Send size={18} /> Send Message
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-8"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="p-3 glass-card hover:glow-border transition-shadow">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="p-3 glass-card hover:glow-border transition-shadow">
            <Linkedin size={22} />
          </a>
          <a href="mailto:sumi@example.com" aria-label="Email"
            className="p-3 glass-card hover:glow-border transition-shadow">
            <MailIcon size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
