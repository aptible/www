import React from 'react';
import { Link } from 'gatsby';
import styles from './ResourceCard.module.css';

export default ({ resource }) => {  
  const LinkContent = () => (
    <div className={styles.card}>
      <h5>{resource.title}</h5>

      <p>{resource.description}</p>

      <div className={styles.readMore}>
        <p>Read More</p>
      </div>

      <div className={styles.tags}>
        <span className={styles.tag}>{resource.type}</span>
      </div>
    </div>
  );
  
  const isDocumentationUrl = resource.url.includes("documentation");
  
  return isDocumentationUrl ? (
    <a href={resource.url} className={styles.container}>
      <LinkContent />
    </a>
  ) : (
    <Link to={resource.url} className={styles.container}>
      <LinkContent />
    </Link>
  );
};
