import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Developer Commission Worker',
    company: 'MyHomesID',
    period: '02/2026 - Now',
    description: [
      'Projects focus on company management features within a digital knowledge base, including development of a control panel and company portal tools',
      'Technologies used primarily are Angular, TypeScript and AWS cloud services',
    ],
  },
  {
    title: 'FullStack Developer Intern',
    company: 'MyHomesID',
    period: '03/2025-08/2025',
    description: [
      'Collaborated on full-stack development using Angular, TypeScript, AWS services, and Git version control',
      'Built secure two-factor email authentication system utilizing AWS Lambda, SES, CDK, and cloud infrastructure',
      'Integrated new Stripe APIs for seamless payment processing and transaction management',
      'Developed and implemented multi-language support for authentication pages using Angular framework i18n and XLIFF system',
    ],
  },
  {
    title: 'Warehouse Worker',
    company: 'Tokmanni',
    period: '05/2024-08/2024',
    description: [
      'Collection of products',
      'Responsible for sorting finished rolls',
    ],
  },
  {
    title: 'Automation Equipment User',
    company: 'Inex Partners Oy',
    period: '05/2022-08/2022',
    description: [
      'Use of warehouse automation equipment',
      'Process control in own area of responsibility',
      'Resolving and correcting malfunctions and faults',
    ],
  },
  {
    title: 'Logistics Worker',
    company: 'Inex Partners Oy',
    period: '02/2021-08/2021 And 04/2019-09/2019',
    description: [
      'Collection of products',
      'Sound collection',
      'Light collection',
      'Repackaging',
    ],
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5,
      },
    },
  };

  const circleVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="my-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical timeline line */}
          <motion.div 
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan-400 origin-top"
            variants={timelineVariants}
          ></motion.div>
          
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              className="relative mb-8"
              variants={itemVariants}
            >
              {/* Timeline circle */}
              <motion.div 
                className="absolute left-4 top-2 w-4 h-4 bg-cyan-400 rounded-full z-10"
                variants={circleVariants}
              ></motion.div>
              
              {/* Content container */}
              <div className="ml-12 bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col">
                  {/* Job title */}
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {experience.title}
                  </h3>
                  
                  {/* Company and period */}
                  <p className="text-cyan-400 text-sm font-medium mb-4">
                    @{experience.company} | {experience.period}
                  </p>
                  
                  {/* Description bullets */}
                  <ul className="space-y-2">
                    {experience.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;