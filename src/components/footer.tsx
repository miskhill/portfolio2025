import { motion } from 'framer-motion';
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gary-smith-dev/',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/miskhill',
    icon: FaGithub,
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <motion.div
          className="footer-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="footer-card__content">
            <div className="footer-card__actions">
              <p className="section-label">Contact</p>
              <h2 className="footer-card__title">Want someone who can ship and communicate clearly?</h2>
              <p className="footer-card__copy">
                I care about software that works well, reads cleanly, and gives users confidence.
                If that is the kind of engineering support you need, let&apos;s talk.
              </p>

              <div className="footer-card__meta">
                <span className="pill">
                  <FaMapMarkerAlt />
                  Nottingham, England
                </span>
                <a className="pill" href="mailto:gary.smith80@hotmail.com">
                  <FaEnvelope />
                  gary.smith80@hotmail.com
                </a>
              </div>

              <div className="footer-card__action-row">
                <a className="button button--primary footer-card__cta" href="mailto:gary.smith80@hotmail.com">
                  <FaEnvelope />
                  Email me
                </a>

                <div className="footer-card__secondary">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      <link.icon />
                      {link.label}
                    </a>
                  ))}

                  <button type="button" className="footer-link" onClick={scrollToTop}>
                    <FaArrowUp />
                    Back to top
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>Built with React, Vite, Framer Motion, and a sharper visual system.</span>
            <span>© 2026 Gary Smith</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
