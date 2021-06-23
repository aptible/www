import React from 'react';
import { Link } from 'gatsby';
import styles from './Meta.module.css';

const dateFormat = {
  day: 'numeric',
  year: 'numeric',
  month: 'long',
};

export default ({ post, disableAuthorLink }) => {
  const author = post.author ? post.author.name : '';
  const secondAuthor = post.secondAuthor ? post.secondAuthor.name : '';
  return (
    <div className={styles.meta}>
      <div className={styles.author}>
        {!disableAuthorLink && <Link to="/">{author}</Link>}

        {disableAuthorLink && (
          <span>
            {author}
            {secondAuthor ? (
              <React.Fragment> &amp; {secondAuthor}</React.Fragment>
            ) : null}
          </span>
        )}
      </div>
      &bull;
      <div className={styles.postedAt}>
        {new Date(post.postedAt).toLocaleDateString('en-US', dateFormat)}
      </div>
    </div>
  );
};
