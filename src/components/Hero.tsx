import React from 'react';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <ParticleBackground />
      <div className="container mx-auto px-4 md:px-8 z-10 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 md:pr-8">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 leading-tight animate-typewriter-name">
                Afaf Athar
              </h1>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-indigo-600 animate-typewriter-title" style={{ animationDelay: '1s' }}>
                Data Scientist
              </h2>
            </div>
            <div className="overflow-hidden">
              <p 
                className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl opacity-0 animate-slideInLeft" 
                style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
              >
                Transforming complex data into actionable insights and innovative solutions
                through machine learning and advanced analytics.
              </p>
            </div>
            <div className="flex space-x-4 opacity-0 animate-fadeIn" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-all hover-lift"
              >
                REACH OUT
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-all hover-lift"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-5/12 mt-8 md:mt-0">
            {/* This div will be filled with the particle visualization */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;