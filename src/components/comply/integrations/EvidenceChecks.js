import React from 'react';
import styles from './EvidenceChecks.module.css';

export default ({ evidenceChecks }) => (
  <div className={styles.evidenceChecks}>
    {evidenceChecks.map(evidenceCheck => {
      const {
        id,
        title,
        description,
      } = evidenceCheck;
      return (
        <div className={styles.evidenceCheck} key={id}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      );
    })}
  </div>
);
