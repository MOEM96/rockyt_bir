import React from 'react';
import Hero from './Hero';
import BentoGrid from './BentoGrid';

interface HomePageProps {
  onBookDemo: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onBookDemo }) => {
  return (
    <div className="max-w-[1200px] mr-auto ml-auto">
      <Hero />
      <BentoGrid onBookDemo={onBookDemo} />
    </div>
  );
};

export default HomePage;