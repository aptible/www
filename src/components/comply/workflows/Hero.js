import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './Hero.module.css';
import SignupButton from '../../signup/SignupButton';
import digestImage from '../../../images/comply/workflows/digest.png';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Comply</h5>
        <h1>Workflows</h1>

        <p className="XL">
          Aptible Comply Workflows automate the management of your company’s
          security, keeping track of everything you have to do to maintain
          compliance (and stay secure).
        </p>
        <SignupButton text="Schedule a Demo" product="comply" />
      </div>

      <div className={styles.screenshot}>
        <img src={digestImage} alt="" />
        <p>Aptible Comply Workflows automates notifications, reminders, and follow-ups.</p>
      </div>
    </Grid>
  </div>
);
