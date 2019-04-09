import React from 'react';
import styles from './HeroCallout.module.css';

export default () => (
  <div className={styles.callout}>
    <span className={styles.pill}>New</span>
    <span className={styles.text}>Introducing Security Management</span>
    <span className={styles.arrow}>&rarr;</span>
  </div>
);
