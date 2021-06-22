import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import SignupButton from '../signup/SignupButton';
import Console from './Console';
import quadpayIllustration from '../../images/deploy/quadpay.png';

export default () => (
  <div className={styles.container}>
    <Grid rows="2">
      <div className={styles.content}>
        <h5>Aptible Deploy</h5>
        <h1 className="hero">
          Launch apps and databases that
          <br className="desktopOnly" /> are audit-ready
        </h1>
        <p className="XL">
          Deploy automatically implements the security controls you need to
          achieve regulatory compliance and pass customer audits.
        </p>

        <SignupButton text="Start with Deploy" product="deploy" />
      </div>

      <div className={styles.illustration}>
        <img src={quadpayIllustration} alt="quadpay" />
      </div>

      <div className={styles.consoleContainer}>
        <Console />
      </div>
    </Grid>
  </div>
);
