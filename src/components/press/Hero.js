import React from 'react';
import styles from './Hero.module.css';
import { Grid } from '../grid/Grid';
import Button from '../buttons/Button';

export default ({ heroBlock }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.text}>
        <h1 className="hero">Newsroom</h1>
        <p className="XL">
          This page contains Aptible-related images and logos. For any
          additional information, please send us a note at &nbsp;
          <a href="mailto:press@aptible.com"> press@aptible.com</a> and we’ll be
          in touch shortly.
        </p>

        <div className={styles.cta}>
          <Button href="mailto:press@aptible.com">Contact Us</Button>
        </div>
      </div>
    </Grid>
  </div>
);
