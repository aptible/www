import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Proof.module.css';
import cn from 'classnames';
import vidScripLogo from '../../images/customers/logos/vidscip-logo.png'
import rightwayLogo from '../../images/customers/logos/rightway-logo.png'
import aidinLogo from '../../images/customers/logos/aidin-logo.png'
import glidianLogo from '../../images/customers/logos/glidian-logo.png'
import medialMemoryLogo from '../../images/customers/logos/medical-memory-logo.png'
import pagerLogo from '../../images/customers/logos/pager-logo.png'

export default () => (
  <div className={styles.container}>
    <p className={cn("L", styles.proofTitle)}>Trusted by more innovators in HealthTech than any other PaaS</p>
    <div className={styles.logoBar}>
      <img height="33" src={vidScripLogo} alt="Vidscrip" />
      <img height="24" src={rightwayLogo} alt="Rightway" />
      <img height="40" src={aidinLogo} alt="Aidin" />
      <img height="40" src={glidianLogo} alt="Glidian" />
      <img height="24" src={medialMemoryLogo} alt="Medical Memory" />
      <img height="35" src={pagerLogo} alt="pager" />
    </div>
  </div>
);
