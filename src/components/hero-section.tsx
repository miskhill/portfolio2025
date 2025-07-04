import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/gary-smith-dev/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaGithub,
      href: "https://github.com/miskhill",
      label: "GitHub",
      color: "hover:text-gray-600",
    },
    {
      icon: FaEnvelope,
      href: "mailto:gary.smith80@hotmail.com",
      label: "Email",
      color: "hover:text-red-600",
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6">
              Gary Smith
            </h1>
            <p className="text-lg xs:text-xl sm:text-2xl text-muted-foreground mb-2 sm:mb-4">
              Software Developer
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              Nottingham, England
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="max-w-3xl mx-auto px-2 sm:px-0">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                <span className="font-semibold text-primary">"Be fascinated not frustrated."</span>
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                What an amazing mindset to have!! Whether learning a new Martial Art, trying a new game for the first time or picking up a new Tech stack I am always eager to learn as much as I can to demystify any issues I might face along my journey.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 sm:mt-4">
                This desire to learn is what excited me about my journey into coding from my first evening on HTML (Thanks Codecademy!) all the way through to joining General Assembly and embarking on their Software Engineering Immersive Bootcamp.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-card border border-border transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 sm:w-[30px] sm:h-[30px]" />
                </a>
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}