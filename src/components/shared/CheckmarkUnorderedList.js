import React from 'react';
import styles from './CheckmarkUnorderedList.module.css';

export default ({ children }) => (
  <div className={styles.container}>
    <ul>{children}</ul>
  </div>
);
