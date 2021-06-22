import React from 'react';
import { Link } from 'gatsby';
import pages from '../../data/use-cases.json';
import { Grid } from '../grid/Grid';
import styles from './UseCases.module.css';

export const USE_CASES_NAV = pages.map(page => ({
  title: page.title,
  url: `/use-cases/${page.slug}`,
  excerpt: page.excerpt,
}));

const UseCases = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        {USE_CASES_NAV.map(link => (
          <div className={styles.link} key={link.title}>
            <Link to={link.url}>{link.title}</Link>

            <div className={styles.body}>
              <p>{link.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </Grid>
  </div>
);

export default UseCases;
