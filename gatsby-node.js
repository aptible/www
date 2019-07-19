const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

const BLOG_CATEGORIES = require('./src/data/blog-categories.json');
const BLOG_POSTS_PER_PAGE = 5;

const COMPLIANCE_SITES = ['hipaa', 'gdpr'];
let protocolData = {};
for (let protocol of COMPLIANCE_SITES) {
  protocolData[protocol] = yaml.safeLoad(fs.readFileSync(`./src/data/${protocol}.yml`, 'utf8'));
}

const CASE_STUDIES = require('./src/data/case-studies.json');

const PAID_LANDING_PAGES = require('./src/data/paid-landing-pages.json');


const SM_GUIDE_CHAPTERS = [
  { id: 1, path: 'security-management', title: 'Introduction'},
  { id: 2, path: 'security-management/getting-started', title: 'Getting Started'},
  { id: 3, path: 'security-management/design', title: 'Designing Your Security Management System'},
  { id: 4, path: 'security-management/training-culture', title: 'Security Training and Culture'},
  { id: 5, path: 'security-management/examples', title: 'Examples'},
];


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


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allBlogPosts: allContentfulBlogPost(filter: { type: { eq: "blog" } }) {
          edges {
            node {
              slug
              category
            }
          }
        }

        allChangelogPosts: allContentfulBlogPost(filter: { type: { eq: "changelog" } }) {
          edges {
            node {
              slug
            }
          }
        }

        allResources: allContentfulResource {
          edges {
            node {
              slug
              subfolder
            }
          }
        }

        allWebinars: allContentfulWebinar {
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
      // Create pages for each blog post
      result.data.allBlogPosts.edges.forEach(({ node }) => {
        createPage({
          path: `blog/${node.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.slug
          },
        });
      });

      // Create blog index pages
      const blogPosts = result.data.allBlogPosts.edges;
      const numPages = Math.ceil(blogPosts.length / BLOG_POSTS_PER_PAGE);
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
          component: path.resolve(`./src/templates/blog-list.js`),
          context: {
            limit: BLOG_POSTS_PER_PAGE,
            skip: i * BLOG_POSTS_PER_PAGE,
            numPages,
            currentPage: i + 1,
          },
        });
      });

      // Create blog category index pages
      for (let category of BLOG_CATEGORIES) {
        const categoryPosts = blogPosts.filter((post) => {
          return post.node.category.indexOf(category.title) !== -1;
        });

        const numCategoryPages = Math.ceil(categoryPosts.length / BLOG_POSTS_PER_PAGE);
        const categoryBase = `/blog/category/${category.slug}`;

        Array.from({ length: numCategoryPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? categoryBase : `${categoryBase}/page/${i + 1}`,
            component: path.resolve(`./src/templates/blog-list-category.js`),
            context: {
              limit: BLOG_POSTS_PER_PAGE,
              skip: i * BLOG_POSTS_PER_PAGE,
              numPages: numCategoryPages,
              currentPage: i + 1,
              categoryTitle: category.title,
              categorySlug: category.slug,
            },
          });
        });
      }

      // Create pages for each changelog post
      result.data.allChangelogPosts.edges.forEach(({ node }) => {
        createPage({
          path: `changelog/${node.slug}`,
          component: path.resolve(`./src/templates/changelog-post.js`),
          context: {
            slug: node.slug
          },
        });
      });

      // Old resource pages
      result.data.allResources.edges.forEach(({ node }) => {
        createPage({
          path: `${node.subfolder}/${node.slug}`,
          component: path.resolve(`./src/templates/resource.js`),
          context: {
            slug: node.slug
          },
        });
      });

      // Webinar pages
      result.data.allWebinars.edges.forEach(({ node }) => {
        createPage({
          path: `webinars/${node.slug}`,
          component: path.resolve(`./src/templates/webinar.js`),
          context: {
            slug: node.slug
          },
        });
      });

      // Markdown pages
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

      for (let chapter of SM_GUIDE_CHAPTERS) {
        createPage({
          path: chapter.path,
          component: path.resolve(`./src/templates/security-management.js`),
          context: {
            chapter: chapter
          },
        });
      }

      for (let caseStudy of CASE_STUDIES) {
        createPage({
          path: `customers/${caseStudy.customer}`,
          component: path.resolve(`./src/templates/case-study.js`),
          context: {
            caseStudy: caseStudy
          },
        });
      }

      for (let landingPageSlug in PAID_LANDING_PAGES) {
        createPage({
          path: `get/${landingPageSlug}`,
          component: path.resolve(`./src/templates/paid-landing-page.js`),
          context: {
            headline: PAID_LANDING_PAGES[landingPageSlug].headline,
            paragraph: PAID_LANDING_PAGES[landingPageSlug].paragraph
          },
        });
      }

      resolve();
    });
  });
};
