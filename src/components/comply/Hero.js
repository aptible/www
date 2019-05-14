import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import Button from '../buttons/Button';
import complyScreenshot from '../../images/illustrations/comply-screenshot.png';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Comply</h5>
        <h1 className="hero">
          Your first<br />
          security hire
        </h1>
        <p className="XL">
          Comply helps you build a Security Management system so you can achieve
          and maintain the compliance and security that give you a competitive edge.
        </p>

        <Button to="/">Start with Comply</Button>
      </div>

      <div className={styles.screenshot}>
        <img src={complyScreenshot} alt="Aptible Comply" />
      </div>
    </Grid>
  </div>
);
