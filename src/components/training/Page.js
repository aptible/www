import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Page.module.css';
import Subnav from './Subnav';
import ShareIcons from '../shared/ShareIcons';
import ArrowButton from '../buttons/ArrowButton';

export default ({ pageContext }) => {
  const currentIndex = pageContext.modules
    .map(module => module.key)
    .indexOf(pageContext.slug);
  const nextIndex = currentIndex + 1;
  const nextPage = pageContext.modules.length !== nextIndex ? pageContext.modules[nextIndex] : null;

  return (
    <div className={styles.container}>
      <Grid>
        <div className={styles.meta}>
          <ShareIcons />
        </div>

        <div className={styles.sidebar}>
          <Subnav modules={pageContext.modules} course={pageContext.course} />
        </div>

        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />

          {nextPage && (
            <div className={styles.nextSection}>
              <ArrowButton
                to={`/training/${pageContext.course}/${nextPage.key}/`}
                title={`Go to ${nextPage.name}`}
                text={nextPage.name}
              />
            </div>
          )}
        </div>
      </Grid>
    </div>
  );
};
