import React from 'react';
import { Link } from 'gatsby';
import styles from './Button.module.css';

export default ({ to, children }) => (
  <Link to={to} className={styles.button}>
    {children}
  </Link>
);
