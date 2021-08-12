import React from 'react';
import styles from './Feature.module.css';
import cn from 'classnames';
import StepByStep from '../../../components/deploy/StepByStep';

export default ({ title, description, smallImage, heroImage, steps }) => (
  <div className={styles.feature}>
    <div className={styles.featureTitle}>
      <div className={styles.featureSmallImage}>{smallImage}</div>

      <div className={styles.featureTitleText}>
        <h2>{title}</h2>
        {(typeof description ==="string") && (
          <p className="XL">{description}</p>
        )}

        {(typeof description !== "string") && description}
        
        {heroImage && (
          <div className={styles.featureHeroImage}>{heroImage}</div>
        )}
      </div>
    </div>

    <div className={styles.featureList}>
      <StepByStep steps={steps} />
    </div>
  </div>
);
