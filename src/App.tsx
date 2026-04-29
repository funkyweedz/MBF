import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import ProjectDetail from './components/ProjectDetail';
import ZelligePattern from './components/ZelligePattern';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <ZelligePattern className="w-full h-full" />
      </div>
      <Navigation />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
