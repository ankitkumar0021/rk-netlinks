// pages/index.js
import Banner from '@/components/homepage/Banner';
import Coverage from '@/components/homepage/Coverage';
import MissionVision from '@/components/homepage/MissionVision';
import Pricing from '@/components/homepage/Pricing';
import Services from '@/components/homepage/Services';
import Testimonials from '@/components/homepage/Testimonials';
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Banner />
        <Services />
        <Pricing />
        <MissionVision />
        <Coverage />
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;