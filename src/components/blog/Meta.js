import React from 'react';
import styles from './Meta.module.css';

const dateFormat = {
  day: 'numeric',
  year: 'numeric',
  month: 'long'
}

export default ({ post }) => (
  <div className={styles.meta}>
    <div className={styles.author}>
      <span>
        {post.author.name}
      </span>
    </div>
    &bull;
    <div className={styles.postedAt}>
      {new Date(post.createdAt).toLocaleDateString('en-US', dateFormat)}
    </div>
    <div className={styles.statusLabel}>Status</div>
    <div className={styles.status}>
      <div className={styles.statusColor} style={{ backgroundColor: post.statusColor }} />
      {post.status}
    </div>
  </div>
);
