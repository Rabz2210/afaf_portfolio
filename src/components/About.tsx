import React from 'react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-white flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <ScrollReveal className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
                <img 
                  src="/profile.jpg"
                  alt="Professional portrait of Afaf Athar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
          
          <div className="md:w-1/2 md:pl-12">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                About Me
                <span className="text-sm font-normal ml-3 text-gray-500">(she/her)</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A Gold Medalist in Masters of Big Data and Analytics with 4+ years of experience creating machine learning models for diverse industries. Passionate about data science and implementing innovative solutions from research papers.
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Inquisitive problem-solver driven by curiosity. Avid tea lover.
              </p>
            </ScrollReveal>
            
            <div className="space-y-4">
              {[
                {
                  title: "Machine Learning Expert",
                  desc: "Creating and optimizing models"
                },
                {
                  title: "Data Analysis",
                  desc: "Finding insights in complex datasets"
                },
                {
                  title: "Research Implementation",
                  desc: "Turning papers into solutions"
                }
              ].map((item, index) => (
                <ScrollReveal key={index} className="flex items-center">
                  <div className="mr-4 text-indigo-600">•</div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;