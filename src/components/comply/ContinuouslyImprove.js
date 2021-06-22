import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Features.module.css';
import toSeamlessArrow from '../../images/comply/to-seamless.svg';
import vmIllustration from '../../images/comply/vendor-management.png';
import assetIllustration from '../../images/comply/assets.svg';
import aclIllustration from '../../images/comply/acl.svg';

const automationIcon = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 20H37C41.971 20 46 15.971 46 11C46 6.029 41.971 2 37 2H27"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M26 38H11C6.029 38 2 33.971 2 29C2 24.029 6.029 20 11 20H18"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M20 32L26 38L20 44"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path d="M18 2H21" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path
      d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

const systemIcon = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 24H8V36H20V24Z"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M26 24H40"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M26 30H40"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M26 36H32"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path d="M8 10H10" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path
      d="M16 10H18"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M32 10H40"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path d="M2 16H46" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path
      d="M46 4H2V44H46V4Z"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

const assetIcon = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 24H44" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M2 10H18" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path d="M2 38H32" stroke="#FDB515" strokeWidth="2" strokeMiterlimit="10" />
    <path
      d="M38 18L44 24L38 30"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M12 4L18 10L12 16"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M26 32L32 38L26 44"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

const aclIcon = (
  <svg
    width="50"
    height="60"
    viewBox="0 0 50 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49 1H1V58.6H49V1Z"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M24.04 16.3601H39.4"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M9.64001 16.36L11.56 18.28L17.32 12.52"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M24.04 29.8H39.4"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M9.64001 29.8L11.56 31.72L17.32 25.96"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M24.04 43.24H39.4"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <path
      d="M12.52 46.1201C14.1106 46.1201 15.4 44.8307 15.4 43.2401C15.4 41.6495 14.1106 40.3601 12.52 40.3601C10.9294 40.3601 9.64001 41.6495 9.64001 43.2401C9.64001 44.8307 10.9294 46.1201 12.52 46.1201Z"
      stroke="#FDB515"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

export default () => (
  <div className={styles.container}>
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h1 className={styles.continuousHeadline}>
            Continuously improve your company's security
          </h1>
          <p className="L">
            Streamline your Security and Compliance without sacrificing security
            itself.
          </p>

          <div className={styles.toSeamless}>
            <img src={toSeamlessArrow} alt="arrow" />
          </div>
        </div>
      </Grid>
    </div>

    <div className={styles.bulletsWithImages}>
      <Grid>
        <div className={styles.vendorsIllustration}>
          <img src={vmIllustration} alt="Vendor management" />
        </div>

        <div className={`${styles.vendorsBullet} ${styles.bullet}`}>
          <div className={styles.bulletIcon}>{automationIcon}</div>
          <h5>Vendors Work For You</h5>
          <p>
            Comply enables you to automatically track your vendors' security
            posture and understand your 3rd party risk exposure.
          </p>
        </div>

        <div className={styles.assetIllustration}>
          <img src={assetIllustration} alt="Asset management" />
        </div>

        <div className={`${styles.assetBullet} ${styles.bullet}`}>
          <div className={styles.bulletIcon}>{assetIcon}</div>
          <h5>Streamline Asset Management</h5>
          <p>
            Conduct asset reviews, access control reviews, and more using
            Workflows that automatically notify asset owners and track evidence.
          </p>
        </div>

        <div className={styles.aclIllustration}>
          <img src={aclIllustration} alt="Access control reviews" />
        </div>

        <div className={`${styles.aclBullet} ${styles.bullet}`}>
          <div className={styles.bulletIcon}>{aclIcon}</div>
          <h5>Automate Access Control Reviews</h5>
          <p>
            Aptible Comply automatically checks your users' access levels
            against access levels set forth in your policies, notifying you of
            instances that are out of compliance and correcting any anomalies.
          </p>
        </div>

        <div className={`${styles.recordBullet} ${styles.bullet}`}>
          <div className={styles.bulletIcon}>{systemIcon}</div>
          <h5>System of Record</h5>
          <p>
            Aptible Comply is the single source of truth for what is supposed to
            happen and what did happen. You have a place to point auditors and
            can easily export documentaton to prove your security position and
            build trust with customers and regulators.
          </p>
        </div>
      </Grid>
    </div>
  </div>
);
