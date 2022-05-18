import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Vision.module.css';

export default () => (
  <div className={styles.container} id="vision">
    <Grid>
      <div className={styles.intro}>
        <h1>Our Mission &amp; Strategy</h1>
        <p className="XL">
          Aptible helps developers do their best work by empowering them to use any cloud infrastructure securely.
        </p>
        <p className="XL">
          We seek to guarantee security and compliance by abstracting complex infrastructure decisions away from software developers.
        </p>
        <p className="XL">
          First, we plan to make our platform easy enough that it is compelling for startups with existential compliance needs, and then we will make it flexible enough so that later stage companies build on Aptible instead of building an internal developer platform from scratch.
        </p>
      </div>
    </Grid>
  </div>
);


