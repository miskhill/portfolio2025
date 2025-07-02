import { ThemeProvider } from './context/ThemeProvider';
import { Header } from './components/Header';
import { HeroSection } from './components/hero-section';
import { CareerSection } from './components/career-section';
import { ProjectSection } from './components/project-section';
import { SkillsSection } from './components/skills-section';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/footer';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
      <div className="min-h-screen bg-background w-full max-w-screen overflow-x-hidden">
        <Header />
        <main className="w-full max-w-full overflow-x-hidden">
          <HeroSection />
          <CareerSection />
          <ProjectSection />
          <SkillsSection />
          <EducationSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
