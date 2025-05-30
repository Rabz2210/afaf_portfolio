import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Customer Segmentation Engine",
    description: "Developed a clustering algorithm to identify distinct customer segments for targeted marketing campaigns, resulting in a 24% increase in conversion rates.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "K-Means", "Tableau", "Marketing"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Predictive Maintenance System",
    description: "Built an anomaly detection model that predicts equipment failures with 92% accuracy, allowing for proactive maintenance and reducing downtime by 35%.",
    image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["TensorFlow", "Time Series", "IoT", "Manufacturing"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Education Performance Analyzer",
    description: "Created a student performance analysis tool that identifies at-risk students with 89% precision and provides personalized intervention recommendations.",
    image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["R", "Random Forest", "Dashboard", "Education"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Financial Fraud Detection",
    description: "Implemented a real-time fraud detection system using ensemble methods that improved fraud identification by 67% while reducing false positives.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "XGBoost", "SQL", "Finance"],
    demoLink: "#",
    codeLink: "#"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover-scale">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 animate-slideInLeft">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium transition-all hover:bg-indigo-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a 
            href={project.demoLink} 
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium transition-all hover-lift"
          >
            View Project <ArrowRight size={16} className="ml-1" />
          </a>
          <div className="flex space-x-3">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                className="text-gray-600 hover:text-indigo-600 transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.codeLink && (
              <a 
                href={project.codeLink} 
                className="text-gray-600 hover:text-indigo-600 transition-colors"
                aria-label="Source code"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Machine Learning', 'Data Analysis', 'Visualization'];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-gradient-text">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slideUp">
            Exploring real-world problems through data science and innovative solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover-lift ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md font-medium transition-all hover-lift">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;