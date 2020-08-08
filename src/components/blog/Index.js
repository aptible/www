import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Index.module.css';
import ContentfulRichText from '../contentful/ContentfulRichText';
import Meta from './Meta';

function PostSummary({ post }) {
  if (!post.body.json.content || post.body.json.content.length < 1) {
    return '';
  }

  const icons = {
    docs: "https://images.ctfassets.net/mffhrfxecw9o/4FpoUE6Updss5MMhoiw76M/260e7ad33efa27d6041aaf98b05e42bf/pw-icon-doc.svg",
    figma: "https://images.ctfassets.net/mffhrfxecw9o/3ueZbTZaiiZvAWuNMPPjoj/da686534d62c6269734d641688857cd9/pw-icon-figma.svg",
    gong: "https://images.ctfassets.net/mffhrfxecw9o/5tIr14Afr51RMBn19ffV27/4a9b69272da2f6170ce6d9e222bccbd8/pw-icon-gong.svg",
    link: "https://images.ctfassets.net/mffhrfxecw9o/mOZNSNxzjwT9bOwu7hw0a/c5e7f93b16daf1b5e60b5f50a33786d7/pw-icon-link.svg",
    loom: "https://images.ctfassets.net/mffhrfxecw9o/7pM4uFEbEBQZD6srFR1zJs/59c3ca1eba10323fd89d1d68c297ac58/pw-icon-loom.svg",
    sheet: "https://images.ctfassets.net/mffhrfxecw9o/1ZAJ1sIb2hUNIayzHesLAJ/9f7998641d1d3887d16babf2774add86/pw-icon-sheet.svg",
    storybook: "https://images.ctfassets.net/mffhrfxecw9o/56sJLAGhg9GVUQyK8Wftxk/2774d7c33931fdf1fc705cf9d21f7d8c/pw-icon-storybook.svg",
  };

  // const firstContentNode = post.body.json.content[0];
  return (
    <div className={styles.postSummary}>
      <div className={styles.authorPhoto}>
        <img src={post.author.photo.file.url} alt={post.author.name} />
      </div>

      <h3>{post.title}</h3>
      <div className={styles.metaContainer}>
        <Meta post={post} disableAuthorLink="true" />
      </div>
      {/* <p><ContentfulRichText json={firstContentNode} /></p> */}
      <ContentfulRichText json={post.body.json} />
      <div className={styles.materials}>
        <div className={styles.materialsTitle}>Materials</div>
        {post.materials.map((material) => (
          <a href={material.url} className={styles.material}>
            <img className={styles.materialIcon} src={icons[material.icon] || icons.link} />
            {/* <div className={styles.materialIcon}>{material.icon}</div> */}
            <div>
              <div className={styles.materialTitle}>{material.title}</div>
              <div>{material.subtitle}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ({ posts }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.header}>
        <h1 className="hero">Product Weekly</h1>
      </div>

      <div className={styles.posts}>
        {posts.map((edge, idx) => (
          <PostSummary key={idx} post={edge.node} />
        ))}
      </div>
    </Grid>
  </div>
);
