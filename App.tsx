import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-[1200px] mr-auto ml-auto">
          <Hero />
          <BentoGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;