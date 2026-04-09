import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import MetricsSection from "@/components/portfolio/MetricsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EngineeringSection from "@/components/portfolio/EngineeringSection";
import ArchitectureSection from "@/components/portfolio/ArchitectureSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import SectionReveal from "@/components/portfolio/SectionReveal";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // On page load, scroll to top and clear hash
    if (location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background grid-bg">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <SectionReveal><MetricsSection /></SectionReveal>
      <SectionReveal><ProjectsSection /></SectionReveal>
      <SectionReveal><EngineeringSection /></SectionReveal>
      <SectionReveal><ArchitectureSection /></SectionReveal>
      <SectionReveal><ExperienceSection /></SectionReveal>
      <SectionReveal><SkillsSection /></SectionReveal>
      <SectionReveal><EducationSection /></SectionReveal>
      <SectionReveal><AboutSection /></SectionReveal>
      <SectionReveal><ContactSection /></SectionReveal>
      <Footer />
    </div>
  );
};

export default Index;
