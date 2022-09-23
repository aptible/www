import React from 'react';
import styles from './ZeroTo.module.css';
import { Grid } from '../grid/Grid';
import SignupForm from '../signup-form';

const ZeroTo = ({
  btnText = "Sign up for free",
  overrideParams = {}
}) => {
  return (
    <div className={styles.zero}>
      <Grid rows="2">
        <div className={styles.zeroTo}>
          <h1>
            Focus on innovation,
            <br /> not compliance
          </h1>
        </div>
        <div className={styles.start}>
          <h4>
            Eliminate compliance stress and get your app out into the world.
          </h4>
        </div>
        <div className={styles.button}>
          <SignupForm btnText={btnText} theme="black" overrideParams={overrideParams} />
        </div>
      </Grid>
    </div>
  );
};

export default ZeroTo;
