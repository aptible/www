import React from 'react';
import styles from './CustomerCarouselThumbnail.module.css';

export default ({ active, tmpBgColor }) => (
  <div className={styles.customers}>
    <div className={styles.tmpThumbnail}>
      {active &&
        <div>
          <div className={styles.progressBar}></div>
          <div className={styles.active}></div>
        </div>
      }
      <div className={`${styles.tmpBg} ${styles[tmpBgColor]}`}></div>
    </div>
  </div>
);
