import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export function Footer() {

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Gary Smith</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-8 md:mb-4">
              Software Developer passionate about creating
              <br />
              innovative solutions and continuous learning.
              <br />
              Nottingham, England
            </p>
          </div>



          {/* Contact */}
          <div className="text-center md:text-right mt-4 md:mt-0">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 sm:space-x-5 mb-8 sm:mb-10">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-card border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 sm:w-[30px] sm:h-[30px]" />
                </motion.a>
              ))}
            </div>
            <div className="mt-8 sm:mt-10">
              <motion.button
                onClick={scrollToTop}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 mx-auto md:ml-auto md:mr-0"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <FaArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}