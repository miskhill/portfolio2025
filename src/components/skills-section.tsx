import { motion } from 'framer-motion';
import { TechIcon } from '../assets/SvgComponents';

interface SkillCategory {
  title: string;
  summary: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend systems',
    summary:
      'Building interfaces that feel clear, responsive, and maintainable across web and mobile surfaces.',
    skills: ['TypeScript', 'React', 'React Native', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend and data',
    summary:
      'Comfortable shaping APIs, working with persistence layers, and supporting product behaviour end to end.',
    skills: ['Node.js', 'Express', 'GraphQL', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Delivery and tooling',
    summary:
      'Focused on shipping with confidence through sensible tooling, infrastructure awareness, and CI discipline.',
    skills: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'GCP', 'GitKraken'],
  },
  {
    title: 'Leadership range',
    summary:
      'The management side matters too: communication, hiring, training, prioritisation, and calmer delivery under pressure.',
    skills: ['Business Management', 'Scrum', 'Training Lead', 'Hiring Lead', 'Code Review', 'Figma'],
  },
];

const easing = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">A tighter skills section that reads like capability, not clutter.</h2>
        <p className="section-copy">
          The goal here is to show what I can reliably deliver, not to dump every tool I have
          touched. These are the areas I work in most confidently.
        </p>
      </div>

      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.09 }}
      >
        {skillCategories.map((category) => (
          <motion.article key={category.title} className="skill-card" variants={cardVariants}>
            <h3 className="skill-card__title">{category.title}</h3>
            <p className="skill-card__summary">{category.summary}</p>

            <div className="skill-card__tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  <TechIcon technology={skill} size={16} />
                  <span className="skill-tag__label">{skill}</span>
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
