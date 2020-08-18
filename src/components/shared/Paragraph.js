import React from 'react';
import styles from './Paragraph.module.css';

const Paragraph = ({ children }) => (
  <p className={styles.paragraph}>{children}</p>
);

export default Paragraph;
