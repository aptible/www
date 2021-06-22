import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HomeHero.module.css';
import heroImage from '../../images/security-management/sm1.jpg';

export default ({ chapter }) => (
  <Grid>
    <div className={styles.container}>
      <h3>Chapter 01</h3>
      <h1 className="hero">{chapter.pageTitle}</h1>
      <img src={heroImage} alt="Introduction to Security Management" />
    </div>
  </Grid>
);
