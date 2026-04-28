import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Code } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', arLabel: 'الرئيسية', icon: Globe },
    { path: '/projects', label: 'Projects', arLabel: 'المشاريع', icon: Code },
  ];

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/mbf-logo.png" 
              alt="Moroccan Builders Foundation" 
              className="h-28 w-auto object-contain"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-6"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-mbf-dark-blue hover:text-mbf-turquoise transition-colors font-medium ${
                location.pathname === item.path ? 'text-mbf-turquoise' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
