import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './ChapterHero.module.css';
import chapterThreeIllustration from '../../images/security-management/sm3.jpg';

export default ({ chapter }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.illustration}>
        <img src={chapterThreeIllustration} alt={chapter.pageTitle} />
      </div>
      <div className={styles.headline}>
        <h3>Chapter 0{chapter.contentfulid.replace('security-management-chapter-', '')}</h3>
        <h1>{chapter.pageTitle}</h1>
      </div>
    </Grid>
  </div>
);
