import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/deploy/Hero';
import Nav from '../components/shared/Nav';
import Features from '../components/deploy/Features';
import SecurityControls from '../components/deploy/SecurityControls';
import HowItWorks from '../components/deploy/HowItWorks';
import WhoUses from '../components/deploy/WhoUses';
import Documentation from '../components/deploy/Documentation';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'Features', ref: '#features' },
  { title: 'How It Works', ref: '#how-it-works' },
  { title: 'Who Uses Deploy', ref: '#who-uses-deploy' },
  { title: 'Documentation & Support', ref: '#support' },
];

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Deploy | Audit-ready App Deployment Platform</title>
      <meta name="description" content="Get to market faster with a developer-friendly deployment platform that provides the security controls needed to comply with SOC 2, ISO 27001, HIPAA, GDPR, and more." />
    </Helmet>
    <Hero />
    <Nav items={stickyNavItems} ctaText="Start With Deploy" product="deploy" />
    <Features />
    <SecurityControls />
    <HowItWorks />
    <WhoUses />
    <Documentation />
    <ZeroTo />
  </AptibleLayout>
);
