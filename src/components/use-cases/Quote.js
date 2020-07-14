import React from 'react';
import cn from 'classnames';
import styles from './Quote.module.css';
import { Grid } from '../grid/Grid';

export default ({ logo, quote, author, image }) => (
  <div className={styles.container}>
    <Grid>
      <div className={cn(styles.quote, { [styles.withImage]: !!image })}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h3>
          <span className={styles.quoteStart}>&ldquo;</span>
          {quote}&rdquo;
        </h3>
        <div className={styles.author}>{author}</div>
      </div>
      {image &&
        <div className={styles.image}>
          <img src={image} alt="Quote" />
        </div>
      }
    </Grid>
  </div>
);
