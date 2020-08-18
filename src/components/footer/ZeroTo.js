import React from 'react';
import styles from './ZeroTo.module.css';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';

const ZeroTo = () => {
  return (
    <div className={styles.zero}>
      <Grid rows="2">
        <div className={styles.zeroTo}><h1>Build Customer Trust</h1></div>
        <div className={styles.start}>
          <h4>Start eliminating the manual work of security and compliance now.</h4>
        </div>
        <div className={styles.button}>
          <SignupButton text="Get a demo" theme="black" />
        </div>
      </Grid>
    </div>
  );
};

export default ZeroTo;
