import React from 'react';
import { Grid } from '../../grid/Grid';
import styles from './SellSmarter.module.css';
import screenshot from '../../../images/comply/open-rooms/sell-smarter.svg';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h1>Use compliance to sell smarter</h1>
        <p className="XL">
          Aptible Comply gives you analytics that track which documents your
          customers and prospects are viewing and downloading so you can
          understand how your compliance program is affecting your business at
          the customer and deal level. 
        </p>

        <div className={styles.screenshot}>
          <img src={screenshot} alt="" />
        </div>

        <p className="XL">
          Leverage tracking and analytics to understand engagement from your
          customers and prospects.
        </p>
        <p className="XL">
          See what parts of your security posture your customers value.
        </p>
      </div>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <h6>Analytics Dashboard</h6>
          <p>See which of your customers is engaging with your security documentation</p>
          <p>Gain insight into which security documents are most viewed/downloaded</p>
        </div>
        <div className={styles.box}>
          <h6>Activity Feed</h6>
          <p>See document uploads, downloads, version changes, and room visits in one place</p>
        </div>
      </div>
    </Grid>
  </div>
);
