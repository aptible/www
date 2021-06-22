import React from 'react';
import { Link } from 'gatsby';
import teamPhoto from '../../images/aptible-team-photo.jpg';
import { Grid } from '../grid/Grid';
import styles from './Company.module.css';

export const COMPANY_NAV = [
  {
    title: 'About',
    url: '/company/',
    show: true,
  },
  {
    title: 'Careers',
    url: '/careers/',
    show: true,
  },
  {
    title: 'Press',
    url: '/press/',
    show: true,
  },
  {
    title: 'Legal',
    url: '/legal/terms-of-service/',
    show: true,
  },
  {
    title: 'Owner’s Manual',
    url: '/owners-manual/',
    show: false,
  },
];

const Company = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        {COMPANY_NAV.filter(link => link.show).map(link => (
          <div className={styles.link} key={link.url}>
            <Link to={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>

      <div className={styles.calloutContainer}>
        <Link className={styles.callout} to="/owners-manual/">
          <img src={teamPhoto} alt="" />
          <div className={styles.calloutText}>
            <h5>
              Owner’s Manual <span className={styles.arrow}>&rarr;</span>
            </h5>
            <p>
              Get a clear sense of what this team is — what we mean by “us.”
            </p>
          </div>
        </Link>
      </div>
    </Grid>
  </div>
);

export default Company;
