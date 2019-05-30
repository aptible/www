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

        <Link to="/security-management/getting-started/">
          <div className={styles.card}>
            <img src={chapterTwoIllustration} alt="Chapter 2" />
            <div className={styles.cardContent}>
              <div className={styles.arrow}><Arrow /></div>
              <h4><span>02</span>Getting Started</h4>
              <p>Defining scope, assessing risk, creating governance.</p>
            </div>
          </div>
        </Link>

        <Link to="/security-management/design/">
          <div className={styles.card}>
            <img src={chapterThreeIllustration} alt="Chapter 3" />
            <div className={styles.cardContent}>
              <div className={styles.arrow}><Arrow /></div>
              <h4><span>03</span>Designing The System</h4>
              <p>The four major areas of risk.</p>
            </div>
          </div>
        </Link>

        <Link to="/security-management/training-culture/">
          <div className={styles.card}>
            <img src={chapterFourIllustration} alt="Chapter 4" />
            <div className={styles.cardContent}>
              <div className={styles.arrow}><Arrow /></div>
              <h4><span>04</span>Security Training &amp; Culture</h4>
              <p>The future of software and security.</p>
            </div>
          </div>
        </Link>

        <Link to="/security-management/examples/">
          <div className={styles.card}>
            <img src={chapterFiveIllustration} alt="Chapter 5" />
            <div className={styles.cardContent}>
              <div className={styles.arrow}><Arrow /></div>
              <h4><span>05</span>Examples</h4>
              <p>Success stories from across the globe.</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  </Grid>
);
