import React from 'react';

const About = () => {
  return (
    <section id="about" className="my-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl text-center p-6">
        About
      </h1>
      <div className="max-w-xl mx-auto text-center mb-8">
        <p className="text-left text-gray-700 dark:text-gray-300 transition-opacity duration-700 text-sm sm:text-base md:text-lg lg:text-xl">
          A fourth-year ICT student at Jyväskylä University of Applied Sciences specializing in programming. Aiming to improve as a <strong>full-stack developer</strong>.
        </p>
      </div>
      <div className="max-w-xl mx-auto text-center mb-8">
        <p className="text-left text-gray-700 dark:text-gray-300 transition-opacity duration-700 text-sm sm:text-base md:text-lg lg:text-xl">
          Possesses <strong>strong problem-solving skills</strong>, the <strong>ability to adapt</strong> in various situations, and excels in <strong>team collaboration</strong> by leveraging <strong>strong social skills</strong>.
        </p>
      </div>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-left text-gray-700 dark:text-gray-300 transition-opacity duration-700 text-sm sm:text-base md:text-lg lg:text-xl">
          In free time, enjoys <strong>outdoor activities</strong>, <strong>playing sports</strong>, and <strong>relaxing with video games</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
