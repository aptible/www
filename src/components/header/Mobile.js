import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Mobile.module.css';
import ResourcesLinks from './ResourcesLinks';
import Button from '../buttons/Button';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.mainItems}>
        <Link to="/comply/"><h1 className="hero">Comply</h1></Link>
        <Link to="/deploy/"><h1 className="hero">Deploy</h1></Link>
        <Link to="/pricing-plans/"><h1 className="hero">Pricing</h1></Link>
        <Link to="/use-cases/"><h1 className="hero">Use Cases</h1></Link>
        <Link to="/customers/"><h1 className="hero">Customers</h1></Link>
      </div>

      <div className={styles.resources}>
        <ResourcesLinks />
      </div>

      <div className={styles.login}>
        <Button to="https://dashboard.aptible.com/login">Log In</Button>
      </div>
    </Grid>
  </div>
);
