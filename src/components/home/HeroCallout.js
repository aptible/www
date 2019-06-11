import React from 'react';
import { Link } from 'gatsby';
import styles from './HeroCallout.module.css';

export default () => (
  <div className={styles.callout}>
    <Link to="/blog/introducing-new-brand-identity/">
      <span className={styles.pill}>New</span>
      <span className={styles.text}>Introducing our new brand</span>
      <span className={styles.arrow}>&rarr;</span>
    </Link>
  </div>
);
