import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { TechIcon } from '../assets/SvgComponents';

interface Project {
  title: string;
  summary: string;
  role: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Hospitality Hub',
    summary:
      'A team-built hiring platform for hospitality businesses with account flows, job matching, and profile-led trust signals.',
    role: 'Featured project • Backend, profile pages, ratings',
    image: 'https://i.imgur.com/l3crfLq.png',
    technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'Express'],
    githubUrl: 'https://github.com/miskhill/Project4#readme',
    featured: true,
  },
  {
    title: 'GCW Esports',
    summary:
      'A themed esports discovery experience focused on game ratings, browsing, and community engagement.',
    role: 'Featured project • Backend setup, likes, views, styling',
    image: 'https://i.imgur.com/oAyjrg2.jpg',
    technologies: ['React', 'Express', 'MongoDB', 'Mongoose'],
    githubUrl: 'https://github.com/CosmasC128/Project-3#readme',
    featured: true,
  },
  {
    title: 'Connect 4',
    summary: 'A polished browser version of the classic desktop game built as a focused solo project.',
    role: 'Solo project • Core gameplay and UI',
    image: 'https://i.imgur.com/zAxT5UI.png',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/miskhill/Project1#readme',
    liveUrl: 'https://miskhill.github.io/Project1/',
  },
  {
    title: 'Random Movie Generator',
    summary:
      'A quick decision-making app that uses external API data to cut down the time spent choosing a film.',
    role: 'Pair project • API integration and data handling',
    image: 'https://i.imgur.com/HjjLtGN.jpg',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/miskhill/Project-2#readme',
    liveUrl: 'https://movieproject2.netlify.app',
  },
  {
    title: 'Smoothie App',
    summary: 'A lightweight CRUD-style app for recipe management built with React and Supabase.',
    role: 'Solo project • Frontend and backend integration',
    image: 'https://user-images.githubusercontent.com/80961839/193401162-800c2987-5867-4834-bacb-60d268fbe6e0.png',
    technologies: ['React', 'Supabase', 'JavaScript'],
    githubUrl: 'https://github.com/miskhill/Supabase-and-React#readme',
    liveUrl: 'https://smoothie-app.netlify.app/',
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const supportingProjects = projects.filter((project) => !project.featured);
const easing = [0.16, 1, 0.3, 1] as const;

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: easing,
    },
  },
};

export function ProjectSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Stronger hierarchy, clearer storytelling, better proof of work.</h2>
        <p className="section-copy">
          These are the projects that show how I think about product shape, implementation detail,
          and the quality of the final experience, not just the stack used to build it.
        </p>
      </div>

      <div className="projects-grid">
        <motion.div
          className="projects-grid__featured"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card project-card--featured"
              variants={revealVariants}
            >
              <div className="project-card__visual">
                <img src={project.image} alt={`${project.title} preview`} />
                <div className="project-card__overlay" />
              </div>

              <div className="project-card__content">
                <div className="project-card__eyebrow">
                  <span>{project.role}</span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>

                <div className="project-card__stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-card__stack-tag">
                      <TechIcon technology={tech} size={14} />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action--secondary"
                    >
                      <FaGithub />
                      Code
                    </a>
                  ) : null}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action--primary"
                    >
                      <FaExternalLinkAlt />
                      Live demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid__supporting"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {supportingProjects.map((project) => (
            <motion.article key={project.title} className="project-card" variants={revealVariants}>
              <div className="project-card__content project-card__content--plain">
                <div className="project-card__eyebrow project-card__eyebrow--plain">
                  <span>{project.role}</span>
                </div>
                <h3 className="project-card__title project-card__title--plain">{project.title}</h3>
                <p className="project-card__summary project-card__summary--plain">{project.summary}</p>

                <div className="project-card__stack">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="project-card__stack-tag project-card__stack-tag--plain"
                    >
                      <TechIcon technology={tech} size={14} />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action--plain"
                    >
                      <FaGithub />
                      Code
                    </a>
                  ) : null}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action project-action--plain"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
