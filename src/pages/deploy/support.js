import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import SupportBackground from '../../components/deploy/SupportBackground';
import SupportHero from '../../components/deploy/SupportHero';
import SupportPriceTable from '../../components/deploy/SupportPriceTable';

export default () => (
  <AptibleLayout>
    <Helmet>
    <title>Aptible Deploy | Support Pricing Plans</title>
      <meta name="description" content="Get to market faster with a developer-friendly deployment platform that provides the security controls needed to comply with SOC 2, ISO 27001, HIPAA, GDPR, and more." />
    </Helmet>
    <SupportHero />
    <SupportPriceTable />
    <SupportBackground />
  </AptibleLayout>
);
