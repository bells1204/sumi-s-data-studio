import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8 px-4 text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        © 2026 Sumi Debnath — Built with <Heart size={14} className="text-destructive fill-destructive" /> and AI
      </p>
    </footer>
  );
}
