import React from 'react';
import styles from './PricingBlock.module.css';

export default ({ title, amount, timePeriod }) => (
  <div className={styles.container}>
    <p className={`L ${styles.title}`}>{title}</p>
    <h1>{amount}</h1>
    <p>{timePeriod}</p>
  </div>
);
