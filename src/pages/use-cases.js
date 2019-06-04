import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/use-cases/Hero';
import Nav from '../components/shared/Nav';
import UseCases from '../components/use-cases/UseCases';
import ZeroTo from '../components/footer/ZeroTo';

const stickyNavItems = [
  { title: 'VSAs & External Audits', ref: '#vendor-security-assessments' },
  { title: 'Security Standards', ref: '#security-standards' },
  { title: 'Regulatory Compliance', ref: '#regulatory-compliance' },
  { title: 'Security Awareness', ref: '#security-awareness' },
  { title: 'Internal Audits', ref: '#internal-audits' },
];

export default ({ data }) => (
  <AptibleLayout>
    <Hero />
    <Nav items={stickyNavItems} />
    <UseCases />
    <ZeroTo />
  </AptibleLayout>
);
