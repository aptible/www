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

      {resource.tags &&
        <div className={styles.tags}>
          {resource.tags.map((tag, idx) => {
            return <span key={idx} className={styles.tag}>{tag}</span>
          })}
        </div>
      }
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
