import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import BookDemoModal from './components/BookDemoModal';
import './types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onBookDemo={openModal} />
      <main className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-[1200px] mr-auto ml-auto">
          <Hero />
          <BentoGrid onBookDemo={openModal} />
        </div>
      </main>
      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;