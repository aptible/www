import React from 'react';
import styles from './Quote.module.css';
import { Grid } from '../grid/Grid';

export default ({ logo, quote, author, image }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.quote}>
        <img src={logo} alt="healthify" className={styles.logo} />
        <h2>
          <span className={styles.quoteStart}>&ldquo;</span>
          {quote}&rdquo;
        </h2>
        <div className={styles.author}>{author}</div>
      </div>
      {image &&
        <div className={styles.image}>
          <img src={image} alt="quote image" />
        </div>
      }
    </Grid>
  </div>
);
