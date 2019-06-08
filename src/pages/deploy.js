import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/deploy/Hero';
import Nav from '../components/shared/Nav';
import Features from '../components/deploy/Features';
import SecurityControls from '../components/deploy/SecurityControls';
import HowItWorks from '../components/deploy/HowItWorks';
import UseCases from '../components/home/UseCases';
import WhoUses from '../components/deploy/WhoUses';
import Documentation from '../components/deploy/Documentation';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'Features', ref: '#features' },
  { title: 'How It Works', ref: '#how-it-works' },
  { title: 'Use Cases', ref: '#use-cases' },
  { title: 'Who Uses Deploy', ref: '#who-uses-deploy' },
  { title: 'Documentation & Support', ref: '#support' },
];

export default () => (
  <AptibleLayout>
    <Hero />
    <Nav items={stickyNavItems} ctaText="Start With Deploy" product="deploy" />
    <Features />
    <SecurityControls />
    <HowItWorks />
    <div id="use-cases">
      <UseCases />
    </div>
    <WhoUses />
    <Documentation />
    <ZeroTo />
  </AptibleLayout>
);
