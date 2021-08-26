import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import FeaturesHero from '../components/deploy/FeaturesHero';
import FeaturesLeft from '../components/deploy/FeaturesLeft';
import BadgeCallout from '../components/deploy/BadgeCallout';
import SecurityControlTable from '../components/deploy/SecurityControlTable';
import ZeroTo from '../components/footer/ZeroTo';
export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Secured by Aptible</title>
      <meta
        name="description"
        content="Get to market faster with a developer-friendly deployment platform that provides the security controls needed to comply with SOC 2 Type 2, HIPAA, HITRUST, and more."
      />
    </Helmet>
    <FeaturesHero />
    <SecurityControlTable />
    <FeaturesLeft />
    <BadgeCallout />
    <ZeroTo />
  </AptibleLayout>
);
