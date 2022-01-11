import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Page.module.css';
import Subnav from './Subnav';
import ShareIcons from '../shared/ShareIcons';
import ArrowButton from '../buttons/ArrowButton';

export default ({ pageContext, pages }) => {
  return (
    <div className={styles.container}>
      <Grid>
        <div className={styles.meta}>
          <ShareIcons />
        </div>

        <div className={styles.sidebar}>
          <Subnav pages={pages} currentPath={pageContext.url} />
        </div>

        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
        </div>
      </Grid>
    </div>
  );
};
