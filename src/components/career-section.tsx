import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "PES Technologies",
    period: "Jan 2025 - Present",
    current: true,
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
    description: [
      "Delivered 3 Phaser3 games for their educational app.",
      "Improved home page conversion with new UI components."
    ]
  },
  {
    title: "Software Engineer",
    company: "GivePanel",
    period: "Oct 2022 - Dec 2023",
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
    description: [
      "Managed £3.5M P&L and 100+ employees across multiple sites.",
      "Led hiring, onboarding, and operational troubleshooting."
    ]
  }
];

export function CareerSection() {
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
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Career Journey
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            My professional experience spanning software engineering, business management, and leadership roles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-3 sm:left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-start mb-8 sm:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-3 sm:left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full border-2 sm:border-4 border-background z-10 mt-1.5" />

              {/* Content Card */}
              <div className={`ml-8 sm:ml-12 md:ml-0 w-[calc(100%-2rem)] sm:w-auto md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-card rounded-lg p-3 sm:p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-xl font-semibold text-foreground truncate pr-2">
                      {experience.title}
                    </h3>
                    {experience.current && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full whitespace-nowrap">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-2 sm:mb-4">
                    <h4 className="text-sm sm:text-lg font-medium text-primary mb-0.5 sm:mb-1">
                      {experience.company}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {experience.period}
                    </p>
                  </div>

                  <ul className="space-y-1 sm:space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}