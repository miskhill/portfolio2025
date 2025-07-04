import { useState, useEffect } from 'react';
import { ToggleTheme } from './ToggleTheme';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      // Close mobile menu after clicking a navigation item
      setMobileMenuOpen(false);
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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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

          <div className="flex items-center space-x-4">
            <ToggleTheme />
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center justify-center p-1.5 sm:p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FaTimes size={16} className="sm:size-5" /> : <FaBars size={16} className="sm:size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-12 sm:top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-lg max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`block px-4 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-300 ${
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
      )}
    </nav>
  );
}