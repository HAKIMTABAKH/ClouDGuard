import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </main>
  );
};

export default Home;