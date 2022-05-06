import React from 'react';
import styles from './Proof.module.css';
import cn from 'classnames';
import himsHersLogo from '../../images/customers/logos/hims-hers-logo.png';
import rightwayLogo from '../../images/customers/logos/rightway-logo.png';
import aidinLogo from '../../images/customers/logos/aidin-logo.png';
import glidianLogo from '../../images/customers/logos/glidian-logo.png';
import medialMemoryLogo from '../../images/customers/logos/medical-memory-logo.png';
import pagerLogo from '../../images/customers/logos/pager-logo.png';

export default () => (
  <div className={styles.container}>
    <p className={styles.proofTitle}>
      Hundreds of digital health companies (including 20+ unicorns 🦄) build on Aptible:
    </p>
    <div className={styles.logoBar}>
      <img height="24" src={himsHersLogo} alt="hims & hers" />
      <img height="24" src={rightwayLogo} alt="Rightway" />
      <img height="40" src={aidinLogo} alt="Aidin" />
      <img height="40" src={glidianLogo} alt="Glidian" />
      <img height="24" src={medialMemoryLogo} alt="Medical Memory" />
      <img height="35" src={pagerLogo} alt="pager" />
    </div>

    <div className={styles.quote}>
      <h3>
        &ldquo;Not only does Aptible make passing HIPAA and SOC 2 audits a breeze,
        but it also just takes away the stress of managing our own
        infrastructure. With Aptible, managing deployments is easy, especially
        with the ability to restart with zero-downtime.&rdquo;
      </h3>
      <p>-Petr Hecko, Lead DevOps Engineer @ hims &amp; hers</p>
    </div>
  </div>
);
