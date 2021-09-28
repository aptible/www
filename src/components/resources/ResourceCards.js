import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './ResourceCards.module.css';
import ResourceCard from './ResourceCard';

const ResourceCards = ({ resources, categorySlug }) => {
  const halfwayThrough = Math.floor(resources.length / 2);
  const leftResources = resources.slice(0, halfwayThrough);
  const rightResources = resources.slice(halfwayThrough, resources.length);

  return (
    <div className={styles.container}>
      <Grid>
        <div className={styles.left}>
          {leftResources.map(resource => (
            <ResourceCard key={resource.url} resource={resource} />
          ))}
        </div>

        <div className={styles.right}>
          {rightResources.map(resource => (
            <ResourceCard key={resource.url} resource={resource} />
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default ResourceCards;
