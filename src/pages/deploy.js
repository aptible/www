import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/deploy/Hero';
import Nav from '../components/deploy/Nav';
import Features from '../components/deploy/Features';
import SecurityControls from '../components/deploy/SecurityControls';
import HowItWorks from '../components/deploy/HowItWorks';
import UseCases from '../components/deploy/UseCases';
import WhoUses from '../components/deploy/WhoUses';
import Documentation from '../components/deploy/Documentation';
import ZeroTo from '../components/footer/ZeroTo';


export default ({ data }) => (
  <AptibleLayout>
    <Hero />
    <Nav />
    <Features />
    <SecurityControls />
    <HowItWorks />
    <UseCases />
    <WhoUses />
    <Documentation />
    <ZeroTo />
  </AptibleLayout>
);
