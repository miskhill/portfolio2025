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
    title: 'Question Manager',
    summary:
      'A full-stack admin app for managing an interview question bank with a typed ASP.NET Core API, Angular 21 frontend, and MongoDB-backed CRUD flows.',
    role: 'Featured project • Angular 21, ASP.NET Core, MongoDB',
    image: '/images/projects/question-manager.png',
    technologies: ['Angular', 'C#', 'ASP.NET Core', 'MongoDB'],
    githubUrl: 'https://github.com/miskhill/question-manager#readme',
    featured: true,
  },
  {
    title: 'Annual Media',
    summary:
      'A production-style media tracker frontend with protected routes, search, filters, pagination, and admin upload flows for films, series, and books.',
    role: 'Featured project • React product frontend, auth, testing',
    image: '/images/projects/annual-media.png',
    technologies: ['React', 'Vite', 'Material UI', 'JavaScript'],
    githubUrl: 'https://github.com/miskhill/AnnualMediaFrontEnd#readme',
    liveUrl: 'https://annual-media-front-end.vercel.app/',
    featured: true,
  },
  {
    title: 'Learning Tracker Mobile',
    summary:
      'A React Native learning companion built around offline-first study flows, queued sync, notifications, and a GraphQL-backed mobile data layer.',
    role: 'Featured project • React Native, Expo, offline sync',
    image: '/images/projects/learning-tracker-mobile.svg',
    technologies: ['React Native', 'TypeScript', 'GraphQL', 'Expo'],
    githubUrl: 'https://github.com/miskhill/learning-tracker-mobile#readme',
    featured: true,
  },
  {
    title: 'Angular AgriDash',
    summary:
      'An agriculture analytics dashboard pairing an Angular frontend with a typed ASP.NET Core API, Angular Material, and Chart.js.',
    role: 'Featured project • Angular dashboard, C# API, data visualisation',
    image: '/images/projects/angular-agridash.png',
    technologies: ['Angular', 'C#', 'ASP.NET Core', 'Chart.js', 'Angular Material'],
    githubUrl: 'https://github.com/miskhill/csharp-backend-project#readme',
    liveUrl: 'https://angularagridash.netlify.app/',
    featured: true,
  },
  {
    title: 'Learning Tracker API',
    summary:
      'A GraphQL backend for learning topics and flashcards, combining TypeScript, Apollo Server, TypeORM, and PostgreSQL into a cleaner API architecture story.',
    role: 'Featured project • GraphQL API, TypeORM, PostgreSQL',
    image: '/images/projects/learning-tracker-api.svg',
    technologies: ['TypeScript', 'GraphQL', 'PostgreSQL', 'Node.js'],
    githubUrl: 'https://github.com/miskhill/learning-tracker#readme',
    featured: true,
  },
  {
    title: 'Hospitality Hub',
    summary:
      'A 2021 time-constrained group showcase project: a hiring platform for hospitality businesses with account flows, job matching, and profile-led trust signals.',
    role: 'Featured project • 2021 group showcase sprint, Django backend',
    image: '/images/projects/hospitality-hub.png',
    technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'Express'],
    githubUrl: 'https://github.com/miskhill/Project4#readme',
    featured: true,
  },
  {
    title: 'GCW Esports',
    summary:
      'A 2022 time-constrained group showcase project: a themed esports discovery experience focused on game ratings, browsing, and community engagement.',
    role: 'Featured project • 2022 group showcase sprint, MERN build',
    image: '/images/projects/gcw-esports.png',
    technologies: ['React', 'Express', 'MongoDB', 'Mongoose'],
    githubUrl: 'https://github.com/CosmasC128/Project-3#readme',
    featured: true,
  },
  {
    title: 'Salon Dashboard Demo',
    summary:
      'A compact Ember.js dashboard demo that broadens the portfolio beyond the usual React stack with TypeScript routes and Tailwind styling.',
    role: 'Supporting project • Ember.js, TypeScript, Tailwind',
    image: '/images/projects/salon-dashboard-demo.svg',
    technologies: ['TypeScript', 'Ember.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/miskhill/salon-dashboard-demo#readme',
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
