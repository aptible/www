import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/use-cases/Hero';
import Nav from '../components/shared/Nav';
import UseCases from '../components/use-cases/UseCases';
import ZeroTo from '../components/footer/ZeroTo';

const vsa = (
  <span>
    <span className="desktopOnly">VSAs & External Audits</span>
    <span className="mobileOnly">VSAs</span>
  </span>
);

const standards = (
  <span>
    <span className="desktopOnly">Security Standards</span>
    <span className="mobileOnly">Standards</span>
  </span>
);

const compliance = (
  <span>
    <span className="desktopOnly">Regulatory Compliance</span>
    <span className="mobileOnly">Compliance</span>
  </span>
);

const stickyNavItems = [
  { title: vsa, ref: '#vendor-security-assessments' },
  { title: standards, ref: '#security-standards' },
  { title: compliance, ref: '#regulatory-compliance' },
  { title: 'Security Awareness', ref: '#security-awareness' },
  { title: 'Internal Audits', ref: '#internal-audits' },
];

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Use Cases</title>
      <meta name="description" content="Aptible is the leading security management platform for small companies. We help companies shorten sales cycles through security. We offer pricing plans that work for any business that needs to improve their security." />
    </Helmet>
    <Hero />
    <Nav items={stickyNavItems} />
    <UseCases />
    <ZeroTo />
  </AptibleLayout>
);
