import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/deploy/Hero';
import Nav from '../components/shared/Nav';
import Features from '../components/deploy/Features';
import SecurityControls from '../components/deploy/SecurityControls';
import HowItWorks from '../components/deploy/HowItWorks';
import UseCases from '../components/deploy/UseCases';
import WhoUses from '../components/deploy/WhoUses';
import Documentation from '../components/deploy/Documentation';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'Features', ref: null },
  { title: 'How It Works', ref: null },
  { title: 'Use Cases', ref: null },
  { title: 'Who Uses Deploy', ref: null },
  { title: 'Documentation & Support', ref: null },
];

export default () => (
  <AptibleLayout>
    <Hero />
    <Nav items={stickyNavItems} ctaText="Start With Deploy" ctaLink="/" />
    <Features />
    <SecurityControls />
    <HowItWorks />
    <UseCases />
    <WhoUses />
    <Documentation />
    <ZeroTo />
  </AptibleLayout>
);
