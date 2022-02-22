const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');
var md = require('markdown-it')({
  html: true,
  typographer: true
});


const writeImage = async (destinationPath, contents) => {
  await fs.promises.mkdir(path.dirname(destinationPath), { recursive: true });
  return fs.promises.writeFile(destinationPath, contents);
}


const BLOG_CATEGORIES = require('./src/data/blog-categories.json');
const BLOG_POSTS_PER_PAGE = 5;
const RESOURCE_CATEGORIES = require('./src/data/resource-categories.json');
const resourceEntries = require('./src/data/resources.json');

const COMPLIANCE_SITES = ['hipaa'];
let protocolData = {};
for (let protocol of COMPLIANCE_SITES) {
  protocolData[protocol] = yaml.safeLoad(fs.readFileSync(`./src/data/${protocol}.yml`, 'utf8'));
}

const CASE_STUDIES = require('./src/data/case-studies.json');
const TRAINING_COURSES = require('./src/data/training.json');


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


exports.createPages = async ({ graphql, actions }) => {
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

        allHandbook: allFile(filter: { sourceInstanceName: { eq: "handbook" } }) {
          edges {
            node {
              name
              extension
              relativePath
              absolutePath
            }
          }
        }
        
        allTraining: allFile(filter: { sourceInstanceName: { eq: "training" } }) {
          edges {
            node {
              name
              extension
              relativePath
              absolutePath
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

      // Training courses
      result.data.allTraining.edges.forEach(async ({ node }) => {
        if (node.extension === 'md' && node.name !== 'README') {
          let course = node.relativePath.split('/')[0];
          let markdown = fs.readFileSync(node.absolutePath).toString();
          let relativePath = `training/${course}/${node.name}/`;

          // Don't build a page for a module not in training.json
          let module = TRAINING_COURSES[course].modules.find(m => m.key === node.name);
          if (module === undefined) {
            return;
          }

          // Edit image paths to point to /static
          markdown = markdown.replace(/\.\.\/images\//g, '/training-assets/');

          // Convert markdown to HTML
          const html = md.render(markdown);

          createPage({
            path: relativePath,
            component: path.resolve(`./src/templates/training.js`),
            context: {
              slug: node.name,
              url: relativePath,
              course: course,
              html: html,
              modules: TRAINING_COURSES[course].modules
            },
          });
        }

        // Move images into static folder
        if (['jpg', 'png', 'gif', 'svg'].indexOf(node.extension) !== -1) {
          let destinationPath = node.relativePath.replace('images/', './static/training-assets/');
          let imgData = fs.readFileSync(node.absolutePath);

          writeImage(destinationPath, imgData);
        }
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

      result.data.allHandbook.edges.forEach(async ({ node }) => {
        if (node.extension === 'md') {
          let relativePath = `handbook/${node.relativePath.replace('.md', '').replace('README', '')}`;
          if (relativePath.endsWith('/') === false) {
            relativePath += '/';
          }

          let section = node.relativePath.split('/')[0];
          if (section.indexOf('.md') !== -1) {
            section = null;
          }

          let markdown = fs.readFileSync(node.absolutePath).toString();
          
          // Edit image paths to point to /static
          markdown = markdown.replace(/\/?images\//g, '/handbook-assets/');

          // Edit link paths
          markdown = markdown.replace(/\]\(\/(?!\/?images|https|\/?handbook)/g, '](/handbook/');
          markdown = markdown.replace(/\.md/g, '/');

          // Remove "read on aptible.com"
          markdown = markdown.replace(/\*\*\[Read on aptible.*/, '');

          // Convert markdown to HTML
          const html = md.render(markdown);

          let title = 'Overview';
          if (node.name !== 'README') {
            title = node.name.replace('-', ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
          }

          createPage({
            path: relativePath,
            component: path.resolve(`./src/templates/handbook.js`),
            context: {
              tag: 'handbook',
              url: relativePath,
              section: section,
              html: html,
              title: title,
            },
          });
        }

        // Move images into static folder
        if (['jpg', 'png', 'gif', 'svg'].indexOf(node.extension) !== -1) {
          let destinationPath = node.relativePath.replace('images/', './static/handbook-assets/');
          let imgData = fs.readFileSync(node.absolutePath);

          writeImage(destinationPath, imgData);
        }
      });

      resolve();
    });
  });
};
