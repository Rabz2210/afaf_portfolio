import React from 'react';
import { Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import jaggaerLogo from '../assets/logos/jaggaer.svg';
import rapidCanvasLogo from '../assets/logos/rapidcanvas.svg';
import eatonLogo from '../assets/logos/eaton.svg';
import powerSchoolLogo from '../assets/logos/powerschool.svg';
import tcsLogo from '../assets/logos/tcs.svg';

interface JobProps {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  responsibilities: string[];
  logoSrc: string;
}

const Job: React.FC<JobProps> = ({ title, company, companyUrl, period, location, responsibilities, logoSrc }) => {
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
            <span className="text-gray-500 ml-2">• {location}</span>
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
            title="Senior Data Scientist"
            company="Jaggaer"
            companyUrl="https://www.jaggaer.com"
            period="Feb. 2025 – Present"
            location="Hyderabad, India"
            logoSrc={jaggaerLogo}
            responsibilities={[
              "Worked on LangSmith orchestrator and LangGraph to build an agent orchestrator for procurement domain that directs different user requests; implemented RAG system where agent runs and directs to nodes, retrieves chunks from Google Cloud Storage, ranks them (also experimented with Pinecone), and replies to users; tracked metrics including Faithfulness, Answer Relevancy, and Contextual Precision/Recall using RAGAs and DeepEval; integrated with GitHub for CI/CD pipeline automation",
              "Architected a no-code automation workflow using n8n platform with REST API integration and event-driven email triggers for streamlined data processing pipelines",
              "Developed an intelligent conversational agent leveraging Google Vertex AI platform for automated ticket booking functionality and e-commerce order management with natural language processing capabilities",
              "Engineered a multilingual video localization system with automated translation capabilities for English-to-Italian, French, and Spanish conversion, implementing synchronized audio dubbing and subtitle generation",
              "Built a real-time cost analytics dashboard using Streamlit framework integrated with AWS Cost Explorer API to monitor resource utilization and expenditure metrics for generative AI applications"
            ]}
          />

          <Job
            title="Data Scientist"
            company="RapidCanvas"
            companyUrl="https://www.rapidcanvas.ai"
            period="Oct. 2022 – Nov. 2024"
            location="Hyderabad, India"
            logoSrc={rapidCanvasLogo}
            responsibilities={[
              "Designed and implemented a content-based recommendation system utilizing natural language processing and collaborative filtering techniques to deliver personalized book recommendations, enhancing customer engagement",
              "Leveraged advanced statistical modeling techniques and data mining algorithms to construct a comprehensive credit risk assessment framework, enabling precise customer segmentation and informed decision-making for risk mitigation strategies",
              "Implemented robust feature engineering pipelines for structured and unstructured data, improving model accuracy by 35% through advanced preprocessing techniques",
              "Demonstrated proficiency in leveraging the Shopify platform, integrating machine learning models to build prediction services, and seamlessly writing back data to Shopify databases",
              "Developed containerized machine learning applications using Docker, implementing CI/CD workflows for seamless model deployment and tracking",
              "Conducted in-depth sales data analysis to uncover valuable insights, identifying customer behavior patterns and opportunities for targeted marketing campaigns"
            ]}
          />

          <Job
            title="Data Scientist"
            company="Eaton"
            companyUrl="https://www.eaton.com/in/en-us.html"
            period="Jun. 2021 – Oct. 2022"
            location="Pune, India"
            logoSrc={eatonLogo}
            responsibilities={[
              "Conducted advanced customer segmentation using sophisticated clustering algorithms and multi-dimensional feature engineering",
              "Designed and deployed scalable machine learning pipelines using AWS SageMaker, improving predictive model performance and reducing processing time by 40%",
              "Performed comprehensive data visualization and published results on dashboards for stakeholder analysis",
              "Built automated ETL processes and data transformation scripts to streamline complex data workflows"
            ]}
          />

          <Job
            title="Data Scientist (Intern)"
            company="PowerSchool"
            companyUrl="https://www.powerschool.com"
            period="2020/AUG - 2021/MAY"
            location="Bengaluru, India"
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
            title="Assistant System Engineer"
            company="TCS"
            companyUrl="https://www.tcs.com"
            period="2018/MAR - 2019/JUL"
            location="Noida, India"
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