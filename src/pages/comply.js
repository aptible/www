import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/comply/Hero';
import Quote from '../components/comply/Quote';
import Nav from '../components/shared/Nav';
import WithoutComply from '../components/comply/WithoutComply';
import WithComply from '../components/comply/WithComply';
import Integrate from '../components/comply/Integrate';
import Automate from '../components/comply/Automate';
import Act from '../components/comply/Act';
import WhoUses from '../components/comply/WhoUses';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'Without Comply', ref: '#without-comply' },
  { title: 'With Comply', ref: '#with-comply' },
  { title: 'Integrate', ref: '#integrate' },
  { title: 'Automate', ref: '#automate' },
  { title: 'Act', ref: '#act' },
  { title: 'Who Uses Comply', ref: '#who-uses-comply' },
];

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Comply | Compliance monitoring &amp; workflow automation</title>
      <meta
        name="description"
        content="Aptible Comply takes you Beyond GRC through integrations with your SaaS systems, continuous monitoring for security configuration changes, and automatic workflow delegation, tracking, and analytics."
      />
    </Helmet>
    <Hero />
    <Quote />
    <Nav items={stickyNavItems} ctaText="Get a demo" product="comply" />
    <WithoutComply />
    <WithComply />
    <Integrate />
    <Automate />
    <Act />
    <WhoUses />
    <ZeroTo />
  </AptibleLayout>
);
