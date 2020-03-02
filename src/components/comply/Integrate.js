import React from 'react';
import classNames from 'classnames';
import illustration from '../../images/comply/integrate-illustration.svg';
import { Grid } from '../grid/Grid';
import SignupArrowButton from '../signup/SignupArrowButton';
import styles from './Integrate.module.css';

export default () => (
  <div className={styles.container} id="integrate">
    <Grid>
      <div className={styles.intro}>
        <h2 className="h1">Integrate</h2>
        <p className="XL">
          Integrate with all of your SaaS services to build a single picture of
          your compliance program, data, and assets.
        </p>

        <p className="L">
          Continuously update your inventory of People, Devices, Assets,
          Vendors, and Data
        </p>

        <div className={classNames(styles.cta, styles.desktop)}>
          <SignupArrowButton text="Get a demo and learn more" product="comply" />
        </div>
      </div>

      <div className={styles.illustration}>
        <img src={illustration} alt="" />
      </div>

      <div className={classNames(styles.cta, styles.mobile)}>
        <SignupArrowButton text="Get a demo and learn more" product="comply" />
      </div>
    </Grid>
  </div>
);
