import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Hero.module.css';
import hipaaBadge from '../../images/home/badges/hipaa-24x24.svg';
import hitrustBadge from '../../images/home/badges/hitrust-24x24.svg';
import soc2Badge from '../../images/home/badges/soc-24x24.svg';
import dashboardIlly from '../../images/home/illustrations/deploy-container-metrics-dashboard.svg';
import deployConsoleIlly from '../../images/home/illustrations/deploy-console.svg';
import mobileHero from '../../images/home/illustrations/mobile-hero-dashboard.svg';
import SignupForm from '../../components/signup-form';

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

export default ({ allowPersonalEmails = true }) => (
  <div className={styles.container}>
    <Grid rows="2">
      <div className={styles.content}>
        <h1 className={styles.heroItem}>
          Deploy a Secure, HIPAA-Compliant App From Day One
        </h1>

        <div className={styles.heroItem}>
          <CompliancePills />
        </div>

        <div className={styles.heroItem}>
          <p className="XL">
            Don’t waste engineering time building compliance into your cloud
            infrastructure. Use Aptible to get your product to market faster and
            be HIPAA-compliant from day one.
          </p>
        </div>

        <div className={styles.leadFormWrapper}>
          <SignupForm
            id="Home Page Hero - Product Signup"
            inputPlaceholder="Enter your email"
            allowPersonalEmails={allowPersonalEmails}
          />

          {allowPersonalEmails &&
            <div className={styles.signUpYourself}>
              <p className="M">
                Still have questions? {' '}
                <Link to="/p/schedule-a-demo/">
                  Schedule a demo
                </Link>
              </p>
            </div>
          }
        </div>
      </div>

      <div className={styles.illustration}>
        <img alt="Aptible Illustration" src={mobileHero} className={styles.mobileHero} />
        <img
          className={styles.containerMeticsDashboard}
          alt="Container Metrics Dashboard."
          src={dashboardIlly}
        />
        <img
          className={styles.containerDeploymentConsole}
          alt="Terminal deploying a docker app on Aptible."
          src={deployConsoleIlly}
        />
      </div>
    </Grid>
  </div>
);
