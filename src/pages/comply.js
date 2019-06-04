import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/comply/Hero';
import Nav from '../components/shared/Nav';
import UseCases from '../components/home/UseCases';
import Features from '../components/comply/Features';
import HowItWorks from '../components/comply/HowItWorks';
import WhoUses from '../components/comply/WhoUses';
import MoreFeatures from '../components/comply/MoreFeatures';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'Features', ref: '#features' },
  { title: 'Use Cases', ref: '#use-cases' },
  { title: 'How It Works', ref: '#how-it-works' },
  { title: 'Who Uses Comply', ref: '#who-uses-comply' },
  { title: 'More features', ref: '#more-features' },
];

export default ({ data }) => (
  <AptibleLayout>
    <Hero />
    <Nav items={stickyNavItems} ctaText="Start With Comply" />
    <Features />
    <div id="use-cases">
      <UseCases />
    </div>
    <HowItWorks />
    <WhoUses />
    <MoreFeatures />
    <ZeroTo />
  </AptibleLayout>
);
