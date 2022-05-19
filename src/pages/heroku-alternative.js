import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Nav from '../components/shared/Nav';
import ZeroTo from '../components/footer/ZeroTo';

import Hero from '../components/comparison/Hero';
import Features from '../components/comparison/Features';
import Security from '../components/comparison/Security';
import Support from '../components/comparison/Support';
import Pricing from '../components/comparison/Pricing';
import GettingStarted from '../components/comparison/GettingStarted';

const stickyNavItems = [
  { title: 'Features', ref: '#features' },
  { title: 'Security & Compliance', ref: '#security-compliance' },
  { title: 'Support', ref: '#support' },
  { title: 'Pricing', ref: '#pricing' },
];

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Heroku Alternative focused on Security</title>
      <meta
        name="description"
        content="Aptible vs. Heroku, and why Aptible was created to help every developer use cloud infrastructure securely."
      />
    </Helmet>
    <Hero />
    <Nav items={stickyNavItems} ctaText="Sign up for free" product="deploy" />
    <Features />
    <Security />
    <Support />
    <Pricing />
    <GettingStarted />
    <ZeroTo />
  </AptibleLayout>
);
