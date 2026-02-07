import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PerformancePage from './components/PerformancePage';
import HubPage from './components/HubPage';
import CasesPage from './components/CasesPage';
import Footer from './components/Footer';
import './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // No-op function since Cal.com handles the modal via data attributes
  const handleBookDemo = () => {};

  return (
    <div className="min-h-screen bg-[#161616] flex flex-col">
      <Navbar onBookDemo={handleBookDemo} onNavigate={handleNavigate} />
      <main className="pt-32 pb-20 px-4 md:px-6 flex-grow">
        {currentPage === 'home' && <HomePage onBookDemo={handleBookDemo} />}
        {currentPage === 'performance' && <PerformancePage onBookDemo={handleBookDemo} />}
        {currentPage === 'hub' && <HubPage onBookDemo={handleBookDemo} />}
        {currentPage === 'cases' && <CasesPage onBookDemo={handleBookDemo} />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;