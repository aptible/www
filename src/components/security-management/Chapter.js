import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Chapter.module.css';
import Subnav from './Subnav';
import ShareIcons from '../shared/ShareIcons';
import ContentfulBlock from '../contentful/ContentfulBlock';

export default ({ chapter, contentBlock, edges }) => (
  <div className={`${styles.container} ${chapter.id === 1 ? styles.firstPageSidebar : ''}`}>
    <Grid>
      <div className={styles.meta}>
        <ShareIcons />
        <h6 className="small">{chapter.title}</h6>
      </div>
      <div className={styles.sidebar}>
        <Subnav edges={edges} />
      </div>

      <div className={styles.content}>
        <ContentfulBlock block={contentBlock} />
      </div>
    </Grid>
  </div>
);
