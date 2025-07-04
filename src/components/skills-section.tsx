import { motion } from 'framer-motion';
import { TechIcon } from '../assets/SvgComponents';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "HTML5", "CSS3"]
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Python", "Express", "Nest.js", "GraphQL", "Django"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "EdgeDB", "Mongoose"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS", "GCP", "Git", "GitHub Actions"]
  },
  {
    title: "Tools & Others",
    skills: ["GitKraken", "Business Management"]
  }
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-card rounded-lg p-4 sm:p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    whileHover={{ y: -2 }}
                  >
                    <TechIcon technology={skill} size={28} className="text-primary" />
                    <span className="text-xs sm:text-sm font-medium text-center text-muted-foreground line-clamp-2">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Agile", "Scrum", "Team Leadership", "Problem Solving", "API Design", "Testing", "CI/CD", "Code Review"].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}