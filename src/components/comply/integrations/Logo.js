import React from 'react';
import styles from './Logo.module.css';

export default ({ src, width, alt }) => (
  <img
    className={styles.logo}
    alt={alt || ''}
    src={src}
    style={{
      width: `${width}px`,
    }}
  />
);
