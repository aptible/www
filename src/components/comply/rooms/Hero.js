import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './Hero.module.css';
import SignupButton from '../../signup/SignupButton';
import screenshot from '../../../images/comply/rooms/screenshot.svg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Comply</h5>
        <h1 className="hero">Sell faster and smarter with compliance datarooms</h1>

        <p className="XL">
          Aptible Comply Rooms is a dataroom solution for B2B SaaS teams who
          need to close deals quicker by delivering confidential security
          documentation to customers more efficiently.
        </p>
        <SignupButton text="Get a demo" product="comply" />
      </div>

      <div className={styles.screenshot}>
        <img src={screenshot} alt="" />
      </div>
    </Grid>
  </div>
);
