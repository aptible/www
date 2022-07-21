import React from 'react';
import styles from './DemandGenCompliance.module.css';
import lightStyles from '../../../components/layouts/LightLayout.module.css';
import complianceScreenshot from '../../../images/screenshots/compliance.png';

export default () => (
  <div className={lightStyles.content}>
    <div className={styles.complianceContent}>
      <h6>Compliance Platform</h6>
      <h2>A hosting platform that helps keep you compliant</h2>
      <p>Get code to production faster and comply with HIPAA, HITRUST, SOC 2, and more. We focus on security and compliance, so you can focus on your product.</p>

      <a href="https://deploy-docs.aptible.com/docs/intro-compliance-dashboard" target="_blank" className={styles.complianceCta}>Learn more &rarr;</a>
    </div>

    <img src={complianceScreenshot} className={styles.complianceScreenshot} />
  </div>
);
