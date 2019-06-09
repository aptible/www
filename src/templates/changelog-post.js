import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Changelog from '../components/blog/Changelog';

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | {data.post.title}</title>
      <meta name="description" content={data.post.title} />
    </Helmet>
    <Changelog post={data.post} />
  </AptibleLayout>
);

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
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
      body {
        json
      }
    }
  }
`;
