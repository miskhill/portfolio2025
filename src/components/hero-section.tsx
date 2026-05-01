import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const contactLinks = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/gary-smith-dev/',
    label: 'LinkedIn',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/miskhill',
    label: 'GitHub',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:gary.smith80@hotmail.com',
    label: 'Email',
  },
];

const credibilitySignals = [
  { value: '4+', label: 'years shipping software' },
  { value: 'Web + Mobile', label: 'React and React Native delivery' },
  { value: 'Ops to Eng', label: 'product mindset with leadership range' },
];

const focusAreas = [
  {
    label: 'Current focus',
    copy: 'Product delivery, frontend systems, and safer change across TypeScript and C# stacks.',
  },
  {
    label: 'Strength',
    copy: 'Turning messy product constraints into software that feels clear, reliable, and maintainable.',
  },
  {
    label: 'Working style',
    copy: 'Hands-on, pragmatic, and comfortable moving from UX detail to backend shape to release confidence.',
  },
];

const easing = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easing,
    },
  },
};

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__content" variants={itemVariants}>
          <span className="pill hero__eyebrow">Software Engineer • Nottingham, England</span>

          <h1 className="hero__title">
            Shipping sharper
            <span className="hero__title-accent"> product experiences</span>
          </h1>

          <div className="hero__subtitle">
            <span>React</span>
            <span className="hero__separator" />
            <span>React Native</span>
            <span className="hero__separator" />
            <span>TypeScript</span>
            <span className="hero__separator" />
            <span>C#</span>
          </div>

          <p className="hero__lead">
            I build customer-facing products with a strong bias for clarity, delivery, and
            maintainable code. My background in leadership and operations means I care as much
            about the shape of the product as the code that powers it.
          </p>

          <div className="button-row">
            <a href="#projects" className="button button--primary">
              View selected work
              <FaArrowRight />
            </a>
            <a href="mailto:gary.smith80@hotmail.com" className="button button--secondary">
              Get in touch
            </a>
          </div>

          <div className="hero__socials" aria-label="Social links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="icon-button"
                aria-label={link.label}
                title={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          <div className="hero__stats">
            {credibilitySignals.map((signal) => (
              <div key={signal.label} className="hero__stat">
                <span className="hero__stat-value">{signal.value}</span>
                <span className="hero__stat-label">{signal.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside className="hero__panel" variants={itemVariants}>
          <div className="hero__panel-card">
            <p className="section-label">Positioning</p>
            <h2 className="hero__panel-title">Product-minded engineering, not just page-building.</h2>
            <p className="hero__panel-copy">
              The strongest part of my portfolio is the range behind it: customer-facing UI,
              backend changes, AI-assisted migrations, quality gates, and delivery under real
              product pressure.
            </p>
          </div>

          <div className="hero__panel-card">
            <p className="section-label">What I bring</p>
            <ul className="hero__focus-list">
              {focusAreas.map((area) => (
                <li key={area.label} className="hero__focus-item">
                  <span className="hero__focus-label">{area.label}</span>
                  <span className="hero__focus-copy">{area.copy}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
