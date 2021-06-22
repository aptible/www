import React from 'react';
import styles from './CustomerCarouselThumbnail.module.css';

export default ({ active, timerRunning, customer, clickFn }) => (
  <div className={styles.container} onClick={clickFn}>
    <div className={styles.thumbnail}>
      {active && (
        <div>
          {timerRunning && <div className={`${styles.progressBar}`} />}
          <div className={styles.active} />
        </div>
      )}
      <img className={styles.photo} src={customer.photo} alt="thumbnail" />
    </div>
  </div>
);
