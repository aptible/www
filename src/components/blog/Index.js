import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Index.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import Meta from './Meta';
import blogCategories from '../../data/blog-categories.json';

function PostSummary({ post }) {
  if (!post.body.json.content || post.body.json.content.length < 1) {
    return '';
  }

  const firstContentNode = post.body.json.content[0];
  return (
    <Link className={styles.postSummary} to={`/blog/${post.slug}/`}>
      <div className={styles.authorPhoto}>
        <img src={post.author.professionalPhoto.file.url} alt={post.author.name} />
      </div>

      <h3>{post.title}</h3>
      <div className={styles.metaContainer}>
        <Meta post={post} disableAuthorLink="true" />
      </div>
      <p><ContentfulRichText json={firstContentNode} /></p>

      <div className={styles.tags}>
        {post.category.map((category, idx) => (
          <span className={styles.tag} key={idx}>{category}</span>
        ))}
      </div>

      <p className={styles.readMore}>Read More</p>
    </Link>
  )
}

export default ({ posts, categorySlug, categoryTitle }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.header}>
        {!categorySlug &&
          <h1 className="hero">Blog</h1>
        }

        {categorySlug &&
          <React.Fragment>
            <h5>Blog</h5>
            <h1 className="hero">{categoryTitle}</h1>
          </React.Fragment>
        }
      </div>

      <div className={styles.categories}> 
        <Link
          className={categorySlug ? '' : styles.activeCategory}
          to="/blog/">
            <h6 className="small">All</h6>
        </Link>

        {blogCategories.map((category, idx) => (
          <Link
            key={idx}
            className={category.slug === categorySlug ? styles.activeCategory : ''}
            to={`/blog/category/${category.slug}/`}>
            <h6 className="small">{category.title}</h6>
          </Link>
        ))}
      </div>

      <div className={styles.posts}>
        {posts.map((edge, idx) => (
          <PostSummary key={idx} post={edge.node} />
        ))}
      </div>
    </Grid>
  </div>
);
