import React from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { Grid } from '../grid/Grid';
import styles from './Post.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import ShareIcons from '../shared/ShareIcons';
import Meta from './Meta';
import CodeBlock from "./CodeBlock";

export default ({ post }) => (
  <>
    <div className={styles.container}>
      <Grid>
        <div className={styles.authorPhoto}>
          {post.author && 
            <img src={post.author.professionalPhoto.file.url} alt={post.author.name} />
          }
          {post.secondAuthor &&
            <img src={post.secondAuthor.professionalPhoto.file.url} alt={post.secondAuthor.name} />
          }
        </div>

        <div className={styles.content}>
          <h5><Link to="/blog/">Blog</Link></h5>

          <div className={styles.metaContainer}>
            <Meta post={post} disableAuthorLink="true" />
          </div>
          
          <h1>{post.title}</h1>

          <div className={styles.share}>
            <ShareIcons />
          </div>

          {post.body && (
            <div className={styles.body}>
              <ContentfulRichText json={post.body.json} />
            </div>
          )}

          {post.bodyMarkdown && (
            <div className={styles.body}>
              <ReactMarkdown
                source={post.bodyMarkdown.bodyMarkdown}
                renderers={{ code: CodeBlock }}
              />
            </div>
          )}
        </div>
      </Grid>
    </div>
  </>
);
