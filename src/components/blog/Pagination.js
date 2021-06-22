import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Pagination.module.css';

function urlForPage(pageNum, categorySlug) {
  const categoryBase = categorySlug
    ? `/blog/category/${categorySlug}/`
    : `/blog/`;

  if (pageNum < 2) {
    return categoryBase;
  } else {
    return `${categoryBase}page/${pageNum}/`;
  }
}

export default ({ numPages, currentPage, categorySlug }) => (
  <Grid>
    <div className={styles.container}>
      {Array.from({ length: numPages }).map((_, i) => (
        <Link
          key={i}
          to={urlForPage(i + 1, categorySlug)}
          className={`${styles.pageLink} ${
            currentPage === i + 1 ? styles.current : ''
          }`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  </Grid>
);
