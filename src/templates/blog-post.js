import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Post from '../components/blog/Post';
import shareImage from '../images/launch-post-visual.gif';

export default ({ data }) => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | {data.post.title}</title>
      <meta name="description" content={data.post.title} />
      <meta property="og:title" content={data.post.title} />
      <meta property="og:description" content={`Aptible Blog: ${data.post.title}`} />
      <meta property="og:image" content={shareImage} />
      <meta name="twitter:card" content="summary_large_image" />
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
      secondAuthor {
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
