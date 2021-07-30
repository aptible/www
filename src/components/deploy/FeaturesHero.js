import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './FeaturesHero.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h1 className="hero">Secured by Aptible</h1>

        <div className={styles.descriptionContainer}>
          <p className="XL">
            Aptible empowers engineering teams to bring products to market faster by
            implementing and operating all of the rigorous infrastructure security controls
            required to comply with regulatory frameworks and pass security audits. 
          </p>

          <p className="XL">
            The table below highlights the full list of security and availability controls
            provided by Aptible directly or through our infrastructure provider, AWS.
          </p>
        </div>
      </div>
    </Grid>
  </div>
);
