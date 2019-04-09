import React from 'react';
import { Link } from 'gatsby';
import styles from './Header.module.css';
import { Grid } from '../grid/Grid';
import logoImage from '../../images/aptible.svg';

export default () => (
  <header className={styles.header}>
    <Grid>
      <Link to="/" className={styles.logo}>
        <img src={logoImage} alt="Aptible logo" />
      </Link>

      <Link to="/" className={`${styles.mainNavItem} ${styles.products}`}>Products</Link>
      <Link to="/" className={`${styles.mainNavItem} ${styles.useCases}`}>Use Cases</Link>
      <Link to="/" className={`${styles.mainNavItem} ${styles.customers}`}>Customers</Link>
      <Link to="/" className={`${styles.mainNavItem} ${styles.resources}`}>Resources</Link>
      <Link to="/" className={`${styles.mainNavItem} ${styles.logIn}`}>Log In</Link>
    </Grid>
  </header>
);
