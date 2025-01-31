import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaGitlab, FaMapPin, FaSpinner } from 'react-icons/fa';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';
import profilePic from './assets/profile-pic.png';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [glowClass, setGlowClass] = useState('light-glow');
  const [isImageLoading, setIsImageLoading] = useState(true);

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

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursorX = event.clientX;
      const cursorY = event.clientY;

      setCursorPosition({ x: cursorX, y: cursorY });

      const distanceX = Math.abs(window.innerWidth / 2 - cursorX);
      const distanceY = Math.abs(window.innerHeight / 2 - cursorY);
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < 200) {
        setGlowClass('intense-glow');
      } else if (distance < 400) {
        setGlowClass('medium-glow');
      } else {
        setGlowClass('light-glow');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <div className="dark">
      {/* Custom glowing cursor */}
      <div
        className={`custom-cursor ${glowClass}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>

      <div className="min-h-screen flex flex-col lg:flex-row bg-gray-900 text-gray-100">
        {/* Centered Container */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start w-full lg:w-4/5 mx-auto">
          {/* Left Side Header */}
          <header className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:py-24 bg-gray-900 flex-shrink-0">
            <div className="text-center lg:text-left px-4 py-6 lg:px-8 lg:py-8 flex flex-col items-center lg:items-start">
              {/* Image container */}
              <div className="relative">
                {/* Loading spinner */}
                {isImageLoading && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <FaSpinner className="animate-spin text-white text-4xl" />
                  </div>
                )}
                {/* Profile image */}
                <img
                  src={profilePic}
                  alt="Teppo Lappalainen"
                  onLoad={handleImageLoad}
                  className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4"
                />
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
                Teppo Lappalainen
              </h1>
              <h2 className="mt-3 text-base font-medium tracking-tight text-slate-200 sm:text-lg">
                Junior Fullstack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-300 font-normal lg:max-w-none">
                <FaMapPin className="inline-block mr-2" />
                Jyväskylä, Finland
              </p>
              <p className="mt-4 max-w-xs leading-normal text-slate-300 font-normal lg:max-w-none">
                Fourth-year ICT engineering student with a focus on the MERN stack.
              </p>
            </div>

            {/* Vertical Navigation (Hidden on Mobile) */}
            <nav className="hidden lg:block mt-8 px-4 lg:px-8">
              <ul className="space-y-4 flex lg:flex-col justify-center">
                <li>
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
                </li>
                <li>
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
                </li>
                <li>
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
                </li>
              </ul>
            </nav>

            {/* View Full Resume Button */}
            <div className="mt-8 px-4 lg:px-8 flex justify-center lg:justify-start">
              <a
                href="/teppo-lappalainen-cv-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white px-4 py-2 rounded-md transition-colors hover:bg-white hover:text-gray-900"
              >
                View Full Résumé
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center lg:justify-start space-x-4 px-4 lg:px-10">
              <a
                href="https://www.linkedin.com/in/teppo-lappalainen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tech-text-color transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/teppolap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tech-text-color transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://gitlab.labranet.jamk.fi/users/AB7340"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tech-text-color transition-colors"
                aria-label="GitLab"
              >
                <FaGitlab size={24} />
              </a>
            </div>
          </header>

          {/* Right Side Content */}
          <main className="w-full lg:w-1/2 pt-24 lg:pt-24 lg:pl-8 bg-gray-900">
            <section id="about" className="pt-16 md:pt-0">
              <About />
            </section>
            <section id="experience" className="mb-24">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <footer className="text-center my-8">
              <p>© 2024 Teppo Lappalainen</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;