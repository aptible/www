import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './FeaturesHero.module.css';
import LeadForm from '../../components/lead-form';

const LEAD_FORM_ID = 'Secured By Aptible'

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h1 className="hero">
          Secured by Aptible
        </h1>

        <div className={styles.descriptionContainer}>
          <p className="XL">
            Teams that deploy on Aptible bring their product to market faster by
            transfering the responsiblity of implementing and operating
            rigous data protection controls to Aptible. 
          </p>

          <p className="XL">
            The table below highlights the full list of data protection controls
            provided by Aptible and our infrastructure provider, AWS.
          </p>
        </div>

        <div className={styles.leadFormContainer}>
          <LeadForm id={LEAD_FORM_ID} />
        </div>
      </div>
    </Grid>
  </div>
);
