import React from 'react';
import { Link } from 'gatsby';
import categories from '../../data/resource-categories.json';
import { Grid } from '../grid/Grid';
import styles from './ResourceCards.module.css';
import ResourceCard from './ResourceCard';

const ResourceCards = ({ resources, categorySlug }) => {
  const halfwayThrough = Math.floor(resources.length / 2)
  const leftResources = resources.slice(0, halfwayThrough);
  const rightResources = resources.slice(halfwayThrough, resources.length);

  return (
    <div className={styles.container}>
      <Grid>
        <div className={styles.left}>
          <div className={styles.navigation}>
            <h6 className="small">Library</h6>

            <Link
              className={categorySlug === '' ? styles.active : ""}
              to="/resources/"
            >
              All
            </Link>

            {categories.map((category) => {
              return (
                <Link
                  className={categorySlug === category.slug ? styles.active : ""}
                  to={`/resources/${category.slug}/`}
                  key={category.slug}
                >
                  {category.title}{category.title !== 'Deploy' ? 's' : ''}
                </Link>
              );
            })}
          </div>

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
