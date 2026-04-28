import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, MessageCircle, Briefcase, ArrowLeft, Star, Camera } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-zellige-gold hover:text-zellige-copper transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors = {
    blockchain: 'bg-zellige-blue',
    ai: 'bg-zellige-turquoise',
    tech: 'bg-zellige-copper'
  };

  const categoryLabels = {
    blockchain: 'Blockchain',
    ai: 'Artificial Intelligence',
    tech: 'Technology'
  };

  return (
    <div className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center text-zellige-gold hover:text-zellige-copper transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Image and Basic Info */}
              <div>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-contain p-6"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      fallback.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-zellige-blue/20 to-zellige-turquoise/20 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-8xl text-white/30">
                      {project.category === 'blockchain' && '⛓️'}
                      {project.category === 'ai' && '🤖'}
                      {project.category === 'tech' && '💻'}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className={`${categoryColors[project.category]} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {categoryLabels[project.category]}
                  </span>
                  {project.featured && (
                    <span className="bg-zellige-gold text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  )}
                  {project.backedByYc && (
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Y Combinator
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Founder</h3>
                    <p className="text-white/80 text-lg font-arabic">{project.founderAr}</p>
                    <p className="text-white/60">{project.founder}</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Title and Description */}
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {project.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-zellige-gold mb-6 font-arabic">
                  {project.titleAr}
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-xl text-white/70 leading-relaxed font-arabic">
                  {project.descriptionAr}
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Links</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-zellige-gold hover:bg-zellige-copper text-white px-6 py-3 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Website
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              )}
              {project.docs && (
                <a
                  href={project.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Documentation
                </a>
              )}
              {project.twitter && (
                <a
                  href={`https://twitter.com/${project.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Twitter
                </a>
              )}
              {project.linkedin && (
                <a
                  href={`https://linkedin.com/company/${project.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              )}
              {project.instagram && (
                <a
                  href={project.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
