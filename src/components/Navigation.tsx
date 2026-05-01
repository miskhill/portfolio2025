import { useEffect, useState } from 'react';
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
    const sections = navigationItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry?.target.id) {
          setActiveSection(activeEntry.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    sections.forEach((section) => observer.observe(section));
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className={`site-nav ${isScrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="site-nav__content">
        <button
          type="button"
          className="site-nav__brand"
          onClick={() => scrollToSection('home')}
          aria-label="Go to home section"
        >
          <span className="site-nav__monogram">GS</span>
          <span className="site-nav__name">Gary Smith</span>
          <span className="site-nav__role">Software Engineer</span>
        </button>

        <div className="site-nav__menu" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(sectionId)}
                className={`site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="site-nav__actions">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
