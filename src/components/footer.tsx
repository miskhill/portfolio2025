import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/gary-smith-dev/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/miskhill",
      label: "GitHub",
    },
    {
      icon: FaEnvelope,
      href: "mailto:gary.smith80@hotmail.com",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Gary Smith</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 px-4 sm:px-0">
              Software Developer passionate about creating innovative solutions and continuous learning.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Nottingham, England
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h4>
            <nav className="space-y-1 sm:space-y-2">
              {['Home', 'Experience', 'Projects', 'Skills', 'Education'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mx-auto py-1"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            © {currentYear} Gary Smith. Built with
            <FaHeart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}