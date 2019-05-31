import React from 'react';
import { Link } from 'gatsby';
import styles from './Meta.module.css';

const dateFormat = {
  day: 'numeric',
  year: 'numeric',
  month: 'long'
}

export default ({ post, disableAuthorLink }) => (
  <div className={styles.meta}>
    <div className={styles.author}>
      {!disableAuthorLink &&
        <Link to="/">{post.author.name}</Link>
      }

      {disableAuthorLink &&
        <span>{post.author.name}</span>
      }
    </div>

    &bull;
    <div className={styles.postedAt}>
      {new Date(post.postedAt).toLocaleDateString('en-US', dateFormat)}
    </div>
  </div>
);
