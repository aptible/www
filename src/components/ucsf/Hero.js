import React from 'react';
import styles from './Hero.module.css';
import { Grid } from '../grid/Grid';
import SignupForm from '../../components/signup-form';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.headline}>
        <h1>
          HIPAA compliant +<br className="desktopOnly" /> secure infrastructure
          from day 1
        </h1>

        <p className="XL">
          Focus on product innovation and accelerate your startup journey. Get
          $5,000 in credits to run your applications and databases on Aptible.
        </p>

        <SignupForm
          id="UCSF Landing Page - Product Signup"
          btnText="Redeem $5,000 in Credits"
          overrideParams={{ 'utm_campaign': 'ucsf_health_hub' }}
        />
      </div>
    </Grid>
  </div>
);
