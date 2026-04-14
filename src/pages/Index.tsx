import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '@/features/portfolio/HeroSection'
import AboutSection from '@/features/portfolio/AboutSection'
import ProjectsSection from '@/features/portfolio/ProjectsSection'
import ExperienceSection from '@/features/portfolio/ExperienceSection'
import SkillsSection from '@/features/portfolio/SkillsSection'
import EducationSection from '@/features/portfolio/EducationSection'
import EngineeringSection from '@/features/portfolio/EngineeringSection'
import ArchitectureSection from '@/features/portfolio/ArchitectureSection'
import MetricsSection from '@/features/portfolio/MetricsSection'
import ContactSection from '@/features/portfolio/ContactSection'
import Footer from '@/features/portfolio/Footer'
import Navbar from '@/features/portfolio/Navbar'
import NetworkBackground from '@/features/portfolio/NetworkBackground'
import ScrollProgress from '@/features/portfolio/ScrollProgress'
import SectionReveal from '@/features/portfolio/SectionReveal'
import ThemeToggle from '@/features/portfolio/ThemeToggle'
import EngineeringToggle from '@/features/portfolio/EngineeringToggle'

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // On page load, scroll to top and clear hash
    if (location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, [location.hash, location.pathname, location.search]);
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
