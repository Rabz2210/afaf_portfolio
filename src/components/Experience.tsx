import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import rapidCanvasLogo from '../assets/logos/rapidcanvas.svg';
import eatonLogo from '../assets/logos/eaton.svg';
import powerSchoolLogo from '../assets/logos/powerschool.svg';
import tcsLogo from '../assets/logos/tcs.svg';

interface JobProps {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  responsibilities: string[];
  logoSrc: string;
}

const Job: React.FC<JobProps> = ({ title, company, companyUrl, period, responsibilities, logoSrc }) => {
  return (
    <ScrollReveal className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <div className="flex items-center mb-2 md:mb-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 overflow-hidden p-2 border border-gray-200 hover-scale">
            <img 
              src={logoSrc} 
              alt={`${company} logo`} 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <a 
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              {company}
            </a>
          </div>
        </div>
        <div className="flex items-center md:ml-auto mt-2 md:mt-0">
          <Calendar size={16} className="text-gray-500 mr-2" />
          <span className="text-gray-500">{period}</span>
        </div>
      </div>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="animate-slideInLeft" style={{ animationDelay: `${index * 0.1}s` }}>
            {responsibility}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-gradient-text">Professional Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey through the data science landscape, delivering impactful solutions and insights.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <Job
            title="DATA SCIENTIST"
            company="Rapid Canvas"
            companyUrl="https://www.rapidcanvas.ai"
            period="2022/OCT - Present"
            logoSrc={rapidCanvasLogo}
            responsibilities={[
              "Led end-to-end machine learning projects from conception to deployment, resulting in significant business impact",
              "Developed and implemented advanced analytics solutions using cutting-edge technologies",
              "Collaborated with cross-functional teams to identify and solve complex business problems",
              "Mentored junior data scientists and contributed to building a strong data-driven culture",
              "Optimized existing machine learning models, improving accuracy by 25%"
            ]}
          />

          <Job
            title="DATA SCIENTIST"
            company="EATON"
            companyUrl="https://www.eaton.com/in/en-us.html"
            period="2021/JUN - 2022/OCT"
            logoSrc={eatonLogo}
            responsibilities={[
              "Collaborated with stakeholders to gain insights for customer segmentation through feature engineering and clustering algorithms.",
              "Performed comprehensive data visualization and published results on dashboards for stakeholder analysis.",
              "Built automated scripts and pipelines to streamline the data processing workflow without manual intervention.",
              "Optimized and maintained automated processes, ensuring scalability and adaptability to evolving business needs.",
              "Fostered collaboration and knowledge-sharing across teams for successful implementation of data-driven solutions."
            ]}
          />

          <Job
            title="DATA SCIENTIST (INTERN)"
            company="PowerSchool"
            companyUrl="https://www.powerschool.com"
            period="2020/AUG - 2021/MAY"
            logoSrc={powerSchoolLogo}
            responsibilities={[
              "Contributed to the simplification and enhancement of the K-12 education system by conducting in-depth data analysis and generating actionable insights.",
              "Leveraged advanced data mining techniques and statistical methods, including t-tests, ANOVA, and machine learning models such as logistic regression and random forests, to cluster students based on their academic performance, enabling personalized learning approaches.",
              "Developed and implemented robust analytical models and algorithms to identify patterns, trends, and key factors influencing student achievement, providing valuable recommendations for targeted interventions and curriculum optimization.",
              "Collaborated with cross-functional teams, including educators and subject matter experts, to ensure the effective integration of data-driven solutions into the educational ecosystem, enhancing the overall learning experience.",
              "Demonstrated proficiency in data visualization techniques, creating comprehensive reports and interactive dashboards to communicate complex analytical findings to stakeholders in a clear and concise manner."
            ]}
          />

          <Job
            title="ASSISTANT SYSTEM ENGINEER"
            company="TCS"
            companyUrl="https://www.tcs.com"
            period="2018/MAR - 2019/JUL"
            logoSrc={tcsLogo}
            responsibilities={[
              "Working with a team to streamline the Business requirement process",
              "Analyzing the transactional data in the Fintech domain of the organization",
              "Setting client expectations on deliverables",
              "Extracting and flagging Fraudulent data from DB server"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;