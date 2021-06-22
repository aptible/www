import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import HidsHero from '../../components/deploy/HidsHero';
import HidsHowItWorks from '../../components/deploy/HidsHowItWorks';
import HidsFeatures from '../../components/deploy/HidsFeatures';
import ZeroTo from '../../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>
        Aptible Managed Host-based Intrusion Detection System (HIDS)
      </title>
      <meta
        name="description"
        content="Aptible Deploy protects infrastructure with Managed Host-based Intrusion Detection System (HIDS) and Incident Response, monitoring and analyzing events for anomalous activities."
      />
    </Helmet>
    <HidsHero />
    <HidsHowItWorks />
    <HidsFeatures />
    <ZeroTo />
  </AptibleLayout>
);
