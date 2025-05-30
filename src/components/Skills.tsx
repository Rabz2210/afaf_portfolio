import React from 'react';
import { 
  Code, Database, LineChart, BrainCircuit, 
  PenTool, GitBranch, Users
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface SkillProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const Skill: React.FC<SkillProps> = ({ title, items, icon }) => {
  return (
    <ScrollReveal>
      <div className="bg-white rounded-lg shadow-md p-6 transition-all hover-lift h-[280px] flex flex-col">
        <div className="w-14 h-14 rounded-lg border-2 border-indigo-600 flex items-center justify-center mb-4">
          {React.cloneElement(icon as React.ReactElement, { 
            size: 24, 
            className: "text-gray-900" 
          })}
        </div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 flex-grow justify-center items-center">
          {items.map((item, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm transition-all hover:bg-indigo-50 hover:text-indigo-700 text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-gradient-text">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical toolkit and areas of expertise in the data science ecosystem.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Skill 
            title="Programming Languages" 
            items={['Python', 'R', 'SQL']}
            icon={<Code />}
          />
          
          <Skill 
            title="Data Management" 
            items={['PostgreSQL', 'MongoDB', 'MySQL', 'BigQuery', 'Snowflake']}
            icon={<Database />}
          />
          
          <Skill 
            title="Visualization" 
            items={['Tableau', 'Power BI', 'D3.js', 'Matplotlib', 'Plotly']}
            icon={<LineChart />}
          />
          
          <Skill 
            title="Machine Learning" 
            items={['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost']}
            icon={<BrainCircuit />}
          />
          
          <Skill 
            title="Data Analysis" 
            items={['Pandas', 'NumPy', 'SciPy', 'Jupyter', 'dplyr']}
            icon={<PenTool />}
          />
          
          <Skill 
            title="DevOps & Tools" 
            items={['Git', 'Docker', 'AWS', 'Azure', 'CI/CD']}
            icon={<GitBranch />}
          />
          
          <Skill 
            title="Soft Skills" 
            items={['Communication', 'Problem Solving', 'Team Leadership', 'Research', 'Adaptability']}
            icon={<Users />}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;