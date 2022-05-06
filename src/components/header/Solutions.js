import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Solutions.module.css';

export const SOLUTIONS_NAV = [
  {
    title: 'Fully-Managed Security for Your Cloud Infrastructure',
    url: '/solutions/secure-cloud-infrastructure',
    show: true,
  },
  {
    title: 'Prove Compliance and Pass Security Audits',
    url: '/solutions/hipaa-hitrust-soc2-compliant-hosting',
    show: true,
  },
  {
    title: 'Reliable DevOps Without the Overhead ',
    url: '/solutions/reliable-devops',
    show: true,
  },
  {
    title: 'Security & Availability Controls',
    url: '/secured-by-aptible',
    show: true,
  },
];

const Company = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        {SOLUTIONS_NAV.filter(link => link.show).map(link => (
          <div className={styles.link} key={link.url}>
            <Link to={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>
    </Grid>
  </div>
);

export default Company;
