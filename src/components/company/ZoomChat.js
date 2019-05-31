import React from 'react';
import styles from './ZoomChat.module.css';

export default ({ webcamPhotos }) => (
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
      {webcamPhotos.map((employee, idx) => (
        <div key={idx} className={styles.photo} style={{ backgroundImage: `url(${employee.node.webcamPhoto.file.url})`}}></div>
      ))}
    </div>
  </div>
);
