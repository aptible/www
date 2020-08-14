import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Index.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import Meta from './Meta';
import Markdown from './Markdown';
import blogCategories from '../../data/blog-categories.json';

function PostSummary({ post }) {
  return (
    <Link className={styles.postSummary} to={`/blog/${post.slug}/`}>
      {post.author && (
        <div className={styles.authorPhoto}>
          <img src={post.author.professionalPhoto.file.url} alt={post.author.name} />
          {post.secondAuthor &&
            <img src={post.secondAuthor.professionalPhoto.file.url} alt={post.secondAuthor.name} />
          }
        </div>
      )}

      <h3>{post.title}</h3>
      <div className={styles.metaContainer}>
        <Meta post={post} disableAuthorLink="true" />
      </div>

      {post.body && (
        <p>
          <ContentfulRichText json={post.body.json.content[0]} />
        </p>
      )}

      {post.excerpt && (
        <div className={styles.excerpt}>
          <Markdown>{post.excerpt.excerpt}</Markdown>
        </div>
      )}

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

        <Link
          to="/changelog/">
          <h6 className="small">Changelog</h6>
        </Link>
      </div>

      <div className={styles.posts}>
        {posts.map((edge, idx) => (
          <PostSummary key={idx} post={edge.node} />
        ))}
      </div>
    </Grid>
  </div>
);
