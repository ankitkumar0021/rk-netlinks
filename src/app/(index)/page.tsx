import CTA from '@/components/homepage/CTA';
import Features from '@/components/homepage/Features';
import Hero from '@/components/homepage/Hero';
import Pricing from '@/components/homepage/Pricing';
import Services from '@/components/homepage/Services';
import Testimonials from '@/components/homepage/Testimonials';
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        {/* <Banner /> */}
        <Hero />
        <Services />
        <Pricing />
        <Features />
        <Testimonials /> 
        <CTA />
      </main>
    </div>
  );
};

export default Home;