import React from 'react';
import cn from 'classnames';
import auditsIllustration from '../../images/home/illustrations/audits-landing.png';
import complianceManagementIllustration from '../../images/home/illustrations/compliance-management-landing.png';
import sourceOfTruthIllustration from '../../images/home/illustrations/source-of-truth-landing.png';
import vendorsIllustration from '../../images/home/illustrations/vendors-landing.png';
import trustIllustration from '../../images/home/illustrations/trust-landing.png';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';
import styles from './Hero.module.css';

const illustrations = {
  auditsIllustration: {
    position: '-100px -180px',
    src: auditsIllustration,
    w: 638,
    h: 522,
    // t: 434,
    t: 260,
    // r: 280,
    r: 0,
    className: 'audits',
  },
  complianceManagementIllustration: {
    position: '-100px -180px',
    src: complianceManagementIllustration,
    w: 1167.5,
    h: 656.5,
    // t: 264,
    t: 140,
    // r: 0,
    r: -220,
    className: 'compliance',
  },
  sourceOfTruthIllustration: {
    position: '-100px -180px',
    src: sourceOfTruthIllustration,
    w: 1470,
    h: 1470,
    // t: -130,
    t: -240,
    // r: -200,
    r: -300,
    className: 'source',
  },
  vendorsIllustration: {
    position: '-100px -180px',
    src: vendorsIllustration,
    w: 587,
    h: 426,
    // t: 434,
    t: 260,
    // r: 280,
    r: 0,
    className: 'vendors',
  },
  trustIllustration: {
    position: '-100px -180px',
    src: trustIllustration,
    w: 1453.5,
    h: 1134.5,
    // t: 460,
    t: 260,
    // l: 170,
    r: 0,
    className: 'trust',
  },
};

const Hero = ({ title, body, illustrationKey }) => (
  <div
    className={styles.container}
    style={{
      // backgroundImage: `url(${illustrations[illustrationKey].src})`,

      // backgroundSize: `${illustrations[illustrationKey].w}px ${illustrations[illustrationKey].h}px`,
      // backgroundSize: `${illustrations[illustrationKey].w}px auto`,
    }}
  >
    <div
      className={styles.background}
      style={{
        // backgroundImage: `url(${illustrations[illustrationKey].src})`,
        // backgroundPosition: illustrations[illustrationKey].position,
        // paddingTop: `${illustrations[illustrationKey].t}px`,
      }}
    >
      <img
        src={illustrations[illustrationKey].src}
        className={cn(
          styles.image,
          styles[illustrations[illustrationKey].className],
        )}
        style={{
          // width: `${illustrations[illustrationKey].w / 1440 * 100 < 100 ? illustrations[illustrationKey].w / 1440 * 100 : 100}%`,
          // // width: `${illustrations[illustrationKey].w}px`,
          // top: `${illustrations[illustrationKey].t}px`,
          // right: `${illustrations[illustrationKey].r}px`,
        }}
      />
    </div>
    {/* <div
      className={styles.background}
      style={{
        backgroundImage: `url(${illustrations[illustrationKey].src})`,
        backgroundPosition: illustrations[illustrationKey].position,
      }}
    /> */}
    {/* <div
      className={styles.background}
      style={{
        width: `${illustrations[illustrationKey].w}px`,
        height: `${illustrations[illustrationKey].h}px`,
        top: `${illustrations[illustrationKey].t}px`,
        right: `${illustrations[illustrationKey].r}px` || null,
        left: `${illustrations[illustrationKey].l}px` || null,
        // backgroundImage: `url(${illustrations[illustrationKey].src})`,
        // backgroundPosition: `${illustrations[illustrationKey].w}px ${illustrations[illustrationKey].h}px`,
      }}
    >
      <img src={illustrations[illustrationKey].src} alt="" />
    </div> */}

    <Grid>
      <div className={styles.text}>
        <h5>Use Case</h5>
        <h1>{title}</h1>
        {Array.isArray(body)
          ? body.map((p) => <p className="XL">{p}</p>)
          : <p className="XL">{body}</p>
        }

        <div className={styles.button}>
          <SignupButton text="Get a demo" />
        </div>
      </div>
    </Grid>
  </div>
);

export default Hero;
