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

    const updateNavigationState = () => {
      setIsScrolled(window.scrollY > 24);

      const viewportAnchor = window.scrollY + window.innerHeight * 0.32;
      const pageBottom = window.scrollY + window.innerHeight;

      if (pageBottom >= document.documentElement.scrollHeight - 24) {
        setActiveSection(sections.at(-1)?.id ?? 'home');
        return;
      }

      const active = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        const start = section.offsetTop - 120;
        const end = nextSection ? nextSection.offsetTop - 120 : Number.POSITIVE_INFINITY;

        return viewportAnchor >= start && viewportAnchor < end;
      });

      if (active) {
        setActiveSection(active.id);
      }
    };

    updateNavigationState();
    window.addEventListener('scroll', updateNavigationState, { passive: true });
    window.addEventListener('resize', updateNavigationState);

    return () => {
      window.removeEventListener('scroll', updateNavigationState);
      window.removeEventListener('resize', updateNavigationState);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const navigationOffset = 104;

    window.scrollTo({
      top: Math.max(element.offsetTop - navigationOffset, 0),
      behavior: 'smooth',
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
