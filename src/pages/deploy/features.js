import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import FeaturesHero from '../../components/deploy/FeaturesHero';
import FeaturesGrid from '../../components/deploy/FeaturesGrid';
import DivisionOfResponsibility from '../../components/deploy/DivisionOfResponsibility';
import FeaturesLeft from '../../components/deploy/FeaturesLeft';
import ZeroTo from '../../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Deploy | Audit-ready App Deployment Platform</title>
      <meta
        name="description"
        content="Get to market faster with a developer-friendly deployment platform that provides the security controls needed to comply with SOC 2, ISO 27001, HIPAA, GDPR, and more."
      />
    </Helmet>
    <FeaturesHero />
    <FeaturesGrid />
    <DivisionOfResponsibility />
    <FeaturesLeft />
    <ZeroTo />
  </AptibleLayout>
);
