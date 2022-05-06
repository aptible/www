import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/deploy/Hero';
import Nav from '../../components/shared/Nav';

import SecurityControls from '../../components/deploy/SecurityControls';
import HowAptibleWorks from '../../components/deploy/HowAptibleWorks';
import WhoUses from '../../components/deploy/WhoUses';
import ZeroTo from '../../components/footer/ZeroTo';
import Proof from '../../components/deploy/Proof';
import CenteredDemoForm from '../../components/deploy/CenteredDemoForm';
import Solutions from '../../components/deploy/Solutions';
import styles from './VideoLandingPage.module.css';

const stickyNavItems = [
  { title: 'How Aptible Works', ref: '#how-aptible-works' },
  { title: 'Solutions', ref: '#solutions' },
  { title: 'Aptible vs DIY on AWS', ref: '#aptible-vs-aws' },
  { title: 'Who Uses Aptible', ref: '#who-uses-deploy' },
];

export default () => (
  <div>
    <Helmet>
      <title>Aptible | Secure, Compliant, Application Deployment</title>
      <meta
        name="description"
        content="Get to market faster with a developer-friendly deployment platform that provides the security controls needed to comply with SOC 2 Type 2, HIPAA, HITRUST, and more."
      />
    </Helmet>

    <div className={styles.homeCopyLayout}>
      <Hero allowPersonalEmails={false} />
      <Proof />
      <Nav
        items={stickyNavItems}
        ctaText="Sign up for free"
        product="deploy"
      />
      <HowAptibleWorks includeVideo={false} />
      <CenteredDemoForm
        title="A Trusted Platform That Grows With You"
        body="Complete audits faster with well-documented controls, clear
      audit trails for third parties, and all of the security and
      compliance features you need get certified."
        formId="Home Page - Product Signup"
        allowPersonalEmails={false}
      />
      <Solutions />
      <SecurityControls />
      <CenteredDemoForm
        title="Use Aptible and Deploy in Three Steps"
        body="Save your engineering team the headache of building compliant infra on AWS. Use Aptible and get back to building your product. Request a demo to see how it works."
        formId="Home Page - Product Signup"
        allowPersonalEmails={false}
      />
      <WhoUses />
    </div>
    
    <ZeroTo />
  </div>
);

