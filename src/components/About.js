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
            ICT student at Jyväskylä University of Applied Sciences specializing in programming. Aiming to improve as a <Highlighter action="highlight" color="#1572B6">full-stack developer</Highlighter>.
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center mb-8"
          variants={paragraphVariants}
        >
          <p className="text-left text-gray-700 dark:text-gray-300 transition-opacity duration-700 text-sm sm:text-base md:text-lg lg:text-xl">
            Possesses <Highlighter action="underline" color="#00FFFF">strong problem-solving skills</Highlighter>, the <Highlighter action="underline" color="##00FFFF">ability to adapt</Highlighter> in various situations, and excels in <Highlighter action="underline" color="#00FFFF">team collaboration</Highlighter> by leveraging <Highlighter action="underline" color="#00FFFF">strong social skills</Highlighter>.
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center mb-8"
          variants={paragraphVariants}
        >
          <p className="text-left text-gray-700 dark:text-gray-300 transition-opacity duration-700 text-sm sm:text-base md:text-lg lg:text-xl">
            In free time, enjoys <Highlighter action="underline" color="#00FFFF">outdoor activities</Highlighter>, <Highlighter action="underline" color="#00FFFF">playing sports</Highlighter>, and <Highlighter action="underline" color="#00FFFF">relaxing with video games</Highlighter>.
          </p>
        </motion.div>

        <motion.div 
          className="py-6 px-8 mt-8"
          variants={paragraphVariants}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6">
            <div className="flex items-center gap-3">
              <FaReact className="text-2xl text-[#61DAFB]" />
              <span className="text-gray-300">React</span>
            </div>
            <div className="flex items-center gap-3">
              <FaAngular className="text-2xl text-[#DD0031]" />
              <span className="text-gray-300">Angular</span>
            </div>
            <div className="flex items-center gap-3">
              <SiTypescript className="text-2xl text-[#3178C6]" />
              <span className="text-gray-300">TypeScript</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHtml5 className="text-2xl text-[#E34F26]" />
              <span className="text-gray-300">HTML5</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCss3Alt className="text-2xl text-[#1572B6]" />
              <span className="text-gray-300">CSS3</span>
            </div>
            <div className="flex items-center gap-3">
              <SiTailwindcss className="text-2xl text-[#06B6D4]" />
              <span className="text-gray-300">Tailwind</span>
            </div>
            <div className="flex items-center gap-3">
              <SiJavascript className="text-2xl text-[#F7DF1E]" />
              <span className="text-gray-300">JavaScript</span>
            </div>
            <div className="flex items-center gap-3">
              <FaNode className="text-2xl text-[#339933]" />
              <span className="text-gray-300">Node.js</span>
            </div>
            <div className="flex items-center gap-3">
              <SiExpress className="text-2xl text-[#000000]" />
              <span className="text-gray-300">Express</span>
            </div>

            <div className="flex items-center gap-3">
              <SiMongodb className="text-2xl text-[#47A248]" />
              <span className="text-gray-300">MongoDB</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGitAlt className="text-2xl text-[#F05032]" />
              <span className="text-gray-300">Git</span>
            </div>
            <div className="flex items-center gap-3">
              <FaAws className="text-2xl text-[#FF9900]" />
              <span className="text-gray-300">AWS</span>
            </div>
            <div className="flex items-center gap-3">
              <SiPostman className="text-2xl text-[#FF6C37]" />
              <span className="text-gray-300">Postman</span>
            </div>
            <div className="flex items-center gap-3">
              <SiOpenai className="text-2xl text-[#10A37F]" />
              <span className="text-gray-300">ChatGPT</span>
            </div>
            <div className="flex items-center gap-3">
              <CursorLogo className="w-8 h-8 text-[#ffffff]" />
              <span className="text-gray-300">Cursor</span>
            </div>
            <div className="flex items-center gap-3">
              <CopilotLogo className="w-8 h-8" />
              <span className="text-gray-300">Copilot</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;