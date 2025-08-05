import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import project2Image from '../assets/project-2-image.png';
import project4Image from '../assets/project-4-image.png';
import project5Image from '../assets/project-5-image.png';
import project7Image from '../assets/project-7-image.png';


const projects = [
  {
    title: 'E-Commerce Site | Topshelf Market',
    description: 'Built a E-Commerce Site with features secure authentication with NextAuth.js, dynamic product management using Next.js and Sanity CMS, a Redux-powered shopping cart, custom APIs for checkout, responsive design with Tailwind CSS and webhook support with Stripe for handling external events like payment confirmations.',
    link: 'https://github.com/teppolap/ecommercesite',
    image: project7Image,
    technologies: ['NextJS', 'Typescript', 'Redux', 'TailwindCSS', 'Sanity CMS', 'Stripe', 'NextAuth.js'],
  },
  {
    title: 'NextJS Auth App',
    description: 'The front-end of the application is built with Next.js and TailwindCSS and uses Clerk for user authentication. Backend is powered by MongoDB and Mongoose for elegant MongoDB object modeling in Node.js.',
    link: 'https://github.com/teppolap/next-auth-app',
    image: project2Image,
    technologies: ['NextJS', 'JavaScript', 'Node.js', 'Mongoose', 'Express', 'MongoDB', 'Clerk', 'TailwindCSS'],
  },
  {
    title: "Men's  Olympics Ice hockey Database 2022",
    description: 'Database makes it easy to search for information about the team, players and matches they have played. The database is designed for sports professionals and anyone interested in the sport.',
    link: 'https://student.labranet.jamk.fi/~AB7340/Tietokannat/Harjoituspalautukset/harjotustyo/Harjoitustyo.html',
    image: project4Image, 
    technologies: ['MYSQL', 'MariaDB'],
  },
  {
    title: 'My Web Portfolio',
    description: 'Source code for my newest portfolio',
    link: 'https://github.com/teppolap/my-portfolioV2',
    image: project5Image, 
    technologies: ['TailwindCSS', 'React'],
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="my-12">
      <motion.h1 
        className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl text-center p-6"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Projects
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.a 
            key={index} 
            href={project.link} 
            className="relative bg-transparent dark:bg-transparent p-8 rounded-lg shadow-lg groupblock group"
            aria-label={`View ${project.title}`}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.img
                 src={project.image}
                 alt={`Screenshot of ${project.title}`}
                 className="w-full md:w-64 h-48 object-cover mb-4 md:mb-0 md:mr-4 rounded-lg"
                 variants={imageVariants}
               />
              <div className="flex-1 text-center md:text-left">
                <motion.h3 
                  className="text-xl text-slate-300 font-normal mb-2 transition-colors group-hover:text-tech-text-color"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap justify-center md:justify-start gap-2"
                  variants={containerVariants}
                >
                  {project.technologies.map((tech, techIndex) => (
                     <motion.span
                       key={techIndex}
                       className="text-xs bg-tech-bg-color text-tech-text-color px-2 py-1 rounded-lg font-medium"
                       variants={techVariants}
                     >
                       {tech}
                     </motion.span>
                   ))}
                </motion.div>
              </div>
                <motion.div
                 className="text-indigo-600 text-tech-text-color my-4 mx-2"
               >
                 <FaExternalLinkAlt />
               </motion.div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;