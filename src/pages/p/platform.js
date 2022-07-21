import React from 'react';
import { Helmet } from 'react-helmet';
import LightLayout from '../../components/layouts/LightLayout';
import styles from '../../components/layouts/LightLayout.module.css';
import nextScreenshot from '../../images/screenshots/next.png';
import { DemandGenSignup } from './components/DemandGenSignup';
import DemandGenDevelopers from './components/DemandGenDevelopers';
import DemandGenCompliance from './components/DemandGenCompliance';

const PERSONA = 'Platform Engineer';

export default () => (
  <LightLayout>
    <Helmet>
      <title>Aptible | Secure, Compliant, Application Deployment</title>
      <meta
        name="description"
        content="Get to market faster with a developer-friendly deployment platform that provides the security controls needed to comply with SOC 2 Type 2, HIPAA, HITRUST, and more."
      />
    </Helmet>

    <div className={styles.content}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>A secure hosting platform you can manage yourself.</h1>
          <p>Hundreds of companies&mdash;including 20+ unicorns 🦄&mdash;use Aptible to host their apps while simplifying compliance with HIPAA, HITRUST, SOC 2, and more.</p>
          <DemandGenSignup persona={PERSONA} />
        </div>

        <img src={nextScreenshot} className={styles.heroScreenshot} />
      </div>
    </div>

    <DemandGenDevelopers />
    <DemandGenCompliance />

    <div className={styles.platform}>
      <div className={styles.content}>
        <div className={styles.platformContent}>
          <h2>In just a few minutes, you could have your own secure hosting environment</h2>
          <p>Create your account now and get a free trial. No credit card required.</p>
          <DemandGenSignup persona={PERSONA} btnText='Start your free trial &rarr;' />
        </div>
      </div>
    </div>
  </LightLayout>
);
