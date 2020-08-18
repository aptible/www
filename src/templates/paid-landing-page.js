import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/comply/automation/Hero';
import Nav from '../components/shared/Nav';
import Features from '../components/comply/Features';
import ContinuouslyImprove from '../components/comply/ContinuouslyImprove';
import BeyondCompliance from '../components/comply/BeyondCompliance';
import HowItWorks from '../components/comply/HowItWorks';
import WhoUses from '../components/comply/automation/WhoUses';
import MoreFeatures from '../components/comply/MoreFeatures';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'Features', ref: '#features' },
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
    <Nav items={stickyNavItems} ctaText="Get a demo" product="comply" />
    <Features />
    <ContinuouslyImprove />
    <BeyondCompliance />
    <HowItWorks />
    <WhoUses />
    <MoreFeatures />
    <ZeroTo />
  </AptibleLayout>
);
