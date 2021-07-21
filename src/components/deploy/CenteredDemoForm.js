import React from 'react';
import styles from './CenteredDemoForm.module.css';

import LeadForm from '../lead-form';

export default ({ title, body, leadFormId }) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    <p className="L">{body}</p>
    <div className={styles.leadFormContainer}>
      <LeadForm id={leadFormId} />
    </div>
  </div>
);
