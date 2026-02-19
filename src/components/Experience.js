import React from 'react';
import { motion } from 'framer-motion';

const experienceGroups = [
  {
    company: 'MyHomesID',
    roles: [
      {
        title: 'Fullstack Engineer Commission Worker',
        period: '02/2026 - Current',
        description: [
          'Projects focus on company management features within a digital knowledge base, including development of a control panel and company portal tools',
          'Technologies used primarily are Angular, TypeScript and AWS cloud services',
        ],
      },
      {
        title: 'FullStack Engineer Intern',
        period: '03/2025 - 08/2025',
        description: [
          'Collaborated on full-stack development using Angular, TypeScript, AWS services, and Git version control',
          'Built secure two-factor email authentication system utilizing AWS Lambda, SES, CDK, and cloud infrastructure',
          'Integrated new Stripe APIs for seamless payment processing and transaction management',
          'Developed and implemented multi-language support for authentication pages using Angular framework i18n and XLIFF system',
        ],
      },
    ],
  },
  {
    company: 'Tokmanni',
    roles: [
      {
        title: 'Warehouse Worker',
        period: '05/2024 - 08/2024',
        description: [
          'Collection of products',
          'Responsible for sorting finished rolls',
        ],
      },
    ],
  },
  {
    company: 'Inex Partners Oy',
    roles: [
      {
        title: 'Automation Equipment User',
        period: '05/2022 - 08/2022',
        description: [
          'Use of warehouse automation equipment',
          'Process control in own area of responsibility',
          'Resolving and correcting malfunctions and faults',
        ],
      },
      {
        title: 'Logistics Worker',
        period: '04/2019 - 09/2019 And 02/2021 - 08/2021',
        description: [
          'Collection of products',
          'Sound collection',
          'Light collection',
          'Repackaging',
        ],
      },
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
          {experienceGroups.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex} 
              className="relative mb-8"
              variants={itemVariants}
            >
              <div className="bg-black/20 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                <div className="px-6 pt-5 pb-2 border-b border-gray-800/80">
                  <h3 className="text-lg font-semibold text-white">
                    {group.company}
                  </h3>
                </div>
                
                <div className="relative">
                  {group.roles.map((role, roleIndex) => {
                    const isFirst = roleIndex === 0;
                    const isLast = roleIndex === group.roles.length - 1;
                    const showTimeline = group.roles.length > 1;
                    const dotCenterFromTop = '28px';
                    const lineLeft = '30px';
                    return (
                      <div
                        key={roleIndex}
                        className="relative"
                      >
                        {showTimeline && !isFirst && (
                          <div
                            className="absolute w-px bg-cyan-400/40"
                            style={{
                              left: lineLeft,
                              top: 0,
                              height: dotCenterFromTop,
                              transform: 'translateX(-50%)',
                            }}
                            aria-hidden
                          />
                        )}
                        {showTimeline && !isLast && (
                          <div
                            className="absolute w-px bg-cyan-400/40"
                            style={{
                              left: lineLeft,
                              top: dotCenterFromTop,
                              bottom: 0,
                              transform: 'translateX(-50%)',
                            }}
                            aria-hidden
                          />
                        )}
                        <div className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {showTimeline && (
                              <span
                                className="w-3 h-3 rounded-full border-2 border-cyan-400/60 bg-gray-900 flex-shrink-0 z-10"
                                aria-hidden
                              />
                            )}
                            <p className="text-base font-semibold text-white">
                              {role.title}
                            </p>
                          </div>
                        <p className={`text-cyan-400/90 text-sm font-medium mb-3 ${group.roles.length > 1 ? 'ml-6' : ''}`}>
                          {role.period}
                        </p>
                        <ul className={`space-y-1.5 ${group.roles.length > 1 ? 'ml-6' : ''}`}>
                          {role.description.map((desc, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm leading-relaxed">
                                {desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    );
                  })}
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