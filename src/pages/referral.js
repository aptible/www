import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/referral/Hero';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Referral Program</title>
    </Helmet>

    <Hero />
  </AptibleLayout>
);
