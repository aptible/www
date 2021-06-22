import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import Hero from '../../components/comply/workflows/Hero';
import Features from '../../components/comply/workflows/Features';
import HowItWorks from '../../components/comply/workflows/HowItWorks';
import WhoUses from '../../components/comply/automation/WhoUses';
import ZeroTo from '../../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Comply | Automate Security and Compliance</title>
      <meta
        name="description"
        content="Aptible Comply Workflows automate the management of your company’s security, keeping track of everything you have to do to maintain compliance (and stay secure)."
      />
    </Helmet>
    <Hero />
    <Features />
    <HowItWorks />
    <WhoUses />
    <ZeroTo />
  </AptibleLayout>
);
