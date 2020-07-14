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
      <title>Aptible Comply | Shorten sales cycles &amp; automate compliance work</title>
      <meta
        name="description"
        content="Aptible Comply helps you win bigger deals faster by giving customers instant access to the security and information they need to buy and gives your customer trust team superpowers through automated compliance operations and evidence collection."
      />
    </Helmet>
    <Hero />
    <Rooms />
    <Automation />
    <ZeroTo />
  </AptibleLayout>
);
