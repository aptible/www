import React from 'react';
import { Link } from 'gatsby';
import styles from './ResourceCard.module.css';

export default ({ resource }) => (
  <Link to={resource.url} className={styles.container}>
    <div className={styles.card}>
      <h5>{resource.title}</h5>

      {resource.copy.map(copy => (
        <p key={copy}>{copy}</p>
      ))}

      <div className={styles.readMore}>
        <p>Read More</p>
      </div>

      <div className={styles.tags}>
        <span className={styles.tag}>{resource.type}</span>
      </div>
    </div>
  </Link>
);
