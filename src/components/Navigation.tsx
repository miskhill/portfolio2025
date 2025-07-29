import { useState, useEffect } from 'react';
import { ToggleTheme } from './ToggleTheme';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navigationItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Navigation item clicked
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-screen ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-lg sm:text-2xl font-bold text-primary">GS</span>
            </div>
          </div>

          <div>
            <div className="ml-2 xs:ml-4 sm:ml-6 md:ml-10 flex items-baseline space-x-4 xs:space-x-5 sm:space-x-6 md:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`px-2 py-1.5 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-base font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary-foreground bg-primary shadow-md'
                      : 'text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 hover:shadow-sm'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
}