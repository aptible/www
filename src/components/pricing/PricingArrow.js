import React from 'react';
import styles from './PricingArrow.module.css';

export default ({ hover, text }) => (
  <div className={`${styles.circle} ${hover ? styles.hover : ''}`}>
    <div className={styles.arrowContainer}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 20.0011L20.4649 -8.53907e-07L14.6043 -1.11008e-06L32.1859 18.001L6.84255e-06 18.001L6.66769e-06 22.0012L32.1859 22.0012L14.6043 40L20.4649 40L40 20.0011Z" fill="#FDB515" />
      </svg>

      <div className={styles.getStarted}>
        {text}
      </div>
    </div>
  </div>
);
