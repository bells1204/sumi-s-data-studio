import { useTheme } from "@/hooks/useTheme";
import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <FloatingOrbs />
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
