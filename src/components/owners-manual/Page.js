import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Page.module.css';
import Subnav from './Subnav';
import ShareIcons from '../shared/ShareIcons';
import ContentfulRichText from '../contentful/ContentfulRichText';
import ArrowButton from '../buttons/ArrowButton';

export default ({ currentPage, allPages }) => {
  const currentIndex = allPages
    .map(page => page.node.title)
    .indexOf(currentPage.title);
  const nextIndex = currentIndex + 1;
  const nextPage = allPages.length !== nextIndex ? allPages[nextIndex] : null;

  return (
    <div className={styles.container}>
      <Grid>
        <div className={styles.hero}>
          <h1>{currentPage.displayTitle || currentPage.title}</h1>
        </div>

        <div className={styles.meta}>
          <ShareIcons />
        </div>

        <div className={styles.sidebar}>
          <Subnav allPages={allPages} />
        </div>

        <div className={styles.content}>
          <ContentfulRichText json={currentPage.body.json} />

          {nextPage && (
            <div className={styles.nextSection}>
              <ArrowButton
                to={`/owners-manual/${nextPage.node.slug}`}
                title={`Go to ${nextPage.node.title}`}
                text="Go to Next Section"
              />
            </div>
          )}
        </div>
      </Grid>
    </div>
  );
};
