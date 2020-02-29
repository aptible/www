import React from 'react';
import illustration from '../../images/comply/integrate-illustration.png';
import { Grid } from '../grid/Grid';
// import SignupButton from '../signup/SignupButton';
import ArrowButton from '../buttons/ArrowButton';
import styles from './Integrate.module.css';

export default () => (
  <div className={styles.container} id="integrate">
    <Grid>
      <div className={styles.intro}>
        <h2 className="h1">Integrate</h2>
        <p className="XL">
          Integrate with all of your SaaS services to build a single picture
          of you rcompliance program, data, and assets.
        </p>

        <p className="L">
          Continuously update your inventory of People, Devices, Assets,
          Vendors, and Data.
        </p>
      </div>

      <div className={styles.illustration}>
        <img src={illustration} alt="" />
      </div>

      <div className={styles.cta}>
        {/* <SignupButton text="Get a demo" product="comply" /> */}
        <ArrowButton to="/signup-comply/" text="Get a demo and learn more" />
      </div>
    </Grid>
  </div>
);
