import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import SkillsSection from './sections/Skills';
import ExperienceSection from './sections/Experience';
import ProjectsSection from './sections/Projects';
import ContactSection from './sections/Contact';

export default function App() {
  return (
    <main className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
