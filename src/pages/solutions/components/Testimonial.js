import React from 'react';
import styles from './Testimonial.module.css';

export default ({ quote, author, title, company, url, logo, image }) => (
  <div className={styles.card}>
    <div className={styles.quoteArea}>
      <div className={styles.quoteAreaContents}>
        <img className={styles.logo} alt={`${company} logo`} src={logo} />
        <h5>&quot;{quote}&quot;</h5>
        <p className={styles.byline}>
          {author}, {title} - <a href={url}>{company}</a>
        </p>
      </div>
    </div>
    <div className={styles.mediaArea}>
      <img src={image} alt={title} />
    </div>
  </div>
);
