import React from 'react';
import styles from './BadgeCallout.module.css';
import hipaaBadge from '../../images/secured-by-aptible-badges/HIPAA Compliant Dark.svg';
import hipaaHitrust from '../../images/secured-by-aptible-badges/HIPAA + HITRUST Compliant Dark.svg';
import hitrustBadge from '../../images/secured-by-aptible-badges/HITRUST Compliant Dark.svg';
import soc2Badge from '../../images/secured-by-aptible-badges/SOC 2 Type 2 Dark.svg';

const DEFAULT_TITLE = (
  <>
    Security and Compliance as
    <br />a Differentiator
  </>
);
const DEFAULT_DESCRIPTION = (
  <>
    Build trust with customers and grow your business by deploying on Aptible
    and sharing your security and compliance posture on your website with a
    “Secured by Aptible” Badge.{' '}
  </>
);

export default ({ title = DEFAULT_TITLE, body = DEFAULT_DESCRIPTION }) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    <p className="L">{body}</p>
    <div className={styles.badgeContainer}>
      <img src={hipaaBadge} alt="HIPAA Compliant" />
      <img src={hitrustBadge} alt="HITRUST Certified" />
      <img src={hipaaHitrust} alt="HIPAA + HITRUST Compliant" />
      <img src={soc2Badge} alt="SOC 2 Certified" />
    </div>
  </div>
);
