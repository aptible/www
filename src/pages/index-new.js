import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import { Home } from '../components/home/New';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Security Management Platform</title>
      <meta
        name="description"
        content="Aptible is the leading trust management platform for B2B SaaS teams that offers compliance monitoring and workflow automation, audit ready hosting, and fast and easy audit prep."
      />
      <Home />
    </Helmet>
  </AptibleLayout>
);
