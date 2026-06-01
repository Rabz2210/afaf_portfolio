import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const MEDIUM_PROFILE = 'https://afafathar.medium.com/';

interface MediumArticle {
  id: number;
  title: string;
  description: string;
  tags: string[];
  articleUrl: string;
  published: string;
}

const articlesData: MediumArticle[] = [
  {
    id: 1,
    title: 'Implementing Production-Ready RAG Pipelines with LlamaIndex and Vector Stores',
    description:
      'Architect decoupled ingestion and query pipelines for production RAG with persistent vector stores, semantic chunking, and MLOps-ready LlamaIndex patterns.',
    tags: ['RAG', 'LlamaIndex', 'MLOps', 'Pinecone'],
    articleUrl:
      'https://afafathar.medium.com/implementing-production-ready-retrieval-augmented-generation-rag-pipelines-with-llamaindex-and-69686f892f1e',
    published: 'Dec 2025',
  },
  {
    id: 2,
    title: 'Productionizing Hybrid AI with Scikit-LLM for Scalable Text Classification',
    description:
      'Deep dive on blending classical ML with LLMs for production text classification—trade-offs, scaling, and practical Scikit-LLM deployment.',
    tags: ['Scikit-LLM', 'NLP', 'Production ML'],
    articleUrl:
      'https://afafathar.medium.com/productionizing-hybrid-ai-a-technical-deep-dive-into-scikit-llm-for-scalable-text-classification-a0cba646f2f8',
    published: 'Nov 2025',
  },
  {
    id: 3,
    title: 'Building a Recommendation System: A Comprehensive Guide',
    description:
      'End-to-end walkthrough of recommendation system design—from problem framing and data prep to evaluation and deployment considerations.',
    tags: ['Recommendations', 'Python', 'ML'],
    articleUrl:
      'https://afafathar.medium.com/building-a-recommendation-system-a-comprehensive-guide-8a210cd33bb4',
    published: 'Mar 2025',
  },
  {
    id: 4,
    title: 'Advanced Recommendation Systems: Matrix Factorization and Deep Learning',
    description:
      'Part I covers matrix factorization and SVD with Surprise; Part II extends to neural collaborative filtering with TensorFlow and Keras.',
    tags: ['Matrix Factorization', 'Deep Learning', 'NCF'],
    articleUrl:
      'https://afafathar.medium.com/building-advanced-recommendation-systems-matrix-factorization-and-deep-learning-19dabbc1f4ed',
    published: 'Mar 2025',
  },
  {
    id: 5,
    title: 'Part II: Deep Learning-Based Recommendation Systems',
    description:
      'Neural collaborative filtering for large-scale, non-linear user–item patterns—model architecture, training, and generating top-N recommendations.',
    tags: ['TensorFlow', 'Keras', 'NCF'],
    articleUrl:
      'https://afafathar.medium.com/part-ii-deep-learning-based-recommendation-systems-cc2c9e30f4dd',
    published: 'Mar 2025',
  },
  {
    id: 6,
    title: 'Machine Learning: Concepts You Need to Know to Get Started',
    description:
      'Foundational ML concepts and a concise history to help newcomers move from curiosity to hands-on practice.',
    tags: ['Machine Learning', 'Fundamentals'],
    articleUrl:
      'https://afafathar.medium.com/machine-learning-concepts-you-need-know-to-get-start-with-ml-3cc981d25ad8',
    published: 'Apr 2022',
  },
];

const ArticleCard: React.FC<{ article: MediumArticle }> = ({ article }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover-scale flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-medium text-gray-500 mb-2">{article.published}</p>
        <h3 className="text-xl font-bold mb-3 animate-slideInLeft">{article.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{article.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto">
          <a
            href={article.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium transition-all hover-lift"
          >
            Read on Medium <ArrowRight size={16} className="ml-1" />
          </a>
          <a
            href={article.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            aria-label={`Open article: ${article.title}`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-gradient-text">Articles on Medium</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-slideUp">
            Technical writing on RAG, MLOps, recommendation systems, and production machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articlesData.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={MEDIUM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md font-medium transition-all hover-lift hover:bg-indigo-50"
          >
            View all on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
