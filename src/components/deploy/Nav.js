import React from 'react';
import { Grid } from '../grid/Grid';
import { Link } from 'gatsby';
import styles from './Nav.module.css';
import Button from '../buttons/Button';

export default () => (
  <div className={styles.container}>
    <Grid >
      <div className={styles.navItems}>
        <Link to="/" className={styles.active}>
          <h6 className="small">Features</h6>
          <div className={styles.circle}></div>
        </Link>
        <Link to="/">
          <h6 className="small">How It Works</h6>
        </Link>
        <Link to="/">
          <h6 className="small">Use Cases</h6>
        </Link>
        <Link to="/">
          <h6 className="small">Who Uses Deploy</h6>
        </Link>
        <Link to="/">
          <h6 className="small">Documentation & Support</h6>
        </Link>
      </div>
      
      <div className={styles.cta}>
        <Button to="/">Start With Deploy</Button>
      </div>
    </Grid>
  </div>
);
