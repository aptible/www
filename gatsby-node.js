const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');


const COMPLIANCE_SITES = ['hipaa', 'gdpr'];
let protocolData = {};
for (let protocol of COMPLIANCE_SITES) {
  protocolData[protocol] = yaml.safeLoad(fs.readFileSync(`./src/data/${protocol}.yml`, 'utf8'));
}


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);

    // Compliance site urls + tag
    for (let protocol of COMPLIANCE_SITES) {
      if (fileNode.relativePath.startsWith(`${protocolData[protocol].slugs.site}/`)) {
        createNodeField({ node, name: 'slug', value: fileNode.name });
        createNodeField({ node, name: 'url', value: `/${protocolData[protocol].slugs.site}/${protocolData[protocol].slugs.regulations}/${fileNode.name}/` });
        createNodeField({ node, name: 'tag', value: `${protocol}-regulation` });
      }
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

        allMarkdownWithSlug: allMarkdownRemark(
          filter: { frontmatter: { slug: { ne: null } } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                template
              }
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

        allGdprRegulations: allMarkdownRemark(
          filter: { fields: { tag: { eq: "gdpr-regulation" } } }
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

      result.data.allMarkdownWithSlug.edges.forEach(({ node }) => {
        if (node.frontmatter.slug && node.frontmatter.template) {
          createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
            context: {
              slug: node.frontmatter.slug
            },
          });
        } else {
          console.error('Markdown files must have `slug` and `template` in their frontmatter.')
        }
      });

      // Generate compliance site regulation pages
      for (let protocol of COMPLIANCE_SITES) {
        const protocolTitle = protocol.charAt(0).toUpperCase() + protocol.substr(1);
        result.data[`all${protocolTitle}Regulations`].edges.forEach(({ node }) => {
          createPage({
            path: node.fields.url,
            component: path.resolve(`./src/templates/compliance/${protocol}-regulation.js`),
            context: {
              slug: node.fields.slug,
              url: node.fields.url
            },
          });
        });
      }

      resolve();
    });
  });
};
