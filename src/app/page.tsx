import React from 'react';
import { Hero } from '../../components/Hero';
import { PainPoints } from '../../components/PainPoints';
import { Solutions } from '../../components/Solutions';
import { HowItWorks } from '../../components/HowItWorks';
import { Benefits } from '../../components/Benefits';
import { FreeAudit } from '../../components/FreeAudit';
import { Testimonials } from '../../components/Testimonials';
import { CallToAction } from '../../components/CallToAction';
const HomePage = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solutions />
      <HowItWorks />
      <Benefits />
      <FreeAudit />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;
