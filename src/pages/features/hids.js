import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import FeaturePageHero from '../../components/deploy/FeaturePageHero';
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
    <FeaturePageHero
      h1={
        <h1>
        Host-based Intrusion Detection <br className="desktopOnly" />
        (HIDS) and Incident Response
        </h1>
      }
      summary={
        <p className="XL">
          Your cloud infrastructure is protected at the host level with both
          intrusion detection monitoring and incident response. The Aptible
          Security Team investigates, responds to, and resolves any security
          incidents that are discovered via the HIDS.
        </p>
      }
      leadFormId="HIDS" />
    <HidsHowItWorks />
    <HidsFeatures />
    <ZeroTo />
  </AptibleLayout>
);
