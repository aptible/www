import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Post.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import ShareIcons from '../shared/ShareIcons';
import Meta from './Meta';

export default ({ post }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.authorPhoto}>
        <img src={post.author.professionalPhoto.file.url} alt={post.author.name} />
      </div>

      <div className={styles.content}>
        <h5>Blog</h5>

        <div className={styles.metaContainer}>
          <Meta post={post} />
        </div>
        
        <h1>{post.title}</h1>

        <div className={styles.share}>
          <ShareIcons />
        </div>

        <div className={styles.body}>
          <ContentfulRichText json={post.body.json} />
        </div>
      </div>
    </Grid>
  </div>
);
