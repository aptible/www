import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import { graphql } from 'gatsby';
import ChangelogIndex from '../components/blog/ChangelogIndex';
import Pagination from '../components/blog/Pagination';
import ZeroTo from '../components/footer/ZeroTo';

export default ({ data, pageContext }) => (
  <AptibleLayout>
    <ChangelogIndex posts={data.posts.edges} categorySlug={pageContext.categorySlug} />
    <Pagination
      numPages={pageContext.numPages}
      currentPage={pageContext.currentPage} />
    <ZeroTo />
  </AptibleLayout>
);


export const query = graphql`
  query {
    posts: allContentfulBlogPost(
      filter: {
        type: {
          eq: "changelog"
        }
      }
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
