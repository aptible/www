import React from 'react';
import styles from './Hero.module.css';
import { Grid } from '../grid/Grid';
import SignupForm from '../../components/signup-form';

export default ({ headline, subHeadline, utmCampaign }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.headline}>
        <h1>{headline}</h1>
        <p className="XL">{subHeadline}</p>

        <SignupForm
          id="Partner Landing Page - Product Signup"
          btnText="Redeem $5,000 in Credits"
          overrideParams={{ 'utm_campaign': utmCampaign }}
        />
      </div>
    </Grid>
  </div>
);
