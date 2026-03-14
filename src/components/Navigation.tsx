import { useState, useEffect } from 'react';
import { ToggleTheme } from './ToggleTheme';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];
const MOBILE_BREAKPOINT = 640;

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => (typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false)
  );

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

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
        {isMobile ? (
          <div style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
            <div
              className="flex items-center justify-between"
              style={{ gap: '0.75rem' }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-lg font-bold text-primary">GS</span>
                </div>
              </div>

              <div className="flex items-center">
                <ToggleTheme />
              </div>
            </div>

            <div
              style={{
                marginTop: '0.75rem',
                overflowX: 'auto',
                paddingBottom: '0.15rem',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div
                className="inline-flex"
                style={{ gap: '0.5rem', minWidth: 'max-content' }}
              >
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className={`rounded-full text-xs font-medium transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary-foreground bg-primary shadow-md'
                        : 'text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 hover:shadow-sm'
                    }`}
                    style={{
                      borderRadius: '9999px',
                      padding: '0.7rem 1rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between h-12 sm:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-lg sm:text-2xl font-bold text-primary">GS</span>
              </div>
            </div>

            <div>
              <div
                className="flex items-baseline space-x-4 xs:space-x-5 sm:space-x-6 md:space-x-8"
                style={{ marginLeft: '1rem' }}
              >
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className={`px-4 py-3 rounded-full text-xs sm:text-base font-medium transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary-foreground bg-primary shadow-md'
                        : 'text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 hover:shadow-sm'
                    }`}
                    style={{ borderRadius: '9999px' }}
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
        )}
      </div>
    </nav>
  );
}
