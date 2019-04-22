import React from 'react';
import styles from './Arrow.module.css';

export default () => (
  <div className={styles.circle}>
    <div className={styles.arrowContainer}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10.0006L10.2324 -4.26954e-07L7.30217 -5.5504e-07L16.093 9.0005L3.42127e-06 9.0005L3.33385e-06 11.0006L16.093 11.0006L7.30217 20L10.2324 20L20 10.0006Z" fill="#0A1B2B" />
      </svg>
    </div>
  </div>
);
