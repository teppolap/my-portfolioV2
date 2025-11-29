import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaGitlab, FaMapPin } from 'react-icons/fa';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import LightGlowCursor from './components/ui/light-glow-cursor';
import './App.css';
import profilePic from './assets/profile-pic.png';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Track the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navItemClass = (section) => {
    return activeSection === section
      ? 'w-16 bg-slate-200'
      : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 transition-all';
  };

  const navTextClass = (section) => {
    return activeSection === section
      ? 'text-slate-200'
      : 'text-slate-500 group-hover:text-slate-200 transition-colors';
  };


  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className="dark"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {/* Custom glowing cursor */}
      <LightGlowCursor />

      <div className="min-h-screen flex flex-col lg:flex-row bg-gray-900 text-gray-100">
        {/* Centered Container */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start w-full lg:w-4/5 mx-auto">
          {/* Left Side Header */}
          <motion.header 
            className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:py-12 bg-gray-900 flex-shrink-0"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center lg:text-left px-4 py-6 lg:px-8 lg:py-8 flex flex-col items-center lg:items-start">
              {/* Image container */}
              <motion.div 
                className="relative"
                variants={imageVariants}
              >
                {/* Profile image */}
                <motion.img
                  src={profilePic}
                  alt="Teppo Lappalainen"
                  className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-60 lg:h-65 rounded-full mb-4"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.9)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>

              <motion.h1 
                className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl"
                variants={itemVariants}
              >
                Teppo Lappalainen
              </motion.h1>
              <motion.h2 
                className="mt-3 text-base font-medium tracking-tight text-slate-200 sm:text-lg"
                variants={itemVariants}
              >
                Junior Fullstack Developer
              </motion.h2>
              <motion.p 
                className="mt-4 max-w-xs leading-normal text-slate-300 font-normal lg:max-w-none"
                variants={itemVariants}
              >
                <FaMapPin className="inline-block mr-2" />
                Jyväskylä, Finland
              </motion.p>
              <motion.p 
                className="mt-4 max-w-xs leading-normal text-slate-300 font-normal lg:max-w-none"
                variants={itemVariants}
              >
                ICT engineering student specializing in full-stack development. Strong foundation, practical projects, and a mindset ready for real-world challenges.
              </motion.p>
            </div>

            {/* Vertical Navigation (Hidden on Mobile) */}
            <motion.nav 
              className="hidden lg:block mt-8 px-4 lg:px-8"
              variants={navVariants}
            >
              <ul className="space-y-4 flex lg:flex-col justify-center">
                <motion.li variants={navItemVariants}>
                  <a
                    href="#about"
                    className="group flex items-center transition-colors"
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all ${navItemClass('about')}`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${navTextClass('about')}`}
                    >
                      About
                    </span>
                  </a>
                </motion.li>
                <motion.li variants={navItemVariants}>
                  <a
                    href="#experience"
                    className="group flex items-center transition-colors"
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all ${navItemClass('experience')}`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${navTextClass('experience')}`}
                    >
                      Experience
                    </span>
                  </a>
                </motion.li>
                <motion.li variants={navItemVariants}>
                  <a
                    href="#projects"
                    className="group flex items-center transition-colors"
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all ${navItemClass('projects')}`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${navTextClass('projects')}`}
                    >
                      Projects
                    </span>
                  </a>
                </motion.li>
              </ul>
            </motion.nav>

            {/* View Full Resume Button */}
            <motion.div 
              className="mt-4 px-4 lg:px-8 flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <a
                href="/teppo-lappalainen-cv-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white px-4 py-2 rounded-md transition-colors hover:bg-white hover:text-gray-900"
              >
                View Full Résumé
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              className="mt-4 flex justify-center lg:justify-start space-x-4 px-4 lg:px-10"
              variants={itemVariants}
            >
              <motion.a
                href="https://www.linkedin.com/in/teppo-lappalainen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tech-text-color transition-none"
                aria-label="LinkedIn"
                whileHover={{ 
                  scale: 1.2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/teppolap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tech-text-color transition-none"
                aria-label="GitHub"
                whileHover={{ 
                  scale: 1.2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://gitlab.labranet.jamk.fi/users/AB7340"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tech-text-color transition-none"
                aria-label="GitLab"
                whileHover={{ 
                  scale: 1.2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGitlab size={24} />
              </motion.a>
            </motion.div>
          </motion.header>

          {/* Right Side Content */}
          <motion.main 
            className="w-full lg:w-1/2 pt-24 lg:pt-24 lg:pl-8 bg-gray-900"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <section id="about" className="pt-16 md:pt-0">
              <About />
            </section>
            <section id="experience" className="mb-24">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <motion.footer 
              className="text-center my-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>© 2025 Teppo Lappalainen</p>
            </motion.footer>
          </motion.main>
        </div>
      </div>
    </motion.div>
  );
}

export default App;