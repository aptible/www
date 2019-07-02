import React from 'react';
import styles from './Hero.module.css';
import { Grid } from '../grid/Grid';
import CheckmarkUnorderedList from '../shared/CheckmarkUnorderedList';
import Button from '../buttons/Button';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.headline}>
        <h5>Refer a friend to Aptible!</h5>
        <h1>
          Aptible helps companies build their security management system and
          pass audits.
        </h1>

        <p className="XL">
          Whether a company is working to prepare for a compliance audit,
          spends a significant amount of time completing Vendor Security
          Assessments, is searching for their first full time security hire,
          or is selling into the enterprise and needs help proving their
          security position, Aptible can help!
        </p>
      </div>

      <div className={styles.details}>
        <p className="L">
          Refer them to us and once they become a customer, you'll both get a
          $250 Amazon gift card!
        </p>

        <p className="L">
          To get started, send an email
          to <a href="mailto:referrals@aptible.com">referrals@aptible.com</a> with
          the following information:
        </p>

        <div className={styles.info}>
          <CheckmarkUnorderedList>
            <li>Your name</li>
            <li>Your email</li>
            <li>Their name</li>
            <li>Their email address</li>
            <li>Their company</li>
          </CheckmarkUnorderedList>
        </div>

        <Button href="mailto:referrals@aptible.com">Send Referral</Button>
      </div>
      
    </Grid>
  </div>
);
