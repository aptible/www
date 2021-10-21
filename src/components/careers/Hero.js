import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import Button from '../buttons/Button';

export default () => (
  <Grid rows="1">
    <div className={styles.container}>
      <h5>Careers at Aptible</h5>
      <h1 className="hero">
        Want to build the future of privacy and security on the web? Join us.
      </h1>
      <Button href="https://boards.greenhouse.io/aptible">See Job Openings</Button>
    </div>
  </Grid>
);
