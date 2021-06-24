import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './FeaturesHero.module.css';
import SignupButton from '../signup/SignupButton';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Features</h5>
        <h1 className="hero">
          DevSecOps without
          <br className="desktopOnly" /> the overhead
        </h1>
        <SignupButton text="Sign up for free" product="deploy" />
      </div>
    </Grid>
  </div>
);
