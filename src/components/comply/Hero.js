import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import SignupButton from '../signup/SignupButton';
import atriumPhoto from '../../images/customers/photos/atrium-justin-kan.jpg';
import atriumLogo from '../../images/customers/logos/atrium.png';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Comply</h5>
        <h1>
          Build your business.
          <span>Not your compliance docs.</span>
        </h1>
        <p className="XL">
          Comply organizes and automates security and privacy management into
          clear, simple processes that give you and your customers confidence.
        </p>

        <SignupButton text="Schedule a Demo" product="comply" />
      </div>

      <div className={styles.cardContainer}>
        <img src={atriumPhoto} alt="atrium" className={styles.cardImage} /><div className={styles.cardContent}>
          <img src={atriumLogo} alt="atrium logo" className={styles.logo} />

          <p>
            &ldquo;We needed a system that made it easy to track our compliance
            efforts and establish information Security Management&hellip;
            with Aptible we've done that without having to hire a full-time
            compliance team.&rdquo;
          </p>

          <div className={styles.cardAuthor}>
            Justin Kan, CEO
          </div>
        </div>
      </div>
    </Grid>
  </div>
);
