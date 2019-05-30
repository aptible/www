import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './ChapterHero.module.css';
import chapterTwoIllustration from '../../images/security-management/sm2.jpg';
import chapterThreeIllustration from '../../images/security-management/sm3.jpg';
import chapterFourIllustration from '../../images/security-management/sm4.jpg';
import chapterFiveIllustration from '../../images/security-management/sm5.jpg';

const illustrations = {
  2: chapterTwoIllustration,
  3: chapterThreeIllustration,
  4: chapterFourIllustration,
  5: chapterFiveIllustration,
};

export default ({ chapter }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.illustration}>
        <img src={illustrations[chapter.id]} alt={chapter.title} />
      </div>
      <div className={styles.headline}>
        <h3>Chapter 0{chapter.id}</h3>
        <h1>{chapter.title}</h1>
      </div>
    </Grid>
  </div>
);
