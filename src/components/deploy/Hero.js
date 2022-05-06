import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import WistiaVideo from '../shared/WistiaVideo';
import hipaaBadge from '../../images/home/badges/hipaa-24x24.svg';
import hitrustBadge from '../../images/home/badges/hitrust-24x24.svg';
import soc2Badge from '../../images/home/badges/soc-24x24.svg';
import SignupForm from '../../components/signup-form';

const DEMO_VIDEO_ID = 'vesrt04o10';

export const CompliancePills = () => {
  return (
    <div className={styles.compliancePills}>
      <CompliancePill title="✓ HIPAA" svg={hipaaBadge} />
      <CompliancePill title="✓ HITRUST" svg={hitrustBadge} />
      <CompliancePill title="✓ SOC 2 Type 2" svg={soc2Badge} />
    </div>
  );
};

const CompliancePill = ({ title, svg }) => {
  return (
    <div className={styles.compliancePill}>
      <img alt={title} src={svg} className={styles.compliancePillBadge} />
      <h6 className="small">{title}</h6>
    </div>
  );
};

const playDemo = () => {
  window._wq = window._wq || [];
  window._wq.push({
    id: DEMO_VIDEO_ID, onReady: (video) => {
      video.play();
    }
  });
}

export default ({ allowPersonalEmails = true }) => (
  <div className={styles.container}>
    <Grid rows="2">
      <div className={styles.content}>
        <h1 className={styles.heroItem}>
          Secure infrastructure you <br className="desktopOnly" />
          don't have to think about
        </h1>

        <div className={styles.subhead}>
          Get code to production faster and comply with HIPAA, HITRUST, SOC 2,
          and more. We focus on security and compliance, so you can focus on
          your product.
        </div>

        <div className={styles.heroCTA}>
          <SignupForm
            id="Home Page Hero - Product Signup"
            inputPlaceholder="Enter your email"
            allowPersonalEmails={allowPersonalEmails}
            btnText="Deploy Now"
          />

          <div className={styles.watchDemo}>
            or <span onClick={playDemo}>Watch Demo (9 mins)</span>
          </div>
        </div>

        <WistiaVideo videoId={DEMO_VIDEO_ID} />
      </div>
    </Grid>
  </div>
);
