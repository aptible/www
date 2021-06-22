import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Index.module.css';
import Meta from './Meta';
import Markdown from './Markdown';
import blogCategories from '../../data/blog-categories.json';

function ChangelogSummary({ post }) {
  return (
    <Link className={styles.postSummary} to={`/changelog/${post.slug}/`}>
      <div className={styles.authorPhoto}>
        <img
          src={post.author.professionalPhoto.file.url}
          alt={post.author.name}
        />
      </div>

      <h3>{post.title}</h3>
      <div className={styles.metaContainer}>
        <Meta post={post} disableAuthorLink="true" />
      </div>

      {post.excerpt && (
        <div className={styles.excerpt}>
          <Markdown>{post.excerpt.excerpt}</Markdown>
        </div>
      )}

      <div className={styles.tags}>
        <span className={styles.tag}>{post.product}</span>
      </div>

      <p className={styles.readMore}>Read More</p>
    </Link>
  );
}

export default ({ posts }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.header}>
        <h1 className="hero">Changelog</h1>
      </div>

      <div className={styles.categories}>
        <Link to="/blog/">
          <h6 className="small">All</h6>
        </Link>

        {blogCategories.map((category, idx) => (
          <Link key={idx} to={`/blog/category/${category.slug}/`}>
            <h6 className="small">{category.title}</h6>
          </Link>
        ))}

        <Link className={styles.activeCategory} to="/changelog/">
          <h6 className="small">Changelog</h6>
        </Link>
      </div>

      <div className={styles.posts}>
        {posts.map((edge, idx) => (
          <ChangelogSummary key={idx} post={edge.node} />
        ))}
      </div>
    </Grid>
  </div>
);
