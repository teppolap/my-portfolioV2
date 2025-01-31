import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import project2Image from '../assets/project-2-image.png';
import project4Image from '../assets/project-4-image.png';
import project5Image from '../assets/project-5-image.png';
import project6Image from '../assets/project-6-image.png';
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
    title: 'Event Management App',
    description: 'Event Manager is a full-stack application that helps users organize and manage their events. Built with React and styled using Tailwind CSS, the frontend seamlessly connects to a backend powered by Node.js and Express. Users can add, edit, delete, and set reminders for events.',
    link: 'https://github.com/teppolap/event-management-app',
    image: project6Image,
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB'],
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
  return (
    <section id="projects" className="my-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl text-center p-6">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            className="relative bg-transparent dark:bg-transparent p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 groupblock group"
            aria-label={`View ${project.title}`}
          >
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full md:w-64 h-48 object-cover mb-4 md:mb-0 md:mr-4 rounded-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl text-slate-300 font-normal mb-2 transition-colors group-hover:text-tech-text-color">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-tech-bg-color text-tech-text-color px-2 py-1 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <FaExternalLinkAlt className="text-indigo-600 text-tech-text-color my-4 mx-2" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;