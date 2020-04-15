import React from 'react';
import illustration from '../../images/comply/rooms-modal-illustration.svg';
import Button from '../buttons/Button';
import { Grid } from '../grid/Grid';
import styles from './Rooms.module.css';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.block}>
        <h3>Time kills deals</h3>
        <p className="XL">
          Your sales cycles are slowed down by waiting on other team members to
          answer support tickets, sign NDAs, and watermark SOC 2 reports across
          multiple fragmented systems. Every second your customer waits
          increases the likelihood that you won’t hit your growth goals.
        </p>
        <svg className={styles.arrow} version="1.1" xmlns="http://www.w3.org/2000/svg" width="473" height="1024" viewBox="0 0 473 1024">
          <path d="M470.834 509.427v-509.427h-25.729v509.427c0 220.247-178.546 398.794-398.794 398.794h-5.146v25.729h5.146c234.457 0 424.523-190.068 424.523-424.523z" />
          <path d="M0 921.080l101.48 102.92h35.589l-91.332-92.628v-20.583l91.332-92.618h-35.589l-101.48 102.909z" />
          <path d="M45.738 910.789v20.583l91.332 92.628h-35.589l-101.48-102.92 101.48-102.909h35.589l-91.332 92.618zM124.77 1018.854l-84.178-85.373v-24.802l84.177-85.362h-21.136l-96.406 97.764 96.406 97.774h21.137z" />
        </svg>
      </div>
    </Grid>

    <Grid>
      <h1 className={styles.heading}>
        Use compliance to grow your business faster
      </h1>

      <div className={styles.screenshot}>
        <img src={illustration} alt="" />
      </div>

      <div className={styles.content}>
        <p className="XL">
          Win bigger deals faster by enabling your sales and customer-facing
          teams to give your customers and prospects instant access to the
          information that they need to buy you. 
        </p>
        <p className="XL">
          Lower churn and improve customer engagement by automatically
          distributing security and compliance updates that accurately
          communicate your security posture to customers.
        </p>

        <div className={styles.cta}>
          <Button to="/comply/rooms">Learn more about Rooms</Button>
        </div>
      </div>
    </Grid>
  </div>
);
