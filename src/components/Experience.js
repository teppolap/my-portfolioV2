import React from 'react';

const experiences = [
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
      'collection of products',
      'Sound collection',
      'Light collection',
      'Repackaging',
    ],
  },
  {
    title: 'Cemetery Summer Worker',
    company: 'Parish',
    period: '07/2018 - 08/2018',
    description: [
      'Care tasks and maintenance of the cemetery',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="my-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl text-center p-6">
        Working Experience
      </h1>
      <div className="grid grid-cols-1 gap-8 max-w-xl mx-auto">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative bg-transparent dark:bg-transparent p-6 rounded-lg shadow-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <div className="flex flex-col md:flex-row items-start">
              {/* Work Period on the left */}
              <div className="md:w-1/3 text-left text-slate-400 font-light mb-2 my-1 md:mb-0 text-sm">
                {experience.period}
              </div>

              {/* Title, Company, and Description on the right */}
              <div className="md:w-2/3">
                <h3 className="text-xl text-slate-300 font-normal mb-1 transition-colors group-hover:text-tech-text-color">
                  {experience.title}
                </h3>
                <h4 className="text-md text-slate-400 font-light mb-2">
                  {experience.company}
                </h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  {experience.description.map((desc, i) => (
                    <li key={i} className="mb-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;