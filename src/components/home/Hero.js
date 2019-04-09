import React from 'react';
import styles from './Hero.module.css';
import { Grid } from '../grid/Grid';
import Button from '../buttons/Button';
import ContentfulBlock from '../contentful/ContentfulBlock';
import HeroArrow from './HeroArrow';
import HeroCallout from './HeroCallout';

export default ({ heroBlock }) => (
  <Grid rows="2">
    <HeroArrow />

    <div className={styles.contentArea}>
      <ContentfulBlock block={heroBlock} />
    </div>

    <div className={styles.cta}>
      <Button to="/">Get Started</Button>
    </div>

    <div className={styles.callout}>
      <HeroCallout />
    </div>
  </Grid>
);
