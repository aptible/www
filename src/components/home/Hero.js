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
      <WistiaVideo videoId="8p6ej6qqrg" autoPlay="true" silentAutoPlay="true" />
      <div className={styles.videoCard}>
        <p>
          &ldquo;Aptible made it easier to communicate our investments
          in security with our customers, helping us build trust.&rdquo;
        </p>

        <div className={styles.cardAuthor}>
          Justin Kan, CEO
        </div>
      </div>
    </div>
  </Grid>
);
