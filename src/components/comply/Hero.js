import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import SignupButton from '../signup/SignupButton';
import illustration from '../../images/comply/comply-illustration.svg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Comply</h5>
        <h1 className="hero">Compliance monitoring &amp; automation</h1>

        <p className="XL">
          <b>
            Beyond <span className={styles.arrow}>→</span> GRC
          </b>
          <br />
          <b>
            Beyond <span className={styles.arrow}>→</span> Spreadsheets
          </b>
        </p>

        <p className="XL">
          Eliminate the manual work needed to comply with SOC 2, ISO 27001,
          HIPAA, and more.
        </p>

        <div className={styles.cta}>
          <SignupButton text="Get a demo" product="comply" />
        </div>
      </div>

      <div className={styles.screenshot}>
        <img src={illustration} alt="" />
      </div>
    </Grid>
  </div>
);
