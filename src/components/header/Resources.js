import React from 'react';
import { Link } from 'gatsby';
import pic from '../../images/security-management/sm1.jpg';
import { Grid } from '../grid/Grid';
import ResourceLinks from './ResourcesLinks';
import styles from './Resources.module.css';

export const RESOURCES_NAV = [
  {
    title: 'Library',
    url: '/resources/',
    external: false,
  },
  {
    title: 'Guides',
    url: '/resources/guides/',
    external: false,
  },
  {
    title: 'Webinars',
    url: '/resources/webinars/',
    external: false,
  },
  {
    title: 'Blog',
    url: '/blog/',
    external: false,
  },
  {
    title: 'Engineering Blog',
    url: '/blog/category/engineering/',
    external: false,
  },
  {
    title: 'Deploy Documentation',
    url: '/documentation/index.html',
    external: true,
    newDomain: false,
  },
  {
    title: 'Comply Documentation',
    url: 'https://docs.aptible.com/',
    external: true,
    newDomain: true,
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
        <Link className={styles.callout} to="/security-management/">
          <img src={pic} alt="" />
          <div className={styles.calloutText}>
            <p>Aptible Guide</p>
            <h5>Introduction to Security Management</h5>
          </div>
        </Link>
      </div>
    </Grid>
  </div>
);

export default Resources;
