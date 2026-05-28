import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Projects from '../components/Projects';
import LightGlowCursor from '../components/ui/light-glow-cursor';

const ProjectsPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  return (
    <motion.div 
      className="dark min-h-screen bg-gray-900"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <LightGlowCursor />
      
      {/* Header with back button */}
      <motion.header 
        className="fixed top-0 left-0 w-full bg-gray-900/80 shadow-lg backdrop-blur-lg py-4 px-6 md:px-16 lg:px-24 xl:px-32 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <h1 className="text-xl md:text-2xl font-bold text-slate-200">
            Hobby Projects
          </h1>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </motion.header>

      {/* Main content */}
      <main className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Projects />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="text-center py-8 text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>© 2026 Teppo Lappalainen</p>
      </motion.footer>
    </motion.div>
  );
};

export default ProjectsPage;
