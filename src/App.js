import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMapPin, FaEnvelope } from 'react-icons/fa';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import LightGlowCursor from './components/ui/light-glow-cursor';
import './App.css';
import profilePic from './assets/profile-pic.png';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeTab, setActiveTab] = useState('experience');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Navbar scroll detection
  useEffect(() => {
    const handleNavScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleNavScroll);
    return () => window.removeEventListener("scroll", handleNavScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience', onClick: () => setActiveTab('experience') },
    { name: 'Projects', path: '#experience', onClick: () => setActiveTab('projects') },
  ];

  const isNavActive = (name) => {
    if (name === 'About') return activeSection === 'about';
    if (name === 'Experience') return activeSection === 'experience' && activeTab === 'experience';
    if (name === 'Projects') return activeSection === 'experience' && activeTab === 'projects';
    return false;
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

      {/* Fixed Top Navbar */}
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled 
          ? "bg-gray-900/80 shadow-lg backdrop-blur-lg py-3 md:py-4" 
          : "bg-transparent py-4 md:py-6"
      }`}>
        {/* Logo / Name */}
        <a href="#about" className="text-lg font-bold text-slate-200 tracking-tight hover:text-white transition-colors">
          TL
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.path}
              onClick={link.onClick}
              className={`group flex flex-col gap-0.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                isNavActive(link.name) ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              <div className={`bg-cyan-400 h-0.5 transition-all duration-300 ${
                isNavActive(link.name) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
          <a 
            href="/teppo-lappalainen-cv-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-0.5 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
          >
            My Resume
            <div className="bg-cyan-400 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 border-l border-slate-700 pl-3 ml-1">
            <a 
              href="https://www.linkedin.com/in/teppo-lappalainen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://github.com/teppolap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-gray-900 flex flex-col md:hidden items-center justify-center gap-8 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}>
          <button 
            className="absolute top-4 right-4 text-slate-200" 
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.path} 
              onClick={() => { if (link.onClick) link.onClick(); setIsMenuOpen(false); }}
              className="text-lg font-medium text-slate-200 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a 
            href="/teppo-lappalainen-cv-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium text-slate-200 hover:text-white transition-colors"
          >
            My Resume
          </a>

          <div className="flex items-center gap-6 mt-4">
            <a 
              href="https://www.linkedin.com/in/teppo-lappalainen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/teppolap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </nav>

      <div className="min-h-screen flex flex-col min-[1263px]:flex-row bg-gray-900 text-gray-100">
        {/* Centered Container */}
        <div className="flex flex-col min-[1263px]:flex-row min-[1263px]:justify-center min-[1263px]:items-start w-full min-[1263px]:w-4/5 mx-auto">
          {/* Left Side Header */}
          <motion.header 
            className="w-full min-[1263px]:w-1/2 min-[1263px]:sticky min-[1263px]:top-0 min-[1263px]:flex min-[1263px]:flex-col min-[1263px]:justify-between pt-16 min-[1263px]:py-12 min-[1263px]:pt-16 bg-gray-900 flex-shrink-0"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center min-[1263px]:text-left px-4 py-6 min-[1263px]:px-8 min-[1263px]:py-8 flex flex-col items-center min-[1263px]:items-start">
              {/* Image container */}
              <motion.div 
                className="relative"
                variants={imageVariants}
              >
                {/* Profile image */}
                <motion.img
                  src={profilePic}
                  alt="Teppo Lappalainen"
                  className="w-50 h-60 sm:w-60 sm:h-72 md:w-70 md:h-72 lg:w-60 lg:h-65 rounded-full mb-4"
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
                <FaMapPin className=" text-slate-300 inline-block mr-2" />
                Jyväskylä, Finland
              </motion.p>

              {/* Contact & availability block */}
              <motion.div
                className="mt-6 w-full max-w-xs lg:max-w-none text-center min-[1263px]:text-left"
                variants={itemVariants}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Get in touch
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center min-[1263px]:justify-start gap-4">
                  <a
                    href="mailto:teppo.lappalainen28@gmail.com"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope size={20} />
                    <span className="text-sm">Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/teppo-lappalainen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Looking for
                </p>
                <p className="mt-2 text-sm leading-normal text-slate-300">
                Fullstack/web developer roles. Most familiar with React/Angular, Node.js, TypeScript and cloud (e.g. AWS). Open and excited to expand my skills. Open to internships and junior positions, on-site or hybrid in Finland or remote.
                </p>
              </motion.div>
            </div>

          </motion.header>

          {/* Right Side Content */}
          <motion.main 
            className="w-full min-[1263px]:w-1/2 pt-24 min-[1263px]:pt-24 min-[1263px]:pl-8 bg-gray-900"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <section id="about" className="pt-16 md:pt-0">
              <About />
            </section>
            <section id="experience" className="mb-24">
              {/* Tab buttons */}
              <motion.div 
                className="flex justify-center gap-2 sm:gap-4 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <button 
                  onClick={() => setActiveTab('experience')}
                  className={`relative text-xl sm:text-2xl md:text-3xl font-bold tracking-tight px-3 sm:px-4 py-2 transition-colors duration-300 ${
                    activeTab === 'experience' 
                      ? 'text-slate-200' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Working experience
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                    initial={false}
                    animate={{ scaleX: activeTab === 'experience' ? 1 : 0 }}
                    style={{ originX: 0, width: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </button>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`relative text-xl sm:text-2xl md:text-3xl font-bold tracking-tight px-3 sm:px-4 py-2 transition-colors duration-300 ${
                    activeTab === 'projects' 
                      ? 'text-slate-200' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Hobby projects
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                    initial={false}
                    animate={{ scaleX: activeTab === 'projects' ? 1 : 0 }}
                    style={{ originX: 0, width: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </button>
              </motion.div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                {activeTab === 'experience' ? (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Experience />
                  </motion.div>
                ) : (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Projects />
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
            <motion.footer 
              className="text-center my-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>© 2026 Teppo Lappalainen</p>
            </motion.footer>
          </motion.main>
        </div>
      </div>
    </motion.div>
  );
}

export default App;