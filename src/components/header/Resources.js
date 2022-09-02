import React from 'react';
import { Link } from 'gatsby';
import pic from '../../images/security-management/sm1.jpg';
import { Grid } from '../grid/Grid';
import ResourceLinks from './ResourcesLinks';
import styles from './Resources.module.css';

export const RESOURCES_NAV = [
  {
    title: 'Documentation',
    url: 'https://deploy-docs.aptible.com',
    external: true,
    newDomain: false,
  },
  {
    title: 'Blog',
    url: '/blog/',
    external: false,
  },
  {
    title: 'Changelog',
    url: 'https://deploy-docs.aptible.com/changelog',
    external: true,
    newDomain: true,
  },
  {
    title: 'Library',
    url: '/resources/',
    external: false,
  },
  {
    title: 'Open a Support Ticket',
    url: 'https://aptible.zendesk.com/hc/en-us/requests/new',
    external: true,
    newDomain: true,
  },
  {
    title: 'Status',
    url: 'https://status.aptible.com/',
    external: true,
    newDomain: true,
  },
];

const Resources = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        <ResourceLinks />
      </div>

      <div className={styles.calloutContainer}>
        <Link className={styles.callout} to="/hipaa/">
          <img src={pic} alt="" />
          <div className={styles.calloutText}>
            <p>Aptible Guide</p>
            <h5>HIPAA Compliance: Guide for Startups</h5>
          </div>
        </Link>
      </div>
    </Grid>
  </div>
);

export default Resources;
