import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '../../components/grid/Grid';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import heroStyles from '../../components/deploy/Hero.module.css'

import HowAptibleWorks from '../../components/deploy/HowAptibleWorks';

const steps = [
  [
    {
      id: '01',
      title: 'Refer',
      text: 'Introduce your referral to hello@aptible.com.',
    },
    {
      id: '02',
      title: 'Call With Aptible',
      text: "We'll reach out to schedule a call with your referral."
    },
    {
      id: '03',
      title: 'Get Paid',
      text: "When your referral signs up for Aptible, we'll send you a $250 Visa Gift Card. When your referral sign ups for a dedicated stack too, we'll send you a $750 Visa Gift Card."
    },
  ]
];
export default () => {
  return (
    <div>
      <AptibleLayout>
        <Helmet>
          <title>Aptible | Referral Program</title>
          <meta
            name="description"
            content="Customer Referral Program"
          />
        </Helmet>

        <Grid rows="2">
          <div style={{ gridColumn: "1 / span 7" }}>
            <h1 className={heroStyles.heroItem}>
              Refer a friend, and get up to $1,000 with the Aptible Referral Program. 
            </h1>

            <div className={heroStyles.heroItem}>
              <p className="XL">
                Do you know a business looking to deploy instant audit-ready apps? Share your referrals and receive up to a $1,000 Visa Gift Card. Here's how it works in 3 easy steps:
              </p>
            </div>
          </div>
        </Grid>

        <HowAptibleWorks
          steps={steps}
          description=""
          includeVideo={false}
          title="" />

      </AptibleLayout>
    </div>
  );
};
