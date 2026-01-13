import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import project6Image from '../assets/project-6-image.png';
import project2Image from '../assets/project-2-image.png';
import project4Image from '../assets/project-4-image.png';
import project5Image from '../assets/project-5-image.png';
import project7Image from '../assets/project-7-image.png';


const projects = [
  {
    title: 'Real-Time Chat Application',
    description: 'A modern, full-stack real-time chat application featuring instant messaging, image sharing, and real-time notifications. Built with React frontend and Node.js backend, using Socket.io for WebSocket communication, MongoDB for persistent message and user storage, and Cloudinary for image management.',
    link: 'https://github.com/teppolap/chatapp',
    image: project6Image,
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'JWT', 'Cloudinary', 'Vite', 'Zustand', 'TailwindCSS'],
  },
  {
    title: 'E-Commerce Site | Topshelf Market',
    description: 'Built a E-Commerce Site with features secure authentication with NextAuth.js, dynamic product management using Next.js and Sanity CMS, a Redux-powered shopping cart, custom APIs for checkout, responsive design with Tailwind CSS and webhook support with Stripe for handling external events like payment confirmations.',
    link: 'https://top-shelf-market.vercel.app/',
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
        className="grid grid-cols-1 gap-10 md:gap-12 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.a 
            key={index} 
            href={project.link} 
            className="relative bg-transparent dark:bg-transparent p-6 md:p-8 rounded-lg shadow-lg groupblock group"
            aria-label={`View ${project.title}`}
            target="_blank"
            rel="noreferrer"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col">
              {/* Project Image */}
              <motion.div className="relative mb-6">
                <motion.img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                  variants={imageVariants}
                />
                <motion.div
                  className="absolute top-4 right-4 text-tech-text-color bg-gray-900/70 p-2 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaExternalLinkAlt />
                </motion.div>
              </motion.div>

              {/* Project Title */}
              <motion.h3 
                className="text-xl md:text-2xl text-slate-300 font-normal mb-4 transition-colors group-hover:text-tech-text-color"
              >
                {project.title}
              </motion.h3>

              {/* Project Description */}
              <motion.p 
                className="text-gray-400 dark:text-gray-300 mb-6 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="text-xs md:text-sm bg-tech-bg-color text-tech-text-color px-3 py-1.5 rounded-lg font-medium"
                    variants={techVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;