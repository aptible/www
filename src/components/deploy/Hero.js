import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import SignupButton from '../signup/SignupButton';
import Console from './Console';
import quadpayIllustration from '../../images/deploy/quadpay.png';

export default () => (
  <div className={styles.container}>
    <Grid rows="2">
      <div className={styles.content}>
        <h1 className="hero">
          Deploy a secure, compliant app from day one
        </h1>
        <p className="XL">
          Aptible is a fully managed application platform with automated
          security and compliance controls baked in. Get to market faster,
          easily pass vendor audits, and never worry about maintaining servers.
        </p>

        <SignupButton text="Sign up for free" product="deploy" />
      </div>

      <div className={styles.illustration}>
        <Console />
      </div>
    </Grid>
  </div>
);
