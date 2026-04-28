import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Code, Brain } from 'lucide-react';
import ZelligePattern from './ZelligePattern';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-start overflow-hidden pt-8 pb-6">
      <div className="absolute inset-0 opacity-10">
        <ZelligePattern className="w-full h-full" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-4"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-mbf-dark-blue mb-2 tracking-wide"
        >
          Moroccan Builders Foundation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-mbf-turquoise mb-2 font-arabic"
        >
          مؤسسة البنائين المغاربة
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-mbf-text/80 mb-6 max-w-lg mx-auto"
        >
          Discover and celebrate innovative Moroccan projects that are shaping the future of technology and entrepreneurship in the region.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl w-full"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-mbf-turquoise/20">
            <Code className="w-10 h-10 text-mbf-turquoise mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-mbf-dark-blue mb-1">Blockchain</h3>
            <p className="text-sm text-mbf-text/80">Innovative projects on blockchain</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-mbf-turquoise/20">
            <Brain className="w-10 h-10 text-mbf-blue mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-mbf-dark-blue mb-1">Artificial Intelligence</h3>
            <p className="text-sm text-mbf-text/80">Moroccan AI solutions</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-mbf-turquoise/20">
            <Globe className="w-10 h-10 text-mbf-orange mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-mbf-dark-blue mb-1">Technology</h3>
            <p className="text-sm text-mbf-text/80">Diverse tech innovations</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6"
        >
          <Link 
            to="/projects" 
            className="bg-mbf-turquoise hover:bg-mbf-dark-blue text-white px-6 py-3 rounded-full text-base font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Explore Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
