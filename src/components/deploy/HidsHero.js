import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './HidsHero.module.css';
import SignupButton from '../signup/SignupButton';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Deploy Features</h5>
        <h1>
          Host-based Intrusion Detection <br className="desktopOnly" />(HIDS)
          and Incident Response
        </h1>

        <p className="XL">
          Your cloud infrastructure is protected at the host level with both
          intrusion detection monitoring and incident response. The Aptible
          Security Team investigates, responds to, and resolves any security
          incidents that are discovered via the HIDS.
        </p>
        <SignupButton text="Start with Deploy" product="deploy" />
      </div>
    </Grid>
  </div>
);
