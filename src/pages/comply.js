import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/comply/Hero';
import Nav from '../components/shared/Nav';
import UseCases from '../components/deploy/UseCases';
import Features from '../components/comply/Features';
import HowItWorks from '../components/comply/HowItWorks';
import WhoUses from '../components/comply/WhoUses';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'Use Cases', ref: null },
  { title: 'Features', ref: null },
  { title: 'How It Works', ref: null },
  { title: 'Who Uses Comply', ref: null },
  { title: 'More features', ref: null },
];

export default ({ data }) => (
  <AptibleLayout>
    <Hero />
    <Nav items={stickyNavItems} ctaText="Start With Comply" ctaLink="/" />
    <div style={{ padding: '100px 0 0 0' }}>
      <UseCases />
    </div>
    <Features />
    <HowItWorks />
    <WhoUses />
    <ZeroTo />
  </AptibleLayout>
);
