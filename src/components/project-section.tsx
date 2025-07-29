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
    title: "Hospitality Hub",
    description: "An application allowing businesses and employees to register, login, post jobs, apply to jobs, and rate each other. Developed in a 3-person team with a 10-day timeframe. Responsible for implementing the back-end and profile pages with rating functionality.",
    image: "https://i.imgur.com/l3crfLq.png",
    technologies: ["Python", "Django", "PostgreSQL", "React", "Express"],
    githubUrl: "https://github.com/miskhill/Project4#readme",
    featured: true,
  },
  {
    title: "GCW Esports",
    description: "Quick access to popular Esport games rated by peers. League of Legends based and themed. Developed in a 3-person team with a 10-day timeframe. Implemented back-end setup, functionality for likes and views, and styling with Bootstrap and CSS.",
    image: "https://i.imgur.com/oAyjrg2.jpg",
    technologies: ["React", "Express", "MongoDB", "Mongoose"],
    githubUrl: "https://github.com/CosmasC128/Project-3#readme",
    featured: true,
  },
  {
    title: "Connect 4",
    description: "Classic desktop game built with vanilla JavaScript, CSS, and HTML. Developed in a 7-day timeframe as a solo project.",
    image: "https://i.imgur.com/zAxT5UI.png",
    technologies: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/miskhill/Project1#readme",
    liveUrl: "https://miskhill.github.io/Project1/",
  },
  {
    title: "Random Movie Generator",
    description: "Save time deciding what movie to watch by randomizing your choice. Built in a 48-hour timeframe as part of a 2-person team. Responsible for implementing the API and accessing all relevant information.",
    image: "https://i.imgur.com/HjjLtGN.jpg",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    githubUrl: "https://github.com/miskhill/Project-2#readme",
    liveUrl: "https://movieproject2.netlify.app",
  },
  {
    title: "Smoothie App",
    description: "A modern web application for smoothie recipes and management. Built with React and Supabase for backend functionality.",
    image: "https://user-images.githubusercontent.com/80961839/193401162-800c2987-5867-4834-bacb-60d268fbe6e0.png",
    technologies: ["React", "Supabase", "JavaScript"],
    githubUrl: "https://github.com/miskhill/Supabase-and-React#readme",
    liveUrl: "https://smoothie-app.netlify.app/",
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
              {project.image ? (
                <div className="h-36 sm:h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="h-36 sm:h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl text-primary/30">
                    {project.title.charAt(0)}
                  </div>
                </div>
              )}

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

                <div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4 overflow-x-auto xs:overflow-x-auto scrollbar-hide">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 bg-muted rounded-md text-xs whitespace-nowrap my-1"
                    >
                      <TechIcon technology={tech} size={12} className="hidden sm:block" />
                      <span className="text-muted-foreground text-xs font-medium">{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-start gap-4 sm:gap-6 mt-4 sm:mt-5 pt-2 sm:pt-3 border-t border-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-border rounded-md hover:bg-accent transition-colors z-10 relative"
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
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors z-10 relative"
                      aria-label="View live demo"
                    >
                      <FaExternalLinkAlt className="w-2 h-2 sm:w-3 sm:h-3" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}