import React from 'react';
import styles from './MapBackground.module.css';

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
);
