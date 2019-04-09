const path = require('path');


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);

    // HIPAA compliance site url + tag
    if (fileNode.relativePath.startsWith('hipaa/')) {
      createNodeField({ node, name: 'slug', value: fileNode.name });
      createNodeField({ node, name: 'url', value: `/hipaa/regulations/${fileNode.name}/` });
      createNodeField({ node, name: 'tag', value: 'hipaa-regulation' });
    }
  }
};


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allBlogPosts: allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }

        allHipaaRegulations: allMarkdownRemark(
          filter: { fields: { tag: { eq: "hipaa-regulation" } } }
        ) {
          edges {
            node {
              fields {
                slug
                url
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allBlogPosts.edges.forEach(({ node }) => {
        createPage({
          path: `blog/${node.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.slug
          },
        });
      });

      result.data.allHipaaRegulations.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.url,
          component: path.resolve(`./src/templates/compliance/hipaa-regulation.js`),
          context: {
            slug: node.fields.slug,
            url: node.fields.url
          },
        });
      });

      resolve();
    });
  });
};
