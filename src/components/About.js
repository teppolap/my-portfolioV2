import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNode, FaGitAlt, FaAws,
  FaAngular
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiExpress, SiMongodb,
  SiJavascript, SiPostman, SiOpenai
} from 'react-icons/si';
import { Highlighter } from './ui/highlighter';
import { ReactComponent as CursorLogo } from '../assets/cursor.svg';
import { ReactComponent as CopilotLogo } from '../assets/copilot-color.svg';

const About = () => {
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

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="about" className="my-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl text-center p-6"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        About
      </motion.h1>
      
      {/* About Text Section */}
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="text-center mb-8"
          variants={paragraphVariants}
        >
          <p className="text-left text-gray-700 dark:text-gray-300 transition-opacity duration-700 text-sm sm:text-base md:text-lg lg:text-xl">
          I’m a recent graduate with a strong foundation in Fullstack development and a <Highlighter action="underline" color="#f472b6" isView>clear goal: land a role as a Fullstack developer</Highlighter> where I can build polished, user-focused web experiences.
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center mb-8"
          variants={paragraphVariants}
        >
          <p className="text-left text-gray-700 dark:text-gray-300 transition-opacity duration-700 text-sm sm:text-base md:text-lg lg:text-xl">
          I work with <Highlighter action="underline" color="#34d399" isView>modern web technologies to build full stack applications</Highlighter> from user interfaces to backend and cloud services. I also <Highlighter action="underline" color="#34d399" isView>develop my skills through personal projects</Highlighter> and use <Highlighter action="underline" color="#34d399" isView>generative AI daily</Highlighter> to support my software development workflow.
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center mb-8"
          variants={paragraphVariants}
        >
          <p className="text-left text-gray-700 dark:text-gray-300 transition-opacity duration-700 text-sm sm:text-base md:text-lg lg:text-xl">
          <Highlighter action="underline" color="#c084fc" isView>I learn fast, communicate clearly and thrive in collaborative teams</Highlighter> that ship thoughtfully crafted products.
          </p>
        </motion.div>

        <motion.div 
          className="py-6 px-8 mt-8"
          variants={paragraphVariants}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-6 gap-x-4 sm:gap-y-8 sm:gap-x-8">
            <div className="flex items-center gap-3">
              <FaReact className="shrink-0 text-xl sm:text-2xl text-[#61DAFB]" />
              <span className="text-gray-200 text-sm sm:text-base">React</span>
            </div>
            <div className="flex items-center gap-3">
              <FaAngular className="shrink-0 text-xl sm:text-2xl text-[#DD0031]" />
              <span className="text-gray-200 text-sm sm:text-base">Angular</span>
            </div>
            <div className="flex items-center gap-3">
              <SiTypescript className="shrink-0 text-xl sm:text-2xl text-[#3178C6]" />
              <span className="text-gray-200 text-sm sm:text-base">TypeScript</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHtml5 className="shrink-0 text-xl sm:text-2xl text-[#E34F26]" />
              <span className="text-gray-200 text-sm sm:text-base">HTML5</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCss3Alt className="shrink-0 text-xl sm:text-2xl text-[#1572B6]" />
              <span className="text-gray-200 text-sm sm:text-base">CSS3</span>
            </div>
            <div className="flex items-center gap-3">
              <SiTailwindcss className="shrink-0 text-xl sm:text-2xl text-[#06B6D4]" />
              <span className="text-gray-200 text-sm sm:text-base">Tailwind</span>
            </div>
            <div className="flex items-center gap-3">
              <SiJavascript className="shrink-0 text-xl sm:text-2xl text-[#F7DF1E]" />
              <span className="text-gray-200 text-sm sm:text-base">JavaScript</span>
            </div>
            <div className="flex items-center gap-3">
              <FaNode className="shrink-0 text-xl sm:text-2xl text-[#339933]" />
              <span className="text-gray-200 text-sm sm:text-base">Node.js</span>
            </div>
            <div className="flex items-center gap-3">
              <SiExpress className="shrink-0 text-xl sm:text-2xl text-gray-200" />
              <span className="text-gray-200 text-sm sm:text-base">Express</span>
            </div>

            <div className="flex items-center gap-3">
              <SiMongodb className="shrink-0 text-xl sm:text-2xl text-[#47A248]" />
              <span className="text-gray-200 text-sm sm:text-base">MongoDB</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGitAlt className="shrink-0 text-xl sm:text-2xl text-[#F05032]" />
              <span className="text-gray-200 text-sm sm:text-base">Git</span>
            </div>
            <div className="flex items-center gap-3">
              <FaAws className="shrink-0 text-xl sm:text-2xl text-[#FF9900]" />
              <span className="text-gray-200 text-sm sm:text-base">AWS</span>
            </div>
            <div className="flex items-center gap-3">
              <SiPostman className="shrink-0 text-xl sm:text-2xl text-[#FF6C37]" />
              <span className="text-gray-200 text-sm sm:text-base">Postman</span>
            </div>
            <div className="flex items-center gap-3">
              <SiOpenai className="shrink-0 text-xl sm:text-2xl text-[#10A37F]" />
              <span className="text-gray-200 text-sm sm:text-base">ChatGPT</span>
            </div>
            <div className="flex items-center gap-3">
              <CursorLogo className="w-8 h-8 shrink-0 fill-white" />
              <span className="text-gray-200 text-sm sm:text-base">Cursor</span>
            </div>
            <div className="flex items-center gap-3">
              <CopilotLogo className="w-8 h-8 shrink-0" />
              <span className="text-gray-200 text-sm sm:text-base">Copilot</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;