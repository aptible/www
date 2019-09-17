import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './ChapterCards.module.css';
import Arrow from '../shared/Arrow';
import chapterTwoIllustration from '../../images/security-management/sm2.jpg';
import chapterThreeIllustration from '../../images/security-management/sm3.jpg';
import chapterFourIllustration from '../../images/security-management/sm4.jpg';
import chapterFiveIllustration from '../../images/security-management/sm5.jpg';

export default ({ chapter, contentBlock }) => (
  <Grid>
    <div className={styles.container}>
      <div className={styles.grid}>

        <Link to="/security-management/what-it-is/">
          <div className={styles.card}>
            <img src={chapterTwoIllustration} alt="Chapter 2" />
            <div className={styles.cardContent}>
              <div className={styles.arrow}><Arrow /></div>
              <h4><span>02</span>What is Security Management?</h4>
              <p>Security by design.</p>
            </div>
          </div>
        </Link>

        <Link to="/security-management/fundamentals/">
          <div className={styles.card}>
            <img src={chapterThreeIllustration} alt="Chapter 3" />
            <div className={styles.cardContent}>
              <div className={styles.arrow}><Arrow /></div>
              <h4><span>03</span>Fundamentals</h4>
              <p>Defining scope, building governance, thinking about risk.</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  </Grid>
);
