import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Filter, Plus } from 'lucide-react';

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'blockchain' | 'ai' | 'tech'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const categories = [
    { id: 'all', label: 'All', arLabel: 'الكل' },
    { id: 'blockchain', label: 'Blockchain', arLabel: 'بلوك تشين' },
    { id: 'ai', label: 'AI', arLabel: 'ذكاء اصطناعي' },
    { id: 'tech', label: 'Tech', arLabel: 'تقنية' }
  ];

  return (
    <div className="min-h-[80vh] py-8 px-4 pt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mbf-dark-blue mb-2">
            Moroccan Projects
          </h2>
          <h3 className="text-xl md:text-2xl text-mbf-turquoise mb-2 font-arabic">
            المشاريع المغربية
          </h3>
          <p className="text-sm text-mbf-text/80 max-w-lg mx-auto">
            Discover Moroccan innovation through exceptional projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-full p-1.5 flex space-x-1.5 border border-mbf-turquoise/30">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id as any)}
                className={`px-4 py-2 rounded-full font-semibold transition-all text-sm ${
                  filter === category.id
                    ? 'bg-mbf-turquoise text-white'
                    : 'text-mbf-dark-blue/70 hover:text-mbf-dark-blue hover:bg-mbf-turquoise/10'
                }`}
              >
                <span className="block">{category.label}</span>
                <span className="text-xs font-arabic">{category.arLabel}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {featuredProjects.length > 0 && (
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center mb-4"
            >
              <Filter className="w-5 h-5 text-mbf-turquoise mr-2" />
              <h3 className="text-xl font-bold text-mbf-dark-blue">Featured Projects</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {regularProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl font-bold text-mbf-dark-blue mb-4 text-center"
            >
              All Projects
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-xl text-mbf-text/60">
              No projects found in this category
            </p>
          </motion.div>
        )}

        {/* Submit Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-mbf-turquoise/10 to-mbf-blue/10 rounded-xl p-6 border border-mbf-turquoise/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-mbf-dark-blue mb-2">
              Have a Moroccan project to showcase?
            </h3>
            <p className="text-sm text-mbf-text/80 mb-4">
              Submit your project by creating a Pull Request on GitHub
            </p>
            <a
              href="https://github.com/funkyweedz/MBF/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-mbf-turquoise hover:bg-mbf-dark-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-md"
            >
              <Plus className="w-4 h-4 mr-2" />
              Submit Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectGallery;
