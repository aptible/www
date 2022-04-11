import React from 'react';
import styles from './CenteredDemoForm.module.css';

import SignupForm from '../signup-form';

export default ({ title, body, formId, allowPersonalEmails = true }) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    <p className="L">{body}</p>
    <div className={styles.leadFormContainer}>
      <SignupForm id={formId} allowPersonalEmails={allowPersonalEmails} />
    </div>
  </div>
);
