import React from 'react';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Post from '../components/blog/Post';

export default ({ data }) => (
  <AptibleLayout>
    <Post post={data.post} />
  </AptibleLayout>
);

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      postedAt
      category
      author {
        name
        slug
        professionalPhoto {
          file {
            url
          }
        }
      }
      body {
        json
      }
    }
  }
`;
