import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Tab = 'career' | 'education';

interface JourneyEntry {
  title: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  current?: boolean;
  website?: string;
  logo?: string;
  tags: string[];
}

const careerEntries: JourneyEntry[] = [
  {
    title: 'Software Engineer',
    company: 'PES Technologies',
    period: 'Jan 2025 - Present',
    summary:
      'Working across web, mobile, and backend surfaces to make complex soil-testing products clearer and more dependable.',
    current: true,
    website: 'https://www.pestechnologies.com/',
    logo: '/images/logos/pes-logo.png',
    tags: ['React', 'React Native', 'TypeScript', 'C#'],
    points: [
      'Building and maintaining product features across React, React Native, and TypeScript user journeys.',
      'Helping move core systems toward Postgres and .NET while keeping delivery pace steady.',
      'Improving test coverage, reliability, and release confidence across frontend and backend code.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Night Zookeeper',
    period: 'Jan 2024 - Dec 2024',
    summary:
      'Delivered educational product work with an emphasis on engagement, game experience, and conversion.',
    website: 'https://www.nightzookeeper.com/',
    logo: '/images/logos/nightzookeeper-logo.png',
    tags: ['Phaser', 'Frontend UI', 'Product Growth'],
    points: [
      'Delivered three Phaser 3 games for the educational platform.',
      'Improved the homepage experience with new UI components aimed at stronger conversion.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'GivePanel',
    period: 'Oct 2022 - Dec 2023',
    summary:
      'Shipped reliability, search, observability, and cost improvements on a live SaaS product handling large-scale fundraising workflows.',
    website: 'https://givepanel.com/',
    logo: '/images/logos/givepanel-logo.png',
    tags: ['Node.js', 'MongoDB', 'Sentry', 'GCP'],
    points: [
      'Improved heavy MongoDB queries so previously failing customer searches returned promptly.',
      'Introduced backend chunking that supported very high-volume email runs more safely.',
      'Integrated observability and helped drive a major reduction in reported frontend and backend errors.',
    ],
  },
  {
    title: 'Junior Engineer',
    company: 'Cloudshelf Ltd',
    period: 'Dec 2021 - Oct 2022',
    summary:
      'Built customer-facing commerce features and improved delivery discipline early in my engineering career.',
    website: 'https://cloudshelf.ai/',
    logo: '/images/logos/cloudshelf-logo.png',
    tags: ['Next.js', 'Shopify Polaris', 'CI/CD', 'GraphQL'],
    points: [
      'Built UI and data flows with React, Next.js, and Shopify Polaris.',
      'Delivered more than 75 product improvements and bug fixes across the application.',
      'Helped set up CI/CD and supported a wider TypeScript standardisation effort.',
    ],
  },
  {
    title: 'Business Manager',
    company: 'Finix Restaurants Ltd',
    period: '2016 - 2021',
    summary:
      'Managed a high-volume business environment before moving into software engineering, which still shapes how I lead and prioritise.',
    website: 'https://www.mcdonalds.com/gb/en-gb.html',
    logo: '/images/logos/mcdonalds-logo.png',
    tags: ['Leadership', 'Operations', 'Hiring', 'P&L'],
    points: [
      'Owned the financial and operational performance of a multi-million-pound business.',
      'Managed managers, staffing, and day-to-day delivery in a fast-moving environment.',
      'Built the communication and leadership skills I now bring into engineering teams.',
    ],
  },
];

const educationEntries: JourneyEntry[] = [
  {
    title: 'Software Engineering Immersive',
    company: 'General Assembly',
    period: 'Aug 2021 - Oct 2021',
    summary:
      'An intensive full-stack programme that formalised my shift into software engineering.',
    tags: ['React', 'Node.js', 'JavaScript'],
    points: [
      'Covered modern JavaScript, React, Node.js, databases, and software engineering fundamentals.',
      'Developed the first set of portfolio projects that started my move into product engineering.',
    ],
  },
  {
    title: 'BA (Hons) History',
    company: 'University of Huddersfield',
    period: 'Graduated',
    summary:
      'The research and communication side of this degree still influences how I write, reason, and explain.',
    tags: ['Research', 'Communication', 'Analysis'],
    points: [
      'Developed strong written communication, critical analysis, and structured thinking.',
    ],
  },
  {
    title: 'Responsive Web Development',
    company: 'Udemy',
    period: 'July 2021',
    summary:
      'The course that helped kick-start the practical side of building on the web.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    points: [
      'Focused on HTML5, CSS3, JavaScript, and responsive layout principles.',
    ],
  },
];

const easing = [0.16, 1, 0.3, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easing,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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

function JourneyCard({ entry }: { entry: JourneyEntry }) {
  return (
    <motion.article
      variants={itemVariants}
      className={`journey-card ${entry.current ? 'journey-card--current' : ''}`}
    >
      <div className="journey-card__top">
        <div className="journey-card__identity">
          {entry.logo ? (
            <img className="journey-card__logo" src={entry.logo} alt={`${entry.company} logo`} />
          ) : null}

          <div>
            <div className="journey-card__eyebrow">
              <span>{entry.period}</span>
              {entry.current ? <span>• Current</span> : null}
            </div>
            <h3 className="journey-card__title">{entry.title}</h3>
            <div className="journey-card__company">
              {entry.website ? (
                <a href={entry.website} target="_blank" rel="noopener noreferrer">
                  {entry.company}
                </a>
              ) : (
                entry.company
              )}
            </div>
          </div>
        </div>

        {entry.current ? <span className="journey-card__badge">Current role</span> : null}
      </div>

      <div className="journey-card__body">
        <p className="journey-card__summary">{entry.summary}</p>

        <ul className="journey-card__list">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="journey-card__tags" aria-label={`${entry.company} technologies and themes`}>
          {entry.tags.map((tag) => (
            <span key={tag} className="journey-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<Tab>('career');
  const entries = activeTab === 'career' ? careerEntries : educationEntries;

  return (
    <section id="experience" className="section-shell">
      <div className="journey">
        <div className="journey__header">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2 className="section-title">A career path that combines product delivery with range.</h2>
            <p className="section-copy">
              I came into software from leadership and operations, which is why I naturally
              balance implementation detail with usability, delivery pressure, and team reality.
            </p>
          </div>

          <div className="journey-switch" role="tablist" aria-label="Experience tabs">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'career'}
              className={`journey-switch__button ${
                activeTab === 'career' ? 'journey-switch__button--active' : ''
              }`}
              onClick={() => setActiveTab('career')}
            >
              Career
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'education'}
              className={`journey-switch__button ${
                activeTab === 'education' ? 'journey-switch__button--active' : ''
              }`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="journey-stack"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -14, transition: { duration: 0.2 } }}
          >
            {entries.map((entry) => (
              <JourneyCard key={`${activeTab}-${entry.company}-${entry.title}`} entry={entry} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
