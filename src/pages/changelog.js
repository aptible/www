import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import { graphql } from 'gatsby';
import ChangelogIndex from '../components/blog/ChangelogIndex';
import Pagination from '../components/blog/Pagination';
import ZeroTo from '../components/footer/ZeroTo';

export default ({ data, pageContext }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Changelog</title>
      <meta
        name="description"
        content="Product updates for Aptible Comply and Deploy."
      />
    </Helmet>
    <ChangelogIndex
      posts={data.posts.edges}
      categorySlug={pageContext.categorySlug}
    />
    <Pagination
      numPages={pageContext.numPages}
      currentPage={pageContext.currentPage}
    />
    <ZeroTo />
  </AptibleLayout>
);

export const query = graphql`
  query {
    posts: allContentfulBlogPost(
      filter: { type: { eq: "changelog" } }
      sort: { fields: [postedAt], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          postedAt
          product
          author {
            name
            slug
            professionalPhoto {
              file {
                url
              }
            }
          }
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`;
