import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PerformancePage from './components/PerformancePage';
import HubPage from './components/HubPage';
import CasesPage from './components/CasesPage';
import Footer from './components/Footer';
import BookDemoModal from './components/BookDemoModal';
import './types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onBookDemo={openModal} onNavigate={handleNavigate} />
      <main className="pt-32 pb-20 px-4 md:px-6">
        {currentPage === 'home' && <HomePage onBookDemo={openModal} />}
        {currentPage === 'performance' && <PerformancePage onBookDemo={openModal} />}
        {currentPage === 'hub' && <HubPage onBookDemo={openModal} />}
        {currentPage === 'cases' && <CasesPage onBookDemo={openModal} />}
      </main>
      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;