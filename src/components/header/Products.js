import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Products.module.css';

export const PRODUCTS_NAV = [
  {
    title: 'Comply',
    body:
      'The end-to-end compliance management platform that uses intelligent automations to simplify compliance work.',
    url: '/comply/',
    links: [
      {
        title: 'GRC',
        url: '/comply/automation/',
      },
      {
        title: 'Rooms',
        url: '/comply/rooms/',
      },
      {
        title: 'Integrations',
        url: '/comply/integrations/',
      },
      {
        title: 'Pricing',
        url: '/pricing-plans/#comply',
      },
    ],
  },
  {
    title: 'Deploy',
    body:
      'The container orchestration platform that automates the data security controls required for software in regulated industries.',
    url: '/deploy/',
    links: [
      {
        title: 'Features',
        url: '/deploy/features/',
      },
      {
        title: 'Pricing',
        url: '/pricing-plans/#deploy',
      },
    ],
  },
];

const Products = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        {PRODUCTS_NAV.map(product => (
          <div key={product.title} className={styles.section}>
            <h3>
              <Link to={product.url}>
                {product.title} <span className={styles.arrow}>&rarr;</span>
              </Link>
            </h3>

            <p>{product.body}</p>

            {product.links.map(link => (
              <div className={styles.childLink} key={link.url}>
                <Link to={link.url}>{link.title}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Grid>
  </div>
);

export default Products;
