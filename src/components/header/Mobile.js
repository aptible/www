import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Mobile.module.css';
import Button from '../buttons/Button';
import SignupButton from '../signup/SignupButton';
import HeaderContext from './HeaderContext';

export default () => (
  <HeaderContext.Consumer>
    {context => (
      <div>
        <Grid>
          <div className={styles.mainItems}>
            <Link to="/comply/"><h1 className="hero">Comply</h1></Link>
            <Link to="/deploy/"><h1 className="hero">Deploy</h1></Link>
            <Link to="/pricing-plans/"><h1 className="hero">Pricing</h1></Link>
            <Link to="/use-cases/"><h1 className="hero">Use Cases</h1></Link>
            <Link to="/customers/"><h1 className="hero">Customers</h1></Link>
            <Link to="/resources/"><h1 className="hero">Resources</h1></Link>
            <Link to="/company/"><h1 className="hero">Company</h1></Link>
          </div>

          <div className={styles.login}>
            <Button href="https://dashboard.aptible.com/login">Log In</Button>
          </div>

          <div className={styles.cta}>
            {context.isDeployPage ? (
              <SignupButton text="Start with Deploy" product="deploy" />
            ) : (
              <SignupButton text="Schedule a Demo" product="comply" />
            )}
          </div>
        </Grid>
      </div>
    )}
  </HeaderContext.Consumer>
);
