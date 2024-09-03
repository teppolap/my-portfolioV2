import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import project1Image from '../assets/project-1-image.png';
import project2Image from '../assets/project-2-image.png';
import project3Image from '../assets/project-3-image.png';
import project4Image from '../assets/project-4-image.png';
import project5Image from '../assets/project-5-image.png';



const projects = [
  {
    title: 'TypeScript Movies App ',
    description: 'Build a Movies App which load JSON data and show loaded data in a React application. This movie application loads data from the Movie DB.',
    link: 'https://gitlab.labranet.jamk.fi/AB7340/wuip-exercises/-/tree/main/typescript-movies-app?ref_type=heads',
    image: project1Image,
    technologies: ['Typescript', 'JavaScript', 'React', 'Node.js', 'CSS'],
  },
  {
    title: 'Mobile Movies App',
    description: 'Build a movies mobile app with React Native CLI development by working with built-in and custom components, managing state and props, handling events, and passing data between components. Practiced navigating between screens, applying styles, handling touchable components, and loading and parsing JSON data.',
    link: 'https://gitlab.labranet.jamk.fi/AB7340/mobile-exercises/-/tree/main/Movies2?ref_type=heads',
    image: project2Image,
    technologies: ['React Native', 'JavaScript', 'Node.js'],
  },
  {
    title: 'Weather Widget',
    description: 'Created a Weather Widget for android phones using kotlin and Android Studio.',
    link: 'https://gitlab.labranet.jamk.fi/AB7340/android-exercises/-/tree/main/E14WeatherWidget?ref_type=heads',
    image: project3Image,
    technologies: ['Kotlin', 'Android Studio'],
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
      <div className="grid grid-cols-1 gap-8 max-w-xl mx-auto">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            className="relative bg-transparent dark:bg-transparent p-6 rounded-lg shadow-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 block group"
            aria-label={`View ${project.title}`}
          >
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={project.image}
                className="w-full md:w-32 h-24 object-cover mb-4 md:mb-0 md:mr-4 rounded-lg"
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
              <FaExternalLinkAlt className="text-indigo-600 text-tech-text-color my-4" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;