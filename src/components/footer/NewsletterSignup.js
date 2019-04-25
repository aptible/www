import React from 'react';
import styles from './NewsletterSignup.module.css';
import Arrow from '../shared/Arrow';

export default () => (
  <form className={styles.form}>
    <input className={styles.input} type="email" placeholder="youremail@address.com" />
    <div className={styles.arrow}>
      <Arrow theme="noCircle" />
    </div>
  </form>
);
