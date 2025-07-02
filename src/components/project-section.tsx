import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { TechIcon } from '../assets/SvgComponents';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Field Data Collection App",
    description: "A React Native application for field data collection and analysis, built with EdgeDB backend integration. Features real-time data sync and offline capabilities.",
    technologies: ["React Native", "TypeScript", "EdgeDB", "Node.js"],
    featured: true,
  },
  {
    title: "Educational Game Suite",
    description: "Three Phaser3 games designed for educational purposes, featuring interactive gameplay, progress tracking, and engaging animations for young learners.",
    technologies: ["Phaser3", "JavaScript", "HTML5", "CSS3"],
    featured: true,
  },
  {
    title: "E-commerce Platform Components",
    description: "Next.js components integrated with Shopify Polaris design system, featuring responsive design and modern UI patterns for enhanced user experience.",
    technologies: ["Next.js", "TypeScript", "Shopify Polaris", "React"],
    githubUrl: "https://github.com/miskhill",
  },
  {
    title: "Fundraising Analytics Dashboard",
    description: "Full-stack application with MongoDB integration, featuring error monitoring with Sentry, optimized queries, and cost-effective GCP deployment.",
    technologies: ["React", "MongoDB", "Node.js", "GCP", "Sentry"],
    githubUrl: "https://github.com/miskhill",
  },
  {
    title: "CI/CD Pipeline Implementation",
    description: "Automated deployment pipeline using GitHub Actions, Python to TypeScript migration, and comprehensive testing suite for improved developer experience.",
    technologies: ["GitHub Actions", "TypeScript", "Python", "Docker"],
    githubUrl: "https://github.com/miskhill",
  },
  {
    title: "Restaurant Management System",
    description: "Business management application for multi-site restaurant operations, featuring P&L tracking, employee management, and operational analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
  },
];

export function ProjectSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            A showcase of my recent work, demonstrating expertise in modern web technologies and problem-solving capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                project.featured ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="h-36 sm:h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-4xl sm:text-6xl text-primary/30">
                  {project.title.charAt(0)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors truncate pr-2">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full whitespace-nowrap">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 overflow-x-auto xs:overflow-x-auto scrollbar-hide">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1 px-1 sm:px-2 py-1 bg-muted rounded-md text-xs whitespace-nowrap"
                    >
                      <TechIcon technology={tech} size={10} className="hidden sm:block" />
                      <span className="text-muted-foreground text-xs">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-border rounded-md hover:bg-accent transition-colors"
                      aria-label="View on GitHub"
                    >
                      <FaGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                      aria-label="View live demo"
                    >
                      <FaExternalLinkAlt className="w-2 h-2 sm:w-3 sm:h-3" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}