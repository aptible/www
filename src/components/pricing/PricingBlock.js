import React from 'react';
import styles from './PricingBlock.module.css';

export default ({ title, amount, smallAmount, timePeriod }) => (
  <div className={styles.container}>
    <p className={`L ${styles.title}`}>{title}</p>
    {amount && <h1>{amount}</h1>}
    {smallAmount && <h2>{smallAmount}</h2>}
    {timePeriod && <p>{timePeriod}</p>}
  </div>
);
