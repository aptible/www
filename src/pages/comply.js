import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/comply/Hero';
import Quote from '../components/comply/Quote';
import Nav from '../components/shared/Nav';
import WithoutComply from '../components/comply/WithoutComply';
import WithComply from '../components/comply/WithComply';
import Features from '../components/comply/Features';
import Challenge from '../components/comply/Challenge';
import Integrate from '../components/comply/Integrate';
import Automate from '../components/comply/Automate';
import Act from '../components/comply/Act';
import WhoUses from '../components/comply/WhoUses';
import ZeroTo from '../components/footer/ZeroTo';

// Old
// import UseCases from '../components/home/UseCases';
// import ContinuouslyImprove from '../components/comply/ContinuouslyImprove';
// import BeyondCompliance from '../components/comply/BeyondCompliance';
// import HowItWorks from '../components/comply/HowItWorks';
// import MoreFeatures from '../components/comply/MoreFeatures';

const stickyNavItems = [
  { title: 'Without Comply', ref: '#without-comply' },
  { title: 'With Comply', ref: '#with-comply' },
  { title: 'Integrate', ref: '#integrate' },
  { title: 'Automate', ref: '#automate' },
  { title: 'Act', ref: '#act' },
  { title: 'Who Uses Comply', ref: '#who-uses-comply' },
];

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Comply | Security Management Platform</title>
      <meta
        name="description"
        content="Speed up sales cycle by passing vendor security assessments and meeting regulatory requirements for SOC 2, ISO 27001, HIPAA, GDPR, and more."
      />
    </Helmet>
    <Hero />
    <Quote />
    <Nav items={stickyNavItems} ctaText="Get a demo" product="comply" />
    <WithoutComply />
    <WithComply />
    <Integrate />
    <Automate />
    <Act />
    <WhoUses />
    <ZeroTo />
  </AptibleLayout>
);
