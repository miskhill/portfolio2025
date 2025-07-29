import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './timeline.css';
import { TbRefresh } from 'react-icons/tb';
import { FaGraduationCap, FaCode, FaBook, FaBriefcase, FaHandHoldingHeart, FaCloud, FaLaptopCode } from 'react-icons/fa';

// Career data
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  website: string;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "PES Technologies",
    period: "Jan 2025 - Present",
    current: true,
    icon: FaLaptopCode,
    website: "https://www.pestechnologies.com/",
    description: [
      "Building and maintaining apps using React, React Native, TypeScript.",
      "Working with EdgeDB and Node.js for backend development.",
      "Delivering features that improve field data collection and analysis."
    ]
  },
  {
    title: "Software Engineer",
    company: "Night Zookeeper",
    period: "Jan 2024 - Dec 2024",
    icon: FaCode,
    website: "https://www.nightzookeeper.com/",
    description: [
      "Delivered 3 Phaser3 games for their educational app.",
      "Improved home page conversion with new UI components."
    ]
  },
  {
    title: "Software Engineer",
    company: "GivePanel",
    period: "Oct 2022 - Dec 2023",
    icon: FaHandHoldingHeart,
    website: "https://givepanel.com/",
    description: [
      "Fixed critical bugs and reduced support issues to zero in month one.",
      "Integrated Sentry, reducing frontend errors by 75%, backend by 80%.",
      "Optimised MongoDB queries and GCP resource usage to cut costs."
    ]
  },
  {
    title: "Junior Engineer",
    company: "Cloudshelf Ltd",
    period: "Dec 2021 - Oct 2022",
    icon: FaCloud,
    website: "https://cloudshelf.ai/",
    description: [
      "Developed Next.js components with Shopify Polaris.",
      "Built CI/CD with GitHub Actions and rewrote code from Python to TypeScript.",
      "Enhanced platform with 75+ features and multiple bug fixes."
    ]
  },
  {
    title: "Business Manager",
    company: "Finix Restaurants Ltd",
    period: "2016 - 2021",
    icon: FaBriefcase,
    website: "https://www.mcdonalds.com/gb/en-gb.html",
    description: [
      "Managed £3.5M P&L and 100+ employees across multiple sites.",
      "Led hiring, onboarding, and operational troubleshooting."
    ]
  }
];

// Education data
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

type Tab = 'career' | 'education';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<Tab>('career');

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
    <section id="experience" className="pt-4 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-8">
            <motion.div
              onClick={() => setActiveTab('career')}
              className={`text-3xl font-bold cursor-pointer transition
                ${activeTab === 'career' 
                  ? 'text-foreground' 
                  : 'text-gray-400 opacity-70'} 
                hover:text-foreground hover:opacity-100`}
            >
              Career
            </motion.div>

            <div className="mx-10 sm:mx-16">
              <motion.div 
                onClick={() => setActiveTab(activeTab === 'career' ? 'education' : 'career')}
                className="cursor-pointer p-2 hover:bg-muted rounded-full transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <TbRefresh
                  className={`transition-all duration-300
                  ${activeTab === 'education' ? 'rotate-180' : 'rotate-0'}`}
                  size={24}
                />
              </motion.div>
            </div>
            
            <motion.div
              onClick={() => setActiveTab('education')}
              className={`text-3xl font-bold cursor-pointer transition
                ${activeTab === 'education' 
                  ? 'text-foreground' 
                  : 'text-gray-400 opacity-70'} 
                hover:text-foreground hover:opacity-100`}
            >
              Education
            </motion.div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            {activeTab === 'career' 
              ? 'My professional experience spanning software engineering, business management, and leadership roles.'
              : 'My educational journey from traditional academics to modern software engineering.'}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'career' ? (
            <motion.div
              key="career"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              variants={containerVariants}
              className="relative"
            >
              <div className="timeline-container">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="timeline-entry"
                  >
                    <div className="timeline-icon">
                      <experience.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="timeline-content">
                      <div className="bg-card rounded-lg p-3 sm:p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 bg-primary/10 rounded-md flex items-center justify-center">
                              <experience.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                            </div>
                            <h3 className="text-base sm:text-xl font-semibold text-foreground truncate pr-2 content-header">
                              {experience.title}
                            </h3>
                          </div>
                          {experience.current && (
                            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full whitespace-nowrap flex-shrink-0">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="mb-2 sm:mb-4">
                          <a 
                            href={experience.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm sm:text-lg font-medium text-primary hover:underline mb-0.5 sm:mb-1 inline-block content-subheader"
                          >
                            {experience.company}
                          </a>
                          <p className="text-xs sm:text-sm text-muted-foreground content-period">
                            {experience.period}
                          </p>
                        </div>

                        <ul className="space-y-1 sm:space-y-2">
                          {experience.description.map((item, i) => (
                            <li key={i} className="text-xs sm:text-sm text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              variants={containerVariants}
              className="relative max-w-4xl mx-auto"
            >
              <div className="timeline-container">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="timeline-entry"
                  >
                    <div className="timeline-icon">
                      <edu.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>

                    <div className="timeline-content">
                      <div className="flex-1 bg-card rounded-lg p-3 sm:p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3 flex-wrap gap-1 sm:gap-2">
                          <h3 className="text-base sm:text-xl font-semibold text-foreground content-header">
                            {edu.degree}
                          </h3>
                          <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full border ${typeColors[edu.type]} whitespace-nowrap`}>
                            {typeLabels[edu.type]}
                          </span>
                        </div>

                        <div className="mb-2 sm:mb-4">
                          <h4 className="text-sm sm:text-lg font-medium text-primary mb-0.5 sm:mb-1 content-subheader">
                            {edu.institution}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground content-period">
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
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-10 sm:mt-16"
              >
                <div className="bg-card rounded-lg p-4 sm:p-8 border border-border shadow-lg">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
