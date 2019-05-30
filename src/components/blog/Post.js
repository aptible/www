import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Post.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import ShareIcons from '../shared/ShareIcons';

const dateFormat = {
  day: 'numeric',
  year: 'numeric',
  month: 'long'
}

export default ({ post }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.authorPhoto}>
        <img src={post.author.professionalPhoto.file.url} alt={post.author.name} />
      </div>

      <div className={styles.content}>
        <h5>Blog</h5>
        <div className={styles.meta}>
          <div className={styles.author}>
            <Link to="/">{post.author.name}</Link> 
          </div>
          
          &bull; 
          <div className={styles.postedAt}>
            {new Date(post.postedAt).toLocaleDateString('en-US', dateFormat)}
          </div>
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
