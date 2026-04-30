import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../types/Project';
import { ExternalLink, MessageCircle, Briefcase } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const categoryColors = {
    blockchain: 'bg-mbf-turquoise',
    ai: 'bg-mbf-blue',
    tech: 'bg-mbf-orange'
  };

  const categoryLabels = {
    blockchain: 'Blockchain',
    ai: 'Artificial Intelligence',
    tech: 'Technology'
  };

  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-mbf-turquoise/20 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-mbf-turquoise/40"
      >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={`${project.title} - ${project.description}`}
          className="w-full h-full object-contain p-4"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.log('Image failed to load:', project.imageUrl);
            console.log('Project:', project.title);
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
          onLoad={() => {
            console.log('Image loaded successfully:', project.imageUrl);
            console.log('Project:', project.title);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-mbf-turquoise/10 to-mbf-blue/10" style={{ display: 'none' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-mbf-dark-blue/20">
              {project.category === 'blockchain' && '⛓️'}
              {project.category === 'ai' && '🤖'}
              {project.category === 'tech' && '💻'}
            </div>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-mbf-turquoise text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className={`${categoryColors[project.category]} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
            {categoryLabels[project.category]}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-mbf-dark-blue mb-2">{project.title}</h3>
          <p className="text-mbf-text/80 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-mbf-turquoise/10 text-mbf-dark-blue px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>


        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-mbf-text/60">Founder</p>
            <p className="text-sm text-mbf-text font-arabic">{project.founderAr}</p>
          </div>
          
          <div className="flex space-x-2">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mbf-text/60 hover:text-mbf-turquoise transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mbf-text/60 hover:text-mbf-turquoise transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.twitter && (
              <a
                href={`https://twitter.com/${project.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mbf-text/60 hover:text-mbf-turquoise transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            )}
            {project.linkedin && (
              <a
                href={`https://linkedin.com/company/${project.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mbf-text/60 hover:text-mbf-turquoise transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Briefcase className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default ProjectCard;
