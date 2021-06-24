import React from 'react';
import styles from './ZeroTo.module.css';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';

const ZeroTo = () => {
  return (
    <div className={styles.zero}>
      <Grid rows="2">
        <div className={styles.zeroTo}>
          <h1>Focus on innovation,
          <br /> not compliance</h1>
        </div>
        <div className={styles.start}>
          <h4>
            Eliminate compliance stress and get your app out into the world.
          </h4>
        </div>
        <div className={styles.button}>
          <SignupButton text="Sign up for free" theme="black" />
        </div>
      </Grid>
    </div>
  );
};

export default ZeroTo;
