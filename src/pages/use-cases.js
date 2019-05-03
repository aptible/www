import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/use-cases/Hero';
import Nav from '../components/shared/Nav';
import UseCases from '../components/use-cases/UseCases';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'VSAs & External Audits', ref: null },
  { title: 'Security Standards', ref: null },
  { title: 'Regulatory Compliance', ref: null },
  { title: 'Security Awareness', ref: null },
  { title: 'Internal Audits', ref: null },
];

export default ({ data }) => (
  <AptibleLayout>
    <Hero />
    <Nav items={stickyNavItems} />
    <UseCases />
    <ZeroTo />
  </AptibleLayout>
);
