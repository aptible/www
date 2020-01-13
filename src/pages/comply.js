import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/comply/Hero';
import Nav from '../components/shared/Nav';
import UseCases from '../components/home/UseCases';
import Features from '../components/comply/Features';
import ContinuouslyImprove from '../components/comply/ContinuouslyImprove';
import BeyondCompliance from '../components/comply/BeyondCompliance';
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
    <Helmet>
      <title>Aptible Comply | Security Management Platform</title>
      <meta name="description" content="Speed up sales cycle by passing vendor security assessments and meeting regulatory requirements for SOC 2, ISO 27001, HIPAA, GDPR, and more." />
    </Helmet>
    <Hero />
    <Nav items={stickyNavItems} ctaText="Schedule a Call" product="comply" />
    <Features />
    <ContinuouslyImprove />
    <BeyondCompliance />
    <div id="use-cases">
      <UseCases />
    </div>
    <HowItWorks />
    <WhoUses />
    <MoreFeatures />
    <ZeroTo />
  </AptibleLayout>
);
