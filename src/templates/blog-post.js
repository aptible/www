import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Post from '../components/blog/Post';

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | {data.post.title}</title>
      <meta name="description" content={data.post.title} />
    </Helmet>
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
