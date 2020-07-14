import React from 'react';
import { Link } from 'gatsby';
import styles from './HeroCallout.module.css';

export default () => (
  <div className={styles.callout}>
    <Link to="/comply/rooms/">
      <span className={styles.pill}>Free</span>
      <span className={styles.text}>Aptible Comply Rooms</span>
      <span className={styles.arrow}>&rarr;</span>
    </Link>
  </div>
);
