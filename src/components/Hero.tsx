import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Globe, Code, Brain } from 'lucide-react';
import ZelligePattern from './ZelligePattern';

const Hero: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>MBF | Moroccan Tech & Startup Showcase - Home</title>
        <meta name="description" content="Discover and celebrate innovative Moroccan projects that are shaping the future of technology and entrepreneurship in the region. Explore Blockchain, AI, and Technology startups." />
        <link rel="canonical" href="https://mbfinc.vercel.app/" />
        <meta property="og:title" content="MBF - Moroccan Builders Foundation | Home" />
        <meta property="og:description" content="Discover and celebrate innovative Moroccan projects shaping the future of technology and entrepreneurship." />
        <meta property="og:url" content="https://mbfinc.vercel.app/" />
        <meta property="twitter:title" content="MBF - Moroccan Builders Foundation | Home" />
        <meta property="twitter:description" content="Discover and celebrate innovative Moroccan projects shaping the future of technology and entrepreneurship." />
      </Helmet>
      <div className="relative h-[calc(100vh-70px)] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ZelligePattern className="w-full h-full" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-2xl mx-auto -mt-6"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-mbf-dark-blue mb-1 tracking-wide"
        >
          Moroccan Builders Foundation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-mbf-turquoise mb-2 font-arabic"
        >
          مؤسسة البنائين المغاربة
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-mbf-text/80 mb-4 max-w-lg mx-auto leading-relaxed"
        >
          Discover and celebrate innovative Moroccan projects that are shaping the future of technology and entrepreneurship in the region.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-3 max-w-2xl w-full px-4"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-mbf-turquoise/20">
            <Code className="w-10 h-10 text-mbf-turquoise mx-auto mb-1" />
            <h3 className="text-sm font-semibold text-mbf-dark-blue mb-1">Blockchain</h3>
            <p className="text-xs text-mbf-text/70">Innovative</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-mbf-turquoise/20">
            <Brain className="w-10 h-10 text-mbf-blue mx-auto mb-1" />
            <h3 className="text-sm font-semibold text-mbf-dark-blue mb-1">AI</h3>
            <p className="text-xs text-mbf-text/70">Solutions</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-mbf-turquoise/20">
            <Globe className="w-10 h-10 text-mbf-orange mx-auto mb-1" />
            <h3 className="text-sm font-semibold text-mbf-dark-blue mb-1">Technology</h3>
            <p className="text-xs text-mbf-text/70">Innovations</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4"
        >
          <Link 
            to="/projects" 
            className="bg-mbf-turquoise hover:bg-mbf-dark-blue text-white px-8 py-3 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Explore Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default Hero;
