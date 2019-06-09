import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Features.module.css';
import beyondLeftArrow from '../../images/comply/beyond-left.svg';
import beyondRightArrow from '../../images/comply/beyond-right.svg';

export default () => (
  <div className={styles.container} style={{ paddingTop: '80px' }}>
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h1 className="hero">
            Beyond Compliance
          </h1>
          <p className="L">
            Compliance is what you need to do, it's the requirements. What you
            really want is to move Beyond Compliance, so that you're protecting
            data and being secure.
          </p>

          <div className={styles.beyondLeft}>
            <img src={beyondLeftArrow} alt="arrow" />
          </div>

          <div className={styles.beyondRight}>
            <img src={beyondRightArrow} alt="arrow" />
          </div>
        </div>
      </Grid>
    </div>
  </div>
);
