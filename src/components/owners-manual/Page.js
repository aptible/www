import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Page.module.css';
import Subnav from './Subnav';
import ShareIcons from '../shared/ShareIcons';
import ContentfulRichText from '../contentful/ContentfulRichText';

export default ({ currentPage, allPages }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.hero}>
        <h1>{currentPage.title}</h1>
      </div>

      <div className={styles.meta}>
        <ShareIcons />
      </div>

      <div className={styles.sidebar}>
        <Subnav allPages={allPages} />
      </div>

      <div className={styles.content}>
        <ContentfulRichText json={currentPage.body.json} />
      </div>
    </Grid>
  </div>
);
