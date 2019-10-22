import React from 'react';
import styles from './ContentBlock.module.css';

export default ({ children, fullWidth }) => (
  <div className={fullWidth ? styles.blockFull : styles.block}>
    {children}
  </div>
);
