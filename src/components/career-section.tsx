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
      "Led the development of robust front-end features using React, React Native and TypeScript, delivering intuitive interfaces for complex soil data reports across multiple pages, enhancing user experience and data clarity for customers and internal teams.",
      "Architected scalable backend services with Node.js, GraphQl and EdgeDB to support efficient querying, report generation, and organisation-level data segmentation, significantly improving performance and maintainability.",
      "Drove improvements to internal data handling workflows, including integration of dynamic PDF export functionality and flexible organisation-based filters, resulting in faster report generation and improved usability for clients.",
      "Collaborated cross-functionally with science and product teams to translate complex agritech requirements into usable software, contributing to the commercialisation of a novel soil health testing platform."
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
      "Implemented MongoDB indexing to speed up and improve large search queries. I was successfully able to return values that had previously been unsearchable to our customers. Large queries that had previously been hanging now returned data promptly to the user.",
      "Implemented chunking in our Node.js backend to help with the vast quantities of emails we were handling on a daily basis. We sent 945000 in one session with no fails once this was in place.",
      "I optimised resource usage to avoid unnecessary charges after checking the GCP dashboards and set timers for our GCP staging environments to spin down at 5pm and at weekends saving the company money and being environmentally sound.",
      "Championed implementing Observability and integrated Sentry to pro-actively spot issues in the code base. This resulted in a 75% reduction on front end errors and 80% in back-end errors being reported from August 2023 - November 2023.",
      "I was tasked with changing our forms to all have the correct Web Standard Accessibility Guidelines. We were able to successfully pass our accessibility audits which clients demanded of us resulting in continued business."
    ]
  },
  {
    title: "Junior Engineer",
    company: "Cloudshelf Ltd",
    period: "Dec 2021 - Oct 2022",
    description: [
      "Use TypeScript with React to link our backend Postgres & GraphQL database.",
      "Hands on with Polaris the Shopify component library utilising this within our Next.js and React applications.",
      "Store individual retailer options in our Postgres database via our Nest.js backend to influence the layout of their digital display.",
      "Researched & assisted with the application process of being accepted to the Shopify App ecosystem.",
      "Delivered over 75 additional features and numerous bug fixes improving the app and retailer experience.",
      "Used Github actions to set up an automated CI/CD pipeline and wrote unit tests to achieve 80% coverage in testing. Helped onboard a QA and re-write Python code to TypeScript to assist in standardisation."
    ]
  },
  {
    title: "Business Manager",
    company: "Finix Restaurants Ltd",
    period: "2016 - 2021",
    description: [
      "Responsible for the overall financial and operational results of a £3.5 million business.",
      "Managed a team of 12 managers and over 100 staff.",
      "Operational focused in a fast paced, evolving business environment.",
      "Responsible for hiring, training and onboarding employees."
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
          <div className="absolute left-3 sm:left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-start mb-8 sm:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-3 sm:left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full border-2 sm:border-4 border-background z-10 mt-1.5" />

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

              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}