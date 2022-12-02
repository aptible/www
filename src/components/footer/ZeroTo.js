import React from 'react';
import styles from './ZeroTo.module.css';
import { Grid } from '../grid/Grid';
import SignupForm from '../signup-form';

const ZeroTo = ({
  btnText = "Sign up for free",
  overrideParams = {},
  headline = <>Focus on innovation,<br /> not compliance</>,
  subHeadline = "Eliminate compliance stress and get your app out into the world."
}) => {
  return (
    <div className={styles.zero}>
      <Grid rows="2">
        <div className={styles.zeroTo}>
          <h1>
            {headline}
          </h1>
        </div>
        <div className={styles.start}>
          <h4>
            {subHeadline}
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
