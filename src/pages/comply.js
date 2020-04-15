import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/comply/Hero';
import Rooms from '../components/comply/Rooms';
import Automation from '../components/comply/Automation';
import ZeroTo from '../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Comply | Compliance monitoring &amp; workflow automation</title>
      <meta
        name="description"
        content="Aptible Comply takes you Beyond GRC through integrations with your SaaS systems, continuous monitoring for security configuration changes, and automatic workflow delegation, tracking, and analytics."
      />
    </Helmet>
    <Hero />
    <Rooms />
    <Automation />
    <ZeroTo />
  </AptibleLayout>
);
