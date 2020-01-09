import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './Hero.module.css';
import SignupButton from '../../signup/SignupButton';
import illustration from '../../../images/comply/workflows/workflows.png';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Comply</h5>
        <h1>Workflows</h1>

        <p className="XL">
          Aptible Comply Workflows automates the management of your company’s
          security. With Workflows, Aptible Comply becomes the single source of
          truth for security within your organization, keeping track of
          everything you have to do to maintain compliance (and stay secure).
        </p>
        <SignupButton text="Schedule a Call" product="comply" />
      </div>

      <div className={styles.screenshot}>
        <img src={illustration} alt="" />
      </div>
    </Grid>
  </div>
);
