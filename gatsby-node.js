const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

const BLOG_CATEGORIES = require('./src/data/blog-categories.json');
const BLOG_POSTS_PER_PAGE = 5;
const RESOURCE_CATEGORIES = require('./src/data/resource-categories.json');
const resourceEntries = require('./src/data/resources.json');
const useCasesEntries = require('./src/data/use-cases.json');

const COMPLIANCE_SITES = ['hipaa', 'gdpr'];
let protocolData = {};
for (let protocol of COMPLIANCE_SITES) {
  protocolData[protocol] = yaml.safeLoad(fs.readFileSync(`./src/data/${protocol}.yml`, 'utf8'));
}

const CASE_STUDIES = require('./src/data/case-studies.json');

const PAID_LANDING_PAGES = require('./src/data/paid-landing-pages.json');


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
              title
              slug
              webinarType
              description {
                description
              }
            }
          }
        }

        allSecurityManagement: allContentfulContentBlock(filter: { page: { eq: "security-management" }}) {
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

        allOwnersManualPages: allContentfulOwnersManualPage(
          filter: {
            hidePage: {
              eq: false
            }
          }
          sort: { fields: [createdAt], order: ASC }
        ) {
          edges {
            node {
              title
              displayTitle
              section
              slug
              hidePage
              socialDescription
              socialImage {
                file {
                  url
                }
              }
              body {
                json
              }
            }
          }
        }

        allComplyIntegrationDefaultMeta: allContentfulComplyIntegrationsIndex(filter: { contentful_id: { eq: "2qsshTAFcEsWNAWBHfOFhy" } }) {
          edges {
            node {
              metaTitle
              metaDescription
            }
          }
        }

        allComplyIntegrationPages: allContentfulComplyIntegration {
          edges {
            node {
              id
              name
              slug
              shortDescription
              description
              assets
              controls
              installUrl
              scopes
              documentationUrl
              evidenceChecks {
                id
                title
                description
              }
              logo {
                file {
                  url
                  details {
                    image {
                      width
                      height
                    }
                  }
                }
              }
              body {
                json
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

      // Create pages resource categories
      const webinarEntries = result.data.allWebinars.edges.map(({ node }) => {
        return {
          title: node.title,
          url: `/webinars/${node.slug}/`,
          description: node.description ? node.description.description : '',
          tags: ['Webinar', node.webinarType ? 'On Demand' : 'Upcoming'],
        }
      });
      RESOURCE_CATEGORIES.forEach((category) => {
        createPage({
          path: `resources/${category.slug}`,
          component: path.resolve(`./src/templates/resource-category.js`),
          context: {
            title: category.title,
            slug: category.slug,
            entries: category.slug === 'webinars' ?
              webinarEntries :
              resourceEntries.filter((entry) => entry.tags.includes(category.title))
          },
        });
      });

      // Create pages for use cases
      useCasesEntries.forEach((entry) => {
        createPage({
          path: `use-cases/${entry.slug}`,
          component: path.resolve(`./src/templates/use-case.js`),
          context: {
            ...entry
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

      result.data.allSecurityManagement.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/security-management.js`),
          context: {
            slug: node.slug
          },
        });
      });

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

      result.data.allOwnersManualPages.edges.forEach(({ node }) => {
        let pagePath = 'owners-manual';
        if (node.slug) {
          pagePath += `/${node.slug}`;
        }

        createPage({
          path: pagePath,
          component: path.resolve(`./src/templates/owners-manual.js`),
          context: {
            activePath: node.slug,
            allPages: result.data.allOwnersManualPages.edges
          },
        });
      });

      // Create pages for each Comply Integration post
      result.data.allComplyIntegrationPages.edges.forEach(({ node }) => {
        let pagePath = 'comply/integrations';
        if (node.slug) {
          pagePath += `/${node.slug}`;
        }

        createPage({
          path: pagePath,
          component: path.resolve(`./src/templates/comply/integration-detail.js`),
          context: {
            activePath: node.slug,
            allPages: result.data.allComplyIntegrationPages.edges,
            defaultMeta: result.data.allComplyIntegrationDefaultMeta.edges[0].node
          },
        });
      });

      resolve();
    });
  });
};
