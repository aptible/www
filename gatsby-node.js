const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

const BLOG_CATEGORIES = require('./src/data/blog-categories.json');
const BLOG_POSTS_PER_PAGE = 5;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);

    // Compliance site urls + tag
    for (let protocol of COMPLIANCE_SITES) {
      if (fileNode.relativePath && fileNode.relativePath.startsWith(`${protocolData[protocol].slugs.site}/`)) {
        createNodeField({ node, name: 'slug', value: fileNode.name });
        createNodeField({ node, name: 'url', value: `/${protocolData[protocol].slugs.site}/${protocolData[protocol].slugs.regulations}/${fileNode.name}/` });
        createNodeField({ node, name: 'tag', value: `${protocol}-regulation` });
      }
    }
  }
};

// allBlogPosts: allContentfulBlogPost(filter: { type: { eq: "blog" } }) {
//   edges {
//     node {
//       slug
//       category
//     }
//   }
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProductUpdatePages: allContentfulProductUpdatePage(
          sort: { fields: [createdAt], order: ASC }
        ) {
          edges {
            node {
              title
              date
              createdAt
              author {
                name
                photo {
                  file {
                    url
                  }
                }
              }
              status
              statusColor
              body {
                json
              }
              materials {
                title
                subtitle
                icon
                url
              } 
            }
          }
        }
      }
    `).then(result => {
      // Create pages for each blog post
      // result.data.allBlogPosts.edges.forEach(({ node }) => {
      //   createPage({
      //     path: `blog/${node.slug}`,
      //     component: path.resolve(`./src/templates/blog-post.js`),
      //     context: {
      //       slug: node.slug
      //     },
      //   });
      // });

      // Create blog index pages
      // const blogPosts = result.data.allBlogPosts.edges;
      // const numPages = Math.ceil(blogPosts.length / BLOG_POSTS_PER_PAGE);
      // Array.from({ length: numPages }).forEach((_, i) => {
      //   createPage({
      //     path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      //     component: path.resolve(`./src/templates/blog-list.js`),
      //     context: {
      //       limit: BLOG_POSTS_PER_PAGE,
      //       skip: i * BLOG_POSTS_PER_PAGE,
      //       numPages,
      //       currentPage: i + 1,
      //     },
      //   });
      // });

      // Create blog category index pages
      // for (let category of BLOG_CATEGORIES) {
      //   const categoryPosts = blogPosts.filter((post) => {
      //     return post.node.category.indexOf(category.title) !== -1;
      //   });

      //   const numCategoryPages = Math.ceil(categoryPosts.length / BLOG_POSTS_PER_PAGE);
      //   const categoryBase = `/blog/category/${category.slug}`;

      //   Array.from({ length: numCategoryPages }).forEach((_, i) => {
      //     createPage({
      //       path: i === 0 ? categoryBase : `${categoryBase}/page/${i + 1}`,
      //       component: path.resolve(`./src/templates/blog-list-category.js`),
      //       context: {
      //         limit: BLOG_POSTS_PER_PAGE,
      //         skip: i * BLOG_POSTS_PER_PAGE,
      //         numPages: numCategoryPages,
      //         currentPage: i + 1,
      //         categoryTitle: category.title,
      //         categorySlug: category.slug,
      //       },
      //     });
      //   });
      // }

      // result.data.allProductUpdatePages.edges.forEach(({ node }) => {
      //   let pagePath = 'owners-manual';
      //   if (node.slug) {
      //     pagePath += `/${node.slug}`;
      //   }

      //   createPage({
      //     path: pagePath,
      //     component: path.resolve(`./src/templates/owners-manual.js`),
      //     context: {
      //       activePath: node.slug,
      //       allPages: result.data.allProductUpdatePages.edges
      //     },
      //   });
      // });

      resolve();
    });
  });
};
