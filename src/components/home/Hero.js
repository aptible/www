import React from 'react';
import styles from './Hero.module.css';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';
import ContentfulBlock from '../contentful/ContentfulBlock';
import HeroArrow from './HeroArrow';
import HeroCallout from './HeroCallout';
import WistiaVideo from '../shared/WistiaVideo';

export default ({ heroBlock }) => (
  <Grid>
    <div className={styles.contentArea}>
      <HeroArrow />
      <ContentfulBlock block={heroBlock} />
    </div>

    <div className={styles.cta}>
      <SignupButton text="Get Started" />
    </div>

    <div className={styles.callout}>
      <HeroCallout />
    </div>

    <div className={styles.videoContainer}>
      <WistiaVideo videoId="kf1hbw3as5" autoPlay="true" silentAutoPlay="true" />
      <div className={styles.videoCard}>
        <p>
          &ldquo;What I really wanted at QuadPay, where security is of
          tantamount importance, was to have something that was comprehensive,
          followed best practices, and could actually be implemented across an
          organization at scale.&rdquo;
        </p>

        <div className={styles.cardAuthor}>
          Ian Yamey, CTO
        </div>
      </div>
    </div>
  </Grid>
);
