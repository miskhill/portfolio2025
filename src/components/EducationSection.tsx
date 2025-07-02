import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBook } from 'react-icons/fa';

interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  type: 'formal' | 'bootcamp' | 'online';
}

const education: Education[] = [
  {
    institution: "General Assembly",
    degree: "Software Engineering Immersive",
    period: "Aug 2021 - Oct 2021",
    description: "Intensive full-stack web development bootcamp covering modern JavaScript, React, Node.js, databases, and software engineering best practices.",
    icon: FaCode,
    type: 'bootcamp'
  },
  {
    institution: "University of Huddersfield",
    degree: "BA(Hons) - History",
    period: "Graduated",
    description: "Developed critical thinking, research, and analytical skills. Strong foundation in written communication and historical analysis.",
    icon: FaGraduationCap,
    type: 'formal'
  },
  {
    institution: "Udemy",
    degree: "Complete Responsive Web Development",
    period: "July 2021",
    description: "Comprehensive course covering HTML5, CSS3, JavaScript, and responsive web design principles.",
    icon: FaBook,
    type: 'online'
  }
];

const typeColors = {
  formal: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  bootcamp: 'bg-green-500/10 text-green-600 border-green-500/20',
  online: 'bg-purple-500/10 text-purple-600 border-purple-500/20'
};

const typeLabels = {
  formal: 'University',
  bootcamp: 'Bootcamp',
  online: 'Online Course'
};

export function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Education & Learning
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            My educational journey from traditional academics to modern software engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-6 sm:mb-8 last:mb-0"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-4 sm:left-6 top-12 sm:top-16 w-0.5 h-16 sm:h-20 bg-border" />
              )}

              <div className="flex items-start gap-3 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                  <edu.icon className="w-3 h-3 sm:w-5 sm:h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-lg p-3 sm:p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3 flex-wrap gap-1 sm:gap-2">
                    <h3 className="text-base sm:text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full border ${typeColors[edu.type]} whitespace-nowrap`}>
                      {typeLabels[edu.type]}
                    </span>
                  </div>

                  <div className="mb-2 sm:mb-4">
                    <h4 className="text-sm sm:text-lg font-medium text-primary mb-0.5 sm:mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {edu.period}
                    </p>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Continuous Learning Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div className="bg-card rounded-lg p-4 sm:p-8 border border-border shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
              Continuous Learning
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              I believe in lifelong learning and continuously updating my skills with the latest technologies, 
              best practices, and industry trends. My journey from business management to software engineering 
              exemplifies my commitment to growth and adaptation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}