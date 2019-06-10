import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/comply/Hero';
import Nav from '../components/shared/Nav';
import UseCases from '../components/home/UseCases';
import Features from '../components/comply/Features';
import ContinuouslyImprove from '../components/comply/ContinuouslyImprove';
import BeyondCompliance from '../components/comply/BeyondCompliance';
import ManagedOps from '../components/comply/ManagedOps';
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

export default ({ pageContext }) => (
  <AptibleLayout>
    <Helmet>
      <title>{pageContext.headline}</title>
      <meta name="description" content={pageContext.paragraph} />
    </Helmet>
    <Hero headlineOverride={pageContext.headline} paragraphOverride={pageContext.paragraph} />
    <Nav items={stickyNavItems} ctaText="Schedule a Demo" product="comply" />
    <Features />
    <ContinuouslyImprove />
    <BeyondCompliance />
    <ManagedOps />
    <div id="use-cases">
      <UseCases />
    </div>
    <HowItWorks />
    <WhoUses />
    <MoreFeatures />
    <ZeroTo />
  </AptibleLayout>
);
