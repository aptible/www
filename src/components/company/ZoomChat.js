import React from 'react';
import styles from './ZoomChat.module.css';

export default () => (
  <div className={styles.window}>
    <div className={styles.header}>
      <div className={styles.circles}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>

      <div className={styles.titleBar}></div>
    </div>

    <div className={styles.grid}>
      {Array.apply(null, { length: 30 }).map((_, idx) =>
        <div key={idx} className={styles.photo}></div>
      )}
    </div>
  </div>
);
