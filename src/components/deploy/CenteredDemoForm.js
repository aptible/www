import React from 'react';
import styles from './CenteredDemoForm.module.css';

import LeadForm from '../lead-form';

export default () => (
  <div className={styles.container}>
    <h2>A Trusted Platform That Grows With You</h2>
    <p className="L">
      Complete audits faster with well-documented controls, clear
      audit trails for third parties, and all of the security and
      compliance features you need get certified.
    </p>

    <div className={styles.leadFormContainer}>
      <LeadForm id="Home Page - Request a Demo" />
    </div>
  </div>
);
