import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HomeHero.module.css';
import heroImage from '../../images/security-management/sm1.jpg';

export default () => (
  <Grid>
    <div className={styles.container}>
      <h3>Chapter 01</h3>
      <h1 className="hero">
        Introduction to<br />Security Management
      </h1>
      <img src={heroImage} alt="Introduction to Security Management" />
    </div>
  </Grid>
);
