import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './DivisionOfResponsibility.module.css';
import deployFeatures from '../../data/deploy-features.json';

export default () => (
  <div className={styles.container} id="division-of-responsibility">
    <Grid>
      <div className={styles.hero}>
        <h1>Division of Responsibility</h1>
        <p className="L">
          Aptible Deploy is an ISO 27001 and SOC 2 certified, AWS-based
          deployment platform for deploying audit-ready apps and databases.
          Using Aptible Deploy, companies can launch highly available, secure
          apps and databases into isolated cloud environments using a
          developer-friendly workflow. Apps hosted on Aptible Deploy conform to
          the requirements of HIPAA, ISO 27001, SOC 2, GDPR, and other security
          frameworks.
        </p>
      </div>

      <div className={styles.providedBy}>
        <div className={styles.provider}>
          <h6 className="small">Provided By</h6>
          <h4>Aptible</h4>
        </div>

        <div className={styles.featureGrid}>
          {deployFeatures.slice(0, 6).map((feature, idx) => (
            <div key={idx} className={styles.feature}>
              {feature.headline}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.providedBy}>
        <div className={styles.provider}>
          <h6 className="small">Provided By</h6>
          <h4>Aptible Deploy</h4>
        </div>

        <div className={styles.featureGrid}>
          {deployFeatures.slice(6).map((feature, idx) => (
            <div key={idx} className={styles.feature}>
              {feature.headline}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.providedBy}>
        <div className={styles.provider}>
          <h6 className="small">Provided By</h6>
          <h4>AWS</h4>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.feature}>AWS Shield DDoS Protection</div>
          <div className={styles.feature}>Spoofing & Sniffing Protection</div>
          <div className={styles.feature}>
            Physical and Environmental Controls
          </div>
          <div className={styles.feature}>Hypervisor Security</div>
          <div className={styles.feature}>Port Scanning Protection</div>
        </div>
      </div>
    </Grid>
  </div>
);
