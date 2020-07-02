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
      {webcamPhotos.map((employee) => {
        const { name, webcamPhoto } = employee.node;
        return (
          <img
            key={name}
            className={styles.photo}
            src={webcamPhoto.resize.src}
            alt={name}
          />
        );
      })}
    </div>
  </div>
);
